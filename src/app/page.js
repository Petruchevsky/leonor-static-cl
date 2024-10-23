import Image from "next/image";
import Link from "next/link";
import "./Home-Page.css";

export const metadata = {
	  title: "Inicio",
	  description: "Bienvenido(a) a mi sitio web!",
  }

function Home() {

	return (
		<main className="container-home">
			<Image
				className="image"
				src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094973/large_Home_page_resized_d03bd99e4d.jpg"
				alt="Home Page image"
				width={2000}
				height={2000}
				quality={100}
			/>
			<section className="welcome">
				<h1>Bienvenido</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi reprehenderit unde veniam aperiam odio? Sunt deserunt saepe quo ipsam. Nemo architecto excepturi beatae sint facere veritatis, cupiditate quisquam quod dignissimos voluptatum! Aspernatur, assumenda repellendus fuga ullam commodi tenetur praesentium animi delectus quia, voluptatem ratione? Ut repellendus expedita quod, nam consequuntur hic voluptatem repudiandae porro quia excepturi consectetur. Temporibus corrupti commodi facilis nostrum ex dolorem, distinctio ratione impedit. Sequi laudantium molestiae voluptates cumque laborum recusandae, ad deleniti quibusdam nostrum autem cum, vero optio neque! Sunt iusto sint quae dolores voluptatum, vero quos, aperiam officiis dicta repellendus earum eos sed. Inventore, vero rerum est nisi facere provident dolor debitis reiciendis, accusamus mollitia at ut error vitae, molestiae earum sequi esse obcaecati numquam. Officiis natus excepturi aspernatur accusantium nostrum ipsam, quia assumenda atque, inventore eaque sapiente fuga consequuntur ex quis error vel veritatis aut eveniet blanditiis at tenetur ad? Cumque ad eveniet, sequi assumenda enim, ducimus in ut quibusdam eius illo qui iste asperiores repellat soluta omnis culpa perspiciatis accusamus tenetur placeat fugiat nam temporibus facere. Nostrum, nesciunt quod! Illum delectus sit totam laborum nemo facere consequatur cumque eius error blanditiis reiciendis dolorem nulla, aperiam est asperiores doloribus excepturi omnis deserunt tempore aliquid necessitatibus nisi. Voluptatibus nihil accusantium sunt dolor, temporibus optio repudiandae doloribus impedit quisquam exercitationem deserunt necessitatibus, odio, odit amet assumenda maiores veritatis magnam tempora excepturi possimus quibusdam saepe delectus rem iure. Ratione tenetur modi placeat at a, suscipit enim cum, quae quaerat ullam ducimus laborum, natus saepe dignissimos mollitia blanditiis voluptatem ipsa reprehenderit. Esse, quis, at earum vitae tenetur explicabo repellendus consequuntur temporibus, aspernatur amet neque consectetur quasi suscipit soluta obcaecati dolores molestiae recusandae! At, vitae eaque delectus corporis atque nesciunt ut numquam alias, consequuntur exercitationem iure nihil dolore reiciendis odio animi quasi, dicta minima itaque ducimus ullam ipsum dignissimos saepe possimus! Placeat nam dicta molestiae iusto ea deleniti, nobis praesentium sed veniam. In itaque eos vel dolores aspernatur eum quis quasi blanditiis tempore odio, perspiciatis enim culpa, sit dicta voluptas explicabo quaerat totam. Sequi voluptas aperiam reprehenderit voluptate! Atque explicabo, nulla libero dolores qui vel repellendus provident reiciendis dignissimos. Repellat, dolores consequuntur rem recusandae maxime tempore possimus amet iste, esse nemo ad cumque culpa vero debitis ducimus atque eos qui laudantium sint illum minus. Dicta asperiores consequatur odit aut labore voluptatem fugit exercitationem quisquam sequi perferendis aperiam architecto aliquam vero quod eaque voluptates, nemo illo unde iste. Temporibus.</p>
			</section>

			<section className="hhch">
				<h1>Cómo la Homeopatía me puede ayudar?</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi reprehenderit unde veniam aperiam odio? Sunt deserunt saepe quo ipsam. Nemo architecto excepturi beatae sint facere veritatis, cupiditate quisquam quod dignissimos voluptatum! Aspernatur, assumenda repellendus fuga ullam commodi tenetur praesentium animi delectus quia, voluptatem ratione? Ut repellendus expedita quod, nam consequuntur hic voluptatem repudiandae porro quia excepturi consectetur. Temporibus corrupti commodi facilis nostrum ex dolorem, distinctio ratione impedit. Sequi laudantium molestiae voluptates cumque laborum recusandae, ad deleniti quibusdam nostrum autem cum, vero optio neque! Sunt iusto sint quae dolores voluptatum, vero quos, aperiam officiis dicta repellendus earum eos sed. Inventore, vero rerum est nisi facere provident dolor debitis reiciendis, accusamus mollitia at ut error vitae, molestiae earum sequi esse obcaecati numquam. Officiis natus excepturi aspernatur accusantium nostrum ipsam, quia assumenda atque, inventore eaque sapiente fuga consequuntur ex quis error vel veritatis aut eveniet blanditiis at tenetur ad? Cumque ad eveniet, sequi assumenda enim, ducimus in ut quibusdam eius illo qui iste asperiores repellat soluta omnis culpa perspiciatis accusamus tenetur placeat fugiat nam temporibus facere. Nostrum, nesciunt quod! Illum delectus sit totam laborum nemo facere consequatur cumque eius error blanditiis reiciendis dolorem nulla, aperiam est asperiores doloribus excepturi omnis deserunt tempore aliquid necessitatibus nisi. Voluptatibus nihil accusantium sunt dolor, temporibus optio repudiandae doloribus impedit quisquam exercitationem deserunt necessitatibus, odio, odit amet assumenda maiores veritatis magnam tempora excepturi possimus quibusdam saepe delectus rem iure. Ratione tenetur modi placeat at a, suscipit enim cum, quae quaerat ullam ducimus laborum, natus saepe dignissimos mollitia blanditiis voluptatem ipsa reprehenderit. Esse, quis, at earum vitae tenetur explicabo repellendus consequuntur temporibus, aspernatur amet neque consectetur quasi suscipit soluta obcaecati dolores molestiae recusandae! At, vitae eaque delectus corporis atque nesciunt ut numquam alias, consequuntur exercitationem iure nihil dolore reiciendis odio animi quasi, dicta minima itaque ducimus ullam ipsum dignissimos saepe possimus! Placeat nam dicta molestiae iusto ea deleniti, nobis praesentium sed veniam. In itaque eos vel dolores aspernatur eum quis quasi blanditiis tempore odio, perspiciatis enim culpa, sit dicta voluptas explicabo quaerat totam. Sequi voluptas aperiam reprehenderit voluptate! Atque explicabo, nulla libero dolores qui vel repellendus provident reiciendis dignissimos. Repellat, dolores consequuntur rem recusandae maxime tempore possimus amet iste, esse nemo ad cumque culpa vero debitis ducimus atque eos qui laudantium sint illum minus. Dicta asperiores consequatur odit aut labore voluptatem fugit exercitationem quisquam sequi perferendis aperiam architecto aliquam vero quod eaque voluptates, nemo illo unde iste. Temporibus.</p>
				<Link className="link-button" href="/homeopathy">
					Aprender Más...
				</Link>
			</section>

			<section className="about">
				<h1>Sobre mí...</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi reprehenderit unde veniam aperiam odio? Sunt deserunt saepe quo ipsam. Nemo architecto excepturi beatae sint facere veritatis, cupiditate quisquam quod dignissimos voluptatum! Aspernatur, assumenda repellendus fuga ullam commodi tenetur praesentium animi delectus quia, voluptatem ratione? Ut repellendus expedita quod, nam consequuntur hic voluptatem repudiandae porro quia excepturi consectetur. Temporibus corrupti commodi facilis nostrum ex dolorem, distinctio ratione impedit. Sequi laudantium molestiae voluptates cumque laborum recusandae, ad deleniti quibusdam nostrum autem cum, vero optio neque! Sunt iusto sint quae dolores voluptatum, vero quos, aperiam officiis dicta repellendus earum eos sed. Inventore, vero rerum est nisi facere provident dolor debitis reiciendis, accusamus mollitia at ut error vitae, molestiae earum sequi esse obcaecati numquam. Officiis natus excepturi aspernatur accusantium nostrum ipsam, quia assumenda atque, inventore eaque sapiente fuga consequuntur ex quis error vel veritatis aut eveniet blanditiis at tenetur ad? Cumque ad eveniet, sequi assumenda enim, ducimus in ut quibusdam eius illo qui iste asperiores repellat soluta omnis culpa perspiciatis accusamus tenetur placeat fugiat nam temporibus facere. Nostrum, nesciunt quod! Illum delectus sit totam laborum nemo facere consequatur cumque eius error blanditiis reiciendis dolorem nulla, aperiam est asperiores doloribus excepturi omnis deserunt tempore aliquid necessitatibus nisi. Voluptatibus nihil accusantium sunt dolor, temporibus optio repudiandae doloribus impedit quisquam exercitationem deserunt necessitatibus, odio, odit amet assumenda maiores veritatis magnam tempora excepturi possimus quibusdam saepe delectus rem iure. Ratione tenetur modi placeat at a, suscipit enim cum, quae quaerat ullam ducimus laborum, natus saepe dignissimos mollitia blanditiis voluptatem ipsa reprehenderit. Esse, quis, at earum vitae tenetur explicabo repellendus consequuntur temporibus, aspernatur amet neque consectetur quasi suscipit soluta obcaecati dolores molestiae recusandae! At, vitae eaque delectus corporis atque nesciunt ut numquam alias, consequuntur exercitationem iure nihil dolore reiciendis odio animi quasi, dicta minima itaque ducimus ullam ipsum dignissimos saepe possimus! Placeat nam dicta molestiae iusto ea deleniti, nobis praesentium sed veniam. In itaque eos vel dolores aspernatur eum quis quasi blanditiis tempore odio, perspiciatis enim culpa, sit dicta voluptas explicabo quaerat totam. Sequi voluptas aperiam reprehenderit voluptate! Atque explicabo, nulla libero dolores qui vel repellendus provident reiciendis dignissimos. Repellat, dolores consequuntur rem recusandae maxime tempore possimus amet iste, esse nemo ad cumque culpa vero debitis ducimus atque eos qui laudantium sint illum minus. Dicta asperiores consequatur odit aut labore voluptatem fugit exercitationem quisquam sequi perferendis aperiam architecto aliquam vero quod eaque voluptates, nemo illo unde iste. Temporibus.</p>
				<Link className="link-button" href="/consultations">
					Consultas
				</Link>
			</section>

			<Image
				className="selfie"
				src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094974/large_SELFIE_homepage_80f6dedfbe.jpg"
				alt="Una selfie"
				width={2000}
				height={2000}
			/>
		</main>
	);
}

export default Home;
