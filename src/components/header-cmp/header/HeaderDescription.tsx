import { SvgAdress } from "@/assets/svg";
import Link from "next/link";
import React from "react";

const HeaderDescription = () => {
	return (
		<div className="header-description">
			<div>
				<Link href="">
					<SvgAdress width={11} height={16} fill="rgba(255,255,255,.6)" />
					Москва, Деловой центр
				</Link>
			</div>
			<div>
				<Link href="">Продавайте на Wildberries</Link>
			</div>
			<div>
				<Link href="">Работа в Wildberries</Link>
			</div>
		</div>
	);
};

export default HeaderDescription;
