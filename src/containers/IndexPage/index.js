import React, { memo } from "react";
import Hero from "./components/hero/hero";
import Title from "../../components/title/title";
import About from "./components/about/about";
import styles from "./index.module.css";
import Skills from "./components/skills/skills";

const IndexPage = () => {
  return (
    <section className={styles.container}>
      <Title>Introduction</Title>
      <Hero />
      <Spacing />
      <Title>About</Title>
      <About />
      <Spacing />
      <Title>Skills</Title>
      <Skills />
      <Spacing />
    </section>
  );
};

const Spacing = memo(() => <div className={styles.spacer} />);

export default IndexPage;
