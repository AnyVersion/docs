"use client";
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import RetroGrid from "@/components/ui/retro-grid";
import RainbowButton from "@/components/ui/rainbow-button";
import {Icon} from "@iconify/react";
import {buildTr} from "@/lib/i18n-locales";
import Link from "next/link";

export const HomeHeroSelection = ({ lang }: { lang: string }) => {
	const tr = useMemo(() => buildTr(lang), [lang]);

	return (
		<div
			className={
				"fixed z-10 bottom-0 left-0 top-0 right-0 bg-gradient-to-b from-background to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 flex items-center w-full justify-center overflow-hidden"
			}
		>
			<RetroGrid />
			<div className={"container"}>
				<div className={"w-full flex gap-6 items-center"}>
					<div className={"flex flex-col gap-4 mx-auto w-max flex-1"}>
						<div
							className={
								"text-2xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-400"
							}
						>
							{tr("home.title.1")}{" "}
							<AnimateWord words={["Elecpack", "Any Di", "Any Webpack"]} />
							<br /> {tr("home.title.2")}
							<AnimateWord words={["Web", "Desktop", "Mobile", "Full Stack"]} />
							{tr("home.title.3")}
						</div>

						<div>
							<Link href={"/docs/anydi"}>
								<RainbowButton>{tr("home.go-doc")}</RainbowButton>
							</Link>
						</div>
					</div>
					<div className={"hidden md:block"}>
						<div className="relative flex h-[500px] aspect-square flex-col items-center justify-center overflow-hidden">
							<span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
								{tr("home.tech-stack")}
							</span>

							{/* Inner Circles */}
							<OrbitingCircles
								className="size-[30px] border-none bg-transparent"
								duration={20}
								delay={20}
								radius={80}
							>
								<Icon icon="logos:webpack" className={"size-8"} />
							</OrbitingCircles>
							<OrbitingCircles
								className="size-[30px] border-none bg-transparent"
								duration={20}
								delay={10}
								radius={80}
							>
								<Icon icon="logos:electron" className={"size-8"} />
							</OrbitingCircles>

							{/* Outer Circles (reverse) */}
							<OrbitingCircles
								className="size-[50px] border-none bg-transparent"
								radius={190}
								duration={20}
								reverse
							>
								<Icon icon="logos:react" className={"size-8"} />
							</OrbitingCircles>
							<OrbitingCircles
								className="size-[50px] border-none bg-transparent"
								radius={190}
								duration={20}
								delay={20}
								reverse
							>
								<Icon icon="logos:typescript" className={"size-16"} />
							</OrbitingCircles>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const AnimateWord = ({
	words,
	duration = 3000,
	className,
}: {
	words: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: "blur(8px)",
					scale: 2,
					position: "absolute",
				}}
				className={cn(
					"z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
					className,
				)}
				key={currentWord}
			>
				{currentWord.split(" ").map((word, wordIndex) => (
					<motion.span
						// biome-ignore lint: key is needed
						key={`${word}-${wordIndex}`}
						initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{
							delay: wordIndex * 0.3,
							duration: 0.3,
						}}
						className="inline-block whitespace-nowrap"
					>
						{word.split("").map((letter, letterIndex) => (
							<motion.span
								// biome-ignore lint: key is needed
								key={`${word}-${letterIndex}`}
								initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
								animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
								transition={{
									delay: wordIndex * 0.3 + letterIndex * 0.05,
									duration: 0.2,
								}}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
						<span className="inline-block">&nbsp;</span>
					</motion.span>
				))}
			</motion.div>
		</AnimatePresence>
	);
};

export const HomeHeroSelectionBackground = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const parentRef = useRef<HTMLDivElement>(null);

	const beams = [
		{
			initialX: 10,
			translateX: 10,
			duration: 7,
			repeatDelay: 3,
			delay: 2,
		},
		{
			initialX: 600,
			translateX: 600,
			duration: 3,
			repeatDelay: 3,
			delay: 4,
		},
		{
			initialX: 100,
			translateX: 100,
			duration: 7,
			repeatDelay: 7,
			className: "h-6",
		},
		{
			initialX: 400,
			translateX: 400,
			duration: 5,
			repeatDelay: 14,
			delay: 4,
		},
		{
			initialX: 800,
			translateX: 800,
			duration: 11,
			repeatDelay: 2,
			className: "h-20",
		},
		{
			initialX: 1000,
			translateX: 1000,
			duration: 4,
			repeatDelay: 2,
			className: "h-12",
		},
		{
			initialX: 1200,
			translateX: 1200,
			duration: 6,
			repeatDelay: 4,
			delay: 2,
			className: "h-6",
		},
	];

	return (
		<div
			ref={parentRef}
			className={cn(
				"h-96 md:h-[40rem] bg-gradient-to-b from-background to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden", // h-screen if you want bigger
				className,
			)}
		>
			{beams.map((beam) => (
				<CollisionMechanism
					key={`${beam.initialX}beam-idx`}
					beamOptions={beam}
					containerRef={containerRef}
					parentRef={parentRef}
				/>
			))}

			{children}
			<div
				ref={containerRef}
				className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
				style={{
					boxShadow:
						"0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
				}}
			/>
		</div>
	);
};

const CollisionMechanism = React.forwardRef<
	HTMLDivElement,
	{
		containerRef: React.RefObject<HTMLDivElement>;
		parentRef: React.RefObject<HTMLDivElement>;
		beamOptions?: {
			initialX?: number;
			translateX?: number;
			initialY?: number;
			translateY?: number;
			rotate?: number;
			className?: string;
			duration?: number;
			delay?: number;
			repeatDelay?: number;
		};
	}
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
	const beamRef = useRef<HTMLDivElement>(null);
	const [collision, setCollision] = useState<{
		detected: boolean;
		coordinates: { x: number; y: number } | null;
	}>({
		detected: false,
		coordinates: null,
	});
	const [beamKey, setBeamKey] = useState(0);
	const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

	// biome-ignore lint: current useEffect not need check refs
	useEffect(() => {
		const checkCollision = () => {
			if (
				beamRef.current &&
				containerRef.current &&
				parentRef.current &&
				!cycleCollisionDetected
			) {
				const beamRect = beamRef.current.getBoundingClientRect();
				const containerRect = containerRef.current.getBoundingClientRect();
				const parentRect = parentRef.current.getBoundingClientRect();

				if (beamRect.bottom >= containerRect.top) {
					const relativeX =
						beamRect.left - parentRect.left + beamRect.width / 2;
					const relativeY = beamRect.bottom - parentRect.top;

					setCollision({
						detected: true,
						coordinates: {
							x: relativeX,
							y: relativeY,
						},
					});
					setCycleCollisionDetected(true);
				}
			}
		};

		const animationInterval = setInterval(checkCollision, 50);

		return () => clearInterval(animationInterval);
	}, [cycleCollisionDetected, containerRef]);

	useEffect(() => {
		if (collision.detected && collision.coordinates) {
			setTimeout(() => {
				setCollision({ detected: false, coordinates: null });
				setCycleCollisionDetected(false);
			}, 2000);

			setTimeout(() => {
				setBeamKey((prevKey) => prevKey + 1);
			}, 2000);
		}
	}, [collision]);

	return (
		<>
			<motion.div
				key={beamKey}
				ref={beamRef}
				animate="animate"
				initial={{
					translateY: beamOptions.initialY || "-200px",
					translateX: beamOptions.initialX || "0px",
					rotate: beamOptions.rotate || 0,
				}}
				variants={{
					animate: {
						translateY: beamOptions.translateY || "1800px",
						translateX: beamOptions.translateX || "0px",
						rotate: beamOptions.rotate || 0,
					},
				}}
				transition={{
					duration: beamOptions.duration || 8,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "loop",
					ease: "linear",
					delay: beamOptions.delay || 0,
					repeatDelay: beamOptions.repeatDelay || 0,
				}}
				className={cn(
					"absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
					beamOptions.className,
				)}
			/>
			<AnimatePresence>
				{collision.detected && collision.coordinates && (
					<Explosion
						key={`${collision.coordinates.x}-${collision.coordinates.y}`}
						className=""
						style={{
							left: `${collision.coordinates.x}px`,
							top: `${collision.coordinates.y}px`,
							transform: "translate(-50%, -50%)",
						}}
					/>
				)}
			</AnimatePresence>
		</>
	);
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
	const spans = Array.from({ length: 20 }, (_, index) => ({
		id: index,
		initialX: 0,
		initialY: 0,
		directionX: Math.floor(Math.random() * 80 - 40),
		directionY: Math.floor(Math.random() * -50 - 10),
	}));

	return (
		<div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
			/>
			{spans.map((span) => (
				<motion.span
					key={span.id}
					initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
					animate={{
						x: span.directionX,
						y: span.directionY,
						opacity: 0,
					}}
					transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
					className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
				/>
			))}
		</div>
	);
};
