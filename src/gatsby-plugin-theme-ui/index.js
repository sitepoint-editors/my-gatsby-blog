import { deep, swiss } from "@theme-ui/presets";
import nightOwl from "@theme-ui/prism/presets/night-owl.json";

const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },

  styles: {
    ...swiss.styles,
    code: {
      ...nightOwl,
    },
    p: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 3,
    },
  },
};

export default theme;