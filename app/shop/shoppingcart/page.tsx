import ShopNav from "../components/shopNav";
import Header from "../../homepage/components/header";
import Image from "next/image";
import Product1 from "/public/product-1.jpg";
import Product2 from "/public/product-2.jpg";
import Product3 from "/public/product-3.jpg";
import Product4 from "/public/product-4.jpg";
import Product5 from "/public/product-5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

interface pageProps {
	params: { name: string };
}

const page = () => {
	const cartproducts = [
		{ productImage: Product1, productName: "Product Name", price: "$150", quantity: "1", total: "$150" },
		{ productImage: Product2, productName: "Product Name", price: "$150", quantity: "1", total: "$150" },
		{ productImage: Product3, productName: "Product Name", price: "$150", quantity: "1", total: "$150" },
		{ productImage: Product4, productName: "Product Name", price: "$150", quantity: "1", total: "$150" },
		{ productImage: Product5, productName: "Product Name", price: "$150", quantity: "1", total: "$150" },
	];
	return (
		<div className="mb-24">
			<Header />
			<div className="px-4">
				<ShopNav />

				{/* Shopping Cart Product List  */}
				<table className="w-full bg-paleGray">
					<thead>
						<tr className="mb-4 bg-mediumGray text-white border border-b-[16px] border-paleGray">
							<th className="p-3 font-semibold">Products</th>
							<th className="p-3 font-semibold">Price</th>
							<th className="p-3 font-semibold">Quantity</th>
							<th className="p-3 font-semibold">Total</th>
							<th className="p-3 font-semibold">Remove</th>
						</tr>
					</thead>
					<tbody>
						{cartproducts.map((product, index) => {
							return (
								<tr key={index} className="text-center bg-white text-base text-lightGray border border-b-[16px] border-paleGray">
									<td className="flex items-center mx-auto font-thin p-3">
										<Image alt="Product Detail" src={product.productImage} width={50} height={50} style={{ maxWidth: "100%", height: "auto" }}></Image>
										<span className="p-1">{product.productName}</span>
									</td>
									<td className="font-thin p-3">{product.price}</td>
									<td className="font-thin p-3">
										<div className="flex justify-center">
											<div className="w-8 h-8 bg-yellow">
												<button className="w-full h-full">
													<FontAwesomeIcon icon={faMinus} style={{ color: "#3d464d", height: "16px" }} />
												</button>
											</div>
											<div className="w-[38px] h-8 bg-White text-lightGray flex justify-center items-center">{product.quantity}</div>
											<div className="w-8 h-8 bg-yellow">
												<button className="w-full h-full">
													<FontAwesomeIcon icon={faPlus} style={{ color: "#3d464d", height: "16px" }} />
												</button>
											</div>
										</div>
									</td>
									<td className="font-thin p-3">{product.total}</td>
									<td className="font-thin p-3">
										<div className="mx-auto w-[28.3px] h-[31.67px] bg-[#dc3545]">
											<button className="w-full h-full">
												<FontAwesomeIcon icon={faTimes} style={{ color: "#ffffff", height: "16px" }} />
											</button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>

				<div className="flex mt-8 pb-8">
					<input type="text" className="flex-grow bg-white p-3" placeholder="Coupon Code" />
					<button className="py-[6px] px-[12px] bg-yellow text-mediumGray">Apply Coupon</button>
				</div>

				{/* Cart Summary */}
				<div className="">
					<h1 className="relative mb-6 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
						<span className="text-xl md:text-3xl font-bold text-mediumGray bg-paleGray pr-4">CART SUMMARY</span>
					</h1>
					<div className="p-[30px] bg-white font-semibold text-mediumGray">
						<div className="flex justify-between mb-4">
							<div>Subtotal</div>
							<div>$150</div>
						</div>
						<div className="flex justify-between pb-4 mb-4 border-b border-borderGray">
							<div>Shipping</div>
							<div>$10</div>
						</div>
						<div className="flex justify-between text-xl">
							<div>Total</div>
							<div>$160</div>
						</div>
						<div className="py-4 px-3 my-5 bg-yellow text-center text-base font-bold">Proceed To Checkout</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default page;
