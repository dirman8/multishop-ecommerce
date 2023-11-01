import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewForms = () => {
	return (
		<div className="text-lightGray">
			<h1 className="mb-6 text-[21.69px] text-mediumGray font-medium">Leave a review</h1>
			<p className="text-xs leading-loose">Your email address will not be published. Required fields are marked *</p>
			<div className="flex my-3">
				<p>Your Rating*:</p>
				<div className="mb-2 flex">
					<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
					<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
					<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
					<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
					<FontAwesomeIcon className="mr-1" icon={faStar} style={{ color: "#ffd333", height: "15px" }} />
				</div>
			</div>
			<form>
				<div className="mb-3">
					<p className="mb-2">Your Review *:</p>
					<textarea className="h-[134px] w-full py-2 px-3 border border-borderGray focus:outline-none focus:border-yellow focus:border-opacity-40" />
				</div>
				<div className="mb-3">
					<p className="mb-2">Your Name *:</p>
					<input type="text" className="h-[38px] w-full py-2 px-3 border-2 border-t-[#000000] border-l-[#000000] focus:outline-none focus:border-yellow focus:border-opacity-40 focus:border-t-[#858585] focus:border-l-[#858585]" />
				</div>
				<div className="mb-3">
					<p className="mb-2">Your Email *:</p>
					<input type="text" className="h-[38px] w-full py-2 px-3 border-2 border-t-[#000000] border-l-[#000000] focus:outline-none focus:border-yellow focus:border-opacity-40 focus:border-t-[#858585] focus:border-l-[#858585]" />
				</div>
				<input type="submit" className="py-2 px-4 bg-yellow" value="Leave Your Review" />
			</form>
		</div>
	);
};

export default ReviewForms;
