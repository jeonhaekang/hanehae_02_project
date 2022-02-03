import React from "react";
import styled from "styled-components";

import WordList from "../pages/WordList";
import InsertWord from "../pages/InsertWord";
import EditWord from "../pages/EditWord";
import Button from "../elements/Button";

import { Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadWordFB } from "../redux/modules/word";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(loadWordFB());
  })
  return (
    <AppWrap>
      <Route path="/" exact component={WordList} />
      <Route path="/insert" exact component={InsertWord} />
      <Route path="/edit/:id" exact component={EditWord} />
      <Button
        shape="circle"
        _onClick={() => {
          history.push("/insert");
        }}
      >
        +
      </Button>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: auto;
  width: 350px;
  min-height: 100vh;
  background-color: #f8e7df;
  border: 1px solid #f8d4c3;
  overflow: hidden;
  position: relative;
`;

export default App;
