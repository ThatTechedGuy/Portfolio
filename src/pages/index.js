import React from "react";
import Hero from "@components/hero/hero";
import Title from "@components/title/title";
import About from "@components/about/about";
import styles from "./../index.module.scss";
import Skills from "@components/skills/skills";
import Layout from "@components/layout/layout";
import Footer from "@components/footer/footer";

const IndexPage = () => {
  return (
    <Layout>
      <div className={styles.spacer} />
      <Title>Introduction</Title>
      <Hero />
      <div className={styles.spacer} />

      <Title>About</Title>
      <About />
      <div className={styles.spacer} />

      <Title>Tech Stack</Title>
      <Skills />
      <div className={styles.spacer} />
      <Footer />
      <div className={styles.spacer} />
    </Layout>
  );
};

export default IndexPage;
