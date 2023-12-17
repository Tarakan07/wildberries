import { home, catalog, cart, booking, profile } from "@/assets";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeaderBottom = () => {
	return (
		<div className="section section-bottom_header">
			<div className="wrapper">
				<div className="bottom-header">
					<Link href="/">
						<Image src={home} width={28} height={28} alt="home" />
					</Link>
					<Link href="/">
						<Image src={catalog} width={28} height={24} alt="catalog" />
					</Link>
					<Link href="/">
						<Image src={cart} width={28} height={24} alt="cart" />
					</Link>
					<Link href="/">
						<Image src={booking} width={28} height={24} alt="booking" />
					</Link>
					<Link href="/">
						<Image src={profile} width={24} height={24} alt="profile" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeaderBottom;
