import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getChapterArrayApi,
    getForumArrayByChapterIdArrayApi,
    getLastActiveTopicArrayApi
} from 'api';

const initialState = {
    chapterArray: [],
    forumArray: [],
    lastActiveTopicArray: []
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
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS:
            return {...state, lastActiveTopicArray: payload.lastActiveTopicArray};
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
        const chapterIdArray = chapterArray.reduce((previous, current) => [...previous, current.id], []);
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
export function* getLastActiveTopicArraySaga() {
    while (true) {
        yield take(GET_LAST_ACTIVE_TOPICS_ARRAY);
        const lastActiveTopicArray = yield call(getLastActiveTopicArrayApi);
        yield put(getLastActiveTopicArraySuccess(lastActiveTopicArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* conferenceSaga() {
    yield all([
        getChapterArraySaga(),
        getForumsByChapterIdArraySaga(),
        getLastActiveTopicArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/