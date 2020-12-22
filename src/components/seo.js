/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useMemo, memo } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description = ``, lang = `en`, meta = [], title = `` }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  const seoMeta = useMemo(() => {
    [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata?.social?.twitter || ``,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
      {
        name: ``,
      },
    ].concat(meta);
  }, [meta, metaDescription, site.siteMetadata.social.twitter, title]);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={seoMeta}
    />
  );
};

export default memo(SEO);
