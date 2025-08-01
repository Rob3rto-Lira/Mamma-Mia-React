import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
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
