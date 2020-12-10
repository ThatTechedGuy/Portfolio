import React, { memo } from "react";
import { Link } from "gatsby";
import styles from "./aside.module.css";
import github from "@assets/github.svg";
import linkedin from "@assets/linkedin.svg";
import twitter from "@assets/twitter.svg";
import mail from "@assets/gmail.svg";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <section className={styles.column}>
        <nav className={styles.link}>
          <Link to="/">Vishal Gupta</Link>
        </nav>
        <div className={styles.ruler} />
        <nav className={styles.link}>
          <Link to="/">Blog</Link>
        </nav>
      </section>
      <section className={styles.column}>
        <img src={github} alt="Github" className={styles.img} />
        <img src={linkedin} alt="Linkedin" className={styles.img} />
        <img src={twitter} alt="Twitter" className={styles.img} />
        <img src={mail} alt="Gmail" className={styles.img} />
      </section>
    </aside>
  );
};

export default memo(Aside);
