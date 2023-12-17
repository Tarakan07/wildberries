import Link from "next/link";
import React from "react";
import "./headerMenu.scss";
type TProps = {
	showMenu: boolean;
	heightMenu: number;
};
const dataMenu = [
	{ id: 1, title: "Женщинам" },
	{ id: 2, title: "Обувь" },
	{ id: 3, title: "Детям" },
	{ id: 4, title: "Мужчинам" },
	{ id: 5, title: "Дом" },
	{ id: 6, title: "Новый год" },
	{ id: 7, title: "Красота" },
	{ id: 8, title: "Аксессуары" },
	{ id: 9, title: "Электроника" },
	{ id: 10, title: "Игрушки" },
	{ id: 11, title: "Мебель" },
	{ id: 12, title: "Товары для взрослых" },
	{ id: 13, title: "Продукты" },
	{ id: 14, title: "Бытовая техника" },
	{ id: 15, title: "Зоотовары" },
	{ id: 16, title: "Спорт" },
	{ id: 17, title: "Автотовары" },
	{ id: 18, title: "Книги" },
	{ id: 19, title: "Для ремонта" },
	{ id: 20, title: "Сад и дача" },
	{ id: 21, title: "Здоровье" },
	{ id: 22, title: "Канцтовары" },
	{ id: 23, title: "Акции" },
];
const HeaderMenu = ({ showMenu, heightMenu }: TProps) => {
	return (
		<div
			className={`wrap-menu with_scrollbar ${showMenu && "active"}`}
			style={{ height: heightMenu }}
		>
			<div className="box-menu">
				<ul>
					{dataMenu.map((itemMenu) => {
						return (
							<li key={itemMenu.id}>
								<Link href={"/"}>{itemMenu.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default HeaderMenu;
