/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {
    chapterArraySelector,
    forumArraySelector,
    sortedChapterArraySelector,
    sortedForumArraySelector,
    chaptersWithForumsArraySelector
} from './selectors';

describe('Conference selectors', () => {
    it('chapterArraySelector should return expected array', () => {
        const state = {
            conferenceReducer: {
                chapterArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ]
            }
        };
        const expectedResult = state.conferenceReducer.chapterArray;
        expect(chapterArraySelector(state)).toEqual(expectedResult);
    });

    it('forumArraySelector should return expected array', () => {
        const state = {
            conferenceReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1},
                    {id: 3, order: 3, chapterId: 1},
                    {id: 2, order: 2, chapterId: 3}
                ]
            }
        };
        const expectedResult = state.conferenceReducer.forumArray;
        expect(forumArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedChapterArraySelector should return expected sorted array', () => {
        const state = {
            conferenceReducer: {
                chapterArray: [
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
        expect(sortedChapterArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedForumArraySelector should return expected sorted array', () => {
        const state = {
            conferenceReducer: {
                forumArray: [
                    {id: 1, order: 1, chapterId: 1},
                    {id: 3, order: 3, chapterId: 1},
                    {id: 2, order: 2, chapterId: 3}
                ]
            }
        };
        const expectedResult = [
            {id: 1, order: 1, chapterId: 1},
            {id: 2, order: 2, chapterId: 3},
            {id: 3, order: 3, chapterId: 1}
        ];
        expect(sortedForumArraySelector(state)).toEqual(expectedResult);
    });

    it('chaptersWithForumsArraySelector if forumArray is empty should return chapterArray just sorted array', () => {
        const state = {
            conferenceReducer: {
                chapterArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ],
                forumArray: []
            }
        };
        const expectedResult = [
            {id: 1, order: 1},
            {id: 2, order: 2},
            {id: 3, order: 3}
        ];
        expect(chaptersWithForumsArraySelector(state)).toEqual(expectedResult);
    });

    it('chaptersWithForumsArraySelector should return sorted chapterArray array with mapped forumArray', () => {
        const state = {
            conferenceReducer: {
                chapterArray: [
                    {id: 1, order: 1},
                    {id: 3, order: 3},
                    {id: 2, order: 2}
                ],
                forumArray: [
                    {id: 1, order: 1, chapterId: 1},
                    {id: 2, order: 2, chapterId: 3},
                    {id: 3, order: 3, chapterId: 1}
                ]
            }
        };
        const expectedResult = [
            {
                id: 1,
                order: 1,
                forumArray: [
                    {id: 1, order: 1, chapterId: 1},
                    {id: 3, order: 3, chapterId: 1}
                ]
            },
            {
                id: 2,
                order: 2,
                forumArray: []
            },
            {
                id: 3,
                order: 3,
                forumArray: [
                    {id: 2, order: 2, chapterId: 3}
                ]
            }
        ];
        expect(chaptersWithForumsArraySelector(state)).toEqual(expectedResult);
    });
});