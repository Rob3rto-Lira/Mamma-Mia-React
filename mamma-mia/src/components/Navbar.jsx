import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartPrice } from "../context/CartContext";

const Navbar = () => {
  const total = useContext(CartPrice).total;
  const token = false;
  const formatTotal = (num) => num.toLocaleString("es-CL");

  return (
    <>
      <Button variant="danger">
        <Link to="/" className="text-white text-decoration-none">
          🍕 Home
        </Link>
      </Button>
      {token ? (
        <>
          <Button variant="danger">
            <Link to="/profile" className="text-white text-decoration-none">
              🔓 Profile
            </Link>
          </Button>
          <Button variant="danger">🔒 Logout</Button>
        </>
      ) : (
        <>
          <Button variant="danger">
            <Link to="/login" className="text-white text-decoration-none">
              🔐 Login
            </Link>
          </Button>
          <Button variant="danger">
            <Link to="/register" className="text-white text-decoration-none">
              🔐 Register
            </Link>
          </Button>
        </>
      )}

      <Button variant="danger">
        <Link to="/cart" className="text-white text-decoration-none">
          🛒 Total: ${formatTotal(total)}
        </Link>
      </Button>
    </>
  );
};

export default Navbar;
