import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/CSS/style.css";
import "./assets/CSS/register.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import axios from "axios";
import Pizza from "./pages/Pizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout-grid">
        <nav className="navbar">
          <Navbar />
        </nav>
        <div className="home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pizza/p001" element={<Pizza />} />
          </Routes>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
