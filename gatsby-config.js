module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg"],
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
    "gatsby-plugin-optimize-svgs",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 0,
            autoprefixer: { grid: true },
          }),
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
