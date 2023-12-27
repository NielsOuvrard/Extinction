export const formatUsername = (username: string) => {
  return username.trim().toLowerCase();
};

export const validatePassword = (password: string) => {
  // This is a very basic password validation. You might want to replace it with a more complex one.
  return password.length >= 8;
};

// Add more helper functions here
