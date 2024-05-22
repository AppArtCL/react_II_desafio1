import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactPage = () => {
	const [email, setEmail] = useState("");
	const [description, setDescrption] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Email:", email);
		console.log("Consulta:", description);
		navigate("/thankyou");
	};

	return (
		<Container fluid className="text-center">
			<p className="contact-title roboto-light">
				Cuéntanos, ¿en qué te podemos ayudar?
			</p>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formEmail" className=" ms-auto me-auto input-text">
					<Form.Label>Correo:</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formDescription" className="mt-4 mb-3 ms-auto me-auto input-text">
					<Form.Label>Descripción</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={description}
						onChange={(e) => setDescrption(e.target.value)}
						required
					/>
				</Form.Group>
				<Button variant="danger" type="submit">
					Enviar
				</Button>
			</Form>
		</Container>
	);
};

export default ContactPage;
