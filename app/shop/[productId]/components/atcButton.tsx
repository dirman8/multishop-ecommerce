import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const AtcButton = () => {
	return (
		<div className="flex mb-6">
			<div className="flex mr-4">
				<div className="w-10 h-[38px] bg-yellow">
					<button className="w-full h-full">
						<FontAwesomeIcon icon={faMinus} style={{ color: "#3d464d", height: "16px" }} />
					</button>
				</div>
				<div className="w-14 h-[38px] bg-White text-lightGray flex justify-center items-center">1</div>
				<div className="w-12 h-[38px] bg-yellow">
					<button className="w-full h-full">
						<FontAwesomeIcon icon={faPlus} style={{ color: "#3d464d", height: "16px" }} />
					</button>
				</div>
			</div>

			<div className="w-auto py-[6px] px-4 h-[38px] bg-yellow text-mediumGray">
				<button className="w-full h-full">
					<FontAwesomeIcon icon={faShoppingCart} style={{ color: "#3d464d", height: "16px" }} />
					<span className="ml-2">Add To Chart</span>
				</button>
			</div>
		</div>
	);
};

export default AtcButton;
