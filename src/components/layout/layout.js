import React, { memo, useCallback, useState } from "react";

import Aside from "../aside/aside.js";
import styles from "./layout.module.scss";
import ProgressBar from "@components/progress/progress_bar";
import SEO from "../seo.js";

let isMounted = false;

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const onFinish = useCallback(() => {
    setLoading(false);
    isMounted = true;
  }, []);

  return (
    <>
      <SEO title="About" />
      {loading && !isMounted ? (
        <ProgressBar onFinish={onFinish} />
      ) : (
        <main className={styles.container}>
          <Aside />
          <main className={styles.content}>
            <section>{children}</section>
          </main>
        </main>
      )}
    </>
  );
};
export default memo(Layout);
