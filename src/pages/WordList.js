import React from "react";

import { Grid, Text } from "../elements/index";
import Card from "../components/Card";

import { useSelector } from "react-redux";

const WordList = () => {
  const word_list = useSelector((state) => state.word.list);

  return (
    <React.Fragment>
      <Grid is_flex padding="16px">
        <Text size="25px">나의 일본어 사전</Text>

        {word_list.map((el, i) => {
          return (
            <Card
              key={i}
              kanji={el.kanji}
              hiragana={el.hiragana}
              mean={el.mean}
              rei={el.rei}
              id={el.id}
              check={el.check}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default WordList;
