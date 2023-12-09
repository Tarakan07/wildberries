import React from "react";
import { TPropsSvg } from "./type";
const SvgAdress = (props: TPropsSvg) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props.width || 11}
		height={props?.height || 16}
		fill="none"
	>
		<path
			fill={props?.fill || "#fff"}
			fillRule="evenodd"
			d="M10.539 5.342c0 2.225-3 7.05-4.473 9.285a.948.948 0 0 1-1.594 0C3 12.392 0 7.567 0 5.342 0 2.392 2.36 0 5.27 0c2.91 0 5.269 2.392 5.269 5.342Zm-2.81 0c0 1.376-1.102 2.492-2.46 2.492-1.358 0-2.459-1.116-2.459-2.492 0-1.377 1.101-2.493 2.46-2.493 1.357 0 2.458 1.116 2.458 2.493Z"
			clipRule="evenodd"
		/>
	</svg>
);

export default SvgAdress;
