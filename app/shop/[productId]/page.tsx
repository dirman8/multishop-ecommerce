"use client";

import { FC } from "react";
import ShopNav from "../components/shopNav";
import Header from "../../homepage/components/header";
import ProductSlider from "./components/productSlider";
import ProductDetails from "./components/productDetails";
import ProductDescription from "./components/productDescription";
import RelatedProducts from "./components/relatedProducts";

interface pageProps {
	params: { name: string };
}

const page: FC<pageProps> = ({ params }) => {
	return (
		<div>
			<Header />
			<ShopNav />
			<div className="overflow-hidden px-4 pb-12">
				<ProductSlider />
				<ProductDetails />
				<ProductDescription />
			</div>
			<RelatedProducts />
			{/* <h1 className="mt-10 text-paleGray">This is {params.productId}</h1> */}
		</div>
	);
};
export default page;
