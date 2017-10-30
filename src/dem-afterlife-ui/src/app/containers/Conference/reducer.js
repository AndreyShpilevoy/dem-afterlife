import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getChapterArrayApi,
    getLastActiveTopicArrayApi
} from 'api';

import {getForumArrayByChapterIdArray} from 'containers/reducer';

const initialState = {
    chapterArray: [],
    lastActiveTopicArray: []
};

export const GET_CHAPTER_ARRAY = 'GET_CHAPTER_ARRAY';
export const getChapterArray = () => ({type: GET_CHAPTER_ARRAY});

export const GET_CHAPTER_ARRAY_SUCCESS = 'GET_CHAPTER_ARRAY_SUCCESS';
export const getChapterArraySuccess = chapterArray => ({
    type: GET_CHAPTER_ARRAY_SUCCESS,
    payload: {chapterArray}
});

export const GET_LAST_ACTIVE_TOPICS_ARRAY = 'GET_LAST_ACTIVE_TOPICS_ARRAY';
export const getLastActiveTopicArray = () => ({type: GET_LAST_ACTIVE_TOPICS_ARRAY});

export const GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS = 'GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS';
export const getLastActiveTopicArraySuccess = lastActiveTopicArray => ({
    type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
    payload: {lastActiveTopicArray}
});

export const conferenceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHAPTER_ARRAY_SUCCESS:
            return {...state, chapterArray: payload.chapterArray};
        case GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS:
            return {...state, lastActiveTopicArray: payload.lastActiveTopicArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getChapterArrayNonBlockSaga = function* () {
    const {response, error} = yield call(getChapterArrayApi);
    if (response) {
        const {data} = response;
        yield put(getChapterArraySuccess(data));
        const chapterIdArray = data.map(x => x.id);
        yield put(getForumArrayByChapterIdArray(chapterIdArray));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getChapterArraySaga = function* () {
    for (;;) {
        yield take(GET_CHAPTER_ARRAY);
        yield fork(getChapterArrayNonBlockSaga);
    }
};

export const getLastActiveTopicArrayNonBlockSaga = function* () {
    const {response, error} = yield call(getLastActiveTopicArrayApi);
    if (response) {
        yield put(getLastActiveTopicArraySuccess(response.data));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getLastActiveTopicArraySaga = function* () {
    for (;;) {
        yield take(GET_LAST_ACTIVE_TOPICS_ARRAY);
        yield fork(getLastActiveTopicArrayNonBlockSaga);
    }
};

export const conferenceSaga = function* () {
    yield all([
        getChapterArraySaga(),
        getLastActiveTopicArraySaga()
    ]);
};

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */