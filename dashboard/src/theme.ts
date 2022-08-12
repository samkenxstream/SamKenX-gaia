import {
  css,
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
} from "styled-components/macro";

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Palette {
  white: string;
  black: string;
  grey: string;
  main: string;
}

interface Fonts {
  headline: {
    main: FlattenInterpolation<ThemeProps<unknown>>;
    label: FlattenInterpolation<ThemeProps<unknown>>;
  };
  paragraph: FlattenInterpolation<ThemeProps<unknown>>;
}

interface Theme {
  breakpoints: Breakpoints;
  palette: Palette;
  fonts: Fonts;
}

const breakpoints: Breakpoints = {
  sm: 600,
  md: 1200,
  lg: 1460,
  xl: 1600,
};

const theme: Theme = {
  breakpoints,
  palette: {
    white: "#FFFFFF",
    black: "#000000",
    grey: "#F8F8F8",
    main: "#27277A",
  },
  fonts: {
    headline: {
      main: css`
        font-size: 50px;
        line-height: 55px;
        font-weight: 700;
      `,
      label: css`
        font-size: 20px;
        line-height: 22px;
      `,
    },
    paragraph: css`
      font-size: 12px;
      line-height: 18px;
    `,
  },
};

export default theme;
