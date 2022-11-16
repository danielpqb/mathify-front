export const regexPatterns = {
  name: /^[a-z0-9]{3,20}$/i,
  email: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
  password: /^(?=.*[0-9])(?=.*[a-z]).{8,32}/i,
  url: /^http(s)?:\/\/.*/,
};
