import { call, put, take } from 'redux-saga/effects';
import getLocaleApi from 'api/__fakeApi__/localeApi';

const initialState = {
    locale: 'en'
};

export const GET_LOCALE = 'GET_LOCALE';
export const getLocale = () => ({ type: GET_LOCALE });

export const GET_LOCALE_SUCCESS = 'GET_LOCALE_SUCCESS';
export const getLocaleSuccess = (locale) => ({
    type: GET_LOCALE_SUCCESS,
    payload: { locale }
});

export function* getLocaleSaga() {
    while (true) {
        yield take(GET_LOCALE);
        const {locale} = yield call(getLocaleApi);
        yield put(getLocaleSuccess(locale));
    }
}

export const layoutReducer = (state = initialState, {type, payload}) => {
    let localState = state;
    switch (type) {
        case GET_LOCALE_SUCCESS:
            localState = {...state, locale: payload.locale };
    }
    return localState;
};