import { StyledButton } from "./LoginStyled";
import React from "react";

const Button = ({ content, isNewUser }) => {
  return <StyledButton onClick={isNewUser}>{content}</StyledButton>;
};

export default Button;
