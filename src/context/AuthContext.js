import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Load user & token from localStorage safely
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }

      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error("Auth load error:", error);
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  }, []);

  // 🔹 Login Function
  const login = (data) => {
    /*
      Expected backend response format:
      {
        token: "...",
        user: { _id, name, email, role }
      }
    */

    const { token, user, role } = data;

    const finalUser = user || { role };

    if (!token || !finalUser?.role) {
      console.error("Invalid login response format");
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(finalUser));

    setToken(token);
    setUser(finalUser);
  };

  // 🔹 Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
        role: user?.role || null,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 🔹 Custom Hook (Cleaner Usage)
export const useAuth = () => {
  return useContext(AuthContext);
};
