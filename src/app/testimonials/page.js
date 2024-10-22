import "./testimonials.css";
import Image from "next/image";
import MySlider from "@/components/MySlider";

export const metadata = {
	title: "Testimonios",
	description: "Mira lo que la gente dice!",
};

const data = [
	{
		id: 1,
		title: "Paciente Uno",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa tempora natus, saepe voluptatem ab enim illo excepturi. Voluptas nemo nihil voluptatem provident vel dolores consequatur pariatur dolorum deleniti dolore, eos labore quasi, cupiditate vero error suscipit eligendi delectus eveniet ea. Sed illum similique soluta cupiditate ea iusto cum minus.",
	},
	{
		id: 2,
		title: "Paciente Dos",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa tempora natus, saepe voluptatem ab enim illo excepturi. Voluptas nemo nihil voluptatem provident vel dolores consequatur pariatur dolorum deleniti dolore, eos labore quasi, cupiditate vero error suscipit eligendi delectus eveniet ea. Sed illum similique soluta cupiditate ea iusto cum minus.",
	},
	{
		id: 3,
		title: "Paciente Tres",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est culpa tempora natus, saepe voluptatem ab enim illo excepturi. Voluptas nemo nihil voluptatem provident vel dolores consequatur pariatur dolorum deleniti dolore, eos labore quasi, cupiditate vero error suscipit eligendi delectus eveniet ea. Sed illum similique soluta cupiditate ea iusto cum minus.",
	},
];

function Testimonials() {
	return (
		<main className="main-container-testi">
			{!data.length ? (
				<section className="empty-testimonials">
					<h1>
						"Aquí, pronto podrás ver los testimonios de nuestros pacientes..."
					</h1>
					<Image
						src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094973/testimonials_page_resized_1fd8c5304b.jpg"
						alt="imagen de homepage"
						width={2000}
						height={2000}
						className="img-testi-empty"
					/>
				</section>
			) : (
				<section>
					<h1>Testimonios</h1>
					<MySlider data={data} />
				</section>
			)}
		</main>
	);
}

export default Testimonials;
