import { graphql, Link, useStaticQuery } from "gatsby";
import React, { memo } from "react";
import Title from "../title/title";
import styles from "./footer.module.scss";

const year = new Date().getFullYear();

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        author: { name },
        social: { mail },
        employmentStatus
      },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            mail
          }
          employmentStatus
        }
      }
    }
  `);
  return (
    <div>
      <div>
        <Title>{employmentStatus}</Title>
        <div className={styles.contact}>
          <em>Say hello &mdash; </em>
          <a href={`mailto:${mail}`} className={styles.email}>
            {mail}
          </a>
        </div>
      </div>
      <div className="spacer" />
      <div>
        <Title>
          Made with love using <em>Gatsby</em>.
        </Title>
        <Title>
          <em>© Copyright {year}. All Rights Reserved.</em>
          <br />
          DESIGNED AND DEVELOPED BY{" "}
          <Link to="/">
            <em>{name}</em>
          </Link>
          .
        </Title>
      </div>
      <div className="spacer" />
    </div>
  );
};

export default memo(Footer);
