# COUT

This module allow you to make COUT and Debugs in NodeJS

## MJS or TypeScript
```js
import cc from 'node-cout';

const cout = new cc(0, true, true); // debugLevel, logs enabled (file), emojis enabled

cout.debug('test', 0) // console.log time and the string, if the number is >= to the debugLevel
cout.log('test')
cout.error('test')
cout.warn('test')
cout.info('test')
```

## CJS
use `await import("")`
```js
const { default } = await import('node-cout'); // ti put in an async function
const cout = new default(); // from here equal to MJS example
```

## Changelogs
### 2023.07.08-2
- Fix emoji for Debug

### 2023.07.08-1
- Fix info Emoji

### v2023.07.08
- Exported the main class as default
- Add Stringify to all functions
- Changed the string type in the function to "any"
