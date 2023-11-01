"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faEnvelope, faPhone, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ShopNav from "../components/shopNav";
import Header from "../../homepage/components/header";

const page = () => {
	return (
		<div className="mb-24">
			<Header />
			<div className="px-4">
				<ShopNav />

				{/* Contact Us */}
				<div className="mb-8 w-full">
					<h1 className="relative mb-4 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
						<span className="text-2xl font-semibold text-mediumGray bg-paleGray pr-4">CONTACT US</span>
					</h1>
					<div className="w-full mb-3 p-[30px] bg-white">
						<form action="">
							<input type="text" placeholder="Your Name" className="w-full mb-4 py-1 px-3 border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40" />
							<input type="text" placeholder="Your Email" className="w-full mb-4 py-1 px-3 border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40" />
							<input type="text" placeholder="Subject" className="w-full mb-4 py-1 px-3 border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40" />
							<textarea name="Message" placeholder="Message" id="" cols="30" rows="8" className="w-full mb-2 py-1 px-3 border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40"></textarea>
							<button className="bg-yellow py-2 px-6 text-mediumGray ">Send Message</button>
						</form>
					</div>
				</div>

				{/* Address */}
				<div className="bg-white p-[30px] mb-4 text-lightGray">
					<p className="flex mb-2 items-center">
						<span className="mr-4">
							<FontAwesomeIcon icon={faMapMarker} style={{ color: "#ffd333", height: "1rem" }} />
						</span>
						123 Street, New York, USA
					</p>
					<p className="flex mb-2 items-center">
						<span className="mr-4">
							<FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffd333", height: "1rem" }} />
						</span>
						info@example.com
					</p>
					<p className="flex mb-2 items-center">
						<span className="mr-4">
							<FontAwesomeIcon icon={faPhone} style={{ color: "#ffd333", height: "1rem" }} />
						</span>
						+012 345 67890
					</p>
				</div>
			</div>
		</div>
	);
};
export default page;
