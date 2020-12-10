module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
        analyzerMode: "static",
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vishal Gupta`,
        short_name: `VG`,
        description:
          "Product Engineer and Software Developer based in Kolkata, India.",
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 0,
            autoprefixer: { grid: true, flexbox: "no-2009" },
          }),
          require("postcss-pxtorem")({
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            unitPrecision: 3, // Round rem units to 4 digits
          }),
          require("postcss-hexrgba")(),
          require("postcss-flexbugs-fixes")(),
          require("postcss-import")(),
          require("postcss-mixins")(),
          require("postcss-nested")(),
          require("cssnano")(), // Minify
        ],
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          "@styles": `src/styles`,
          "@assets": `src/images/`,
          "@components": "src/components/",
        },
      },
    },
    `gatsby-plugin-preact`,
  ],
};
