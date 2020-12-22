import React, { memo, useMemo } from "react";
import styles from "./icons.module.scss";
import github from "@images/github.svg";
import linkedin from "@images/linkedin.svg";
import twitter from "@images/twitter.svg";
import mail from "@images/gmail.svg";

/**
 * @description Icons in a `row` or `column` format.
 *
 * @param {Object} props
 * @param {'row' | 'column'} props.orientation
 */
const Icons = ({ orientation = "column" }) => {
  const orientationClass = useMemo(
    () => (orientation === "column" ? styles.column : styles.row),
    [orientation]
  );

  return (
    <section className={orientationClass}>
      <img src={github} alt="Github" className={styles.img} />
      <img src={linkedin} alt="Linkedin" className={styles.img} />
      <img src={twitter} alt="Twitter" className={styles.img} />
      <img src={mail} alt="Gmail" className={styles.img} />
    </section>
  );
};

export default memo(Icons);
