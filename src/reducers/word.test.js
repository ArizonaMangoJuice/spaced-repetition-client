import reducer from './word';
import { setWord } from '../actions/word';

describe('Word', () => {
  it('should return the initial state with passes in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      word: ''
    });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('should add word to state', () => {
    const currentState = {
      word: ''
    };
    const data = 'hello';
    const state = reducer(currentState, setWord(data));
    expect(state).toEqual({
      word: data
    });
  });
});