import { checkAnswer, CHECK_ANSWER, ADD_REAL_ANSWER, addRealAnswer, clearAnswer, CLEAR_ANSWER, RECIEVE_ANSWER, receiveAnswer, fetchProtectedData, FETCH_PROTECTED_DATA_SUCCESS, fetchProtectedDataSuccess, fetchProtectedDataError, FETCH_PROTECTED_DATA_ERROR } from "./protected-data";

describe('checkAnswer', () => {
  it('should return an action', () => {
      const input = 'token';
      const action = checkAnswer(input);
      expect(action.type).toEqual(CHECK_ANSWER);
      expect(action.input).toEqual(input);
  });
});

describe('AddRealAnswer', () => {
  it('should return an action', () => {
      const word = 'token';
      const action = addRealAnswer(word);
      expect(action.type).toEqual(ADD_REAL_ANSWER);
      expect(action.word).toEqual(word);
  });
});

describe('clearAnswer', () => {
  it('should return an action', () => {
      const action = clearAnswer();
      expect(action.type).toEqual(CLEAR_ANSWER);
  });
});

describe('Receive Answer', () => {
  it('should return an action', () => {
      const answer = 'token';
      const action = receiveAnswer(answer);
      expect(action.type).toEqual(RECIEVE_ANSWER);
      expect(action.answer).toEqual(answer);
  });
});

describe('fetchProtectedData', () => {
  it('should return an action', () => {
      const data = 'token';
      const action = fetchProtectedDataSuccess(data);
      expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
      expect(action.data).toEqual(data);
  });
});


describe('fetchProtectedDataError', () => {
  it('should return an action', () => {
      const error = 'token';
      const action = fetchProtectedDataError(error);
      expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
      expect(action.error).toEqual(error);
  });
});