import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MenuList from "./MenuList";
import "./headerMenu.scss";
type TProps = {
	showMenu: boolean;
	heightMenu: number;
};
type THeaderListItem = { id: number; title: string };
type THeaderListItemWithChild = { child?: THeaderListItem[] } & THeaderListItem;
export type THeaderList = {
	child?: THeaderListItemWithChild[];
} & THeaderListItem;

export type TStateHeaderList = {
	parentTitle: string;
	data: THeaderList[];
};
export type TMenuLevel = 1 | 2 | 3;
const dataMenu: THeaderList[] = [
	{
		id: 1,
		title: "Женщинам",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
				child: [
					{
						id: 1,
						title: "Блузки и рубашки",
					},
					{
						id: 2,
						title: "Брюки",
					},
					{
						id: 3,
						title: "Верхняя одежда",
					},
				],
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
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
		],
	},
	{ id: 2, title: "Обувь" },
	{
		id: 3,
		title: "Детям",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
	{
		id: 4,
		title: "Мужчинам",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
	{
		id: 5,
		title: "Дом",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
	{ id: 6, title: "Новый год" },
	{ id: 7, title: "Красота" },
	{ id: 8, title: "Аксессуары" },
	{
		id: 9,
		title: "Электроника",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
	{ id: 10, title: "Игрушки" },
	{
		id: 11,
		title: "Мебель",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
	{ id: 12, title: "Товары для взрослых" },
	{
		id: 13,
		title: "Продукты",
		child: [
			{
				id: 1,
				title: "Блузки и рубашки",
			},
			{
				id: 2,
				title: "Брюки",
			},
			{
				id: 3,
				title: "Верхняя одежда",
			},
			{
				id: 4,
				title: "Джемперы, водолазки и кардиганы",
			},
			{
				id: 5,
				title: "Джинсы",
			},
		],
	},
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
	const [extraBoxMenu, setExtraBoxMenu] = useState<TStateHeaderList | null>(
		null
	);

	useEffect(() => {
		if (!showMenu) {
			setExtraBoxMenu(null);
		}
	}, [showMenu]);
	return (
		<div
			className={`wrap-menu  ${showMenu && "active"}`}
			style={{ height: heightMenu }}
		>
			<MenuList {...{ dataMenu, setExtraBoxMenu, heightMenu, menuLevel: 1 }} />
			{extraBoxMenu && (
				<MenuList
					{...{ dataMenu, setExtraBoxMenu, heightMenu, extraBoxMenu }}
				/>
			)}
		</div>
	);
};

export default HeaderMenu;
