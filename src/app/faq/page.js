import Link from "next/link";
import "./faq.css";

export const metadata = {
	title: "FAQ's",
	description: "Preguntas Frecuentes",
};

const questions = [
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
	{
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae quod reprehenderit?",
		answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt vero reprehenderit veniam, eligendi dignissimos minima, magnam ex culpa quaerat, at ad aspernatur repellendus placeat aperiam voluptatem perspiciatis cum neque fugit! Dolor, distinctio adipisci dignissimos corrupti reprehenderit iusto ratione laboriosam!"
	},
]

async function Consultations() {

	return (
		<main className="faq-container">
			<h1>Preguntas Frecuentes</h1>
			<section>
				{questions?.map((q, i) => (
					<article key={i}>
						<h4>{q?.question}</h4>
						<p>{q?.answer}</p>
					</article>
				))}
			</section>
			<div>
				<h1>No dudes en comunicarte si tienes más preguntas que no se hayan abordado aquí.</h1>
				<Link className="link-button" href="/contact">
					Contáctame!
				</Link>
			</div>
		</main>
	);
}

export default Consultations;
