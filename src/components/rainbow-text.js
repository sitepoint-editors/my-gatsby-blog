import { keyframes } from "@emotion/react";
import React from "react";
import { Box } from "theme-ui";

export const RainbowText = ({ children }) => {
  const rainbow = keyframes({
    "0%": {
      backgroundPosition: "0 0",
    },
    "50%": {
      backgroundPosition: "400% 0",
    },
    "100%": {
      backgroundPosition: "0 0",
    },
  });

  return (
    <Box
      as="span"
      variant="styles.p"
      sx={{
        fontWeight: "heading",
        cursor: "pointer",
        textDecoration: "underline",
        ":hover": {
          background:
            "linear-gradient(90deg, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee) 0% 0% / 400%",
          animationDuration: "10s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationName: `${rainbow}`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      }}
    >
      {children}
    </Box>
  );
};
