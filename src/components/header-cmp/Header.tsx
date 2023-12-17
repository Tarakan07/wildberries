"use client";
import React, { memo, useEffect, useRef, useState } from "react";

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
	const [heightMenu, setHeightMenu] = useState<number>(0);
	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	const headerBlock = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (headerBlock.current?.offsetHeight) {
			setHeightMenu(
				window.screen.availHeight - headerBlock.current?.offsetHeight * 2
			);
		}
	}, []);

	return (
		<>
			<div
				ref={headerBlock}
				className={`section section-header ${showMenu && "active"}`}
			>
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
				<HeaderMenu {...{ showMenu, heightMenu }} />
			</div>

			<HeaderBottom />
		</>
	);
});

export default Header;
