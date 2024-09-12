import Image from "next/image";

import styles from "./index.module.css";

const navItems = [
	{
		icon: "/home.png",
		label: "Home",
		isActive: true,
	},
	{
		icon: "/plan.svg",
		label: "Your plan",
	},
	{
		icon: "/leaderboard.svg",
		label: "Leaderboard",
	},
	{
		icon: "/profile.svg",
		label: "Profile",
	},
];

function NavItem({ icon, label, isActive }) {
	return (
		<button
			className={`${styles.navItem} ${isActive ? styles.active : ""}`}
			type="button"
		>
			<Image
				src={icon}
				alt=""
				width={24}
				height={24}
				className={styles.navIcon}
			/>

			<span className={styles.navLabel}>{label}</span>
		</button>
	);
}

function BottomNavigation() {
	return (
		<nav className={styles.bottomNav}>
			{navItems.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<NavItem key={index} {...item} />
			))}
		</nav>
	);
}

export default BottomNavigation;
