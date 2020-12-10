import "../../styles/global.css";

import React, { memo, useCallback, useEffect, useState } from "react";
import Aside from "../aside/aside.js";
import Footer from "../footer/footer.js";

import styles from "./layout.module.css";
import { sleep } from "./../../util/util";

const Layout = ({ children }) => {
  const [splash, setSplash] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);
  const transitionClasses = splash
    ? `${styles.container} ${styles.hide}`
    : styles.container;
  const loaderTransitionClasses = shouldShow
    ? styles.loader
    : `${styles.loader} ${styles.hide}`;

  const changeCounter = useCallback(() => {
    let count = 0;
    const id = setInterval(() => {
      const ele = document.getElementById("timer");
      count += 1;
      if (ele) {
        if (count > 100) {
          clearInterval(id);
          setTimeout(() => setSplash(false), 1000);
        } else {
          ele.innerHTML = count;
        }
      }
    }, 50);
  }, []);

  useEffect(() => {
    const listener = window.addEventListener("load", () => {
      setShouldShow(true);
      changeCounter();
    });

    return () => window.removeEventListener("load", listener);
  }, [changeCounter]);

  return (
    <>
      {splash ? (
        <div className={loaderTransitionClasses}>
          <p className={styles.loaderName}>Vishal Gupta</p>
          <p>
            <span id="timer" className="serif">
              0
            </span>
            %
          </p>
        </div>
      ) : null}
      <div className={transitionClasses}>
        <Content children={children} />
      </div>
    </>
  );
};

const Content = memo(({ children }) => {
  return (
    <>
      <Aside />
      <main className={styles.content}>
        <section>{children}</section>
        <Footer />
      </main>
    </>
  );
});

export default memo(Layout);
