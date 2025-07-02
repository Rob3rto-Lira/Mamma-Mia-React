import { useState } from "react";
import "./assets/CSS/style.css";
import "./assets/CSS/register.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
// hito 3
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
          <div className="register-container">
            {/* <Register /> */}
            <Login />
          </div>
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
