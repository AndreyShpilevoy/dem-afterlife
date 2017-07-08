/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {
    forumArraySelector,
    sortedForumArraySelector
} from './selectors';

describe('containers selectors', () => {
    it('forumArraySelector should return expected array', () => {
        const state = {
            containersReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
                    {id: 2, order: 2, chapterId: 3, parentForumId: null, subForumArray: [] }
                ]
            }
        };
        const expectedResult = state.containersReducer.forumArray;
        expect(forumArraySelector(state)).toEqual(expectedResult);
    });

    it('forumArraySelector with subForumArray should return expected array', () => {
        const state = {
            containersReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1, parentForumId: null},
                    {id: 3, order: 3, chapterId: 1, parentForumId: null},
                    {id: 2, order: 2, chapterId: 3, parentForumId: null},
                    {id: 4, order: 4, chapterId: null, parentForumId: 1},
                    {id: 6, order: 6, chapterId: null, parentForumId: 1},
                    {id: 5, order: 5, chapterId: null, parentForumId: 2}
                ]
            }
        };
        const expectedResult = [
            {id: 1,
                order: 1,
                chapterId: 1,
                parentForumId: null,
                subForumArray: [
                    {id: 4, order: 4, chapterId: null, parentForumId: 1},
                    {id: 6, order: 6, chapterId: null, parentForumId: 1}
                ] },
                    {id: 3, order: 3, chapterId: 1, parentForumId: null, subForumArray: [] },
            {id: 2, order: 2, chapterId: 3, parentForumId: null, subForumArray: [{id: 5, order: 5, chapterId: null, parentForumId: 2}] },
                    {id: 4, order: 4, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 6, order: 6, chapterId: null, parentForumId: 1, subForumArray: [] },
                    {id: 5, order: 5, chapterId: null, parentForumId: 2, subForumArray: [] }
        ];
        expect(forumArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedForumArraySelector should return expected sorted array', () => {
        const state = {
            containersReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1},
                    {id: 3, order: 3, chapterId: 1},
                    {id: 2, order: 2, chapterId: 3}
                ]
            }
        };
        const expectedResult = [
            {id: 1, order: 1, chapterId: 1, subForumArray: [] },
            {id: 2, order: 2, chapterId: 3, subForumArray: [] },
            {id: 3, order: 3, chapterId: 1, subForumArray: [] }
        ];
        expect(sortedForumArraySelector(state)).toEqual(expectedResult);
    });
});