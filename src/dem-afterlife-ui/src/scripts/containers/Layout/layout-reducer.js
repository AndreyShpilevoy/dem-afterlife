import {call, put, take} from 'redux-saga/effects';
import getLocaleApi from 'api/__fakeApi__/localeApi';

const initialState = {
    locale: 'en'
};

export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({type: GET_LOCALE});

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = locale => ({
    type: GET_LOCALE_SUCCESS,
    payload: {locale}
});

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
export function* getLocaleSaga() {
    while (true) {
        yield take(GET_LOCALE);
        const locale = yield call(getLocaleApi);
        yield put(getLocaleSuccess(locale));
    }
}
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/

export const layoutReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LOCALE_SUCCESS:
            return {...state, locale: payload.locale};
        default:
            break;
    }
    return state;
};