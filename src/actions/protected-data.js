import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import jwtDecode from 'jwt-decode';
import { setWord } from './word';

export const CHECK_ANSWER = 'CHECK_ANSWER';
export const checkAnswer = input => ({
    type: CHECK_ANSWER,
    input
});

export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const clearAnswer = () => ({
    type: CLEAR_ANSWER
});

export const RECIEVE_ANSWER = 'RECIEVE_ANSWER';
export const recieveAnswer = answer => ({
    type: RECIEVE_ANSWER,
    answer
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const sendAnswer = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const decodedToken = jwtDecode(authToken);
    let userId = decodedToken.user.id;
    const answer = getState().protectedData.input;
    return fetch(`${API_BASE_URL}/api/users/answer`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({
            answer,
            userId
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            dispatch(recieveAnswer(data));            
        })
        .catch(err => {
            console.error(err);
            // dispatch(fetchProtectedDataError(err));
        });
}

export const fetchProtectedData = () => (dispatch, getState) => {
    dispatch(clearAnswer());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/users/next`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => {
            // console.log('protected data',data);
            dispatch(fetchProtectedDataSuccess(data)); 
            dispatch(setWord(data));   
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
