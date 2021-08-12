import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { Tooltip, TooltipProps } from "../Tooltip/Tooltip";

type ExclamationTooltip = {
  size?: string;
  className?: string;
} & TooltipProps;

export const ExclamationTooltip: FunctionComponent<ExclamationTooltip> = ({
  size = "15px",
  ...restProps
}) => (
  <CustomTooltip {...restProps}>
    <Icon icon="exclamation" size={size} />
  </CustomTooltip>
);

const CustomTooltip = styled(Tooltip)`
  line-height: 0;
`;
