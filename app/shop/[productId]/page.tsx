import ShopNav from "../components/shopNav";
import FilterPrices from "../components/filterPrices";
import FilterColor from "../components/filterColor";
import FilterSize from "../components/filterSize";
import ShopProducts from "../components/shopProducts";
import Header from "../../homepage/components/header";
import { FC } from "react";

interface pageProps {
	params: { name: string };
}

const page: FC<pageProps> = ({ params }) => {
	return (
		<div>
			<Header />
			<h1>This is {params.productId}</h1>
			<div className="px-4">
				<ShopNav />
				<FilterPrices />
				<FilterColor />
				<FilterSize />
				<ShopProducts />
			</div>
		</div>
	);
};
export default page;
