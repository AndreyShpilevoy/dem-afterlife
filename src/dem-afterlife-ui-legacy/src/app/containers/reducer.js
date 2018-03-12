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
    pagination: {
        pageNumber: 1,
        pageSize: 20,
        totalItemsCount: 0
    },
    selectedForum: {},
    forumArray: [],
    subForumArray: [],
    breadcrumbArray: []
};

// region Locale
export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({type: GET_LOCALE});

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = locale => ({
    type: GET_LOCALE_SUCCESS,
    payload: locale
});

export const localeReducer = (state, {type, payload}) => {
    switch (type) {
        case GET_LOCALE_SUCCESS:
            return {...state, locale: payload.locale};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getLocaleNonBlockSaga = function* () {
    const {response, error} = yield call(getLocaleApi);
    if (response) {
        yield put(getLocaleSuccess(response.data));
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
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
// endregion

// region Forum
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

export const forumReducer = (state, {type, payload}) => {
    switch (type) {
        case GET_FORUM_BY_ID_SUCCESS:
            return {...state, selectedForum: payload.selectedForum};
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
        case GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS:
            return {...state, forumArray: payload.forumArray};
        case GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return {...state, subForumArray: payload.subForumArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getForumByIdNonBlockSaga = function* (forumId) {
    const {response, error} = yield call(getForumByIdApi, forumId);
    if (response) {
        yield put(getForumByIdSuccess(response.data));
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
        const {data} = response;
        yield put(getForumArrayByChapterIdArraySuccess(data));
        const forumsIdArray = data.map(x => x.id);
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
        yield put(getSubForumArrayByParentForumIdArraySuccess(response.data));
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
        const {data} = response;
        yield put(getForumArrayByParentForumIdSuccess(data));
        const forumsIdArray = data.map(x => x.id);
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
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
// endregion

// region Breadcrumb
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

export const breadcrumbReducer = (state, {type, payload}) => {
    switch (type) {
        case GET_BREADCRUMB_ARRAY_SUCCESS:
            return {...state, breadcrumbArray: payload.breadcrumbArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getForumBreadcrumbArrayNonBlockSaga = function* (forumId) {
    const {response, error} = yield call(getForumBreadcrumbsArrayByForumIdApi, forumId);
    if (response) {
        yield put(getBreadcrumbArraySuccess(response.data));
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
        yield put(getBreadcrumbArraySuccess(response.data));
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
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
// endregion

// region Pagination
export const SET_PAGINATION_PAGE_SIZE = 'SET_PAGINATION_PAGE_SIZE';
export const setPaginationPageSize = pageSize => ({
    type: SET_PAGINATION_PAGE_SIZE,
    payload: {pageSize}
});

export const SET_PAGINATION_PAGE_NUMBER = 'SET_PAGINATION_PAGE_NUMBER';
export const setPaginationPageNumber = pageNumber => ({
    type: SET_PAGINATION_PAGE_NUMBER,
    payload: {pageNumber}
});

export const SET_PAGINATION_TOTAL_ITEMS_COUNT = 'SET_PAGINATION_TOTAL_ITEMS_COUNT';
export const setPaginationTotalItemsCount = totalItemsCount => ({
    type: SET_PAGINATION_TOTAL_ITEMS_COUNT,
    payload: {totalItemsCount}
});

export const paginationReducer = (state, {type, payload}) => {
    switch (type) {
        case SET_PAGINATION_PAGE_SIZE:
            return {...state, pageSize: payload.pageSize};
        case SET_PAGINATION_PAGE_NUMBER:
            return {...state, pageNumber: payload.pageNumber};
        case SET_PAGINATION_TOTAL_ITEMS_COUNT:
            return {...state, totalItemsCount: payload.totalItemsCount};
        default:
            break;
    }
    return state;
};

// endregion

/* eslint-disable complexity */
export const sharedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCALE_SUCCESS:
            return localeReducer(state, action);
        case GET_FORUM_BY_ID_SUCCESS:
        case GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS:
        case GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_SUCCESS:
        case GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS:
            return forumReducer(state, action);
        case GET_BREADCRUMB_ARRAY_SUCCESS:
            return breadcrumbReducer(state, action);
        case SET_PAGINATION_PAGE_SIZE:
        case SET_PAGINATION_PAGE_NUMBER:
        case SET_PAGINATION_TOTAL_ITEMS_COUNT:
            return {...state, pagination: paginationReducer(state.pagination, action)};
        default:
            break;
    }
    return state;
};
/* eslint-enable complexity */

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
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