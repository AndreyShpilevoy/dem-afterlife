/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {getLocaleApi, getNavigationLinkArrayApi, getSocialMediaLinkArrayApi} from 'api';
import IsPromise from 'tools/testHelper';
import {
    getLocale,
    getLocaleSuccess,
    getLocaleSaga,
    layoutReducer,
    GET_LOCALE,
    GET_LOCALE_SUCCESS,
    getNavigationLinkArray,
    getNavigationLinkArraySuccess,
    getSocialMediaLinkArray,
    getSocialMediaLinkArraySuccess,
    GET_NAVIGATIONLINKARRAY,
    GET_NAVIGATIONLINKARRAY_SUCCESS,
    GET_SOCIALMEDIALINKARRAY,
    GET_SOCIALMEDIALINKARRAY_SUCCESS,
    getNavigationLinkArraySaga,
    getSocialMediaLinkArraySaga,
    layoutSaga
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

    it('getNavigationLinkArray should create expected object', () => {
        const expectedResult = {type: GET_NAVIGATIONLINKARRAY};
        expect(getNavigationLinkArray()).toEqual(expectedResult);
    });

    it('getNavigationLinkArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_NAVIGATIONLINKARRAY_SUCCESS,
            payload: {navigationLinkArray: [{id: 1, title: 'Conference', href: '/', order: 1}] }
        };
        expect(getNavigationLinkArraySuccess([{id: 1, title: 'Conference', href: '/', order: 1}])).toEqual(expectedResult);
    });

    it('getSocialMediaLinkArray should create expected object', () => {
        const expectedResult = {type: GET_SOCIALMEDIALINKARRAY};
        expect(getSocialMediaLinkArray()).toEqual(expectedResult);
    });

    it('getSocialMediaLinkArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_SOCIALMEDIALINKARRAY_SUCCESS,
            payload: {socialMediaLinkArray: [{id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1}] }
        };
        expect(getSocialMediaLinkArraySuccess([{id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1}])).toEqual(expectedResult);
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

    it('layoutReducer with action GET_SOCIALMEDIALINKARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            locale: 'en'
        };
        const action = {
            type: GET_SOCIALMEDIALINKARRAY_SUCCESS,
            payload: {
                socialMediaLinkArray: [
                    {id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1},
                    {id: 2, title: 'VK - Ex Machina group', svgImageName: 'Vk', href: 'https://vk.com/exmachina2', order: 2}
                ] }
        };
        const expectedResult = {
            locale: 'en',
            socialMediaLinkArray: [
                {id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1},
                {id: 2, title: 'VK - Ex Machina group', svgImageName: 'Vk', href: 'https://vk.com/exmachina2', order: 2}
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

    it('getSocialMediaLinkArraySaga first yeald should return TAKE pattern "GET_SOCIALMEDIALINKARRAY"', () => {
        const generator = getSocialMediaLinkArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_SOCIALMEDIALINKARRAY);
    });

    it('getSocialMediaLinkArraySaga second yeald should return CALL to function "getSocialMediaLinkArrayApi"', () => {
        const generator = getSocialMediaLinkArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getSocialMediaLinkArrayApi);
    });

    it('getSocialMediaLinkArraySaga third yeald should return PUT action.type "GET_SOCIALMEDIALINKARRAY_SUCCESS"', () => {
        const generator = getSocialMediaLinkArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getSocialMediaLinkArrayApi()).value.PUT.action.type).toEqual(GET_SOCIALMEDIALINKARRAY_SUCCESS);
    });

    it('getSocialMediaLinkArraySaga third yeald should return PUT action..payload.socialMediaLinkArray that is a Promise', () => {
        const generator = getSocialMediaLinkArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getSocialMediaLinkArrayApi()).value.PUT.action.payload.socialMediaLinkArray)).toBeTruthy();
    });

    it('getSocialMediaLinkArraySaga fourth yeald should return the same result as first', () => {
        const generator = getSocialMediaLinkArraySaga();
        const expectedResult = generator.next();
        generator.next();
        generator.next(getSocialMediaLinkArrayApi());
        expect(generator.next()).toEqual(expectedResult);
    });

    it('should return 3 Sagas from default generator', () => {
        const generator = layoutSaga();
        expect(generator.next().value.length).toEqual(3);
    });
});
