import React from "react";
import { TBanner } from "./Banner";
import { TMoveFunc } from "./Banner";
const CircleButtons = ({
	dataBanner,
	moveSlider,
	slideActive,
}: {
	dataBanner: TBanner[];
	moveSlider: ({}: TMoveFunc) => void;
	slideActive: number;
}) => {
	return (
		<div className="circle-buttons">
			{dataBanner.map((el, ind) => {
				return (
					<div
						className={`circle-buttons_items ${
							ind + 1 === slideActive && "active"
						}`}
						key={el.id}
						onClick={() => moveSlider({ index: 0, current: ind + 1 })}
					/>
				);
			})}
		</div>
	);
};

export default CircleButtons;
