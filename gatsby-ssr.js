import "fontsource-inter/latin-400-normal.css";
import "fontsource-libre-baskerville/latin-400-italic.css";

import React from "react";
import Layout from "@components/layout/layout";

export function wrapPageElement({ element, props }) {
  return (
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    <Layout {...props}>{element}</Layout>
  );
}
