import {call, put, take} from 'redux-saga/effects';
import {getLocaleApi, getNavigationLinkArrayApi, getSocialMediaLinkArrayApi} from 'api';

const initialState = {
    locale: 'en',
    navigationLinkArray: [],
    socialMediaLinkArray: []
};

export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({type: GET_LOCALE});

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = locale => ({
    type: GET_LOCALE_SUCCESS,
    payload: {locale}
});

export const GET_NAVIGATIONLINKARRAY = 'GET_NAVIGATIONLINKARRAY';
export const getNavigationLinkArray = () => ({type: GET_NAVIGATIONLINKARRAY});

export const GET_NAVIGATIONLINKARRAY_SUCCESS = 'GET_NAVIGATIONLINKARRAY_SUCCESS';
export const getNavigationLinkArraySuccess = navigationLinkArray => ({
    type: GET_NAVIGATIONLINKARRAY_SUCCESS,
    payload: {navigationLinkArray}
});

export const GET_SOCIALMEDIALINKARRAY = 'GET_SOCIALMEDIALINKARRAY';
export const getSocialMediaLinkArray = () => ({type: GET_SOCIALMEDIALINKARRAY});

export const GET_SOCIALMEDIALINKARRAY_SUCCESS = 'GET_SOCIALMEDIALINKARRAY_SUCCESS';
export const getSocialMediaLinkArraySuccess = socialMediaLinkArray => ({
    type: GET_SOCIALMEDIALINKARRAY_SUCCESS,
    payload: {socialMediaLinkArray}
});

export const layoutReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LOCALE_SUCCESS:
            return {...state, locale: payload.locale};
        case GET_NAVIGATIONLINKARRAY_SUCCESS:
            return {...state, navigationLinkArray: payload.navigationLinkArray};
        case GET_SOCIALMEDIALINKARRAY_SUCCESS:
            return {...state, socialMediaLinkArray: payload.socialMediaLinkArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getLocaleSaga() {
    while (true) {
        yield take(GET_LOCALE);
        const locale = yield call(getLocaleApi);
        yield put(getLocaleSuccess(locale));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getNavigationLinkArraySaga() {
    while (true) {
        yield take(GET_NAVIGATIONLINKARRAY);
        const navigationLinkArray = yield call(getNavigationLinkArrayApi);
        yield put(getNavigationLinkArraySuccess(navigationLinkArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getSocialMediaLinkArraySaga() {
    while (true) {
        yield take(GET_SOCIALMEDIALINKARRAY);
        const socialMediaLinkArray = yield call(getSocialMediaLinkArrayApi);
        yield put(getSocialMediaLinkArraySuccess(socialMediaLinkArray));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* layoutSaga() {
    yield [
        getLocaleSaga(),
        getNavigationLinkArraySaga(),
        getSocialMediaLinkArraySaga()
    ];
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/