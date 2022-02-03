import React from "react";
import { Grid, Text, Input, Button } from "../elements/index";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { insertWordFB } from "../redux/modules/word";

const InsertWord = (props) => {
  const word_ref = React.useRef([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const insert = () => {
    const kanji = word_ref.current[0].value;
    const hiragana = word_ref.current[1].value;
    const mean = word_ref.current[2].value;
    const rei = word_ref.current[3].value;
    const date = new Date();
    
    if (kanji === "" || hiragana === "" || mean === "" || rei === "") {
      return window.alert("모든 항목을 입력해주세요.");
    }
    
    dispatch(
      insertWordFB({
        kanji: kanji,
        hiragana: hiragana,
        mean: mean,
        rei: rei,
        check: false,
        date: date,
      })
    );
    history.push("/");
  };

  return (
    <Grid is_flex padding="16px">
      <Text size="25px">단어 추가하기</Text>

      <Grid bg="white" padding="10px">
        <Input
          ref={(el) => {
            word_ref.current[0] = el;
          }}
          label="단어"
          placeholder="단어를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          ref={(el) => {
            word_ref.current[1] = el;
          }}
          label="히라가나"
          placeholder="히라가나를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          ref={(el) => {
            word_ref.current[2] = el;
          }}
          label="의미"
          placeholder="의미를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          ref={(el) => {
            word_ref.current[3] = el;
          }}
          label="예문"
          placeholder="예문을 입력해주세요."
        />
      </Grid>

      <Button _onClick={() => insert()}>등록하기</Button>
    </Grid>
  );
};

InsertWord.defaultProps = {};

export default InsertWord;
