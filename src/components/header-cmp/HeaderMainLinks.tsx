import { adressLink, accountLink, cartLink } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderMainLinks = () => {
	return (
		<div className="header-main__links">
			<Link className="header-link_adress" href="/">
				<Image src={adressLink} width={16} height={22} alt="adressLink" />
				<span>Адреса</span>
			</Link>

			<Link className="header-link_account" href="/">
				<Image src={accountLink} width={24} height={22} alt="accountLink" />
				<span>Войти</span>
			</Link>

			<Link className="header-link_cart" href="/">
				<Image src={cartLink} width={26} height={24} alt="cartLink" />
				<span>Корзина</span>
			</Link>
		</div>
	);
};

export default HeaderMainLinks;
