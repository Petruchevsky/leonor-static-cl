import Image from "next/image";
import Link from "next/link";
import "./homeopathy.css";

export const metadata = {
	title: "Homeopatía",
	description: "Qué es la Homeopatía...?",
};

function Homeopathy() {
	return (
		<main className="container-h">
			<section className="what-is-h">
				<Image
					className="image-h"
					src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094973/healing_with_hompthy_page_af6f83347a.jpg"
					alt="Homeopathy image"
					width={2000}
					height={2000}
				/>

				<section className="homeo-text">
					<h1>
						Sanando con Homeopatía: Un Enfoque Suave para el Bienestar Holístico.
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						voluptas laboriosam repellendus obcaecati distinctio enim impedit
						soluta exercitationem, eos nostrum veniam. Veniam consequatur
						recusandae officiis illum tenetur numquam quo vel laudantium
						molestiae. Assumenda ipsa eum, repellendus impedit fugiat quis dolor
						qui cumque. Quasi dicta praesentium blanditiis cumque quae, cupiditate
						adipisci magnam eligendi asperiores facere vitae. Dicta voluptatem
						quae, amet incidunt earum adipisci, aliquam nulla repellat consectetur
						architecto ut asperiores. Velit cum earum aliquam possimus, similique
						atque molestiae eum eius, aut praesentium dolores aliquid quia
						repudiandae omnis natus at soluta fugit ipsum. Totam laudantium, quae
						veniam dolorem nemo, ipsum dolorum sint, necessitatibus sapiente minus
						voluptatem. Soluta ad, animi esse officia illo consequatur veritatis
						adipisci, inventore, at accusantium optio ipsa debitis voluptate?
						Impedit nulla assumenda voluptate provident, modi rerum. Natus
						cupiditate excepturi, dolorem id exercitationem mollitia praesentium
						quod fuga quasi vitae culpa aspernatur corporis laboriosam voluptates
						modi enim repellat amet provident possimus ipsum, eaque quam placeat.
						Veritatis quibusdam aut fugiat possimus autem vitae laborum
						repudiandae corrupti iste quidem praesentium enim, officiis vero qui
						nulla amet maxime velit similique assumenda, delectus, magni
						exercitationem dolore atque. Amet odit unde fugit blanditiis placeat
						aperiam recusandae obcaecati eos optio nihil modi quod velit, sint
						quasi earum!
					</p>
				</section>

			<Link className="link-button" href="/blog">
				For more information, visit my Blog
			</Link>
			</section>
		</main>
	);
}

export default Homeopathy;
