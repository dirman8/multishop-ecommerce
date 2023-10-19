import Header from "./homepage/components/header";
import Hero from "./homepage/components/hero";
import Categories from "./homepage/components/categories";
import FeaturedProducts from "./homepage/components/featuredProducts";
import RecentProducts from "./homepage/components/recentProducts";
import SpecialOffer2 from "./homepage/components/specialOffer2";
import Vendors from "./homepage/components/vendors";

const Home = () => {
	return (
		<main className="">
			<Header />
			<Hero />
			<Categories />
			<FeaturedProducts />
			<SpecialOffer2 />
			<RecentProducts />
			<Vendors />
		</main>
	);
};

export default Home;
