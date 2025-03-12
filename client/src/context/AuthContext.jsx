import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setIsAuthenticated(true);
        setUserRole(decodedToken.role);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUserRole(null);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decodedToken = jwt_decode(token);
    setIsAuthenticated(true);
    setUserRole(decodedToken.role);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
