import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type Response = AxiosResponse;
export type Error = AxiosError;

export async function get(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
) {
  return axios.get(url, config);
}
