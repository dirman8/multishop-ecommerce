import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="flex justify-center lg:justify-between items-center text-lightGray">
			<div className="hidden lg:flex py-1 px-4 text-base">
				<Link href="#" className="mr-4">
					About
				</Link>
				<Link href="#" className="mr-4">
					Contact
				</Link>
				<Link href="#" className="mr-4">
					Help
				</Link>
				<Link href="#" className="mr-4">
					FAQs
				</Link>
			</div>

			<div className="py-1 px-4 flex justify-center items-center">
				<div className="flex py-1 text-sm">
					<div className="flex items-center mr-2 px-2 py-1 bg-white text-darkGray">
						My Account
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D464D", height: "12px" }} />
						</span>
					</div>
					<div className="flex items-center mr-2 px-2 py-1 bg-white text-darkGray">
						USD
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D464D", height: "12px" }} />
						</span>
					</div>
					<div className="flex items-center mr-2 px-2 py-1 bg-white text-darkGray">
						EN
						<span className="ml-1">
							<FontAwesomeIcon icon={faCaretDown} style={{ color: "#3D464D", height: "12px" }} />
						</span>
					</div>
				</div>
				<div className="lg:hidden flex items-center ml-1 mr-1">
					<FontAwesomeIcon icon={faHeart} style={{ color: "#3D464D", height: "1rem" }} />
					<p className="ml-1 flex justify-center items-center border rounded-full w-5 h-5 text-xs font-semibold text-mediumGray">0</p>
				</div>
				<div className="lg:hidden flex items-center ml-1">
					<FontAwesomeIcon icon={faShoppingCart} style={{ color: "#3D464D", height: "1rem" }} />
					<p className="ml-1 flex justify-center items-center border rounded-full w-5 h-5 text-xs font-semibold text-mediumGray">0</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
