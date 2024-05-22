import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="light">
        <Container fluid>
            <Container>
                <Link to="/" className="text-white text-decoration-none">
                🏠​ Home
                </Link>
                <Link to="/contacto" className="text-white ms-4 text-decoration-none">
                📒 Contacto
                </Link>
            </Container>
            <Container className="text-end">
                <Navbar.Brand className="text-white">Happy Cake 🍰</Navbar.Brand>
            </Container>
        </Container>
    </Navbar>
  );
};

export default Navigation;
