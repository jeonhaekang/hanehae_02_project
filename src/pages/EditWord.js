import React from "react";
import { Grid, Text, Input, Button } from "../elements/index";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { editWordFB } from "../redux/modules/word";

const EditWord = (props) => {
  const word_ref = React.useRef([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const param = useParams();

  const word_data = useSelector((state) => state.word.list).find(
    (el) => el.id === param.id
  );
  console.log(param.index, word_data);

  const edit = () => {
    const kanji = word_ref.current[0].value;
    const hiragana = word_ref.current[1].value;
    const mean = word_ref.current[2].value;
    const rei = word_ref.current[3].value;
    const id = word_data.id;

    if (kanji === "" || hiragana === "" || mean === "" || rei === "") {
      return window.alert("모든 항목을 입력해주세요.");
    }
    
    dispatch(
      editWordFB(
        {
          kanji: kanji,
          hiragana: hiragana,
          mean: mean,
          rei: rei,
          check: false,
          id: id,
        },
        param.index
      )
    );
    history.push("/");
  };

  return (
    <Grid is_flex padding="16px">
      <Text size="25px">단어 수정하기</Text>

      <Grid bg="white" padding="10px">
        <Input
          defaultVal={word_data.kanji}
          ref={(el) => {
            word_ref.current[0] = el;
          }}
          label="단어"
          placeholder="단어를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          defaultVal={word_data.hiragana}
          ref={(el) => {
            word_ref.current[1] = el;
          }}
          label="히라가나"
          placeholder="히라가나를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          defaultVal={word_data.mean}
          ref={(el) => {
            word_ref.current[2] = el;
          }}
          label="의미"
          placeholder="의미를 입력해주세요."
        />
      </Grid>

      <Grid bg="white" padding="10px">
        <Input
          defaultVal={word_data.rei}
          ref={(el) => {
            word_ref.current[3] = el;
          }}
          label="예문"
          placeholder="예문을 입력해주세요."
        />
      </Grid>

      <Button _onClick={() => edit()}>수정하기</Button>
    </Grid>
  );
};

EditWord.defaultProps = {};

export default EditWord;
