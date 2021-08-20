import { SelectOptionProps } from ".";
import { LabelValue } from "./types";

export const buildSelectOptions = (
  array: LabelValue[],
  state: LabelValue | undefined,
  setState: React.Dispatch<React.SetStateAction<LabelValue | undefined>>
): SelectOptionProps[] =>
  array.map(({ label, value }) => ({
    label,
    onClick: () => setState({ label, value }),
    isSelected: value === state?.value,
  }));
