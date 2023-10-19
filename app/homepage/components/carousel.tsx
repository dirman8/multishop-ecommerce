"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import carousel1 from "/public/carousel-1.jpg";
import carousel2 from "/public/carousel-2.jpg";
import carousel3 from "/public/carousel-3.jpg";

const Carousel = () => {
	const descriptions = [
		{ title: "Men Fashion", desc: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam" },
		{ title: "Woman Fashion", desc: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam" },
		{ title: "Kids Fashion", desc: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam" },
	];

	const [isImgChecked, setIsImgChecked] = useState(1);

	const handleInputChange = (e) => {
		setIsImgChecked(+e.currentTarget.value);
	};

	const switchToNextImage = () => {
		const prevChecked = isImgChecked;
		setIsImgChecked((prevChecked) => {
			return prevChecked === 3 ? 1 : prevChecked + 1;
		});
	};

	useEffect(() => {
		const timer = setInterval(switchToNextImage, 5000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="relative w-full mt-7 lg:w-2/3 mx-auto  mb-8">
			<div className="w-full px-4 after:block after:clear-both custom-content">
				{descriptions.map((item, index) => {
					const isAnimationEnabled = isImgChecked === index + 1;
					return (
						<div key={index} className="absolute flex justify-center items-center w-full h-full top-0 z-20">
							<div className="px-4 text-center text-white">
								<h1 className={`transition mb-4 px-16 text-5xl ${isAnimationEnabled ? "animate-fly-down" : "opacity-0"}`}>{item.title}</h1>
								<p className={`mb-8 px-16 last:text-xl transition ${isAnimationEnabled ? "animate-bounce-in" : "opacity-0"} duration-1000`}>{item.desc}</p>
								<div className={`flex justify-center ${isAnimationEnabled ? "animate-fly-up" : "opacity-0"}`}>
									<a className="border px-6 py-2 hover:bg-white hover:text-mediumGray hover:cursor-pointer">Shop Now</a>
								</div>
							</div>
						</div>
					);
				})}

				<ul className="relative w-full h-108 lg:h-112 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-alphaGray after:z-10 after:pointer-events-none">
					<input type="radio" id="img-1" name="radio-button" value="1" checked={isImgChecked === 1} onChange={handleInputChange} />
					<li className={`block transition-opacity duration-1000 ${isImgChecked === 1 ? "opacity-100" : "opacity-0"}`}>
						<div className="block absolute top-0 w-full h-full">
							<Image alt="Men Clothes" src={carousel1} fill style={{ objectFit: "cover" }} />
						</div>
					</li>

					<input type="radio" name="radio-button" id="img-2" value="2" checked={isImgChecked === 2} onChange={handleInputChange} />
					<li className={`block transition-opacity duration-1000 ${isImgChecked === 2 ? "opacity-100" : "opacity-0"}`}>
						<div className="block absolute top-0 w-full h-full">
							<Image alt="Woman Fashion" src={carousel2} fill sizes="100vw" style={{ objectFit: "cover" }} />
						</div>
					</li>

					<input type="radio" name="radio-button" id="img-3" value="3" checked={isImgChecked === 3} onChange={handleInputChange} />
					<li className={`block transition-opacity duration-1000 ${isImgChecked === 3 ? "opacity-100" : "opacity-0"}`}>
						<div className="block absolute top-0 w-full h-full">
							<Image alt="Kids Fashion" src={carousel3} fill sizes="100vw" style={{ objectFit: "cover" }} />
						</div>
					</li>
				</ul>
			</div>

			<div className="absolute left-0 right-0 bottom-3 mx-auto text-center  z-50">
				<label htmlFor="img-1" className={`inline-block h-4 mr-4 border border-white transition-width duration-500 ${isImgChecked === 1 ? "bg-white w-8" : "bg-transparent w-4"} m-10" id="img-dot-1"`}></label>
				<label htmlFor="img-2" className={`inline-block h-4 border border-white transition-width duration-500 ${isImgChecked === 2 ? "bg-white w-8" : "bg-transparent w-4"} m-10" id="img-dot-2"`}></label>
				<label htmlFor="img-3" className={`inline-block h-4 ml-4 border border-white transition-width duration-500 ${isImgChecked === 3 ? "bg-white w-8" : "bg-transparent w-4"} m-10" id="img-dot-3"`}></label>
			</div>
		</div>
	);
};

export default Carousel;
