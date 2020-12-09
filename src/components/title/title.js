import React from "react";
import styles from "./title.module.css";

const Title = ({ children }) => (
  <p className={styles.header}>{children}</p>
);

export default Title;
