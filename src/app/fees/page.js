import Link from "next/link";
import "./fees.css";

export const metadata = {
	title: "Precios",
	description: "Sobre Precios y Cobros",
};

function page() {

	return (
		<main className="container-fees">
			<section className="fees">
				<h1>Cobros</h1>
				<p>El detalle de los cobros es el siguiente</p>
			</section>

			<section className="clients">
				<div>
					<h2>Nuevo Paciente</h2>
					<h1>$25.000</h1>
					<Link className="link-button" href={`${process.env.SETMORE}`} target="_blank">
						Reserva tu Hora
					</Link>
				</div>
				<div>
					<h2>Paciente Existente</h2>
					<h1>$20.000</h1>
					<Link className="link-button" href={`${process.env.SETMORE}`} target="_blank">
						Reserva tu Hora
					</Link>
				</div>
			</section>

			<section className="questions">
				<h1>Aún tienes Dudas?</h1>
				<div>
					<p>
						Para Información general, ingresa a {" "}
						<Link className="link" href="/homeopathy">Homeopatía</Link>{" "}
						o a la sección de <Link className="link" href="/faq">Preguntas Frecuentes</Link>.
					</p>
                    <br />
					<p>
						O si estás interesado en un caso en particular, por qué no intentas buscarlo en nuestro <Link className="link" href="/blog">Blog</Link>...?
					</p>
                    <br />
					<p>
						De todas maneras si lo deseas,  <Link className="link" href="/contact">Contáctame</Link> para darte información más específica sobre tu caso.
					</p>
				</div>
			</section>

		</main>
	);
}

export default page;
