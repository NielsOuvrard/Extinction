import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // replace with your API base URL
});

export const loginUser = async (username: string, password: string) => {
  const response = await api.post("/login", { username, password });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/logout");
  return response.data;
};

// Add more API functions here

export default api;
