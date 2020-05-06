# lie.js
Adds useful helper functions to javascript Promises

```
npm install lie.js

yarn add lie.js
```

Currently these include:

## orReject

 Creates a promise that will timeout after a given interval with a fixed message

## orTimeout 

Creates a promise with a default value after a timeout.

These are intended to be used with Promise.race

This was inspired by the default behaviour of Erlang/OTP.

Service calls have a default timeout. If you have a fixed time budget then the only way to enforce this is to timeout with either a failure or a default value.

```javascript
Promise.race([yourPromise, orTimeout('bang', 1)])
```
