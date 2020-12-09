import React, { memo } from "react";
import styles from "./spacer.module.css";

const Spacer = () => {
  return <div className={styles.spacer} />;
};

export default memo(Spacer);
