import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShippingFast, faExchangeAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const KeyBenefits = () => {
	const benefits = [
		{ icon: faCheck, desc: "Quality Product" },
		{ icon: faShippingFast, desc: "Free Shipping" },
		{ icon: faExchangeAlt, desc: "14-Day Return" },
		{ icon: faPhoneVolume, desc: "24/7 Support" },
	];
	return (
		<div className="flex flex-col md:flex-row md:flex-wrap pt-12 pb-4 px-4">
			{benefits.map((benefit) => {
				return (
					<div key="benefit.id" className="mb-7 md:mb-0 md:p-4 flex md:flex-[0_0_50%] lg:flex-[0_0_25%]">
						<div className="flex p-6 lg:p-8 items-center bg-white w-full h-full">
							<FontAwesomeIcon className="mr-4" icon={benefit.icon} style={{ color: "#ffd333", height: "2rem" }} />
							<h3 className="text-lg text-mediumGray font-medium">{benefit.desc}</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default KeyBenefits;
