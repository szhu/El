# El()

The simplest way to create an element in the DOM.

`El()` function that creates an element in the DOM. It's a simple wrapper around `document.createElement()` that allows you to create elements with attributes, children, and event listeners.

## How to use

```js
let button;

document.body.append(
  El(
    { id: "main" },

    El("h1", "Hello, world!"),
    El(
      "p", //
      El({ tag: "a", href: "http://example.com/" }, "Click me!")
    ),

    El("hr"),

    El(
      {
        tag: "button",
        onclick: () => (button.disabled = false),
      },
      "Enable other button"
    ),
    (button = El(
      {
        tag: "button",
        disabled: true,
        onclick: () => alert("I was clicked!"),
      },
      "Click me!"
    ))
  )
);
```

Output when run on `example.com`:

<img width="686" alt="Screenshot" src="https://user-images.githubusercontent.com/1570168/225974684-647ff9eb-9800-4da4-a49b-c85187969292.png">

## How to install

`El()` is so tiny that you can very comfortably copy-paste it into your code, which makes it great for playground environments and small projects that have no other dependencies.

Paste `El()` into your code and start using it today!

<big>[El.js](El.js)</big>

## Inspiration

`El()` was inspired by the similar function [`h()`](https://github.com/hyperhype/hyperscript), which is fancier but more complex. Personally, I think if you need to handle all those edge cases, you might as well use JSX instead! I'm sure there's still room for improvement in `El()`, particularly in anything that makes it more accurate, reduces edge cases, and doesn't add too much complexity or harm readability.
