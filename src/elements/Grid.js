import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { margin, padding, is_flex, width, bg, children } = props;

  const styles = {
    margin: margin,
    padding: padding,
    is_flex: is_flex,
    width: width,
    bg: bg,
  };
  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  margin: "0px",
  padding: "0px",
  is_flex: false,
  width: "100%",
  bg: false,
};

const GridBox = styled.div`
  box-sizing: border-box;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
  ${(props) =>
    props.is_flex ? "display: flex; flex-direction: column; gap:16px;" : ""}
`;

export default Grid;
