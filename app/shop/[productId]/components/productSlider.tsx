import Image from "next/image";
import Product1 from "/public/product-1.jpg";
import Product2 from "/public/product-2.jpg";
import Product3 from "/public/product-3.jpg";
import Product4 from "/public/product-4.jpg";
import Product5 from "/public/product-5.jpg";
import Product6 from "/public/product-6.jpg";
import Product7 from "/public/product-7.jpg";
import Product8 from "/public/product-8.jpg";

const ProductSlider = () => {
	return (
		<div className="relative flex mb-7">
			<div className="w-screen h-auto">
				<Image alt="Product Detail" src={Product1} sizes="100vw" style={{ width: "100%", height: "auto" }}></Image>
			</div>
		</div>
	);
};

export default ProductSlider;
