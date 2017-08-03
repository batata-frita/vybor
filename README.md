# vybor - выбор

[![Build Status](https://travis-ci.org/batata-frita/vybor.svg)](https://travis-ci.org/batata-frita/vybor)
[![npm version](https://img.shields.io/npm/v/vybor.svg?maxAge=1000)](https://www.npmjs.com/package/vybor)

Function to choose comparing with a value. Like `switch`, but you don't need an IIFE.

```
npm add vybor
```

```js
import выбор from 'vybor'

console.log(выбор('jupiter')(
  'mars', 'red',
  'jupiter', 'green',
  'saturn', 'purple'
)) // => 'green'
```

If you want to set a fallback option if none match, you can just set a fallback value as a second argument of the first function:

```js
выбор('pluto', 'probably not a planet')(
  'mars', 'red',
  'jupiter', 'green',
  'saturn', 'purple'
) // => 'probably not a planet'
```

Mind that this means that if the selected is explicitly set to be `undefined`, it will return the fallback option:

```js
выбор('mars', 'probably not a planet')(
  'mars', undefined,
  'jupiter', 'green',
  'saturn', 'purple'
) // => 'probably not a planet'
```

## See also

- [elegir](https://github.com/batata-frita/elegir)

## License

[See License](LICENSE)
