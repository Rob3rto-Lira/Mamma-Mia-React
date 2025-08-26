import { createContext, useState } from "react";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const token = false;

  const [tokenState, setTokenState] = useState(token);

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
        alert("Error en el Login");
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

  const handleRegister = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer token_jwt`,
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        console.log("error en registro");
        return null;
      } else {
        console.log("registro exitoso");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);
      return data.token;
    } catch (error) {
      console.error("Registration failed:", error);
      console.log("Servidor no disponible");
      return null;
    }
  };

  const currentProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) {
        console.log("error en obtener perfil");
        return null;
      } else {
        console.log("perfil obtenido");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Fetching profile failed:", error);
      console.log("Servidor no disponible");
      return null;
    }
  };

  const handleCart = async (carrito) => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          cart: carrito,
        }),
      });

      if (!res.ok) {
        console.log("error en la orden");
        alert("Error en la orden");
        return null;
      } else {
        console.log("carrito obtenido");
        alert("Orden realizada con exito");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Fetching cart failed:", error);
      console.log("Servidor no disponible");
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setTokenState(false);
  };

  return (
    <AccountContext.Provider
      value={{
        tokenState,
        setTokenState,
        handleLogin,
        handleRegister,
        currentProfile,
        logout,
        handleCart
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default UserContext;
