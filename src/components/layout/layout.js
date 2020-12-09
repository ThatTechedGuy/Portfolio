import "fontsource-inter";
import "fontsource-libre-baskerville";

import "../../styles/global.css";

import React, { memo, useCallback, useEffect, useState } from "react";
import Aside from "../aside/aside.js";
import Footer from "../footer/footer.js";

import styles from "./layout.module.css";

import { sleep } from "./../../util/util";

const Layout = ({ children }) => {
  const [splash, setSplash] = useState(true);
  const [fontsReady, setFontsReady] = useState(false);

  const transitionClasses = splash
    ? `${styles.container} ${styles.hide}`
    : styles.container;

  const updateElement = useCallback((progress) => {
    if (progress <= 100) {
      const ele = document.getElementById("timer");
      if (ele) {
        ele.innerHTML = progress;
      }
    }
  }, []);

  const start = useCallback(async () => {
    let progress = 0;
    const intervalId = setInterval(() => {
      progress += 5;
      updateElement(progress);
    }, 100);

    return intervalId;

    // setSplash(false);
  }, [updateElement]);

  const wait = useCallback(
    async (id) => {
      // Artificial loading delay of 2 seconds.
      await sleep(2000);
      // clearing the interval function.
      clearInterval(id);
      // changing the state.
      if (fontsReady) {
        setSplash(false);
      }
    },
    [fontsReady]
  );

  useEffect(() => {
    const intervalId = start();
    wait(intervalId);
    document.fonts.ready.then(() => setFontsReady(true));
  }, [start, wait]);

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
