import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getForumByIdApi,
    getForumArrayByChapterIdArrayApi,
    getSubForumArrayByParentForumIdArrayApi,
    getForumBreadcrumbsArrayByForumIdApi,
    getTopicBreadcrumbsArrayByTopicIdApi
} from 'api';

const initialState = {
    selectedForum: {},
    forumArray: [],
    subForumArray: [],
    breadcrumbArray: []
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

export const GET_BREADCRUMB_ARRAY_SUCCESS = 'GET_BREADCRUMB_ARRAY_SUCCESS';
export const getBreadcrumbArraySuccess = breadcrumbArray => {
    const conferenceBreadcrumb = {
        path: '/Conference',
        title: 'Conference',
        order: 1
    };
    return {
        type: GET_BREADCRUMB_ARRAY_SUCCESS,
        payload: {breadcrumbArray: [conferenceBreadcrumb, ...breadcrumbArray] }
    };
};

export const getConferenceBreadcrumbs = () => getBreadcrumbArraySuccess([]);

export const GET_FORUM_BREADCRUMB_ARRAY = 'GET_FORUM_BREADCRUMBS_SUCCESS';
export const getForumBreadcrumbArray = forumId => ({
    type: GET_FORUM_BREADCRUMB_ARRAY,
    payload: {forumId}
});

export const GET_TOPIC_BREADCRUMB_ARRAY = 'GET_TOPIC_BREADCRUMB_ARRAY';
export const getTopicBreadcrumbArray = topicId => ({
    type: GET_TOPIC_BREADCRUMB_ARRAY,
    payload: {topicId}
});

export const sharedReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_FORUM_BY_ID_SUCCESS:
            return {...state, selectedForum: payload.selectedForum};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return {...state, subForumArray: payload.forumArray};
        case GET_BREADCRUMB_ARRAY_SUCCESS:
            return {...state, breadcrumbArray: payload.breadcrumbArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */
export function* getForumByIdSaga() {
    for (;;) {
        const {payload} = yield take(GET_FORUM_BY_ID);
        const selectedForum = yield call(getForumByIdApi, payload.forumId);
        yield put(getForumByIdSuccess(selectedForum));
    }
}

export function* getForumsByChapterIdArrayNonBlockSaga(chapterIdArray) {
    const forumArray = yield call(getForumArrayByChapterIdArrayApi, chapterIdArray);
    yield put(getForumArrayByChapterIdArraySuccess(forumArray));
    const forumsIdArray = forumArray.map(x => x.id);
    yield put(getForumArrayByParentForumIdArray(forumsIdArray));
}

export function* getForumsByChapterIdArraySaga() {
    for (;;) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY);
        yield fork(getForumsByChapterIdArrayNonBlockSaga, payload.chapterIdArray);
    }
}

export function* getForumsByParentForumIdArrayNonBlockSaga(parentForumIdArray) {
    const forumArray = yield call(getSubForumArrayByParentForumIdArrayApi, parentForumIdArray);
    yield put(getForumArrayByParentForumIdArraySuccess(forumArray));
}

export function* getForumsByParentForumIdArraySaga() {
    for (;;) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY);
        yield fork(getForumsByParentForumIdArrayNonBlockSaga, payload.parentForumIdArray);
    }
}

export function* getForumBreadcrumbArraySaga() {
    for (;;) {
        const {payload} = yield take(GET_FORUM_BREADCRUMB_ARRAY);
        const breadcrumbArray = yield call(getForumBreadcrumbsArrayByForumIdApi, payload.forumId);
        yield put(getBreadcrumbArraySuccess(breadcrumbArray));
    }
}

export function* getTopicBreadcrumbArraySaga() {
    for (;;) {
        const {payload} = yield take(GET_TOPIC_BREADCRUMB_ARRAY);
        const breadcrumbArray = yield call(getTopicBreadcrumbsArrayByTopicIdApi, payload.topicId);
        yield put(getBreadcrumbArraySuccess(breadcrumbArray));
    }
}

export function* sharedSaga() {
    yield all([
        getForumByIdSaga(),
        getForumsByChapterIdArraySaga(),
        getForumsByParentForumIdArraySaga(),
        getForumBreadcrumbArraySaga(),
        getTopicBreadcrumbArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */