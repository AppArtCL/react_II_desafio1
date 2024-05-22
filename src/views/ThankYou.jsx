import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
	return (
		<Container fluid className="mt-5 text-center">
			<h1>Gracias por tu consulta.</h1>
			<p>Nos pondremos en contacto contigo por correo electrónico.</p>
			<Link to="/react_II_desafio1/">Volver al Home</Link>
		</Container>
	);
};

export default ThankYou;
