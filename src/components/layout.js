import React, { memo, useMemo } from "react";
import { Link } from "gatsby";
import Footer from "@components/footer/footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blog`;
  const isRootPath = location.pathname === rootPath;

  const header = useMemo(() => {
    if (isRootPath) {
      return (
        <h1 className="main-heading">
          <Link to="/">{title}'s Blog</Link>
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
      <div className="spacer" />
      <Footer />
    </div>
  );
};

export default memo(Layout);
