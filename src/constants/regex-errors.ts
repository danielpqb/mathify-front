export const regexErrors = {
  userName: {
    pattern: /^[a-z0-9]{3,20}$/i,
    message: `Name must have:\n\n
    - Only numbers or letters.\n
    - Length from 3 to 20.`,
  },

  userEmail: { pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, message: "Invalid email." },

  userPassword: {
    pattern: /^(?=.*[0-9])(?=.*[a-z]).{8,32}/i,
    message: `Password must have:\n\n
    - At least one letter.\n
    - At least one number.\n
    - Length from 8 to 32.`,
  },

  url: { pattern: /^http(s)?:\/\/.*/, message: "URL must have an 'http' or 'https' protocol." },
};
