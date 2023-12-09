// https://react-svgr.com/playground/?expandProps=none&jsxRuntime=automatic
import { TPropsSvg } from "./type";
const SvgClear = (props: TPropsSvg) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props?.width || 50}
		height={props?.height || 50}
		viewBox="0 0 256 256"
	>
		<path
			fill={props?.fill || "#000"}
			strokeMiterlimit={10}
			d="M9.156 6.313 6.312 9.155 22.157 25 6.22 40.969 9.03 43.78 25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157z"
			fontFamily="none"
			fontSize="none"
			fontWeight="none"
			style={{
				mixBlendMode: "normal",
			}}
			textAnchor="none"
			transform="scale(5.12)"
		/>
	</svg>
);
export default SvgClear;
