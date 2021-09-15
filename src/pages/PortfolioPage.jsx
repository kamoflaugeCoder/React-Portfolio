import React, { useState } from "react";
import Title from "../components/title";
import portfolios from "../components/myPortfolios";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";

const allCategories = [
	"All",
	...new Set(portfolios.map((item) => item.category)),
];

function PortfolioPage() {
	const [categories, setCategories] = useState(null);
	const [menuItems, setMenuItems] = useState(portfolios);

	const filter = (category) => {
		const filteredData = portfolios.filter((item) => {
			return item.category === category;
		});
		setMenuItems(filteredData);
	};

	return (
		<div className="PortfolioPage">
			<div className="title">
				<Title title={"Portfolios"} span={"Portfolios"} />
			</div>
			<div className="portfolios-data"></div>
			<Categories filter={filter} categories={categories} />
			<MenuItems menuItem={menuItems} />
		</div>
	);
}

export default PortfolioPage;
