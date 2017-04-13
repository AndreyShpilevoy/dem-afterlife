/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import getLocaleApi from 'api/__fakeApi__/localeApi';
import IsPromise from 'tools/testHelper';
import {
    getLocale,
    getLocaleSuccess,
    getLocaleSaga,
    layoutReducer,
    GET_LOCALE,
    GET_LOCALE_SUCCESS
} from './layout-reducer';

Date.now = jest.genMockFunction().mockReturnValue(1492003118322);

describe('Layout reducer', () => {
    it('getLocale should create expected object', () => {
        const expectedResult = {type: 'GET_LOCALE'};
        expect(getLocale()).toEqual(expectedResult);
    });

    it('getLocaleSuccess should create expected object', () => {
        const expectedResult = {
            type: 'GET_LOCALE_SUCCESS',
            payload: {locale: 'ru'}
        };
        expect(getLocaleSuccess('ru')).toEqual(expectedResult);
    });

    it('layoutReducer with action GET_LOCALE_SUCCESS should return expected state', () => {
        const defaulState = {
            locale: 'en'
        };
        const action = {
            type: GET_LOCALE_SUCCESS,
            payload: {locale: 'ru'}
        };
        const expectedResult = {
            locale: 'ru'
        };
        expect(layoutReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('layoutReducer with invald (GET_LOCALE) action should return expected state', () => {
        const defaulState = {
            locale: 'en'
        };
        const action = {
            type: GET_LOCALE,
            payload: 'ru'
        };
        const expectedResult = {
            locale: 'en'
        };
        expect(layoutReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('getLocaleSaga first yeald should return TAKE pattern "GET_LOCALE"', () => {
        const generator = getLocaleSaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_LOCALE');
    });

    it('getLocaleSaga second yeald should return CALL to function "LocaleApi.getLocale"', () => {
        const generator = getLocaleSaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getLocaleApi);
    });

    it('getLocaleSaga third yeald should return PUT action.type "GET_LOCALE_SUCCESS"', () => {
        const generator = getLocaleSaga();

        generator.next();
        generator.next();
        expect(generator.next(getLocaleApi()).value.PUT.action.type).toEqual('GET_LOCALE_SUCCESS');
    });

    it('getLocaleSaga third yeald should return PUT action.currentLocale that is a Promise', () => {
        const generator = getLocaleSaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getLocaleApi()).value.PUT.action.payload.locale)).toBeTruthy();
    });

    it('getLocaleSaga fourth yeald should return the same result as first', () => {
        const generator = getLocaleSaga();
        const expectedResult = generator.next();
        generator.next();
        generator.next(getLocaleApi());
        expect(generator.next()).toEqual(expectedResult);
    });
});
