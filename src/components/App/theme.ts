type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  xxs: "400px",
  xs: "480px",
  sm: "600px",
  md: "768px",
  lg: "900px",
  xl: "1024px",
};

export const theme = {
  fontFamily: "Arial",
  breakpoint: (size: Size): string => `@media (max-width: ${sizes[size]})`,
  colors: {
    black: "#212121",
    white: "#ffffff",
    blue: "#0072FF",
    red: "#FF4658",
    grey: "#626262",
    lightGrey: "lightgrey",
  },
};

export type ThemeType = typeof theme;
