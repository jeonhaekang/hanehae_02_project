import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Input = React.forwardRef((props, ref) => {
  const { label, placeholder, defaultVal } = props;

  return (
    <React.Fragment>
      <Text>{label}</Text>
      <ElInput defaultValue={defaultVal} ref={ref} placeholder={placeholder} />
    </React.Fragment>
  );
});

Input.defaultProps = {
  label: "",
  placeholder: "",
  index: 0,
  defaultVal: "",
};

const ElInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default Input;
