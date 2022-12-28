export default function useToken() {
  const userToken = localStorage.getItem("userToken");

  return userToken as string;
}
