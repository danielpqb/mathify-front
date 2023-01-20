/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestConfig,
} from "axios";

export type RequestPromise = Promise<AxiosResponse<any, any>>;
export type Response = AxiosResponse;
export type Error = AxiosError;

export async function get(
  url: string,
  config?: RawAxiosRequestConfig<any> | undefined
) {
  const promise = axios.get(url, config);
  return promise as RequestPromise;
}

export async function post(
  url: string,
  data: any,
  config?: AxiosRequestConfig<any> | undefined
) {
  const promise = axios.post(url, data, config);
  return promise as RequestPromise;
}

export async function put(
  url: string,
  data: any,
  config?: AxiosRequestConfig<any> | undefined
) {
  const promise = axios.put(url, data, config);
  return promise as RequestPromise;
}
