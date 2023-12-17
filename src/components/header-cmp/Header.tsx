"use client";
import React, { memo, useState } from "react";

import HeaderBottom from "./HeaderBottom";
import HeaderMainLinks from "./HeaderMainLinks";
import HeaderMainSearch from "./HeaderMainSearch";
import HeaderMainTitle from "./HeaderMainTitle";
import HeaderDescription from "./HeaderDescription";
import HeaderMainActionMenu from "./HeaderMainActionMenu";
import HeaderMenu from "./header-menu/HeaderMenu";
import "./header.scss";
const Header = memo(() => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};
	return (
		<>
			<div className="section section-header">
				<div className="wrapper wrapper-header">
					<div className="header">
						<HeaderDescription />
						<div className="header-main">
							<HeaderMainTitle />
							<HeaderMainActionMenu {...{ toggleMenu, showMenu }} />
							<HeaderMainSearch />
							<HeaderMainLinks />
						</div>
					</div>
				</div>
				<HeaderMenu {...{ showMenu }} />
			</div>

			<HeaderBottom />
		</>
	);
});

export default Header;
