import { Error, Response } from "helpers/request";
import promiseRetry from "promise-retry";

export async function useRequestRetry(
  promiseToRetry: Promise<any>,
  retryOptions?: {
    //DEFAULT {retries: 10, factor: 2, minTimeout: 1000, maxTimeout: Infinity}
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
  }
) {
  return await promiseRetry((retry, number) => {
    console.log("retry", number);
    return promiseToRetry.catch(retry);
  }, retryOptions)
    .then((res: Response) => {
      return { data: res.data, success: true };
    })
    .catch((error: Error) => {
      return { error: error, success: false };
    });
}
