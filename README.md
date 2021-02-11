# lie.js

[![Version npm](https://img.shields.io/npm/v/lie.js.svg?style=flat-square)](https://www.npmjs.com/package/lie.js)

Adds useful helper functions to javascript Promises

What problem does this solve?

It allows promises to have a predictable timeout behaviour.
This allows you to call a service and only wait for a fixed amount of time before trying something else.
The Javascript Promise API does not include any concept of timeout.
This makes working within a limited time budget difficult.
For example if you are building a service that needs to give a response in 5 seconds and needs to call multiple services, sometimes returning a default value (or an error message) is better than timing out.

It's the ability to fail in a controlled manner that gives a service resiliance. 
You can't prevent things outside your control from failing. You can gracefully cope with that failure.

```
npm install lie.js

yarn add lie.js
```

Currently these include:

## orReject

 Creates a promise that will timeout after a given interval with a fixed message.
 This is the value that will be used as the error.

```javascript
Promise.race([yourPromise, orReject('bang', 1)])
```


## orTimeout 

Creates a promise with a default value after a timeout.

These are intended to be used with Promise.race

This was inspired by the default behaviour of Erlang/OTP.

Service calls have a default timeout. If you have a fixed time budget then the only way to enforce this is to timeout with either a failure or a default value.

```javascript
Promise.race([yourPromise, orTimeout('bang', 1)])

```

This can be very useful in tests. If you make the timeout configurable and use 0 then you can replace the result of the promise with a fixed result.

This has now been moved to use Typescript
