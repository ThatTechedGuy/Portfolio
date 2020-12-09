import React, { memo } from "react";
import { Link } from "gatsby";
import styles from "./aside.module.css";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

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
        <FaLinkedinIn className={styles.img} />
        <FaGithubAlt  className={styles.img} />
        <FaEnvelope   className={styles.img} />
        <FaTwitter    className={styles.img} />
      </section>
    </aside>
  );
};

export default memo(Aside);
