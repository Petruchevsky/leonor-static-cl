import "./gallery.css";
import Image from "next/image";
import MyGallery from "@/components/MyGallery";

export const metadata = {
	title: "Galería de Imágenes",
	description: "Podemos sentirnos mejor cada Día!",
};

function Gallery() {
	const images = [];

	return (
		<main className="container-gallery">
			{!images.length ? (
				<div className="container-gallery-empty">
					<h1>"Aquí, pronto podrás ver imágenes de nuestros pacientes..."</h1>
					<Image
						src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1697145963/Home_page_resized_373bd8b148.jpg"
						alt="imagen de homepage"
						width={2000}
						height={2000}
						className="img-gallery"
					/>
				</div>
			) : (
				<div className="gallery">
					<h1>Galería de Imágenes</h1>
					<p className="gallery-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia quae ab autem aliquam porro ullam dolores aspernatur iste asperiores expedita.</p>
					<MyGallery images={images} />
				</div>
			)}
		</main>
	);
}

export default Gallery;
