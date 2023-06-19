# COUT

This module allow you to make COUT and Debugs in NodeJS


```js
import { cout } from '@thundernetworkrad/std';

cout = new cout(0, true, true); // debugLevel, logs enabled (file), emojis enabled

cout.debug('test', 0) // console.log time and the string, if the number is >= to the debugLevel
cout.log('test')
cout.error('test')
cout.warn('test')
cout.info('test')
```