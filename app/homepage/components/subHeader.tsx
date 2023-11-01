import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SubHeader = () => {
	return (
		<div className="hidden lg:flex h-16 bg-mediumGray">
			<div className="mx-4 p-8 flex flex-[0_0_25%] items-center justify-between bg-yellow text-alphaGray">
				<div className="flex place-items-center text-darkGray">
					<FontAwesomeIcon icon={faBars} style={{ color: "#212529", height: "1rem" }} />
					<p className="ml-2 ">Categories</p>
				</div>
				<FontAwesomeIcon icon={faAngleDown} style={{ color: "#212529", height: "1rem" }} />
			</div>

			<div className="p-4 flex flex-1 justify-between">
				<div className="hidden lg:flex text-white">
					<Link className="px-3 text-yellow" href="#">
						Home
					</Link>
					<Link className="px-3" href="#">
						Shop
					</Link>
					<Link className="px-3" href="#">
						Shop Detail
					</Link>
					<Link className="px-3" href="#">
						Pages
					</Link>
					<Link className="px-3" href="#">
						Contact
					</Link>
				</div>
				<div className="flex text-white">
					<div className="flex items-center ml-1 mr-1">
						<FontAwesomeIcon icon={faHeart} style={{ color: "#FFD333", height: "1rem" }} />
						<p className="ml-1 flex justify-center items-center border rounded-full w-5 h-5 text-xs font-semibold">0</p>
					</div>
					<div className="flex items-center ml-1">
						<FontAwesomeIcon icon={faShoppingCart} style={{ color: "#FFD333", height: "1rem" }} />
						<p className="ml-1 flex justify-center items-center border rounded-full w-5 h-5 text-xs font-semibold">0</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubHeader;
