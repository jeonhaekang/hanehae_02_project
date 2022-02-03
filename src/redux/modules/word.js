import {
  addDoc,
  getDocs,
  collection,
  query,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../shared/firebase";

// Actions
const INSERT = "word/INSERT";
const EDIT = "word/EDIT";
const DELETE = "word/DELETE";
const CHECK = "word/CHECK";
const LOAD = "word/LOAD";

const initialState = {
  list: [],
};

// Action Creators
export function insertWord(word_data) {
  return { type: INSERT, word_data };
}
export function editWord(word_data) {
  return { type: EDIT, word_data };
}
export function deleteWord(id) {
  return { type: DELETE, id };
}
export function check(id) {
  return { type: CHECK, id };
}
export function loadFB(word_list) {
  return { type: LOAD, word_list };
}

//middleWares
export const loadWordFB = () => {
  return async function (dispatch) {
    const query_data = query(collection(db, "word"),orderBy("date","desc"));
    const word_data = await getDocs(query_data);

    let word_list = [];
    word_data.forEach((el) => {
      word_list.push({ id: el.id, ...el.data() });
    });

    dispatch(loadFB(word_list));
  };
};

export const insertWordFB = (word_data) => {
  return async function (dispatch) {
    const new_word = await addDoc(collection(db, "word"), word_data);

    dispatch(insertWord({ id: new_word.id, ...word_data }));
  };
};

export const editWordFB = (word_data) => {
  return async function (dispatch) {
    const word_doc = doc(db, "word", word_data.id);
    updateDoc(word_doc, { ...word_data });

    dispatch(editWord(word_data));
  };
};

export const deleteFB = (id) => {
  return async function (dispatch) {
    const wordDoc = doc(db, "word", id);
    await deleteDoc(wordDoc);

    dispatch(deleteWord(id));
  };
};

export const checkFB = (id) => {
  return async function (dispatch) {
    const word_doc = doc(db, "word", id);
    const word = await getDoc(word_doc);
    await updateDoc(word_doc, { check: !word.data().check });

    dispatch(check(id));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: [...action.word_list] };
    }

    case "word/INSERT": {
      return { list: [action.word_data, ...state.list] };
    }

    case "word/EDIT": {
      const new_word_list = state.list.map((el) => {
        if (el.id === action.word_data.id) {
          return action.word_data;
        }
        return el;
      });
      return { list: [...new_word_list] };
    }

    case "word/DELETE": {
      const new_word_list = state.list.filter((el) => {
        if (action.id === el.id) {
          return false;
        }
        return true;
      });
      return { list: [...new_word_list] };
    }

    case "word/CHECK": {
      const new_word_list = state.list.map((el) => {
        if (el.id === action.id) {
          return { ...el, check: !el.check };
        }
        return el;
      });
      return { list: [...new_word_list] };
    }

    default:
      return state;
  }
}
