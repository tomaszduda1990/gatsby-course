import { GatsbySSR } from "gatsby";
import React from "react";

import Layout from './src/components/Layout';

import 'normalize.css';

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  );
}