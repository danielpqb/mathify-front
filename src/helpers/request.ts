import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestPromise = Promise<AxiosResponse<any, any>>;
export type Response = AxiosResponse;
export type Error = AxiosError;

export async function get(url: string, config?: AxiosRequestConfig<any> | undefined) {
  const promise = axios.get(url, config);
  return promise as RequestPromise;
}
