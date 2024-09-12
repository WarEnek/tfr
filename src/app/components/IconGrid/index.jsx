import Image from "next/image";

import styles from "./index.module.css";

const iconGridData = [
	{
		icon: "/misstakes.svg",
		text: "Mistakes",
	},
	{
		icon: "/statistics.svg",
		text: "Statistics",
	},
	{
		icon: "/highway.svg",
		text: "Highway Code",
	},
	{
		icon: "favorites.svg",
		text: "Favorites",
	},
];

function IconGridItem({ icon, text }) {
	return (
		<div className={styles.iconGridItem}>
			<Image src={icon} alt="" width={58} height={58} />
			<p className={styles.gridText}>{text}</p>
		</div>
	);
}

function IconGrid() {
	return (
		<section className={styles.iconGrid}>
			{iconGridData.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<IconGridItem key={index} {...item} />
			))}
		</section>
	);
}

export default IconGrid;
