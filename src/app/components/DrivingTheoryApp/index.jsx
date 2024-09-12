import React from "react";
import AppBar from "./AppBar";
import TopCard from "./TopCard";
import ActionCards from "./ActionCards";
import IconGrid from "./IconGrid";
import BottomNavigation from "./BottomNavigation";
import styles from "./index.module.css";

function DrivingTheoryApp() {
  return (
    <main className={styles.mainScreen}>
      <AppBar />
      <TopCard />
      <ActionCards />
      <IconGrid />
      <BottomNavigation />
    </main>
  );
}

export default DrivingTheoryApp;
