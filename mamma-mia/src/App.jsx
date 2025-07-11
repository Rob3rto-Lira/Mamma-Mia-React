import { useEffect, useState } from "react";
import "./assets/CSS/style.css";
import "./assets/CSS/register.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import axios from "axios";
import Pizza from "./components/Pizza/Pizza";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout-grid">
        <nav className="navbar">
          <Navbar />
        </nav>
        <div className="home">
          {/* <Home /> */}
          {/* <Cart /> */}

          {/* <div className="register-container">
            <Register />
            <Login />
            
          </div> */}
          <Pizza />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
