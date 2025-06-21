import { useState } from "react";
import "./assets/CSS/style.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout-grid">
        <nav className="navbar">
          <Navbar />
        </nav>
        <div className="home">
          <Home />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
