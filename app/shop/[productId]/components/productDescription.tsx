import Image from "next/image";
import { useState } from "react";
import User from "/public/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewForms from "./reviewForms";

const ProductDescription = () => {
	const [activeTab, setActiveTab] = useState<string>("description"); // Specify 'string' as the type

	const handleTabClick = (tabName: string, e) => {
		e.preventDefault();
		setActiveTab(tabName);
	};

	return (
		<div className="bg-white p-[30px]">
			{/* Tab Head */}
			<div className="mb-6 bg-white flex flex-wrap border-b border-borderGray">
				<a href="#" className={`py-2 px-4 ${activeTab === "description" ? "bg-paleGray border border-borderGray border-b-0" : ""} text-mediumGray`} onClick={(e) => handleTabClick("description", e)}>
					Description
				</a>
				<a href="#" className={`py-2 px-4 ${activeTab === "information" ? "bg-paleGray border border-borderGray border-b-0" : ""} text-mediumGray`} onClick={(e) => handleTabClick("information", e)}>
					Information
				</a>
				<a href="#" className={`py-2 px-4 ${activeTab === "reviews" ? "bg-paleGray border border-borderGray border-b-0" : ""} text-mediumGray`} onClick={(e) => handleTabClick("reviews", e)}>
					Reviews (0)
				</a>
			</div>

			{/* Description Content */}
			<div>
				{/* Product Desc */}
				<div className={`${activeTab === "description" ? "block" : "hidden"}`}>
					<h1 className="mb-4 text-[21.69px] text-mediumGray font-semibold">Product Description</h1>
					<p className="mb-4 text-lightGray">
						Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
						sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
						eirmod takimata dolor ea invidunt.
					</p>
					<p className="mb-4 text-lightGray">
						Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam
						takimata sed justo. Magna takimata justo et amet magna et.
					</p>
				</div>

				{/* Additional Information */}
				<div className={`${activeTab === "information" ? "block" : "hidden"}`}>
					<h1 className="mb-4 text-[21.69px] text-mediumGray font-semibold">Additional Information</h1>
					<p className="mb-4 text-lightGray">
						Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
						sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus
						eirmod takimata dolor ea invidunt.
					</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Amet kasd gubergren sit sanctus et lorem eos sadipscing at.</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Duo amet accusam eirmod nonumy stet et et stet eirmod.</p>
					<p className="py-3 text-lightGray">Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Sit erat duo lorem duo ea consetetur, et eirmod takimata.</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Amet kasd gubergren sit sanctus et lorem eos sadipscing at.</p>
					<p className="py-3 border-b border-borderGray text-lightGray">Duo amet accusam eirmod nonumy stet et et stet eirmod.</p>
					<p className="py-3 text-lightGray">Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.</p>
				</div>

				{/* Reviews */}
				<div className={`mb-6 ${activeTab === "reviews" ? "block" : "hidden"}`}>
					<h1 className="mb-4 text-[21.69px] text-mediumGray font-medium">1 review for "Product Name"</h1>
					<div className="flex">
						<div className="relative flex flex-shrink-0 w-11 h-11 mt-1 mr-4">
							<Image alt="Category Name" className="" src={User} fill sizes="100vw" style={{ objectFit: "cover" }} />
						</div>
						<div>
							<p className="mb-2 text-mediumGray font-bold">
								John Doe <span className="italic text-xs font-light">- 01 Jan 2045</span>
							</p>
							<div className="mb-2 flex">
								<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
								<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
								<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
								<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
								<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
							</div>
							<p className="text-lightGray mb-4">Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
						</div>
					</div>
				</div>

				{/* Review Forms */}
				<ReviewForms />
			</div>
		</div>
	);
};

export default ProductDescription;
