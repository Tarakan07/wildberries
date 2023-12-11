import React from "react";
import Image from "next/image";
import { TMoveFunc } from "./Banner";
type TProps = {
	moveSlider: ({}: TMoveFunc) => void;
};
const ArrowButtons = ({ moveSlider }: TProps) => {
	return (
		<div className="buttons-slider">
			<button className="slider-left" onClick={() => moveSlider({ index: -1 })}>
				<Image
					src={"/assets/banner/arrow-slider.svg"}
					width={13}
					height={13}
					alt={"arrowLeft"}
				/>
			</button>
			<button className="slider-right" onClick={() => moveSlider({ index: 1 })}>
				<Image
					src={"/assets/banner/arrow-slider.svg"}
					width={13}
					height={13}
					alt={"arrowRight"}
				/>
			</button>
		</div>
	);
};

export default ArrowButtons;
