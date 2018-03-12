/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import {
    forumArraySelector,
    subForumArraySelector,
    sortedSubForumArraySelector,
    forumArrayWithSubForumsSelector,
    sortedForumArrayWithSubForumsSelector,
    localeSelector,
    breadcrumbArraySelector,
    sortedBreadcrumbArraySelector
} from './selectors';

describe('Shared selectors', () => {
    it('forumArraySelector should return expected array', () => {
        const state = {
            sharedReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 2, order: 2, chapterId: 3, parentForumId: null, subForumArray: [] }
                ]
            }
        };
        const expectedResult = state.sharedReducer.forumArray;
        expect(forumArraySelector(state)).toEqual(expectedResult);
    });

    it('subForumArraySelector should return expected array', () => {
        const state = {
            sharedReducer: {
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            }
        };
        const expectedResult = state.sharedReducer.subForumArray;
        expect(subForumArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedSubForumArraySelector should return expected array', () => {
        const state = {
            sharedReducer: {
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            }
        };
        const expectedResult = [
            {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] },
            {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] },
            {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] }
        ];
        expect(sortedSubForumArraySelector(state)).toEqual(expectedResult);
    });

    it('forumArrayWithSubForumsSelector should return expected array', () => {
        const state = {
            sharedReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 2, order: 2, chapterId: 3, parentForumId: null, subForumArray: [] }
                ],
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            }
        };
        const expectedResult = [
            {id: 1,
                order: 1,
                chapterId: 1,
                parentForumId: null,
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] }
                ]
            },
            {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
            {id: 2,
                order: 2,
                chapterId: 3,
                parentForumId: null,
                subForumArray: [
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            }
        ];
        expect(forumArrayWithSubForumsSelector(state)).toEqual(expectedResult);
    });

    it('sortedForumArrayWithSubForumsSelector should return expected array', () => {
        const state = {
            sharedReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 2, order: 2, chapterId: 3, parentForumId: null, subForumArray: [] }
                ],
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            }
        };
        const expectedResult = [
            {id: 1,
                order: 1,
                chapterId: 1,
                parentForumId: null,
                subForumArray: [
                    {id: 1, order: 1, chapterId: null, parentForumId: 1, subForumArray: [] }
                ]
            },
            {id: 2,
                order: 2,
                chapterId: 3,
                parentForumId: null,
                subForumArray: [
                    {id: 2, order: 2, chapterId: null, parentForumId: 2, subForumArray: [] },
                    {id: 3, order: 3, chapterId: null, parentForumId: 2, subForumArray: [] }
                ]
            },
            {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] }
        ];
        expect(sortedForumArrayWithSubForumsSelector(state)).toEqual(expectedResult);
    });

    it('localeSelector should return expected string', () => {
        const state = {
            sharedReducer: {
                locale: 'EN'
            }
        };
        const expectedResult = state.sharedReducer.locale;
        expect(localeSelector(state)).toEqual(expectedResult);
    });

    it('breadcrumbArraySelector should return expected array', () => {
        const state = {
            sharedReducer: {
                breadcrumbArray: [
                    {order: 1, title: '11', path: '/11'},
                    {order: 3, title: '33', path: '/33'},
                    {order: 2, title: '22', path: '/22'}
                ]
            }
        };
        const expectedResult = state.sharedReducer.breadcrumbArray;
        expect(breadcrumbArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedBreadcrumbArraySelector should return expected array', () => {
        const state = {
            sharedReducer: {
                breadcrumbArray: [
                    {order: 1, title: '11', path: '/11'},
                    {order: 3, title: '33', path: '/33'},
                    {order: 2, title: '22', path: '/22'}
                ]
            }
        };
        const expectedResult = [
            {order: 1, title: '11', path: '/11'},
            {order: 2, title: '22', path: '/22'},
            {order: 3, title: '33', path: '/33'}
        ];
        expect(sortedBreadcrumbArraySelector(state)).toEqual(expectedResult);
    });
});