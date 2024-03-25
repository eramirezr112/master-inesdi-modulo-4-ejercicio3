import { useEffect } from "react";
import { loginUser } from "../api/functions";
import AuthContext from "./AuthContext";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const inMemmoryUser = JSON.parse(localStorage.getItem("user"));
    if (!inMemmoryUser) {
      localStorage.setItem("user", null);
    }
  }, []);

  const handleLogin = async (user) => {
    loginUser(user);
  };

  const value = {
    user,
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
