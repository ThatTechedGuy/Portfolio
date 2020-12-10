import React, { memo } from "react";
import { Link } from "gatsby";
import styles from "./aside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
        <FontAwesomeIcon icon={faGithubAlt} className={styles.img} />
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.img} />
        <FontAwesomeIcon icon={faTwitter} className={styles.img} />
      </section>
    </aside>
  );
};

export default memo(Aside);
