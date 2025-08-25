import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/CSS/style.css";
import "./assets/CSS/register.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import axios from "axios";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import CartContext from "./context/CartContext";
import { AccountContext } from "./context/UserContext";

function App() {
  const { tokenState } = useContext(AccountContext);

  return (
    <>
      <CartContext>
        <div className="layout-grid">
          <nav className="navbar">
            <Navbar />
          </nav>
          <div className="home">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/register"
                element={!tokenState ? <Register /> : <Navigate to={"/"} />}
              />
              <Route
                path="/login"
                element={!tokenState ? <Login /> : <Navigate to={"/"} />}
              />
              <Route
                path="/profile"
                element={tokenState ? <Profile /> : <Navigate to={"/login"} />}
              />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </CartContext>
    </>
  );
}

export default App;
