import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartPrice } from "../context/CartContext";
import { AccountContext } from "../context/UserContext";

const Navbar = () => {
  const total = useContext(CartPrice).total;
  const { tokenState, setTokenState } = useContext(AccountContext);

  const handleLogout = () => {
    setTokenState(false);
  };

  const formatTotal = (num) => num.toLocaleString("es-CL");

  return (
    <>
      <Button variant="danger">
        <Link to="/" className="text-white text-decoration-none">
          🍕 Home
        </Link>
      </Button>
      {tokenState ? (
        <>
          <Button variant="danger">
            <Link to="/profile" className="text-white text-decoration-none">
              🔓 Perfil
            </Link>
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            <Link to="/" className="text-white text-decoration-none">
              🔒 Cerrar sesión
            </Link>
          </Button>
        </>
      ) : (
        <>
          <Button variant="danger">
            <Link to="/login" className="text-white text-decoration-none">
              🔐 Iniciar sesión
            </Link>
          </Button>
          <Button variant="danger">
            <Link to="/register" className="text-white text-decoration-none">
              🔐 Registrar
            </Link>
          </Button>
        </>
      )}

      <Button variant="danger">
        <Link to="/cart" className="text-white text-decoration-none">
          🛒 Carrito: ${formatTotal(total)}
        </Link>
      </Button>
    </>
  );
};

export default Navbar;
