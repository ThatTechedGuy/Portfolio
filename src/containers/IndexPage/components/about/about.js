import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.body}>
        Hi, Im Vishal &mdash; a Product Engineer & Software Developer. Im
        currently working as a Mobile Engineer for one of India’s top FinTech
        startups &ndash; <span className="serif">smallcase.</span>
      </div>
      <div className={styles.body}>
        Currently a sophomore pursuing my{" "}
        <span className="serif">BEng Software Engineering&#40;Hons&#41;</span>{" "}
        at the prestigious{" "}
        <span className="serif">University of Queensland</span> in Brisbane,
        Australia.
      </div>
      <div className={styles.body}>
        I love strong <span className="serif">typography</span>, clean &
        efficient code, long term investing and volatile stock markets. <br />
        Also a linux enthusiast. &#40; I use <span className="serif">Arch</span>
        , btw. &#41;
      </div>
    </>
  );
};

export default About;
