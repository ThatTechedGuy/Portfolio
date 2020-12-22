import React, { memo } from "react";
import styles from "./skills.module.scss";
const Skills = () => {
  return (
    <>
      <SkillsHead
        title="Languages"
        list="Javascript / TypeScript, JAVA, Dart, Python"
      />
      <SkillsHead
        title="FrontEnd"
        list="React, React Native, Redux, Gatsby, Flutter, Android"
      />
      <SkillsHead
        title="BackEnd"
        list="Node, Express, mongoDb, graphQL, Apollo, SQLite, postgresSQL, Redis"
      />
      <SkillsHead title="UI/UX" list="Figma, Zeplin, Adobe XD" />
      <SkillsHead
        title="Industry"
        list="JAMStack, Firebase, Data structures and Algorithms, Software Architecture"
      />
    </>
  );
};

const SkillsHead = memo(({ title, list }) => {
  return (
    <div className={styles.body}>
      {title} <span className={styles.list}>{list}</span>
    </div>
  );
});

export default Skills;
