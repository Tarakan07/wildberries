import React from "react";
import Header from "../header-cmp";
import Footer from "../footer-cmp/Footer";
import "./RootLayouts.scss";
const RootLayouts = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="main-section">
			<div className="main-wrapper">
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default RootLayouts;
