require("fontsource-inter/400-normal.css");
require("fontsource-libre-baskerville/400-italic.css");

const React = require("react");
const { default: Layout } = require("./src/components/layout/layout");

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
