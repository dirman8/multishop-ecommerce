import Image from "next/image";
import Vendor1 from "/public/vendor-1.jpg";
import Vendor2 from "/public/vendor-2.jpg";
import Vendor3 from "/public/vendor-3.jpg";
import Vendor4 from "/public/vendor-4.jpg";
import Vendor5 from "/public/vendor-5.jpg";
import Vendor6 from "/public/vendor-6.jpg";
import Vendor7 from "/public/vendor-7.jpg";
import Vendor8 from "/public/vendor-8.jpg";

const Vendors = () => {
	const vendors = [Vendor1, Vendor2, Vendor3, Vendor4, Vendor5, Vendor6, Vendor7, Vendor8];
	return (
		<div className="py-12 overflow-hidden">
			<div className="flex">
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-1.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-2.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-3.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-4.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-5.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-6.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-7.jpg" alt="" />
				</div>
				<div className="mr-7 p-6 bg-white">
					<img className="w-full h-full min-w-[100px] min-h-[100px]" src="/vendor-8.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Vendors;
