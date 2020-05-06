//Deprecated - use orReject, note changed parameter order
export function timeoutPromise(timeout, message) {
  return new Promise( (_resolve, reject) => {
    setTimeout( () => { reject(message) }, timeout)
  })
}

//Deprecated - use orTimeout, note changed parameter order
export function defaultTimeout(timeout, defaultValue) {
  return new Promise( (resolve, _reject) => {
    setTimeout( () => { resolve(defaultValue) }, timeout)
  })
}

export function orReject(message, timeout) {
  return new Promise( (_resolve, reject) => {
    setTimeout( () => { reject(message) }, timeout)
  })
}

export function orTimeout(defaultValue, timeout) {
  return new Promise( (resolve, _reject) => {
    setTimeout( () => { resolve(defaultValue) }, timeout)
  })
}
