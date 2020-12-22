import React, { memo } from "react";
import { Link } from "gatsby";
import styles from "./aside.module.scss";
import github from "@images/github.svg";
import linkedin from "@images/linkedin.svg";
import twitter from "@images/twitter.svg";
import mail from "@images/gmail.svg";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <section className={styles.column}>
        <nav className={styles.link}>
          <Link to="/">Vishal Gupta</Link>
        </nav>
        <div className={styles.ruler} />
        <nav className={styles.link}>
          <Link to="/blog">Blog</Link>
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
