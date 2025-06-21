import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <>
      <Button variant="danger">🍕 Home</Button>
      <Button variant="danger">🔓 Profile</Button>
      <Button variant="danger">🔒 Logout</Button>
      <Button variant="danger">🔐 Login</Button>
      <Button variant="danger">🔐 Register</Button>
      <Button variant="danger">🛒 Total: $</Button>
    </>
  );
};

export default Navbar;
