import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialLink = () => {
	return (
		<div className="flex text-mediumGray items-center font-bold">
			<p>Share on:</p>
			<div className="flex">
				<div className="w-10 h-10 flex justify-center items-center">
					<FontAwesomeIcon icon={faTwitter} style={{ color: "#3d464d", height: "1rem" }} />
				</div>
				<div className="w-10 h-10 flex justify-center items-center">
					<FontAwesomeIcon icon={faFacebook} style={{ color: "#3d464d", height: "1rem" }} />
				</div>
				<div className="w-10 h-10 flex justify-center items-center">
					<FontAwesomeIcon icon={faLinkedin} style={{ color: "#3d464d", height: "1rem" }} />
				</div>
				<div className="w-10 h-10 flex justify-center items-center">
					<FontAwesomeIcon icon={faInstagram} style={{ color: "#3d464d", height: "1rem" }} />
				</div>
			</div>
		</div>
	);
};

export default SocialLink;
