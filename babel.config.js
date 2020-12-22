module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@images": "./src/assets/images",
          "@fonts": "./src/assets/fonts",
          "@components": "./src/components",
        },
      },
    ],
  ],
};
