import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { size, bold, color, children, margin } = props;

  const styles = {
    size: size,
    bold: bold,
    color: color,
    margin: margin,
  };

  return <ElText {...styles}>{children}</ElText>;
};

Text.defaultProps = {
  children: null,
  size: "14px",
  bold: "400",
  color: "black",
  margin: "0px",
};

const ElText = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

export default Text;
