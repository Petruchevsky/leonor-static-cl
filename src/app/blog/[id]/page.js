import Image from "next/image";
import Link from "next/link";
import "./post.css";
import { posts } from "@/data/posts";

export async function generateMetadata({ params }) {
	const { id } = params;
	const post = posts.find((p) => String(p.id) === id);
	const { title } = post;

	return {
		title: "Entrada de Blog",
		description: title,
	};
}

export async function generateStaticParams() {
	return posts.map((post) => ({ id: String(post.id) }));
}

async function Post({ params }) {
	const { id } = params;
	const post = posts.find((p) => String(p.id) === id);
	const { title, content, image, date } = post;

	return (
		<main className="post-container">
			<h1>{title}</h1>
			<p className="createdAndDate">Creado por Leonor Berdichevsky</p>
			<Image
				src={image}
				alt={`imagen de ${title}`}
				width={2000}
				height={2000}
			/>
			<p className="createdAndDate">{date}</p>
			<p>{content}</p>
			<Link href="/blog" className="link-button">Volver al Blog</Link>
		</main>
	);
}

export default Post;
