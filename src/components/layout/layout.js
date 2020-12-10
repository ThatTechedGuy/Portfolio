import "../../styles/global.css";

import React, { memo, useCallback, useEffect, useState } from "react";
import Aside from "../aside/aside.js";
import Footer from "../footer/footer.js";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [splash, setSplash] = useState(true);
  const transitionClasses = splash
    ? `${styles.container} ${styles.hide}`
    : styles.container;

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
    changeCounter();
  }, [changeCounter]);

  return (
    <>
      {splash ? (
        <div className={styles.loader}>
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
        <Aside />
        <main className={styles.content}>
          <section>{children}</section>
          <Footer />
        </main>
      </div>
    </>
  );
};
export default memo(Layout);
