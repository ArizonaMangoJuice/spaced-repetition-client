import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    CHECK_ANSWER,
    RECIEVE_ANSWER
} from '../actions/protected-data';

const initialState = {
    input: null,
    data: '',
    error: null,
    answer: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return {
            ...state,
            data: action.data,
            error: null
        }
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === CHECK_ANSWER){
        return {
            ...state,
            answer: action.input
        };
    } else if (action.type === RECIEVE_ANSWER){
        return {
            ...state,
            input: action.answer
        }
    }
    return state;
}
