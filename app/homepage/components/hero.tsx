import Carousel from "./carousel";
import SpecialOffer from "./specialOffer";
import KeyBenefits from "./keyBenefits";

const Hero = () => {
	return (
		<div className="flex flex-col">
			<div className="lg:flex">
				<Carousel />
				<SpecialOffer />
			</div>
			<KeyBenefits />
		</div>
	);
};

export default Hero;
