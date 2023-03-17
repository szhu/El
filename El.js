// @ts-check

/**
 * Create element.
 *
 * @param {{
 *   tag?: string;
 *   children?: (string | Element)[];
 *  [key: string]: any;
 * } | string} tagChildrenAttributes
 * @param {(string | Element)[]} moreChildren
 */
function El(tagChildrenAttributes, ...moreChildren) {
  let {
    tag = "div",
    children = [],
    ...attributes
  } = typeof tagChildrenAttributes === "string"
    ? { tag: tagChildrenAttributes }
    : tagChildrenAttributes;

  // Create element.
  let el = document.createElement(tag);

  // Set attributes.
  for (let [key, value] of Object.entries(attributes)) {
    if (key.startsWith("on") && typeof value === "function") {
      el.addEventListener(key.slice(2), value);
    } else if (value == null || typeof value === "boolean") {
      if (value) {
        el.setAttribute(key, "");
      }
    } else {
      el.setAttribute(key, value);
    }
  }

  // Add children.
  for (let child of [...children, ...moreChildren]) {
    el.appendChild(
      typeof child === "string" //
        ? document.createTextNode(child)
        : child
    );
  }

  return el;
}
