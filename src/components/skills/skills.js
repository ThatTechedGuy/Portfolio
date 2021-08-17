import React, { memo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./skills.module.scss";

const Skills = () => {
  const {
    site: {
      siteMetadata: { skills },
    },
  } = useStaticQuery(
    graphql`
      query SkillsQuery {
        site {
          siteMetadata {
            skills {
              title
              list
            }
          }
        }
      }
    `
  );

  return skills.map(renderSkills);
};

const renderSkills = (skill) => <SkillsHead {...skill} />;

const SkillsHead = memo(({ title, list }) => {
  return (
    <div className={styles.body}>
      {title} <span className={styles.list}>{list}</span>
    </div>
  );
});

export default Skills;
