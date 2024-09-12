import TopNav from "@/app/components/TopNav";
import TabsSection from "@/app/components/TabsSection";
import QuestionGrid from "@/app/components/QuestionGrid";

import styles from "./page.module.css";

export default function LearningPage() {
	return (
		<main className={styles.learningPage}>
			<TopNav />
			<TabsSection />
			<QuestionGrid />
		</main>
	);
}
