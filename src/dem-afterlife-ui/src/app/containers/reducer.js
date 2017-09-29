import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getLocaleApi,
    getForumByIdApi,
    getForumArrayByChapterIdArrayApi,
    getForumArrayByParentForumIdApi,
    getSubForumArrayByParentForumIdArrayApi,
    getForumBreadcrumbsArrayByForumIdApi,
    getTopicBreadcrumbsArrayByTopicIdApi
} from 'api';

const initialState = {
    locale: 'en',
    selectedForum: {},
    forumArray: [],
    subForumArray: [],
    breadcrumbArray: []
};

export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({type: GET_LOCALE});

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = locale => ({
    type: GET_LOCALE_SUCCESS,
    payload: locale
});

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

export const GET_FORUM_ARRAY_BY_PARENT_FORUM_ID = 'GET_FORUM_ARRAY_BY_PARENT_FORUM_ID';
export const getForumArrayByParentForumId = parentForumId => ({
    type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID,
    payload: {parentForumId}
});

export const GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS = 'GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS';
export const getForumArrayByParentForumIdSuccess = forumArray => ({
    type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS,
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

export const GET_FORUM_BREADCRUMB_ARRAY = 'GET_FORUM_BREADCRUMB_ARRAY';
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
        case GET_LOCALE_SUCCESS:
            return {...state, locale: payload.locale};
        case GET_FORUM_BY_ID_SUCCESS:
            return {...state, selectedForum: payload.selectedForum};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
        case GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return {...state, subForumArray: payload.subForumArray};
        case GET_BREADCRUMB_ARRAY_SUCCESS:
            return {...state, breadcrumbArray: payload.breadcrumbArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getLocaleNonBlockSaga = function* () {
    const {response, error} = yield call(getLocaleApi);
    if (response) {
        yield put(getLocaleSuccess(response));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getLocaleSaga = function* () {
    for (;;) {
        yield take(GET_LOCALE);
        yield fork(getLocaleNonBlockSaga);
    }
};

export const getForumByIdNonBlockSaga = function* (forumId) {
    const {response, error} = yield call(getForumByIdApi, forumId);
    if (response) {
        yield put(getForumByIdSuccess(response));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getForumByIdSaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_FORUM_BY_ID);
        yield fork(getForumByIdNonBlockSaga, payload.forumId);
    }
};

export const getForumsByChapterIdArrayNonBlockSaga = function* (chapterIdArray) {
    const {response, error} = yield call(getForumArrayByChapterIdArrayApi, chapterIdArray);
    if (response) {
        yield put(getForumArrayByChapterIdArraySuccess(response));
        const forumsIdArray = response.map(x => x.id);
        yield put(getSubForumArrayByParentForumIdArray(forumsIdArray));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getForumsByChapterIdArraySaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY);
        yield fork(getForumsByChapterIdArrayNonBlockSaga, payload.chapterIdArray);
    }
};

export const getSubForumsByParentForumIdArrayNonBlockSaga = function* (parentForumIdArray) {
    const {response, error} = yield call(getSubForumArrayByParentForumIdArrayApi, parentForumIdArray);
    if (response) {
        yield put(getSubForumArrayByParentForumIdArraySuccess(response));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getSubForumsByParentForumIdArraySaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY);
        yield fork(getSubForumsByParentForumIdArrayNonBlockSaga, payload.parentForumIdArray);
    }
};

export const getForumsByParentForumIdNonBlockSaga = function* (parentForumId) {
    const {response, error} = yield call(getForumArrayByParentForumIdApi, parentForumId);
    if (response) {
        yield put(getForumArrayByParentForumIdSuccess(response));
        const forumsIdArray = response.map(x => x.id);
        yield put(getSubForumArrayByParentForumIdArray(forumsIdArray));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getForumsByParentForumIdSaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_FORUM_ARRAY_BY_PARENT_FORUM_ID);
        yield fork(getForumsByParentForumIdNonBlockSaga, payload.parentForumId);
    }
};

export const getForumBreadcrumbArrayNonBlockSaga = function* (forumId) {
    const {response, error} = yield call(getForumBreadcrumbsArrayByForumIdApi, forumId);
    if (response) {
        yield put(getBreadcrumbArraySuccess(response));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getForumBreadcrumbArraySaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_FORUM_BREADCRUMB_ARRAY);
        yield fork(getForumBreadcrumbArrayNonBlockSaga, payload.forumId);
    }
};

export const getTopicBreadcrumbArrayNonBlockSaga = function* (topicId) {
    const {response, error} = yield call(getTopicBreadcrumbsArrayByTopicIdApi, topicId);
    if (response) {
        yield put(getBreadcrumbArraySuccess(response));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getTopicBreadcrumbArraySaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_TOPIC_BREADCRUMB_ARRAY);
        yield fork(getTopicBreadcrumbArrayNonBlockSaga, payload.topicId);
    }
};

export const sharedSaga = function* () {
    yield all([
        getLocaleSaga(),
        getForumByIdSaga(),
        getForumsByChapterIdArraySaga(),
        getForumsByParentForumIdSaga(),
        getSubForumsByParentForumIdArraySaga(),
        getForumBreadcrumbArraySaga(),
        getTopicBreadcrumbArraySaga()
    ]);
};

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */