/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {getLocaleApi, getNavigationLinkArrayApi} from 'api';
import IsPromise from 'tools/testHelper';
import {
    getLocale,
    getLocaleSuccess,
    getLocaleSaga,
    layoutReducer,
    GET_LOCALE,
    GET_LOCALE_SUCCESS,
    getnavigationLinkArray,
    getnavigationLinkArraySuccess,
    GET_NAVIGATIONLINKARRAY,
    GET_NAVIGATIONLINKARRAY_SUCCESS,
    getNavigationLinkArraySaga
} from './layout-reducer';

Date.now = jest.genMockFunction().mockReturnValue(1492003118322);

describe('Layout reducer', () => {
    it('getLocale should create expected object', () => {
        const expectedResult = {type: GET_LOCALE};
        expect(getLocale()).toEqual(expectedResult);
    });

    it('getLocaleSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_LOCALE_SUCCESS,
            payload: {locale: 'ru'}
        };
        expect(getLocaleSuccess('ru')).toEqual(expectedResult);
    });

    it('getnavigationLinkArray should create expected object', () => {
        const expectedResult = {type: GET_NAVIGATIONLINKARRAY};
        expect(getnavigationLinkArray()).toEqual(expectedResult);
    });

    it('getnavigationLinkArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_NAVIGATIONLINKARRAY_SUCCESS,
            payload: {navigationLinkArray: [{id: 1, title: 'Conference', href: '/', order: 1}] }
        };
        expect(getnavigationLinkArraySuccess([{id: 1, title: 'Conference', href: '/', order: 1}])).toEqual(expectedResult);
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

    it('layoutReducer with action GET_NAVIGATIONLINKARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            locale: 'en',
            navigationLinkArray: []
        };
        const action = {
            type: GET_NAVIGATIONLINKARRAY_SUCCESS,
            payload: {
                navigationLinkArray: [
                    {id: 1, title: 'Conference', href: '/', order: 1},
                    {id: 2, title: 'Link 2 autogen', href: '/', order: 2},
                    {id: 3, title: 'Link 3 autogen', href: '/', order: 3},
                    {id: 4, title: 'Link 4 autogen', href: '/', order: 4},
                    {id: 5, title: 'Link 5 autogen', href: '/', order: 5}
                ] }
        };
        const expectedResult = {
            locale: 'en',
            navigationLinkArray: [
                {id: 1, title: 'Conference', href: '/', order: 1},
                {id: 2, title: 'Link 2 autogen', href: '/', order: 2},
                {id: 3, title: 'Link 3 autogen', href: '/', order: 3},
                {id: 4, title: 'Link 4 autogen', href: '/', order: 4},
                {id: 5, title: 'Link 5 autogen', href: '/', order: 5}
            ]
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

        expect(generator.next().value.TAKE.pattern).toEqual(GET_LOCALE);
    });

    it('getLocaleSaga second yeald should return CALL to function "getLocaleApi"', () => {
        const generator = getLocaleSaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getLocaleApi);
    });

    it('getLocaleSaga third yeald should return PUT action.type "GET_LOCALE_SUCCESS"', () => {
        const generator = getLocaleSaga();

        generator.next();
        generator.next();
        expect(generator.next(getLocaleApi()).value.PUT.action.type).toEqual(GET_LOCALE_SUCCESS);
    });

    it('getLocaleSaga third yeald should return PUT action.payload.locale that is a Promise', () => {
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

    it('getNavigationLinkArraySaga first yeald should return TAKE pattern "GET_NAVIGATIONLINKARRAY"', () => {
        const generator = getNavigationLinkArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_NAVIGATIONLINKARRAY);
    });

    it('getNavigationLinkArraySaga second yeald should return CALL to function "getNavigationLinkArrayApi"', () => {
        const generator = getNavigationLinkArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getNavigationLinkArrayApi);
    });

    it('getNavigationLinkArraySaga third yeald should return PUT action.type "GET_NAVIGATIONLINKARRAY_SUCCESS"', () => {
        const generator = getNavigationLinkArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getNavigationLinkArrayApi()).value.PUT.action.type).toEqual(GET_NAVIGATIONLINKARRAY_SUCCESS);
    });

    it('getNavigationLinkArraySaga third yeald should return PUT action..payload.navigationLinkArray that is a Promise', () => {
        const generator = getNavigationLinkArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getNavigationLinkArrayApi()).value.PUT.action.payload.navigationLinkArray)).toBeTruthy();
    });

    it('getNavigationLinkArraySaga fourth yeald should return the same result as first', () => {
        const generator = getNavigationLinkArraySaga();
        const expectedResult = generator.next();
        generator.next();
        generator.next(getNavigationLinkArrayApi());
        expect(generator.next()).toEqual(expectedResult);
    });
});
