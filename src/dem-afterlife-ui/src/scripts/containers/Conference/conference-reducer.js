import {all, call, put, take} from 'redux-saga/effects';
import {getChapterArrayApi} from 'api';

const initialState = {
    chapterArray: []
};

export const GET_CHAPTERARRAY = 'GET_CHAPTERARRAY';
export const getChapterArray = () => ({type: GET_CHAPTERARRAY});

export const GET_CHAPTERARRAY_SUCCESS = 'GET_CHAPTERARRAY_SUCCESS';
export const getChapterArraySuccess = chapterArray => ({
    type: GET_CHAPTERARRAY_SUCCESS,
    payload: {chapterArray}
});

export const conferenceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHAPTERARRAY_SUCCESS:
            return {...state, chapterArray: payload.chapterArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getChapterArraySaga() {
    while (true) {
        yield take(GET_CHAPTERARRAY);
        const chapterArray = yield call(getChapterArrayApi);
        yield put(getChapterArraySuccess(chapterArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* conferenceSaga() {
    yield all([
        getChapterArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/