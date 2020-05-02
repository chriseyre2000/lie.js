export function timeoutPromise(timeout, message) {
  return new Promise( (_resolve, reject) => {
    setTimeout( () => { reject(message) }, timeout)
  })
}

export function defaultTimeout(timeout, defaultValue) {
  return new Promise( (resolve, _reject) => {
    setTimeout( () => { resolve(defaultValue) }, timeout)
  })
}
