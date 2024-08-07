# node-cout  

This package allows you to use `cout` and debug levels in Node.js.  

## Installation  

Run this in your project folder:  

```bash
npm install node-cout
```

## Usage  

Learn how to use `node-cout` here:  

### Import  

```js
import cc from 'node-cout';

const cout = new cc(1, { save: true, emoji: true, types: ['loading', 'uploading'] });
```

> You're using CommonJS and can use `require()` instead of `import`? Go on [troubleshooting](#troubleshooting).

> Parameters:  
> ```
> debugLevel: number
> options?: {
>   save?: boolean
>   emoji?: boolean
>   types?: string[]
> }
> ```

### Logging  

```js
cout.debug('Hello World', 1); // Sends a debug log (1 is debug level, if its higher than the one defined in the constructor, its not going to be logged.)

cout.info('Hello World'); // Sends an info log

cout.warn('Hello World'); // Sends a warning log

cout.error('Hello World'); // Sends an error log

cout.log('Hello World'); // Sends a normal log
```

If you want to use the `types` option, you can do it like this:  

```js
cout.debug('Hello World', 1, types);
```

`types` can either be a string or an array of strings, and if one of them matches with one of the types defined in the constructor, the log is going to be logged.  

# Troubleshooting  

Unfortunately, this is not supported anymore:  

```js
const cc = require('node-cout');
```

If you want to `import` the package in your CommonJS project, add this to your `package.json` file:

```json
{
  "type": "module"
}
```