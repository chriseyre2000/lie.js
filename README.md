# lies
Adds useful helper functions to javascript Promises

Currently these include:

## timeoutPromise

 Creates a promise that will timeout after a given interval with a fixed message

## defaultTimeout 

Creates a promise with a default value after a timeout.

These are intended to be used with Promise.race

This was inspired by the default behaviour of Erlang/OTP.

Service calls have a default timeout. If you have a fixed time budget then the only way to enforce this is to timeout with either a failure or a default value.

Promise.race([yourPromise, defaultTimeout(1, 'bang')])