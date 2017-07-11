import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getForumByIdApi,
    getForumArrayByChapterIdArrayApi,
    getSubForumArrayByParentForumIdArrayApi
} from 'api';

const initialState = {
    selectedForum: {},
    forumArray: [],
    subForumArray: []
};

export const GET_FORUM_BY_ID = 'GET_FORUM_BY_ID';
export const getForumById = forumId => ({
    type: GET_FORUM_BY_ID,
    payload: {forumId}
});

export const GET_FORUM_BY_ID_SUCCESS = 'GET_FORUM_BY_ID_SUCCESS';
export const getForumByIdSuccess = selectedForum => ({
    type: GET_FORUM_BY_ID_SUCCESS,
    payload: {selectedForum}
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

export const GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY = 'GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY';
export const getSubForumArrayByParentForumIdArray = parentForumIdArray => ({
    type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
    payload: {parentForumIdArray}
});

export const GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS = 'GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS';
export const getSubForumArrayByParentForumIdArraySuccess = subForumArray => ({
    type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
    payload: {subForumArray}
});

export const sharedReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_FORUM_BY_ID_SUCCESS:
            return {...state, selectedForum: payload.selectedForum};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return {...state, subForumArray: payload.subForumArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumByIdSaga() {
    while (true) {
        const {payload} = yield take(GET_FORUM_BY_ID);
        const selectedForum = yield call(getForumByIdApi, payload.forumId);
        yield put(getForumByIdSuccess(selectedForum));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArrayNonBlockSaga(chapterIdArray) {
    const forumArray = yield call(getForumArrayByChapterIdArrayApi, chapterIdArray);
    yield put(getForumArrayByChapterIdArraySuccess(forumArray));
    const forumsIdArray = forumArray.reduce((previous, current) => [...previous, current.id], []);
    yield put(getSubForumArrayByParentForumIdArray(forumsIdArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY);
        yield fork(getForumsByChapterIdArrayNonBlockSaga, payload.chapterIdArray);
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getSubForumsByParentForumIdArrayNonBlockSaga(parentForumIdArray) {
    const forumArray = yield call(getSubForumArrayByParentForumIdArrayApi, parentForumIdArray);
    yield put(getSubForumArrayByParentForumIdArraySuccess(forumArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getSubForumsByParentForumIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY);
        yield fork(getSubForumsByParentForumIdArrayNonBlockSaga, payload.parentForumIdArray);
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* sharedSaga() {
    yield all([
        getForumByIdSaga(),
        getForumsByChapterIdArraySaga(),
        getSubForumsByParentForumIdArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/