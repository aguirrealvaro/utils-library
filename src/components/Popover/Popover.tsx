import React, { FunctionComponent, useState } from "react";

type PopoverProps = {
  content: string | JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
};

export const Popover: FunctionComponent<PopoverProps> = ({ content }) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const openPopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  return (
    <div onMouseEnter={openPopover} onMouseLeave={closePopover}>
      <div>{content}</div>
      {showPopover && <div>Hover</div>}
    </div>
  );
};
