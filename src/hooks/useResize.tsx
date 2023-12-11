import { RefObject, useEffect, useState } from "react";

type TProps = RefObject<HTMLDivElement>;
const useResize = (element: TProps) => {
	const [size, setSize] = useState<number>(0);
	const [sizeRef, setSizeRef] = useState<number>(0);

	const setHandle = () => {
		setSizeRef(element.current?.offsetWidth || 0);
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setSize(element?.current?.offsetWidth || 0);
			console.log("callll");
		}, 500);
		return () => {
			clearTimeout(timer);
		};
	}, [sizeRef]);

	useEffect(() => {
		window.addEventListener("resize", setHandle);
		return () => {
			window.removeEventListener("resize", setHandle);
		};
	}, []);

	return { size };
};

export default useResize;
