import reducer from './protected-data';
import { checkAnswer, fetchProtectedDataSuccess, fetchProtectedDataError, receiveAnswer, addRealAnswer, clearAnswer } from '../actions/protected-data';

describe('Protected Data', () => {
  it('should return the initial state with passes in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  it('should add input to state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    };
    const data = 'hello';
    const state = reducer(currentState, checkAnswer(data));
    expect(state).toEqual({
      input: 'hello',
      data: '',
      error: null,
      answer: null,
      result: null
    });
  });


  it('should add data to state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    };
    const data = 'hello';
    const state = reducer(currentState, fetchProtectedDataSuccess(data));
    expect(state).toEqual({
      input: null,
      data: data,
      error: null,
      answer: null,
      result: null
    });
  });

  it('should add error to state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    };
    const error = 'hello';
    const state = reducer(currentState, fetchProtectedDataError(error));
    expect(state).toEqual({
      input: null,
      data: '',
      error: error,
      answer: null,
      result: null
    });
  });

  it('should add result to state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    };
    const answer = 'hello';
    const state = reducer(currentState, receiveAnswer(answer));
    expect(state).toEqual({
      input: null,
      data: '',
      error: null,
      answer: null,
      result: answer
    });
  });

  it('should add answer to state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    };
    const answer = 'hello';
    const state = reducer(currentState, addRealAnswer(answer));
    expect(state).toEqual({
      input: null,
      data: '',
      error: null,
      answer: answer,
      result: null
    });
  });

  it('should clear answer and result from state', () => {
    const currentState = {
      input: null,
      data: '',
      error: null,
      answer: 'hello',
      result: 'hello'
    };
    const state = reducer(currentState, clearAnswer());
    expect(state).toEqual({
      input: null,
      data: '',
      error: null,
      answer: null,
      result: null
    });
  });
});