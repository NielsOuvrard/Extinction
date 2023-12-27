import { useState } from "react";
import { loginUser, logoutUser } from "../services/api";

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await loginUser(username, password);
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      //   setError(err);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await logoutUser();
      setIsLoading(false);
      return data;
    } catch (err) {
      setIsLoading(false);
      //   setError(err);
    }
  };

  return { isLoading, error, login, logout };
};

export default useApi;
