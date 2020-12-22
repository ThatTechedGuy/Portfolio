import React from "react";
import styles from "./progress_bar.module.scss";
import Title from "@components/title/title";

const ProgressBar = ({ onFinish }) => {
  return (
    <main className={styles.container}>
      <Title>LOADING</Title>
      <div className={styles.progress}>
        <div onAnimationEnd={onFinish} className={styles.filler} />
      </div>
    </main>
  );
};

export default ProgressBar;
