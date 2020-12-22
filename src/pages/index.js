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
      <section className={styles.container}>
        <div className={styles.section}>
          <div>
            <Title>Introduction</Title>
            <Hero />
          </div>
          <div>
            <Title>About</Title>
            <About />
          </div>
        </div>
        <div className={styles.sectionBottom}>
          <div>
            <Title>Tech Stack</Title>
            <Skills />
          </div>
          <Footer />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
