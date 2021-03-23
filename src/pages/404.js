import React from "react";
import { Box, Heading } from "theme-ui";

export default function NotFound() {
  return (
    <>
      <Heading variant="styles.h1">
        Page not found!
        <span role="img" aria-label="crying face">
          😢
        </span>
      </Heading>
      <Box as="h2" variant="styles.h2">
        It looks like that page doesn't exist
      </Box>
    </>
  );
}