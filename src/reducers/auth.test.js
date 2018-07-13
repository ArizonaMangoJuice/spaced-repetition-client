import reducer from './auth';

import {
  setAuthToken,
  clearAuth,
  authSuccess,
  authError
} from '../actions/auth';

describe('Auth Reducer', () => {
  it('should return the initial state with passes in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null, 
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('should set the auth token to the state', () => {
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiQ2FtZXJvbiIsImhlYWQiOjAsImNvdW50ZXIiOjYsImNyZWF0ZWRBdCI6IjIwMTgtMDctMTNUMDA6MzE6NTkuMTk2WiIsInVwZGF0ZWRBdCI6IjIwMTgtMDctMTNUMDE6MjE6NDQuMTUzWiIsImlkIjoiNWI0N2YyZmYzM2ZlOTdjYjViOTI0MTlkIn0sImlhdCI6MTUzMTQ4NjM1NywiZXhwIjoxNTMyMDkxMTU3LCJzdWIiOiJDYW1lcm9uIn0.f5txvrbq26DB4eXbSOzZTNKZshfKHlzYS8N4NgDGbxg';

        let state = {
            authToken: null,
            currentUser: null
        }

        state = reducer(state, setAuthToken(authToken));

        expect(state).toEqual({
            authToken,
            currentUser: {
                  "counter": 6,
                  "createdAt": "2018-07-13T00:31:59.196Z",
                  "head": 0,
                  "id": "5b47f2ff33fe97cb5b92419d",
                  "updatedAt": "2018-07-13T01:21:44.153Z",
                  "username": "Cameron",
                }
        });
    });
  });

  describe('clearAuth', () => {
    it('should clear the auth token from the state', () => {
        let state = {
            authToken: 'dsadsadsadsa',
            currentUser: 'user'
        }

        state = reducer(state, clearAuth());
        expect(state).toEqual({
            authToken: null,
            currentUser: null
        });
    });
  });

  describe('authSuccess', () => {
    it('should add the user to the state', () => {
        let currentUser = 'user';

        let state = {
            currentUser: null,
            error: null
        };

        state = reducer(state, authSuccess(currentUser));
        expect(state).toEqual({
            currentUser,
            error: null,
            loading: false
        })
    })
  });

  describe('authError', () => {
    it('should put the error in the state', () => {
        let error = 'error';

        let state = {
            error: null,
            loading: true
        };

        state = reducer(state, authError(error));
        expect(state).toEqual({
            error,
            loading: false
        });
    });
  });
  
});