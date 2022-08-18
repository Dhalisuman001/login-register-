import { StyledInput } from "./LoginStyled";
import React from "react";

const Input = ({ type, placeholder }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
