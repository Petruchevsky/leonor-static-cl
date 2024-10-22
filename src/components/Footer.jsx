import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<main className="container-footer">
				<section>
					<Image
						src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094972/medium_logosinfondo_96e627c60d.png"
						width={300}
						height={300}
						alt="logo de leonor b"
						className="logo-footer"
					/>

					<Link href="/" className="leonorContainerFooter">
						<div className="leonorBcontainerFooter">
							<h3 className="leonorBFooter">Leonor</h3>
							<h3 className="leonorBFooter">Berdichevsky</h3>
						</div>
						<div className="HOnlineContainerFooter">
							<h2 className="onlineHomeopathFooter">Homeopatía</h2>
							<h2 className="onlineHomeopathFooter">Online</h2>
						</div>
					</Link>

					<Link
					href={`${process.env.SETMORE}`}
					target="_blank"
					className="book-footer"
				>
					<h2 className="book-footer">
						¡ Reserva tu Hora Hoy Mismo !
					</h2>
				</Link>

					<div className="RRSS-container">
						<h2>Mis redes</h2>
						<div className="icons-container">
							<Link
								href="https://m.facebook.com/Homeopathyenergymedicine"
								target="blank"
							>
								{" "}
								<Image
									src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1696641806/facebook_35e0a56122.png"
									width={50}
									height={50}
									alt="icono de facebook"
									className="icon-f"
								/>
							</Link>
							<Link href="/">
								{" "}
								<Image
									src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1696188039/thumbnail_insta_3f71c96df3.png"
									width={50}
									height={50}
									alt="icon de instagram"
									className="icon-i"
								/>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<div className="developedBy">
				<Link href="https://www.moises-web.cl/" target="_blank">
					Desarrollado por Moisés Web
				</Link>
				<Link href="/">Leonor Berdichevsky &copy;</Link>
				<Link href="/privacy-policy">Póliza de Privacidad</Link>
			</div>
		</footer>
	);
}

export default Footer;
