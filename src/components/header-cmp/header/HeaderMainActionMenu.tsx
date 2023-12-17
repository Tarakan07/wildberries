import React, { memo } from "react";
type TProps = {
	toggleMenu: () => void;
	showMenu: boolean;
};
const HeaderMainActionMenu = memo(({ toggleMenu, showMenu }: TProps) => {
	return (
		<div className="header-main__action_menu">
			<div
				className={`action_menu-wrap ${showMenu && "active"}`}
				onClick={toggleMenu}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
});

export default HeaderMainActionMenu;
