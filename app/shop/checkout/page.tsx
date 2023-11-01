"use client";

import { useState, ChangeEvent } from "react";
import ShopNav from "../components/shopNav";
import Header from "../../homepage/components/header";

const page = () => {
	const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

	const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPaymentMethod(event.target.id);
	};

	const billingAdress = [
		{ label: "First Name", placeholder: "John" },
		{ label: "Last Name", placeholder: "Doe" },
		{ label: "E-mail", placeholder: "example@email.com" },
		{ label: "Mobile No", placeholder: "+123 456 789" },
		{ label: "Address Line 1", placeholder: "123 Street" },
		{ label: "Address Line 2", placeholder: "123 Street" },
		{ label: "Country", placeholder: "United States" },
		{ label: "City", placeholder: "New York" },
		{ label: "State", placeholder: "New York" },
		{ label: "ZIP Code", placeholder: "123" },
	];

	return (
		<div className="mb-24">
			<Header />
			<div className="px-4">
				<ShopNav />

				<div className="lg:flex">
					{/* Billing Address */}
					<div className="mb-12 lg:flex lg:flex-col lg:flex-[0_0_66.6666% lg:pr-10">
						<h1 className="relative mb-4 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
							<span className="text-xl font-semibold text-mediumGray bg-paleGray pr-4">BILLING ADDRESS</span>
						</h1>
						<div className="p-[30px] md:px-4 bg-white text-lg text-lightGray md:flex md:flex-wrap">
							{billingAdress.map((address, index) => (
								<div key={index} className="flex flex-col mb-3 px-4 md:flex-[0_0_50%]">
									<label className="mb-2">{address.label}</label>
									<input type="text" placeholder={address.placeholder} className="block py-1 px-3 border border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40" />
								</div>
							))}
							<div className="text-base">
								<div className="relative flex mb-3">
									<input type="checkbox" id="create-account" className="peer" />
									<label
										htmlFor="create-account"
										className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-[5px] before:-left-6 before:w-4 before:h-4 before:border before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[5px] after:-left-6 after:w-4 after:h-4 after:border after:border-[#adb5bd]  after:content-[''] after:z-20 peer-checked:after:border-yellow peer-checked:after:bg-check-icon peer-checked:after:bg-contain"
									>
										Create an account
									</label>
								</div>
								<div className="relative flex">
									<input type="checkbox" id="ship-address" className="peer" />
									<label
										htmlFor="ship-address"
										className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-[5px] before:-left-6 before:w-4 before:h-4 before:border before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[5px] after:-left-6 after:w-4 after:h-4 after:border after:border-[#adb5bd]  after:content-[''] after:z-20 peer-checked:after:border-yellow peer-checked:after:bg-check-icon peer-checked:after:bg-contain"
									>
										Ship to different address
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:flex lg:flex-col lg:flex-[0_0_33.3333%]">
						{/* Cart Summary */}
						<div className="mb-12">
							<h1 className="relative mb-4 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
								<span className="text-xl font-semibold text-mediumGray bg-paleGray pr-4">ORDER TOTAL</span>
							</h1>
							<div className="p-[30px] bg-white font-semibold text-mediumGray">
								<div className="flex justify-between mb-4">
									<div>Products</div>
								</div>
								<div className="text-lightGray mb-4 border-b border-borderGray font-normal">
									<div className="flex justify-between mb-4">
										<div>Product Name 1</div>
										<div>$150</div>
									</div>
									<div className="flex justify-between mb-4">
										<div>Product Name 2</div>
										<div>$150</div>
									</div>
									<div className="flex justify-between mb-4">
										<div>Product Name 3</div>
										<div>$150</div>
									</div>
								</div>
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
							</div>
						</div>

						{/* Payment */}
						<div>
							<h1 className="relative mb-4 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
								<span className="text-xl font-semibold text-mediumGray bg-paleGray pr-4">PAYMENT</span>
							</h1>
							<div className="flex mb-6 p-[30px] bg-white">
								<div className="w-full text-lightGray">
									<div className="relative flex mr-5 mb-4">
										<input type="radio" id="Paypal" className="peer" onChange={handlePaymentChange} checked={paymentMethod === "Paypal"} />
										<label
											htmlFor="Paypal"
											className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:rounded-full before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[9px] after:-left-[19px] after:w-[6px] after:h-[6px] after:border after:rounded-full after:border-white after:content-[''] after:z-20 peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:bg-contain"
										>
											Paypal
										</label>
									</div>
									<div className="relative flex mr-5 mb-4">
										<input type="radio" id="Paypal" className="peer" onChange={handlePaymentChange} checked={paymentMethod === "Paypal"} />
										<label
											htmlFor="Paypal"
											className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:rounded-full before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[9px] after:-left-[19px] after:w-[6px] after:h-[6px] after:border after:rounded-full after:border-white after:content-[''] after:z-20 peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:bg-contain"
										>
											Direct Check
										</label>
									</div>
									<div className="relative flex mr-5 mb-5">
										<input type="radio" id="Paypal" className="peer" onChange={handlePaymentChange} checked={paymentMethod === "Paypal"} />
										<label
											htmlFor="Paypal"
											className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:rounded-full before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[9px] after:-left-[19px] after:w-[6px] after:h-[6px] after:border after:rounded-full after:border-white after:content-[''] after:z-20 peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:bg-contain"
										>
											Bank Transfer
										</label>
									</div>
									<button className="w-full font-bold text-center py-4 px-3 bg-yellow text-mediumGray">Place Order</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default page;
