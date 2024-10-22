import Link from "next/link";
import "./contact.css";
import FormContact from "@/components/FormContact";

export const metadata = {
	title: "Contacto",
	description: "Estamos solo a un click de distancia...",
};

function Contact() {
	return (
		<main className="contact-container">
			<section>
				<h1>Mantente en Contacto</h1>
				<p>Puedes escribirme vía e-mail.</p>
				<Link
					className="link-button"
					href="mailto:contacto@leonorb-homeopata.com?subject=Consulta"
					target="_blank"
				>
					contacto@leonorb-homeopata.com
				</Link>
				<p>
					Mi horario de trabajo es de Lunes a Viernes (Excepto Miércoles) de 10 am a 5 pm
					GMT 3 (Chile).{" "}
				</p>
				<p>Haré lo mejor para responder tus consultas lo antes posible.</p>
			</section>

            <section>
                <FormContact />
            </section>
		</main>
	);
}

export default Contact;
