// Deprecated - use orReject, note changed parameter order
export function timeoutPromise(timeout: number, message: any) {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, timeout);
  });
}

// Deprecated - use orTimeout, note changed parameter order
export function defaultTimeout(timeout: number, defaultValue: any) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(defaultValue);
    }, timeout);
  });
}

export function orReject(message: any, timeout: number) {
  return new Promise((_resolve, reject) => {
    setTimeout(() => {
      reject(message);
    }, timeout);
  });
}

export function orTimeout(defaultValue: any, timeout: number) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(defaultValue);
    }, timeout);
  });
}
