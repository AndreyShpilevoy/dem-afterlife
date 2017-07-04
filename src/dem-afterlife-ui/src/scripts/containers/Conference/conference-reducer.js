import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getChapterArrayApi,
    getForumArrayByChapterIdArrayApi,
    getLastActiveTopicsArrayApi
} from 'api';

const initialState = {
    chapterArray: [],
    forumArray: [],
    lastActiveTopicsArray: []
};

export const GET_CHAPTER_ARRAY = 'GET_CHAPTER_ARRAY';
export const getChapterArray = () => ({type: GET_CHAPTER_ARRAY});

export const GET_CHAPTER_ARRAY_SUCCESS = 'GET_CHAPTER_ARRAY_SUCCESS';
export const getChapterArraySuccess = chapterArray => ({
    type: GET_CHAPTER_ARRAY_SUCCESS,
    payload: {chapterArray}
});

export const GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY = 'GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY';
export const getForumArrayByChapterIdArray = chapterIdArray => ({
    type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
    payload: {chapterIdArray}
});

export const GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS = 'GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS';
export const getForumArrayByChapterIdArraySuccess = forumArray => ({
    type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
    payload: {forumArray}
});

export const GET_LAST_ACTIVE_TOPICS_ARRAY = 'GET_LAST_ACTIVE_TOPICS_ARRAY';
export const getLastActiveTopicsArray = () => ({type: GET_LAST_ACTIVE_TOPICS_ARRAY});

export const GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS = 'GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS';
export const getLastActiveTopicsArraySuccess = lastActiveTopicsArray => ({
    type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
    payload: {lastActiveTopicsArray}
});

export const conferenceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHAPTER_ARRAY_SUCCESS:
            return {...state, chapterArray: payload.chapterArray};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS:
            return {...state, lastActiveTopicsArray: payload.lastActiveTopicsArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getChapterArraySaga() {
    while (true) {
        yield take(GET_CHAPTER_ARRAY);
        const chapterArray = yield call(getChapterArrayApi);
        yield put(getChapterArraySuccess(chapterArray));
        const chapterIdArray = chapterArray.reduce((previouse, current) => [...previouse, current.id], []);
        yield put(getForumArrayByChapterIdArray(chapterIdArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArrayNonBlockSaga(chapterIdArray) {
    const forums = yield call(getForumArrayByChapterIdArrayApi, chapterIdArray);
    yield put(getForumArrayByChapterIdArraySuccess(forums));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY);
        yield fork(getForumsByChapterIdArrayNonBlockSaga, payload.chapterIdArray);
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getLastActiveTopicsArraySaga() {
    while (true) {
        yield take(GET_LAST_ACTIVE_TOPICS_ARRAY);
        const lastActiveTopicsArray = yield call(getLastActiveTopicsArrayApi);
        yield put(getLastActiveTopicsArraySuccess(lastActiveTopicsArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* conferenceSaga() {
    yield all([
        getChapterArraySaga(),
        getForumsByChapterIdArraySaga(),
        getLastActiveTopicsArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/