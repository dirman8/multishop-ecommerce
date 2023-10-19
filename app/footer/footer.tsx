import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faEnvelope, faPhone, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Payments from "/public/payments.png";

const Footer = () => {
	const quickShop = ["Home", "Our Shop", "Shop Detail", "Shopping Cart", "Checkout", "Contact Us"];

	return (
		<div className="text-paleGray bg-mediumGray pt-16 px-4 mt-12 w-full">
			<div className="lg:flex ">
				<div className="mb-12 flex flex-col lg:flex-[0_0_35%]">
					<h3 className="text-lg mb-5">GET IN TOUCH</h3>
					<p className="mb-5 pr-8">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
					<div>
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

				<div className="flex flex-col md:flex-row lg:flex-[0_0_65%] w-full">
					<div className="mb-12 flex flex-col flex-1 md:flex-[0_0_33.33333%">
						<h3 className="text-lg mb-5">QUICK SHOP</h3>
						<ul>
							{quickShop.map((item, index) => (
								<li key={index} className="flex items-center mb-2">
									<span className="mr-2">
										<FontAwesomeIcon icon={faAngleRight} style={{ color: "#f5f5f5", height: "0.75rem" }} />
									</span>
									<h1>{item}</h1>
								</li>
							))}
						</ul>
					</div>

					<div className="mb-12 flex flex-col flex-1 md:flex-[0_0_33.33333%">
						<h3 className="text-lg mb-5">MY ACCOUNT</h3>
						<ul>
							{quickShop.map((item, index) => (
								<li key={index} className="flex items-center mb-2">
									<span className="mr-2">
										<FontAwesomeIcon icon={faAngleRight} style={{ color: "#f5f5f5", height: "0.75rem" }} />
									</span>
									<h1>{item}</h1>
								</li>
							))}
						</ul>
					</div>

					<div className="pr-6 mb-12 mflex flex-col flex-1 md:flex-[0_0_33.33333%">
						<h3 className="text-lg mb-5">NEWSLETTER</h3>
						<p className="mb-4">Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
						<form action="">
							<div className="flex">
								<input type="text" className="bg-white flex-1" placeholder="   Your Email Adress" />
								<div className="flex-shrink-0 bg-yellow text-mediumGray p-2">Sign Up</div>
							</div>
						</form>
						<h4 className="text-base mt-6 mb-4">FOLLOW US</h4>
						<div className="flex">
							<div className="w-10 h-10 mr-2 bg-yellow flex justify-center items-center">
								<FontAwesomeIcon icon={faTwitter} style={{ color: "#3d464d", height: "1rem" }} />
							</div>
							<div className="w-10 h-10 mr-2 bg-yellow flex justify-center items-center">
								<FontAwesomeIcon icon={faFacebook} style={{ color: "#3d464d", height: "1rem" }} />
							</div>
							<div className="w-10 h-10 mr-2 bg-yellow flex justify-center items-center">
								<FontAwesomeIcon icon={faLinkedin} style={{ color: "#3d464d", height: "1rem" }} />
							</div>
							<div className="w-10 h-10 mr-2 bg-yellow flex justify-center items-center">
								<FontAwesomeIcon icon={faInstagram} style={{ color: "#3d464d", height: "1rem" }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row md:justify-between py-6 border-t border-lightGray">
				<p className="mb-4 md:mb-0 text-center md:w-1/2 md:text-left">
					&copy; <span className="text-yellow">Domain</span>. All Rights Reserved. Designed by <span className="text-yellow">HTML Codex</span>
				</p>
				<div className="relative h-5 flex justify-center md:justify-end md:w-1/2">
					<Image alt="payment" src={Payments} sizes="100vw" style={{ width: "auto", height: "auto" }} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
