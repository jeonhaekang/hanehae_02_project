import { IoBookmark, IoClipboard, IoTrash } from "react-icons/io5";
import React from "react";
import styled from "styled-components";
import { Text } from "../elements/index";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteFB, checkFB } from "../redux/modules/word";

const Card = (props) => {
  const { kanji, hiragana, mean, rei, id, check } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CardBox {...props}>
      <Text color="#ff8443" size="30px">
        {kanji}
      </Text>
      <Text>{hiragana}</Text>
      <Text size="20px" margin="10px 0 0 0">
        {mean}
      </Text>
      <Text>{rei}</Text>
      <IconBox>
        <IoBookmark onClick={() => dispatch(checkFB(id))} />
        <IoClipboard onClick={() => history.push("/edit/" + id)} />
        <IoTrash onClick={() => dispatch(deleteFB(id))} />
      </IconBox>
    </CardBox>
  );
};

Card.defaultProps = {
  kanji: "한자",
  hiragana: "히라가나",
  mean: "의미",
  rei: "예문",
  index: null,
  check: false,
};

const IconBox = styled.div`
  position: absolute;
  color: #1f1f1f;
  font-size: 15px;
  right: 10px;
  top: 10px;
`;

const CardBox = styled.div`
  width: 100%;
  background-color: ${(props) => (props.check ? "#ff8443;" : "white;")};
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  ${(props) => (props.check ? "& * {color: white;}" : "")}
`;

export default Card;
