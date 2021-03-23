import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { Layout } from "./src/components/layout";
import { RainbowText } from "./src/components/rainbow-text";

const MDXComponents = {
  RainbowText,
};

export const rootWrapper = ({ element }) => {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>{element}</MDXProvider>
    </Layout>
  );
};