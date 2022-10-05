### Toast library.

This library allows you to create the custom toast.

```js
// install with npm
npm i @bogdan_vs/toast-lib

// install with yarn
yarn add @bogdan_vs/toast-lib
```

## Usage

Add an additional entry point for your toast

```js
;<body>
  <div id="docs-root"></div>
</body>
```

Toast accepts following data:

```js
object = {
  name: 'string',
  position: 'string', // One of these point ['top-right', 'bottom-right', 'top-left', 'bottom-left']
  delay: 'number', // Time spent by the toast on the page
  color: 'string', // #ed143d
  subtitle: 'string',
  animation: 'string', // One of these point ['transition', 'opasity']
  firstIndent: 'string', //This is indent by offset Y
  secondIndent: 'string', //This is indent by offset X
  toastCount: 'number', //Number of toast displayed
  id: 'string',
  icon: JSX.Element, // This library use react-icon library for create icon. You need to pass size and color into your icon
}
```

Also you need to pass several props into your toast

```js
  position = 'string',
  delay = 'number',
  isAutoClean = 'boolean',
  animation = 'string',
  indent = {
    firstIndent: 'string',
    secondIndent: 'string',
  },
```
