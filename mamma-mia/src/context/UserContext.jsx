import { createContext, useState } from "react";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const token = false;

  const [tokenState, setTokenState] = useState(token);
  const [ user, setUser ] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.log("error en login");
        return null;
      } else {
        console.log("login exitoso");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      return data.token;
    } catch (error) {
      console.error("Login failed:", error);
      console.log("Servidor no disponible");
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setTokenState(false);
  }

  return (
    <AccountContext.Provider value={{ tokenState, setTokenState, user, setUser, handleLogin, logout }}>
      {children}
    </AccountContext.Provider>
  );
};
export default UserContext;
