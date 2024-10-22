import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import "./blog.css";

export const metadata = {
	title: "Blog",
	description: "Bienvenido(a) a mi Blog!",
};

function Blog() {

	return (
		<main className="container-blog">
			{!posts.length ? (
				<section className="empty-blog">
					<h1>
						"Aquí, pronto podrás ver nuestro Blog..."
					</h1>
					<Image
						src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1697145963/Home_page_resized_373bd8b148.jpg"
						alt="imagen de homepage"
						width={2000}
						height={2000}
                  className="img-blog"
					/>
				</section>
			) : (
				<section className="blog">
					<h1>Bienvenido(a) a mi Blog</h1>
					<p>"Aquí podrás ver diferentes artículos para entender mejor el alcance de mi tratamiento, y mejorar tu calidad de vida con tendencias saludables..."</p>
                    <ul>
                        {posts?.map(post=>(
                            <li key={post.id} className="post">
                                <Image src={post?.image} alt="imagen de post" width={1000} height={1000} />
                                <div className="post-text">
                                    <h1>{post?.title}</h1>
                                    <p>Creado por Leonor Berdichevsky</p>
                                    <p>{post?.date}</p>
                                    <p>{post?.content.substring(0, 200) + '...'}</p>
                                    <Link href={`/blog/${post?.id}`} className="link-button">Leer artículo completo...</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
				</section>
			)}
		</main>
	);
}

export default Blog;
