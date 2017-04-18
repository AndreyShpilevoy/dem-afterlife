import {call, put, take} from 'redux-saga/effects';
import {getLocaleApi, getNavigationLinkArrayApi} from 'api';

const initialState = {
    locale: 'en',
    navigationLinkArray: []
};

export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({type: GET_LOCALE});

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = locale => ({
    type: GET_LOCALE_SUCCESS,
    payload: {locale}
});

export const GET_NAVIGATIONLINKARRAY = 'GET_NAVIGATIONLINKARRAY';
export const getnavigationLinkArray = () => ({type: GET_NAVIGATIONLINKARRAY});

export const GET_NAVIGATIONLINKARRAY_SUCCESS = 'GET_NAVIGATIONLINKARRAY_SUCCESS';
export const getnavigationLinkArraySuccess = navigationLinkArray => ({
    type: GET_NAVIGATIONLINKARRAY_SUCCESS,
    payload: {navigationLinkArray}
});

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
export function* getLocaleSaga() {
    while (true) {
        yield take(GET_LOCALE);
        const locale = yield call(getLocaleApi);
        yield put(getLocaleSuccess(locale));
    }
}

export function* getNavigationLinkArraySaga() {
    while (true) {
        yield take(GET_NAVIGATIONLINKARRAY);
        const navigationLinkArray = yield call(getNavigationLinkArrayApi);
        yield put(getnavigationLinkArraySuccess(navigationLinkArray));
    }
}
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/

export const layoutReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LOCALE_SUCCESS:
            return {...state, locale: payload.locale};
        case GET_NAVIGATIONLINKARRAY_SUCCESS:
            return {...state, navigationLinkArray: payload.navigationLinkArray};
        default:
            break;
    }
    return state;
};