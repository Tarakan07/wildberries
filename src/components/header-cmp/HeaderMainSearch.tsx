"use client";
import { SvgPhoto, SvgClear, SvgSearch } from "@/assets/svg";
import React from "react";
import useInput from "@/hooks/useInput";
const HeaderMainSearch = () => {
	const { reset, setValue, value } = useInput("");
	return (
		<div className="header-main__search">
			<div className="header_search-wrap">
				<input
					type="text"
					placeholder="Найти на Wildberries"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<div className="search_icons">
					<div
						className="action-icon_search_photo"
						style={{ display: !value.length ? "flex" : "none" }}
					>
						<SvgPhoto {...{ width: 26, height: 22, fill: "#868695" }} />
					</div>
					<div
						className="print_icons"
						style={{ display: value.length ? "flex" : "none" }}
					>
						<div className="action-icon_clear" onClick={reset}>
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
