import Button from "react-bootstrap/Button";

const Navbar = () => {
  const total = 25000;
  const token = false;
  const formatTotal = (num) => num.toLocaleString("es-CL");

  return (
    <>
      <Button variant="danger">🍕 Home</Button>
      {token ? (
        <>
          <Button variant="danger">🔓 Profile</Button>
          <Button variant="danger">🔒 Logout</Button>
        </>
      ) : (
        <>
          <Button variant="danger">🔐 Login</Button>
          <Button variant="danger">🔐 Register</Button>
        </>
      )}

      <Button variant="danger">🛒 Total: ${formatTotal(total)}</Button>
    </>
  );
};

export default Navbar;
