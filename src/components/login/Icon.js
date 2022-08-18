import React from "react";
import { StyledIcon } from "./LoginStyled";

const Icon = ({ color, children }) => {
  return <StyledIcon background={color}>{children}</StyledIcon>;
};

export default Icon;
