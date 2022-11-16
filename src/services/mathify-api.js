import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

export default function getUserDataByToken(token) {
  return axios.get(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
