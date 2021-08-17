module.exports = {
  siteMetadata: {
    title: `Vishal Gupta`,
    author: {
      name: `Vishal Gupta`,
      summary: `Product Engineer and Software Developer based in Kolkata, India.`,
      designation: "Software Engineer",
    },
    description: `Product Engineer and Software Developer based in Kolkata, India. This is my personal internet space.`,
    siteUrl: `https://thattechedguy.gtsb.io/`,
    social: {
      twitter: `https://twitter.com/ThatTechedGuy`,
      github: `https://www.github.com/ThatTechedGuy`,
      linkedin: `https://www.linkedin.com/in/vishal-gupta-5b1467183/`,
      mail: "vvishalgupta5@gmail.com",
    },
    employmentStatus: `Open to new opportunities`,
    skills: [
      {
        title: "Languages",
        list: "Javascript, TypeScript, JAVA, Kotlin",
      },
      {
        title: "UI/UX",
        list: "Figma, Zeplin, Adobe XD",
      },
      {
        title: "Frontend",
        list: "React, React Native, Redux, Gatsby, Flutter, Android",
      },
      {
        title: "Backend",
        list: "Node, Express, mongoDb, graphQL, Apollo, SQLite, postgreSQL, Redis, TypeORM",
      },
      {
        title: "Infra",
        list: "Docker, Kubernetes, Nats Streaming Server, Linux",
      },
      {
        title: "Industry",
        list: "JAMStack, Event Driven Microservices Architecture, RESTFul APIs, Firebase, Data structures and Algorithms, Clean / Solid Software Architectures, CI/CD",
      },
    ],
  },
  plugins: [
    // Sourcing the local filesystem for content and assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // SASS - preprocessor support
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    // Markdown -> Gatsby
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // Syntax Highlighting
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vishal Gupta`,
        short_name: `VG`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
