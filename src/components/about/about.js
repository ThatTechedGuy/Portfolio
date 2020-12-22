import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.body}>
        Hi, I'm Vishal &mdash; a Product Engineer & Software Developer. I'm
        currently working as a Mobile Engineer at one of India’s top FinTech
        startups &ndash; <em>smallcase.</em>
      </div>
      <div className={styles.body}>
        Currently a sophomore pursuing my{" "}
        <em>BEng Software Engineering&#40;Hons&#41;</em>{" "}
        at the prestigious{" "}
        <em>University of Queensland</em> in Brisbane,
        Australia.
      </div>
      <div className={styles.body}>
        I love strong <em>typography</em>, clean &
        efficient code, long term investing and volatile stock markets. Also a
        linux enthusiast.
      </div>
    </>
  );
};

export default About;
