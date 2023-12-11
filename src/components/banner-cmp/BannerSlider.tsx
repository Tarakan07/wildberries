import Image from "next/image";
import Link from "next/link";
import React, { useRef, memo } from "react";
import { TBanner } from "./Banner";
type TProps = {
	dataBanner: TBanner[];
	move: number;
	size: number;
};

const BannerSlider = memo(({ dataBanner, move, size }: TProps) => {
	const a = useRef(0);

	return (
		<div className="banner-line" style={{ left: `${move}px` }}>
			{dataBanner.map((ban) => {
				return (
					<div key={ban.id} className="banner-box" style={{ width: size }}>
						<Link href={ban.link}>
							<Image src={ban.src} fill={true} alt="banner_1" />
						</Link>
					</div>
				);
			})}
		</div>
	);
});

export default BannerSlider;
