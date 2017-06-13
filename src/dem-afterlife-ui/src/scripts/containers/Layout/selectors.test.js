/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {
    navigationLinkArraySelector,
    socialMediaLinkArraySelector,
    sortedNavigationLinkSelector,
    sortedSocialMediaLinkSelector
} from './selectors';

describe('Conference selectors', () => {
    it('navigationLinkArraySelector should return expected array', () => {
        const state = {
            layoutReducer: {
                navigationLinkArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ]
            }
        };
        const expectedResult = state.layoutReducer.navigationLinkArray;
        expect(navigationLinkArraySelector(state)).toEqual(expectedResult);
    });

    it('socialMediaLinkArraySelector should return expected array', () => {
        const state = {
            layoutReducer: {
                socialMediaLinkArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ]
            }
        };
        const expectedResult = state.layoutReducer.socialMediaLinkArray;
        expect(socialMediaLinkArraySelector(state)).toEqual(expectedResult);
    });

    it('sortednavigationLinkArraySelector should return expected sorted array', () => {
        const state = {
            layoutReducer: {
                navigationLinkArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ]
            }
        };
        const expectedResult = [
            {id: 1, order: 1},
            {id: 2, order: 2},
            {id: 3, order: 3}
        ];
        expect(sortedNavigationLinkSelector(state)).toEqual(expectedResult);
    });

    it('sortedsocialMediaLinkArraySelector should return expected sorted array', () => {
        const state = {
            layoutReducer: {
                socialMediaLinkArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ]
            }
        };
        const expectedResult = [
            {id: 1, order: 1},
            {id: 2, order: 2},
            {id: 3, order: 3}
        ];
        expect(sortedSocialMediaLinkSelector(state)).toEqual(expectedResult);
    });
});