import Image from "next/image";
import "./Header.css";
import SearchBar from "./SearchBar";

async function Header() {
	return (
		<header>
			<section className="logo-container">
				<Image
					src="https://res.cloudinary.com/dsvlzbctv/image/upload/v1701094972/medium_logosinfondo_96e627c60d.png"
					width={300}
					height={300}
					alt="logo de leonor b"
					className="logo"
				/>
			</section>

			<section className="centerContainer">
				<div className="leonorBcontainer">
					<h3 className="leonorB">Leonor</h3>
					<h3 className="leonorB">Berdichevsky</h3>
				</div>
				<div className="homeopatiaOnlineContainer">
					<h2 className="onlineHomeopath">Homeopatía</h2>
					<h2 className="onlineHomeopath">Online</h2>
				</div>
			</section>

			<section className="search-container">
				<SearchBar />
			</section>
		</header>
	);
}

export default Header;
