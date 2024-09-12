import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

function TopNav() {
	return (
		<header className={styles.appBar}>
			<Link href="/">
				<Image
					src="/arrow-left.svg"
					alt=""
					width={24}
					height={24}
					className={styles.icon}
				/>
			</Link>
			<h1 className={styles.title}>Learning</h1>
		</header>
	);
}

export default TopNav;
