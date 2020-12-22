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
      <div className="spacer" />
      <Title>Introduction</Title>
      <Hero />
      <div className="spacer" />

      <Title>About</Title>
      <About />
      <div className="spacer" />

      <Title>Tech Stack</Title>
      <Skills />
      <div className="spacer" />
      <Footer />
      <div className="spacer" />
    </Layout>
  );
};

export default IndexPage;
