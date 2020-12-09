import "fontsource-inter";
import "fontsource-libre-baskerville";

import "../../styles/global.css";

import React, { memo } from "react";
import Aside from "../aside/aside.js";
import Footer from "../footer/footer.js";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Aside />
      <main className={styles.content}>
        <section>{children}</section>
        <Footer />
      </main>
    </div>
  );
};

export default memo(Layout);
