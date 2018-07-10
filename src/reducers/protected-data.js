import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    CHECK_ANSWER
} from '../actions/protected-data';

const initialState = {
    answer: null,
    data: '',
    error: null
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
            answer: action.answer
        };
    }
    return state;
}
