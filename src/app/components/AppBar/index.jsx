import Image from "next/image";

import styles from "./index.module.css";

function AppBar() {
	return (
		<header className={styles.appBar}>
			<h1 className={styles.title}>Ray Driving Theory</h1>
			<div className={styles.rightIcons}>
				<button className={styles.iconButton} type="button">
					<Image src="/crown.svg" alt="" width={24} height={24} />
				</button>
				<button className={styles.textButton} type="button">
					<Image src="/fire.svg" alt="" width={24} height={24} />
					<span className={styles.buttonText}>13</span>
				</button>
			</div>
		</header>
	);
}

export default AppBar;
