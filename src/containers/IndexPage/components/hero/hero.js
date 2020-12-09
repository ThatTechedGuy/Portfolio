import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <p className={styles.heading}>
      Vishal Gupta &ndash; <span className="serif">product engineer</span> and
      <span className="serif"> software developer</span> based in Kolkata,
      India.
    </p>
  );
};

export default Hero;
