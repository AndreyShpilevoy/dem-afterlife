/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import {
    forumArraySelector,
    subForumArraySelector,
    sortedSubForumArraySelector,
    forumArrayWithSubForumsSelector,
    sortedForumArrayWithSubForumsSelector
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
});