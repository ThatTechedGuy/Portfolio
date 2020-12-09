import React, { memo } from "react";
import Title from "../title/title";
import styles from "./footer.module.css";
import Spacer from "./../spacer/spacer";

const Footer = () => {
  return (
    <>
      <Title>Open to new Opportunities</Title>
      <div className={styles.contact}>
        <span className="serif">Say hello &mdash; </span>
        <a href="mailto:vvishalgupta5@gmail.com" className={styles.email}>vvishalgupta5@gmail.com</a>
      </div>
      <Spacer />
      <Title>
        Made with love using <span className="serif">Gatsby.</span>
      </Title>
      <Title>
        <span className="serif">Copyright 2020. All Rights Reserved.</span>
        <br />
        DESIGNED AND DEVELOPED BY <span className="serif">Vishal Gupta.</span>
      </Title>
    </>
  );
};

export default memo(Footer);
