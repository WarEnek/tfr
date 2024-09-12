"use client";

import { useState, useEffect } from "react";
import questions from "@/app/data/questions.json";

import styles from "./index.module.css";

export default function QuestionGrid() {
	const [selectedQuestions, setSelectedQuestions] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const savedSelections = localStorage.getItem("selectedQuestions");
		if (savedSelections) {
			setSelectedQuestions(JSON.parse(savedSelections));
		}
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			localStorage.setItem(
				"selectedQuestions",
				JSON.stringify(selectedQuestions),
			);
		}
	}, [selectedQuestions, isLoaded]);

	const toggleQuestion = (id) => {
		setSelectedQuestions((prevSelected) => {
			if (prevSelected.includes(id)) {
				return prevSelected.filter((q) => q !== id);
			}
			return [...prevSelected, id];
		});
	};

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return (
		<section className={styles.gridContainer}>
			{questions.questions.map((question) => (
				<button
					key={question.id}
					tabIndex={0}
					type="button"
					className={`${styles.item} ${selectedQuestions.includes(question.id) ? styles.active : styles.inactive}`}
					onClick={() => toggleQuestion(question.id)}
					onKeyDown={() => toggleQuestion(question.id)}
				>
					{question.id}
				</button>
			))}
		</section>
	);
}
