import { setWord, SET_WORD } from "./word";

describe('setWord', () => {
  it('should return an action', () => {
      const word = 'token';
      const action = setWord(word);
      expect(action.type).toEqual(SET_WORD);
      expect(action.word).toEqual(word);
  });
});