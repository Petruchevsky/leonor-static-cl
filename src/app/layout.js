import TopBar from "@/components/TopBar";
import Header from "../components/Header";
import "../components/Header.css"
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "@fontsource/red-hat-display";
import "typeface-glacial-indifference";
import "typeface-raleway";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export const metadata = {
	openGraph: {
		title: "Leonor-B Homeopatía Online",
		description: "Bienvenido(a) a mi Sitio!",
		images: {
			url: "https://res.cloudinary.com/dsvlzbctv/image/upload/v1696360859/logoconfondo_71c9548045.png",
		},
		locale: "es_CL",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
        <TopBar />
				<Header />
				<Navbar />
				{children}
				{/* <Toaster /> */}
				<Footer />
			</body>
		</html>
	);
}
