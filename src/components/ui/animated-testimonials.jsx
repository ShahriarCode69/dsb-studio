"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

const dummyTestimonials = [
	{
		name: "Sarah Johnson",
		designation: "CEO at TechCorp",
		quote: "This product has completely transformed how we operate. The efficiency gains we've seen are remarkable, and our team couldn't be happier with the results.",
		src: "https://www.cartoonize.net/wp-content/uploads/2024/05/avatar-maker-photo-to-cartoon.png"
	},
	{
		name: "Michael Chen",
		designation: "Lead Developer at InnovateTech",
		quote: "The attention to detail and technical excellence displayed in this solution is outstanding. It's rare to find such a perfect balance of performance and user experience.",
		src: "https://www.cartoonize.net/wp-content/uploads/2024/05/avatar-maker-photo-to-cartoon.png"
	},
	{
		name: "Emma Rodriguez",
		designation: "Product Manager at DesignHub",
		quote: "Working with this team has been an absolute pleasure. They don't just deliver what you ask for - they enhance your vision with their expertise and creativity.",
		src: "https://www.cartoonize.net/wp-content/uploads/2024/05/avatar-maker-photo-to-cartoon.png"
	},
	{
		name: "David Kim",
		designation: "Founder at StartupX",
		quote: "From concept to execution, the entire process was seamless. The results exceeded our expectations and had a direct impact on our business growth.",
		src: "https://www.cartoonize.net/wp-content/uploads/2024/05/avatar-maker-photo-to-cartoon.png"
	}
];

export const AnimatedTestimonials = ({
	testimonials = dummyTestimonials, // Set as default value
	autoplay = false
}) => {
	const [active, setActive] = useState(0);

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const isActive = (index) => {
		return index === active;
	};

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	return (
		<div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
			<div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index) ? 0 : randomRotateY(),
										zIndex: isActive(index)
											? 40
											: testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
									className="absolute inset-0 origin-bottom">
									<img
										src={testimonial.src}
										alt={testimonial.name}
										width={500}
										height={500}
										draggable={false}
										loading="lazy"
										className="h-full w-full rounded-3xl object-cover object-center" />
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
				<div className="flex flex-col justify-between py-4">
					<motion.div
						key={active}
						initial={{
							y: 20,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -20,
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
							ease: "easeInOut",
						}}>
						<h3 className="text-3xl font-bold text-white dark:text-white">
							{testimonials[active].name}
						</h3>
						<p className="text-base text-gray-500 dark:text-neutral-500">
							{testimonials[active].designation}
						</p>
						<motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
							{testimonials[active].quote.split(" ").map((word, index) => (
								<motion.span
									key={index}
									initial={{
										filter: "blur(10px)",
										opacity: 0,
										y: 5,
									}}
									animate={{
										filter: "blur(0px)",
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.2,
										ease: "easeInOut",
										delay: 0.02 * index,
									}}
									className="inline-block">
									{word}&nbsp;
								</motion.span>
							))}
						</motion.p>
					</motion.div>
					<div className="flex gap-4 pt-12 md:pt-0">
						<button
							onClick={handlePrev}
							className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
							<IconArrowLeft
								className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
						</button>
						<button
							onClick={handleNext}
							className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
							<IconArrowRight
								className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
