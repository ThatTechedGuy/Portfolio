import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <>
      <p className={styles.heading}>
        Vishal Gupta &mdash; <em>product engineer</em> and
        <em> software developer</em> based in Kolkata,
        India.
      </p>
    </>
  );
};

export default Hero;
