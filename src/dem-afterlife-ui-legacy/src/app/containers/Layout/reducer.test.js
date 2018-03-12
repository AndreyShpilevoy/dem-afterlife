/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements:0 */

import {
    layoutReducer,
    getNavigationLinkArray,
    getNavigationLinkArraySuccess,
    getSocialMediaLinkArray,
    getSocialMediaLinkArraySuccess,
    GET_NAVIGATION_LINK_ARRAY,
    GET_NAVIGATION_LINK_ARRAY_SUCCESS,
    GET_SOCIAL_MEDIA_LINK_ARRAY,
    GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS,
    getNavigationLinkArraySaga,
    getNavigationLinkArrayNonBlockSaga,
    getSocialMediaLinkArraySaga,
    getSocialMediaLinkArrayNonBlockSaga,
    layoutSaga
} from './reducer';

Date.now = jest.genMockFunction().mockReturnValue(1492003118322);

describe('Layout reducer', () => {
    it('getNavigationLinkArray should create expected object', () => {
        const expectedResult = {type: GET_NAVIGATION_LINK_ARRAY};
        expect(getNavigationLinkArray()).toEqual(expectedResult);
    });

    it('getNavigationLinkArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_NAVIGATION_LINK_ARRAY_SUCCESS,
            payload: {navigationLinkArray: [{id: 1, title: 'Conference', href: '/', order: 1}] }
        };
        expect(getNavigationLinkArraySuccess([{id: 1, title: 'Conference', href: '/', order: 1}])).toEqual(expectedResult);
    });

    it('getSocialMediaLinkArray should create expected object', () => {
        const expectedResult = {type: GET_SOCIAL_MEDIA_LINK_ARRAY};
        expect(getSocialMediaLinkArray()).toEqual(expectedResult);
    });

    it('getSocialMediaLinkArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS,
            payload: {socialMediaLinkArray: [{id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1}] }
        };
        expect(getSocialMediaLinkArraySuccess([{id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1}])).toEqual(expectedResult);
    });

    it('layoutReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            postArray: []
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            postArray: []
        };
        expect(layoutReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('layoutReducer with action GET_NAVIGATION_LINK_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
            socialMediaLinkArray: ['test'],
            navigationLinkArray: []
        };
        const action = {
            type: GET_NAVIGATION_LINK_ARRAY_SUCCESS,
            payload: {
                navigationLinkArray: [
                    {id: 1, title: 'Conference', href: '/', order: 1},
                    {id: 2, title: 'Link 2 generated', href: '/', order: 2},
                    {id: 3, title: 'Link 3 generated', href: '/', order: 3},
                    {id: 4, title: 'Link 4 generated', href: '/', order: 4},
                    {id: 5, title: 'Link 5 generated', href: '/', order: 5}
                ] }
        };
        const expectedResult = {
            socialMediaLinkArray: ['test'],
            navigationLinkArray: [
                {id: 1, title: 'Conference', href: '/', order: 1},
                {id: 2, title: 'Link 2 generated', href: '/', order: 2},
                {id: 3, title: 'Link 3 generated', href: '/', order: 3},
                {id: 4, title: 'Link 4 generated', href: '/', order: 4},
                {id: 5, title: 'Link 5 generated', href: '/', order: 5}
            ]
        };
        expect(layoutReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('layoutReducer with action GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
            navigationLinkArray: ['test']
        };
        const action = {
            type: GET_SOCIAL_MEDIA_LINK_ARRAY_SUCCESS,
            payload: {
                socialMediaLinkArray: [
                    {id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1},
                    {id: 2, title: 'VK - Ex Machina group', svgImageName: 'Vk', href: 'https://vk.com/exmachina2', order: 2}
                ] }
        };
        const expectedResult = {
            navigationLinkArray: ['test'],
            socialMediaLinkArray: [
                {id: 1, title: 'Steam - Ex Machina Community', svgImageName: 'Steam', href: 'http://steamcommunity.com/groups/Ex_Machina', order: 1},
                {id: 2, title: 'VK - Ex Machina group', svgImageName: 'Vk', href: 'https://vk.com/exmachina2', order: 2}
            ]
        };
        expect(layoutReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getNavigationLinkArraySaga should be in loop and return expected values', () => {
        const generator = getNavigationLinkArraySaga();

        const firstYield = generator.next();
        const secondYield = generator.next();
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getNavigationLinkArrayNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done', () => {
        const generator = getNavigationLinkArrayNonBlockSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({response: {data: [{id: 1}, {id: 2}] }, error: null});
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getNavigationLinkArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done', () => {
        const generator = getNavigationLinkArrayNonBlockSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({response: null, error: 'failed response'});
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getSocialMediaLinkArraySaga should be in loop and return expected values', () => {
        const generator = getSocialMediaLinkArraySaga();

        const firstYield = generator.next();
        const secondYield = generator.next();
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getSocialMediaLinkArrayNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done', () => {
        const generator = getSocialMediaLinkArrayNonBlockSaga();
        const socialMediaLinkArray = [
            {id: 1, title: 'first'},
            {id: 3, title: 'second'},
            {id: 2, title: 'third'}
        ];

        const firstYield = generator.next();
        const secondYield = generator.next({response: {data: socialMediaLinkArray}, error: null});
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getSocialMediaLinkArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done', () => {
        const generator = getSocialMediaLinkArrayNonBlockSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({response: null, error: 'failed response'});
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('default saga should return 1 yield with 2 sagas. 2 yield should be in state Done', () => {
        const generator = layoutSaga();
        expect(generator.next()).toMatchSnapshot();
        expect(generator.next()).toMatchSnapshot();
    });
});
