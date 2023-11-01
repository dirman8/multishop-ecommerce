import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, ChangeEvent } from "react";
import AtcButton from "./atcButton";
import SocialLink from "./socialLink";

const ProductDetails = () => {
	const sizes = ["XS", "S", "M", "L", "XL"];
	const colors = ["Black", "White", "Red", "Blue", "Green"];

	const [selectedSize, setSelectedSize] = useState<string | null>(null);
	const [selectedColor, setSelectedColor] = useState<string | null>(null);

	const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedSize(event.target.id);
	};
	const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedColor(event.target.id);
	};

	return (
		<div className="p-[30px] bg-white mb-8">
			<h1 className="mb-2 text-[23.38px] font-bold text-mediumGray tracking-wide">Product Name Goes Here</h1>
			<div className="py-1 mb-3 flex">
				<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
				<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
				<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
				<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
				<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "13px" }} />
				<p className="text-xs text-lightGray">(99 Reviews)</p>
			</div>
			<h2 className="mb-6 text-mediumGray text-[23.38px] font-bold tracking-normal">$150.00</h2>
			<p className="mb-6 text-base text-lightGray">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>

			{/* Sizes Choices */}
			<div className="flex mb-6">
				<p className="mr-5 font-bold text-mediumGray">Sizes:</p>
				<div className="flex flex-wrap text-lightGray">
					{sizes.map((size, index) => {
						return (
							<div key={index} className="relative flex mr-5">
								<input type="radio" id={size} className="peer" onChange={handleSizeChange} checked={selectedSize === size} />
								<label
									htmlFor={size}
									className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:rounded-full before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[9px] after:-left-[19px] after:w-[6px] after:h-[6px] after:border after:rounded-full after:border-white after:content-[''] after:z-20 peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:bg-contain"
								>
									{size}
								</label>
							</div>
						);
					})}
				</div>
			</div>

			{/* Colors Choices */}
			<div className="flex pb-6">
				<p className="mr-5 font-bold text-mediumGray">Colors:</p>
				<div className="flex flex-wrap text-lightGray">
					{colors.map((color, index) => {
						return (
							<div key={index} className="relative flex mr-5">
								<input type="radio" id={color} className="peer" onChange={handleColorChange} checked={selectedColor === color} />
								<label
									htmlFor={color}
									className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:rounded-full before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-[9px] after:-left-[19px] after:w-[6px] after:h-[6px] after:border after:rounded-full after:border-white after:content-[''] after:z-20 peer-checked:after:border-white peer-checked:after:bg-white peer-checked:after:bg-contain"
								>
									{color}
								</label>
							</div>
						);
					})}
				</div>
			</div>

			<AtcButton />

			<SocialLink />
		</div>
	);
};

export default ProductDetails;
