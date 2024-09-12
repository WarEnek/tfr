import styles from "./index.module.css";

function TabsSection() {
	return (
		<nav className={styles.tabs}>
			<div className={styles.tabsElements}>
				<div className={styles.tabContent}>
					<div className={styles.tabLabel}>Tests</div>
				</div>
				<div className={styles.activeIndicator} />
			</div>
		</nav>
	);
}

export default TabsSection;
