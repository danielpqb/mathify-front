import { get } from "../helpers/request";

const BASE_URL = import.meta.env.BASE_URL;

export default function getUserDataByToken(token: string) {
  return get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
