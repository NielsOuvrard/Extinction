import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AppContext Provider");
  }

  // Here you can return whatever you want your components to have access to.
  // For example, you might return an object with properties like 'isAuthenticated', 'login', 'logout', etc.
  // These would be based on the structure of your AppContext.

  return context;
};

export default useAuth;
