import React from "react";

import HeaderBottom from "./HeaderBottom";
import HeaderMainLinks from "./HeaderMainLinks";
import HeaderMainSearch from "./HeaderMainSearch";
import HeaderMainTitle from "./HeaderMainTitle";
import HeaderDescription from "./HeaderDescription";
import "./header.scss";
const Header = () => {
	return (
		<>
			<div className="section section-header">
				<div className="wrapper wrapper-header">
					<div className="header">
						<HeaderDescription />
						<div className="header-main">
							<HeaderMainTitle />
							<HeaderMainSearch />
							<HeaderMainLinks />
						</div>
					</div>
				</div>
			</div>
			<HeaderBottom />
		</>
	);
};

export default Header;
