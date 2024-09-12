import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/questions.json";

import styles from "./index.module.css";

function TopCard({ selectedQuestions }) {
	const totalQuestions = data.questions.length;
  const passedQuestions = selectedQuestions.length;

	const progressPercentage = (passedQuestions / totalQuestions) * 100;
	const totalSegments = 7;
	const filledSegments = Math.round((progressPercentage / 100) * totalSegments);

	return (
		<Link href="/learning">
			<section className={styles.topCard}>
				<div className={styles.cardHeader}>
					<div className={styles.cardInfo}>
						<Image src="/learn.svg" alt="" width={58} height={58} />
						<div className={styles.cardText}>
							<h2 className={styles.cardTitle}>Learning</h2>
							<p className={styles.cardSubtitle}>Category В</p>
						</div>
					</div>
					<Image src="/arrow.svg" alt="" width={24} height={24} />
				</div>
				<p className={styles.progressText}>
					{`${passedQuestions} questions out of ${totalQuestions} passed`}
				</p>
				<div className={styles.progressBar}>
					{[...Array(totalSegments)].map((_, index) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className={`${styles.progressSegment} ${
								index < filledSegments ? styles.progressFilled : ""
							}`}
						/>
					))}
				</div>
			</section>
		</Link>
	);
}

export default TopCard;
