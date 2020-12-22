/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icons from "@components/icons/icons";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      {author?.name && (
        <section className="bio-section">
          <p>
            Written by <strong>{author.name}</strong> &mdash;{" "}
            {author?.summary || null}
          </p>
          <Icons orientation="row" />
        </section>
      )}
    </div>
  );
};

export default Bio;
