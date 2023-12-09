import React from "react";
import { TPropsSvg } from "./type";
const SvgSearch = (props: TPropsSvg) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props?.width || 16}
		height={props.height || 16}
		fill="none"
	>
		<path
			fill={props?.fill || "#868695"}
			d="m10.73 9.473-.274.343a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l-.483.374 4.622 4.505a.965.965 0 0 0 1.349-1.38L10.73 9.473Zm-4.784.59A4.111 4.111 0 0 1 1.83 5.946 4.111 4.111 0 0 1 5.946 1.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117Z"
		/>
	</svg>
);

export default SvgSearch;
