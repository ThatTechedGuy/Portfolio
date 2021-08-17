import React, { memo } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styles from "./aside.module.scss";
import githubImg from "@images/github.svg";
import linkedinImg from "@images/linkedin.svg";
import twitterImg from "@images/twitter.svg";
import mailImg from "@images/gmail.svg";

const Aside = () => {
  const {
    site: {
      siteMetadata: {
        author: { name, designation },
        social: { mail, twitter, linkedin, github },
        employmentStatus,
      },
    },
  } = useStaticQuery(graphql`
    query AsideQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            mail
            twitter
            linkedin
            github
          }
        }
      }
    }
  `);
  return (
    <aside className={styles.aside}>
      <section className={styles.column}>
        <nav className={styles.link}>
          <Link to="/">{name.toUpperCase()}</Link>
        </nav>
        <div className={styles.ruler} />
        <nav className={styles.link}>
          <Link to="/">HOME</Link>
        </nav>
      </section>
      <section className={styles.column}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="Github" className={styles.img} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="Linkedin" className={styles.img} />
        </a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterImg} alt="Twitter" className={styles.img} />
        </a>
        <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
          <img src={mailImg} alt="Gmail" className={styles.img} />
        </a>
      </section>
    </aside>
  );
};

export default memo(Aside);
