import React from "react";
import { TPropsSvg } from "./type";
const SvgPhoto = (props: TPropsSvg) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props?.width || 50}
		height={props?.height || 50}
		fill="none"
	>
		<path
			fill={props?.fill || "#000"}
			fillRule="evenodd"
			d="M6.105 2.892H4a4 4 0 0 0-4 4V17.5a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V6.892a4 4 0 0 0-4-4h-2.105a1.98 1.98 0 0 1-1.695-.957A2.97 2.97 0 0 0 15.657.5h-5.314A2.97 2.97 0 0 0 7.8 1.935a1.98 1.98 0 0 1-1.695.957ZM13 7.8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default SvgPhoto;
