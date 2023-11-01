import "./globals.css";
import { Roboto } from "@next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/shared/Navbar";
import Footer from "./footer/footer";

export const metadata: Metadata = {
	title: "E-Commerce App",
	description: "Modern e-commerce app with Next.js 13",
};

//Configure Robot Font Object
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={roboto.className}>
			<body className="relative bg-paleGray">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
