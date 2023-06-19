# COUT

This module allow you to make COUT and Debugs in NodeJS

## MJS or TypeScript
```js
import { cout } from 'node-cout';

cout = new cout(0, true, true); // debugLevel, logs enabled (file), emojis enabled

cout.debug('test', 0) // console.log time and the string, if the number is >= to the debugLevel
cout.log('test')
cout.error('test')
cout.warn('test')
cout.info('test')
```

## CJS
use `await import("")`
```js
let { cout } = await import('node-cout');
```