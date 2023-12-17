import Link from "next/link";
import React from "react";
import { THeaderList, TStateHeaderList } from "./HeaderMenu";
import { TCustomState } from "@/hooks/typeState";
import { TMenuLevel } from "./HeaderMenu";
type TProps = {
	dataMenu: THeaderList[];
	setExtraBoxMenu: TCustomState<TStateHeaderList>;
	heightMenu: number;
	extraBoxMenu?: TStateHeaderList;
	menuLevel?: TMenuLevel;
};
const MenuList = ({
	dataMenu,
	setExtraBoxMenu,
	heightMenu,
	extraBoxMenu,
	menuLevel,
}: TProps) => {
	return (
		<div className="box-menu with_scrollbar" style={{ height: heightMenu }}>
			{extraBoxMenu && <h3>{extraBoxMenu.parentTitle}</h3>}
			<ul>
				{dataMenu.map((itemMenu) => {
					return (
						<li
							key={itemMenu.id}
							className={itemMenu.child && "with_child"}
							onMouseOver={() => {
								if (itemMenu.child && menuLevel) {
									setExtraBoxMenu({
										parentTitle: itemMenu.title,
										data: itemMenu.child,
									});
								} else if (!itemMenu.child && menuLevel) {
									setExtraBoxMenu(null);
								}
							}}
						>
							<Link href={"/"}>{itemMenu.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MenuList;
