import React, { memo, useMemo } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  const {
    site: {
      siteMetadata: {
        author: { name },
      },
    },
  } = useStaticQuery(graphql`
    query NameQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const header = useMemo(() => {
    if (isRootPath) {
      return (
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      );
    } else {
      return (
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      );
    }
  }, [isRootPath, title]);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by&nbsp;
        <Link to="/">{name}</Link>. All Rights reserved.
      </footer>
    </div>
  );
};

export default memo(Layout);
