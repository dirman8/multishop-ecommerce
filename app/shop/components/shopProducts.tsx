import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Products from "./products";

const ShopProducts = () => {
	return (
		<div className="pb-4">
			<div className="mb-6 flex justify-between">
				<div className="flex">
					<div className="w-8 h-8 py-2 px-2 bg-white">
						<FontAwesomeIcon className="text-darkGray hover:text-yellow" icon={faThLarge} />
					</div>
					<div className="w-8 h-8 py-2 px-2 bg-white">
						<FontAwesomeIcon className="text-darkGray hover:text-yellow" icon={faBars} />
					</div>
					<div></div>
				</div>

				<div className="flex text-sm">
					<div className="flex items-center mr-3 px-2 py-1 bg-white text-darkGray">
						Sorting
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D464D", height: "12px" }} />
						</span>
					</div>
					<div className="flex items-center px-2 py-1 bg-white text-darkGray">
						Showing
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D464D", height: "12px" }} />
						</span>
					</div>
				</div>
			</div>

			<div>
				<Products />
			</div>

			<div className="pb-4 flex justify-center items-center text-yellow text-base">
				<button className="bg-white py-2 px-3 border border-borderGray inline-block text-lightGray">Previous</button>
				<button className="bg-yellow text-white py-2 px-3 border border-borderGray inline-block">1</button>
				<button className="bg-white py-2 px-3 border border-borderGray inline-block">2</button>
				<button className="bg-white py-2 px-3 border border-borderGray inline-block">3</button>
				<button className="bg-white py-2 px-3 border border-borderGray inline-block">Next</button>
			</div>
		</div>
	);
};

export default ShopProducts;
