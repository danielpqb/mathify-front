import retryThis from "promise-retry";

export function promiseRetry(promise, resFunction, errFunction) {
  retryThis(
    //Function that will retry
    (retry, number) => {
      console.log("tryNumber:", number);
      return promise.catch(retry);
    },
    { retries: 4, minTimeout: 1000, factor: 2 }
  ).then(
    //Resolved at any try
    (res) => {
      resFunction(res);
    },
    //Couldn't resolve after all tries
    (err) => {
      errFunction(err);
    }
  );
}
