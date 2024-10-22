import Link from "next/link";
import Image from "next/image";
import "./Header.css"

function TopBar() {
	return (
		<main className="topHeader">
			<Link
				className="flagContainerES"
				href="https://www.leonorb-homeopata.com/"
			>
				<Image
					src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701951143/ESP_Flag_3119969f4f.png"
					alt="imagen de bandera española"
					width={50}
					height={50}
					className="esp-flag"
				/>
			</Link>

			<Link
				href={`${process.env.SETMORE}`}
				target="_blank"
				className="bookHeaderContainer"
			>
				<h2 className="bookHeader">
					Haz click<span>Aquí</span>para reservar tu Nueva Hora o continuar con
					tu Tratamiento.
				</h2>
			</Link>

			{/* <Link
				className="flagContainerUK"
				href="https://www.leonorb-homeopath.uk/"
			>
				<Image
					src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701951143/UK_Flag_1c46c82e8a.png"
					alt="imagen de bandera británica"
					width={50}
					height={50}
					className="uk-flag"
				/>
			</Link> */}
		</main>
	);
}

export default TopBar;
