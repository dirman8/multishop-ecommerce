import ShopNav from "./components/shopNav";
import FilterPrices from "./components/filterPrices";
import FilterColor from "./components/filterColor";
import FilterSize from "./components/filterSize";
import ShopProducts from "./components/shopProducts";
import Header from "../homepage/components/header";

const ShopPage = () => {
	return (
		<div>
			<Header />
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
export default ShopPage;
