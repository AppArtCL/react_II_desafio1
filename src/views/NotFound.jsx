import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="mt-5 text-center">
      <p className="contact-title roboto-light">
        La página que intentas consultar no existe.
      </p>
      <p className="torta">🙁</p>
      <Link to="/react_II_desafio1/" className="roboto-light">Volver al Home</Link>
    </Container>
  );
};
export default NotFound;
