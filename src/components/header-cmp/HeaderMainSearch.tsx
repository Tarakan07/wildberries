import { SvgPhoto, SvgClear, SvgSearch } from "@/assets/svg";
import React from "react";

const HeaderMainSearch = () => {
	return (
		<div className="header-main__search">
			<div className="header_search-wrap">
				<input type="text" placeholder="Найти на Wildberries" />
				<div className="search_icons">
					<div className="action-icon_search_photo" style={{ display: "none" }}>
						<SvgPhoto {...{ width: 26, height: 22, fill: "#868695" }} />
					</div>
					<div className="print_icons">
						<div className="action-icon_clear">
							<SvgClear {...{ width: 16, height: 16, fill: "#868695" }} />
						</div>
						<div className="action-icon_search">
							<SvgSearch {...{ width: 16, height: 16, fill: "#868695" }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMainSearch;
