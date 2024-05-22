import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="text-center">
      <p className="welcome roboto-light">
        Bienvenido a <span className="roboto-bold">Happy Cake</span>
      </p>
      <p className="tag-line roboto-light">El lugar de los pasteles felices</p>

      <p className="torta">🎂</p>
    </Container>
  );
};

export default HomePage;
