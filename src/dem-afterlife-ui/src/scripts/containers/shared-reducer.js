import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getForumByIdApi,
    getForumArrayByChapterIdArrayApi,
    getForumArrayByParentForumIdArrayApi
} from 'api';
import {addObjectToArrayMatchingById, mergeTwoArrayOfObjectsMatchingById} from 'utils';

const initialState = {
    forumArray: []
};

export const GET_FORUM_BY_ID = 'GET_FORUM_BY_ID';
export const getForumById = forumId => ({
    type: GET_FORUM_BY_ID,
    payload: {forumId}
});

export const GET_FORUM_BY_ID_SUCCESS = 'GET_FORUM_BY_ID_SUCCESS';
export const getForumByIdSuccess = forum => ({
    type: GET_FORUM_BY_ID_SUCCESS,
    payload: {forum}
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

export const GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY = 'GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY';
export const getForumArrayByParentForumIdArray = parentForumIdArray => ({
    type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
    payload: {parentForumIdArray}
});

export const GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS = 'GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS';
export const getForumArrayByParentForumIdArraySuccess = forumArray => ({
    type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
    payload: {forumArray}
});

export const sharedReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_FORUM_BY_ID_SUCCESS:
            return {...state, forumArray: addObjectToArrayMatchingById(state.forumArray, payload.forum)};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
        case GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return {...state, forumArray: mergeTwoArrayOfObjectsMatchingById(state.forumArray, payload.forumArray)};
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
        const forum = yield call(getForumByIdApi, payload.forumId);
        yield put(getForumByIdSuccess(forum));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArrayNonBlockSaga(chapterIdArray) {
    const forumArray = yield call(getForumArrayByChapterIdArrayApi, chapterIdArray);
    yield put(getForumArrayByChapterIdArraySuccess(forumArray));
    const forumsIdArray = forumArray.reduce((previous, current) => [...previous, current.id], []);
    yield put(getForumArrayByParentForumIdArray(forumsIdArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByChapterIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY);
        yield fork(getForumsByChapterIdArrayNonBlockSaga, payload.chapterIdArray);
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByParentForumIdArrayNonBlockSaga(parentForumIdArray) {
    const forumArray = yield call(getForumArrayByParentForumIdArrayApi, parentForumIdArray);
    yield put(getForumArrayByParentForumIdArraySuccess(forumArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByParentForumIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY);
        yield fork(getForumsByParentForumIdArrayNonBlockSaga, payload.parentForumIdArray);
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* sharedSaga() {
    yield all([
        getForumByIdSaga(),
        getForumsByChapterIdArraySaga(),
        getForumsByParentForumIdArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/