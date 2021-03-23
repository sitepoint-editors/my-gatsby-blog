import React from "react";
import { Box } from "theme-ui";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Header } from "./header";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <Box
        as="div"
        sx={{
          margin: "0 auto",
          maxWidth: "640px",
          padding: "0 1.0875rem 1.45rem",
        }}
      >
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
};