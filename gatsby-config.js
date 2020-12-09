module.exports = {
  plugins: [
    "gatsby-plugin-optimize-svgs",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("autoprefixer")(),
          require(`postcss-preset-env`)({ stage: 0 }),
          require("postcss-pxtorem")({
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            unitPrecision: 3, // Round rem units to 4 digits
          }),
          require("postcss-deadcss")({ hash: true }),
          require("cssnano")(), // Minify
        ],
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ["loader-name"], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
};
