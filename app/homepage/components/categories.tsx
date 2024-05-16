import Cat1 from "/public/cat-1.jpg";
import Cat2 from "/public/cat-2.jpg";
import Cat3 from "/public/cat-3.jpg";
import Image from "next/image";

const Categories = () => {
	const category = [Cat1, Cat2, Cat3];
	//Create new array with 9 values, which is the values are from category value randomly
	const randomCategory = Array.from({ length: 12 }, () => category[Math.floor(Math.random() * category.length)]);

	return (
		<div className="pt-12 pb-4 px-4">
			<h1 className="relative mb-6 before:absolute before:w-full before:h-0 before:top-1/2 before:left-0 before:border-t before:border-dashGray before:border-dashed before:-z-10 ">
				<span className="text-2xl md:text-2xl font-bold text-mediumGray bg-paleGray pr-4">CATEGORIES</span>
			</h1>
			<div className="sm:flex sm:flex-wrap">
				{randomCategory.map((cat, index) => {
					return (
						<div
							key={index}
							className="flex sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_25%] mb-6 sm:mb-0 sm:p-3"
						>
							<div className="group flex flex-1 pr-1 items-center bg-white hover:bg-yellow">
								<div className="relative overflow-hidden">
									<Image
										alt="Category Name"
										className="group-hover:scale-125 group-hover:rotate-6 duration-500"
										src={cat}
										width={100}
										height={100}
										style={{ maxWidth: "100%", height: "auto" }}
									/>
								</div>
								<div className="ml-4 md:ml-3">
									<h2 className="text-mediumGray text-base font-semibold mb-2">Category Name</h2>
									<p className="text-xs text-lightGray">100 Products</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Categories;
