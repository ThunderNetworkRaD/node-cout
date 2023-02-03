# COUT

This module allow you to make COUT and Debugs in NodeJS

Readme work in progress

```js
import { createCout } from '@thundernetworkrad/std';

let ccout = new createCout(0, true); // debugLevel, logs enabled (file) (like using log() )

let cout = ccout.cout;

cout('test', 0) // console.log day, time and the string, if the number is >= to the debugLevel
```