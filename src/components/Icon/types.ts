export const ALL_ICONS = [
  "burger",
  "close",
  "exclamation",
  "user",
  "chevron_down",
  "chevron_left",
  "chevron_right",
] as const;

type IconsTuple = typeof ALL_ICONS;

export type IconType = IconsTuple[number];
