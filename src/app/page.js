"use client";

import { useEffect, useState } from "react";
import AppBar from "@/app/components/AppBar";
import TopCard from "@/app/components/TopCard";
import ActionCards from "@/app/components/ActionCards";
import IconGrid from "@/app/components/IconGrid";
import BottomNavigation from "@/app/components/BottomNavigation";

import styles from "./page.module.css";

export default function Home() {
	const [selectedQuestions, setSelectedQuestions] = useState([]);

	useEffect(() => {
		const savedSelections = localStorage.getItem("selectedQuestions");

		if (savedSelections) {
			setSelectedQuestions(JSON.parse(savedSelections));
		}
	}, []);

	return (
		<main className={styles.mainScreen}>
			<AppBar />
			<TopCard selectedQuestions={selectedQuestions} />
			<ActionCards />
			<IconGrid />
			<BottomNavigation />
		</main>
	);
}
