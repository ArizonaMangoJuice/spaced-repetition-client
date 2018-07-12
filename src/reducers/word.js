import { SET_WORD } from "../actions/word";

const initialState = {
  word: ''
};

export default function reducer(state = initialState, action){
  if(action.type === SET_WORD){
    return {
      ...state,
      word: action.word
    }
  } 
  return state;
}