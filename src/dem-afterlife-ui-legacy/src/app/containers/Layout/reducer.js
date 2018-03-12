import {all, call, put, take, fork} from 'redux-saga/effects';
import {
    getNavigationLinkArrayApi,
    getSocialMediaLinkArrayApi
} from 'api';

const initialState = {
    navigationLinkArray: [],
    socialMediaLinkArray: []
};

export const GET_NAVIGATION_LINK_ARRAY = 'GET_NAVIGATION_LINK_ARRAY';
export const getNavigationLinkArray = () => ({type: GET_NAVIGATION_LINK_ARRAY});

export const GET_NAVIGATION_LINK_ARRAY_SUCCESS = 'GET_NAVIGATION_LINK_ARRAY_SUCCESS';
export const getNavigationLinkArraySuccess = navigationLinkArray => ({
    type: GET_NAVIGATION_LINK_ARRAY_SUCCESS,
    payload: {navigationLinkArray}
});

export const GET_SOCIAL_MEDIA_LINK_ARRAY = 'GET_SOCIAL_MEDIA_LINK_ARRAY';
export const getSocialMediaLinkArray = () => ({type: GET_SOCIAL_MEDIA_LINK_ARRAY});

export const GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS = 'GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS';
export const getSocialMediaLinkArraySuccess = socialMediaLinkArray => ({
    type: GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS,
    payload: {socialMediaLinkArray}
});

export const layoutReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_NAVIGATION_LINK_ARRAY_SUCCESS:
            return {...state, navigationLinkArray: payload.navigationLinkArray};
        case GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS:
            return {...state, socialMediaLinkArray: payload.socialMediaLinkArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getNavigationLinkArrayNonBlockSaga = function* () {
    const {response, error} = yield call(getNavigationLinkArrayApi);
    if (response) {
        yield put(getNavigationLinkArraySuccess(response.data));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getNavigationLinkArraySaga = function* () {
    for (;;) {
        yield take(GET_NAVIGATION_LINK_ARRAY);
        yield fork(getNavigationLinkArrayNonBlockSaga);
    }
};
export const getSocialMediaLinkArrayNonBlockSaga = function* () {
    const {response, error} = yield call(getSocialMediaLinkArrayApi);
    if (response) {
        yield put(getSocialMediaLinkArraySuccess(response.data));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getSocialMediaLinkArraySaga = function* () {
    for (;;) {
        yield take(GET_SOCIAL_MEDIA_LINK_ARRAY);
        yield fork(getSocialMediaLinkArrayNonBlockSaga);
    }
};

export const layoutSaga = function* () {
    yield all([
        getNavigationLinkArraySaga(),
        getSocialMediaLinkArraySaga()
    ]);
};

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */