import { GatsbyBrowser } from "gatsby";
import React from "react";

import Layout from './src/components/Layout';

import 'normalize.css';

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
}