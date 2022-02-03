import React from "react";
import styled, { keyframes } from "styled-components";

const Button = (props) => {
  const { shape, children, _onClick } = props;
  if (shape === "rectangle") {
    return <RectangleButton onClick={_onClick}>{children}</RectangleButton>;
  } else if (shape === "circle") {
    return <CircleButton onClick={_onClick}>{children}</CircleButton>;
  }
};

Button.defaultProps = {
  shape: "rectangle",
  _onClick: () => {},
};

const RectangleButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #ff8443;
  border: none;
`;

const rotate = keyframes`
100%{
    transform:rotate(90deg);
}
`;

const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  color: white;
  background-color: #ff8443;
  font-size: 40px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  :hover {
    animation: ${rotate} 0.2s linear alternate;
  }
`;

export default Button;
