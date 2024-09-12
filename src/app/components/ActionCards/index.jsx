import Image from "next/image";

import styles from "./index.module.css";

const actionCardsData = [
	{
		icon: "/dvsa.svg",
		text: "DVSA Exam",
	},
	{
		icon: "/express.svg",
		text: "Express mode",
	},
	{
		icon: "/hazard.svg",
		text: "Hazard perception",
	},
	{
		icon: "/road-signs.svg",
		text: "Road signs",
	},
	{
		icon: "/multiplayer.svg",
		text: "Multiplayer Learning",
	},
];

function ActionCard({ icon, text }) {
  return (
			<button className={styles.actionCard} type="button">
				<Image src={icon} alt="" width={40} height={40} />
				<span className={styles.actionText}>{text}</span>
			</button>
		);
}

function ActionCards() {
  return (
    <section className={styles.actionCardsContainer}>
      <div className={styles.actionCardsRow}>
        <ActionCard {...actionCardsData[0]} />
        <ActionCard {...actionCardsData[1]} />
      </div>
      <div className={styles.actionCardsRow}>
        <ActionCard {...actionCardsData[2]} />
        <ActionCard {...actionCardsData[3]} />
      </div>
      <ActionCard {...actionCardsData[4]} />
    </section>
  );
}

export default ActionCards;
