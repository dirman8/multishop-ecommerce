const FilterSize = () => {
	const prices = [
		{ price: "All Size", items: 1000 },
		{ price: "XS", items: 150 },
		{ price: "S", items: 295 },
		{ price: "M", items: 246 },
		{ price: "L", items: 145 },
		{ price: "XL", items: 168 },
	];
	return (
		<div className="mb-6">
			<div>
				<h1 className="relative mb-4 before:absolute before:w-full before:h-0 before:left-0 before:top-1/2 before:border-t before:border-dashGray before:border-dashed before:-z-10">
					<span className="text-xl font-semibold text-mediumGray bg-paleGray pr-4">FILTER BY PRICE</span>
				</h1>
			</div>

			<div className="pt-6 px-6 text-lightGray bg-white">
				<form>
					{prices.map((choice, index) => {
						return (
							<div key={index} className="flex justify-between pb-6">
								<div className="relative flex">
									<input type="checkbox" id="price-all" className="peer" />
									<label
										htmlFor="price-all"
										className="relative mb-0 ml-2 align-top z-0 before:block before:absolute before:top-1 before:-left-6 before:w-4 before:h-4 before:border before:border-[#adb5bd] before:bg-white before:content-[''] before:z-10 peer-checked:before:border-yellow peer-checked:before:bg-yellow after:absolute after:block after:top-1 after:-left-6 after:w-4 after:h-4 after:border after:border-[#adb5bd]  after:content-[''] after:z-20 peer-checked:after:border-yellow peer-checked:after:bg-check-icon peer-checked:after:bg-contain"
									>
										{choice.price}
									</label>
								</div>
								<p className="px-[5px] py-[3px] border border-borderGray text-xs ">{choice.items}</p>
							</div>
						);
					})}
				</form>
			</div>
		</div>
	);
};

export default FilterSize;
