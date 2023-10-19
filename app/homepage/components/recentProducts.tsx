import Image from "next/image";
import Product1 from "/public/product-1.jpg";
import Product2 from "/public/product-2.jpg";
import Product3 from "/public/product-3.jpg";
import Product4 from "/public/product-4.jpg";
import Product5 from "/public/product-5.jpg";
import Product6 from "/public/product-6.jpg";
import Product7 from "/public/product-7.jpg";
import Product8 from "/public/product-8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faShoppingCart, faSyncAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

const RecentProducts = () => {
	const products = [Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8];

	return (
		<div className="pt-12 pb-4 px-4">
			<h1 className="relative mb-6 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
				<span className="text-2xl md:text-3xl font-bold mb-6 text-mediumGray bg-paleGray pr-4">RECENT PRODUCTS</span>
			</h1>
			<div className="sm:flex sm:flex-wrap">
				{products.map((product, index) => {
					return (
						<div key={index} className="flex sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%] sm:p-4">
							<div className="mb-8 sm:mb-0 bg-white">
								<div className="relative">
									<div className="group hover:child-hover absolute w-full h-full top-0 left-0 flex justify-center items-center bg-paleGray bg-opacity-70 opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
										<a href="#" className="group-hover:animate-fly-up-1 mx-1 border border-mediumGray hover:bg-mediumGray">
											<FontAwesomeIcon className="p-2 text-mediumGray hover:text-yellow" icon={faShoppingCart} />
										</a>
										<a href="#" className="group-hover:animate-fly-up-2 mx-1  border border-mediumGray hover:bg-mediumGray">
											<FontAwesomeIcon className="p-2 text-mediumGray hover:text-yellow" icon={faHeart} />
										</a>
										<a href="#" className="group-hover:animate-fly-up-3 mx-1 border border-mediumGray hover:bg-mediumGray">
											<FontAwesomeIcon className="p-2 text-mediumGray hover:text-yellow" icon={faSyncAlt} />
										</a>
										<a href="#" className="group-hover:animate-fly-up-4 mx-1 border border-mediumGray hover:bg-mediumGray">
											<FontAwesomeIcon className="p-2 text-mediumGray hover:text-yellow" icon={faSearch} />
										</a>
									</div>
									<Image alt="Product" src={product} width={500} height={500} style={{ maxWidth: "100%", height: "auto" }} />
								</div>
								<div className="py-6 flex flex-col items-center">
									<h2 className="text-mediumGray text-base font-medium mb-2">Product Name Goes Here</h2>
									<h3 className="text-mediumGray text-xl font-medium mb-2 flex justify-center items-center">
										$123.00 <span className="ml-2 text-lightGray line-through text-base">$124.00</span>
									</h3>
									<div className="flex">
										<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
										<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
										<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
										<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
										<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
										<p className="text-xs text-lightGray">({99})</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RecentProducts;
