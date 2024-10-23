import Link from "next/link";
import "./consultations.css";

export const metadata = {
	title: "Dudas y Consultas",
	description: "Obtén más información Aquí!",
};


function Consultations() {

	return (
		<main className="consultations-container">
			<h1>Consultas</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, labore facilis ducimus ullam rerum quibusdam totam temporibus necessitatibus. Accusamus ipsa dolor incidunt assumenda repellendus. Maiores nihil nostrum optio, consequuntur saepe, vero aut dolorem, minus autem eos est dolore soluta illo. Animi, id quaerat aspernatur soluta provident in officiis, illum est porro eaque explicabo consequatur commodi? Magnam porro nisi earum quam tempora impedit deserunt ullam, odit illo mollitia vero quos quis officiis. Perferendis accusamus nobis nulla harum reprehenderit quo culpa facilis quasi? Ipsa eveniet dolores vitae tempore quos doloribus fugiat nam culpa. Iure recusandae laboriosam perferendis, aut est quas. Odio architecto atque ipsam blanditiis, laudantium inventore esse corporis illum aliquam ea saepe est neque ullam placeat deserunt voluptatibus? Perferendis eveniet nisi possimus commodi impedit veritatis beatae quae natus recusandae, sequi a est eius dolores distinctio cum nostrum reiciendis amet esse! Ipsum recusandae deleniti suscipit dignissimos est ullam quibusdam veritatis veniam, perferendis exercitationem, ad repellat? Qui libero exercitationem laudantium reiciendis voluptas tenetur obcaecati hic quae impedit! Nostrum veniam nesciunt impedit quaerat totam a velit blanditiis dolores, deserunt consectetur laboriosam veritatis soluta? Minima, tenetur sunt quam possimus velit ut itaque! Numquam perferendis dolorem tenetur, iure fugit illo! Eveniet incidunt blanditiis ea, voluptates iste earum nobis adipisci sit sint eligendi mollitia ipsa porro at ducimus sunt molestias minus sapiente provident. Corporis, nam dolores. Dolorem, at consequatur? Quam alias fugit, rerum consectetur labore placeat ducimus dignissimos explicabo nemo aut asperiores. Consequatur excepturi perferendis incidunt recusandae reprehenderit distinctio minus quas sequi nisi et vero rerum repellendus, explicabo neque quos vel ipsum maxime minima assumenda unde veniam accusamus. Impedit perspiciatis dignissimos unde aspernatur asperiores adipisci error delectus repellat? Minima repellat quod tempore nihil quos explicabo cupiditate voluptatum doloribus fuga tenetur magni, pariatur facere eaque aspernatur fugiat libero suscipit amet neque dolores porro ipsa dolore. Velit itaque beatae repudiandae molestiae illo dolorum odit sit omnis, ducimus dolorem voluptatum iste maiores corporis commodi earum dolores, labore in, accusamus iure porro culpa neque cumque quibusdam? Minus exercitationem quis dolore impedit delectus libero officia non eaque, vitae dolorum voluptatum ut enim veritatis maxime deleniti voluptatibus nisi sequi! Corrupti ipsa laudantium eos praesentium dolore velit fuga sapiente ad saepe inventore fugit non omnis vitae ullam repellat aliquid repudiandae, est totam autem, distinctio natus. Facere dignissimos accusantium officiis velit eveniet et possimus, facilis, voluptate laborum nisi rem consectetur odio non enim? Molestiae veniam labore numquam voluptatum inventore facere, dolorum impedit saepe ex iste!</p>

			<Link
				className="link-button"
				href={`${process.env.SETMORE}`}
				target="_blank"
			>
				Reserva tu Hora Aquí{" "}
			</Link>

		</main>
	);
}

export default Consultations;
