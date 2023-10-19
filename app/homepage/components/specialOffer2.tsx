import Image from "next/image";
import offer1 from "/public/offer-1.jpg";
import offer2 from "/public/offer-2.jpg";

const SpecialOffer2 = () => {
	return (
		<div className="w-full pt-12 md:flex">
			<div className="relative md:w-1/2 mb-8 mx-4 overflow-hidden">
				<div className="relative h-75 after:absolute after:top-0 after:left-0 after:w-full after:pointer-events-none after:h-full after:bg-alphaGray after:z-10 transition hover:scale-125 hover:rotate-3 duration-500">
					<Image alt="Special Offer" src={offer1} fill style={{ objectFit: "cover" }} />
				</div>
				<div className="pointer-events-none absolute h-75 w-full flex flex-col justify-center items-center top-0 text-white z-20 bg-transparent">
					<h2 className="text-base font-semibold mb-1">SAVE 20%</h2>
					<h1 className="text-2xl font-bold mb-3">Special Offer</h1>
					<div className="text-base bg-yellow px-3 py-2 text-darkGray">Shop Now</div>
				</div>
			</div>

			<div className="relative md:w-1/2 mb-8 mx-4 overflow-hidden">
				<div className="relative h-75 after:absolute after:top-0 after:left-0 after:w-full after:pointer-events-none after:h-full after:bg-alphaGray after:z-10 transition hover:scale-125 hover:rotate-3 duration-500">
					<Image alt="Special Offer" src={offer2} fill style={{ objectFit: "cover" }} />
				</div>
				<div className="pointer-events-none absolute h-75 w-full flex flex-col justify-center items-center top-0 text-white z-20 bg-transparent">
					<h2 className="text-base font-semibold mb-1">SAVE 20%</h2>
					<h1 className="text-2xl font-bold mb-3">Special Offer</h1>
					<div className="text-base bg-yellow px-3 py-2 text-darkGray">Shop Now</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialOffer2;
