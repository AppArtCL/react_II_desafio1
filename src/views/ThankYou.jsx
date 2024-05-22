import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
	return (
		<Container fluid className="mt-5 text-center">
			<h1>Gracias por tu consulta.</h1>
			<p>Nos pondremos en contacto contigo por correo electrónico.</p>
			<Link to="/">Volver al Home</Link>
		</Container>
	);
};

export default ThankYou;
