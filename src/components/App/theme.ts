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
};

export type ThemeType = typeof theme;
