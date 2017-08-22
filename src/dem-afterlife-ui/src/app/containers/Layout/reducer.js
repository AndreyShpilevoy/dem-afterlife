import {all, call, put, take} from 'redux-saga/effects';
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

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */
export function* getNavigationLinkArraySaga() {
    for (;;) {
        yield take(GET_NAVIGATION_LINK_ARRAY);
        const navigationLinkArray = yield call(getNavigationLinkArrayApi);
        yield put(getNavigationLinkArraySuccess(navigationLinkArray));
    }
}

export function* getSocialMediaLinkArraySaga() {
    for (;;) {
        yield take(GET_SOCIAL_MEDIA_LINK_ARRAY);
        const socialMediaLinkArray = yield call(getSocialMediaLinkArrayApi);
        yield put(getSocialMediaLinkArraySuccess(socialMediaLinkArray));
    }
}

export function* layoutSaga() {
    yield all([
        getNavigationLinkArraySaga(),
        getSocialMediaLinkArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */