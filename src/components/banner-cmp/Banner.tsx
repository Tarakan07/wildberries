"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import useResize from "@/hooks/useResize";
import BannerSlider from "./BannerSlider";
import ArrowButtons from "./ArrowButtons";
import CircleButtons from "./CircleButtons";
import "./banner.scss";
export type TBanner = {
	id: number;
	src: string;
	link: string;
};
export type TMoveFunc = {
	index: number;
	current?: number;
};
const dataBanner: TBanner[] = [
	{ id: 1, link: "/", src: "/assets/banner/banner_1.webp" },
	{ id: 2, link: "/", src: "/assets/banner/banner_2.webp" },
	{ id: 3, link: "/", src: "/assets/banner/banner_3.webp" },
	{ id: 4, link: "/", src: "/assets/banner/banner_4.webp" },
];
const Banner = () => {
	const [move, setMove] = useState(0);
	const [slideActive, setSlideActive] = useState(1);
	const blockSlider = useRef<HTMLDivElement>(null);

	const countSliders = dataBanner.length;
	const maxMove = useRef<number>(0);
	const { size } = useResize(blockSlider);

	useEffect(() => {
		maxMove.current = (countSliders - 1) * size;
	}, [size]);
	useLayoutEffect(() => {
		maxMove.current = (countSliders - 1) * size;
	}, []);

	const moveSlider = ({ index, current = 1 }: TMoveFunc) => {
		if (index < 0) {
			if (maxMove.current != Math.abs(move)) {
				setMove((prev) => prev + current * index * size);
				setSlideActive((prev) => prev + Math.abs(index));
			} else {
				setMove(0);
				setSlideActive(1);
			}
		}
		if (index > 0) {
			if (move != 0) {
				setMove((prev) => prev + current * index * size);
				setSlideActive((prev) => prev - index);
			} else {
				setMove(-maxMove.current);
				setSlideActive(dataBanner.length);
			}
		}
		if (index === 0 && slideActive - current !== 0) {
			setMove((prev) => prev + (slideActive - current) * size);
			setSlideActive(current);
		}
	};

	return (
		<div className="section section-banner">
			<div className="wrapper wrapper-banner">
				<div ref={blockSlider} className="banner-block">
					<BannerSlider {...{ dataBanner, move, size }} />
					<ArrowButtons {...{ moveSlider }} />
					<CircleButtons {...{ dataBanner, moveSlider, slideActive }} />
				</div>
			</div>
		</div>
	);
};

export default Banner;
