/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, import/first:0 */
jest.mock('containers/selectors');
import {sortedForumArrayWithSubForumsSelector} from 'containers/selectors';
import {
    chapterArraySelector,
    lastActiveTopicArraySelector,
    sortedChapterArraySelector,
    chaptersWithForumsArraySelector,
    sortedLastActiveTopicsArraySelector
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

    it('lastActiveTopicArraySelector should return expected array', () => {
        const state = {
            conferenceReducer: {
                lastActiveTopicArray: [
                    {id: 1, lastPostInfo: {timeCreation: new Date('2015/08/17 13:42:32')} },
                    {id: 3, lastPostInfo: {timeCreation: new Date('2017/08/17 13:42:32')} },
                    {id: 2, lastPostInfo: {timeCreation: new Date('2016/08/17 13:42:32')} }
                ]
            }
        };
        const expectedResult = state.conferenceReducer.lastActiveTopicArray;
        expect(lastActiveTopicArraySelector(state)).toEqual(expectedResult);
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

    it('chaptersWithForumsArraySelector if forumArray is empty should return chapterArray just sorted array', () => {
        sortedForumArrayWithSubForumsSelector.mockImplementation(() => []);
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
        expect(chaptersWithForumsArraySelector(state)).toEqual(expectedResult);
    });

    it('chaptersWithForumsArraySelector should return sorted chapterArray array with mapped forumArray', () => {
        sortedForumArrayWithSubForumsSelector.mockImplementation(() => [
            {id: 1, order: 1, chapterId: 1},
            {id: 2, order: 2, chapterId: 3},
            {id: 3, order: 3, chapterId: 1}
        ]);
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

    it('sortedLastActiveTopicsArraySelector should return expected array', () => {
        const state = {
            conferenceReducer: {
                lastActiveTopicArray: [
                    {id: 1, lastPostInfo: {timeCreation: new Date('2015/08/17 13:42:32')} },
                    {id: 3, lastPostInfo: {timeCreation: new Date('2017/08/17 13:42:32')} },
                    {id: 2, lastPostInfo: {timeCreation: new Date('2016/08/17 13:42:32')} }
                ]
            }
        };
        const expectedResult = [
            {id: 3, lastPostInfo: {timeCreation: new Date('2017/08/17 13:42:32')} },
            {id: 2, lastPostInfo: {timeCreation: new Date('2016/08/17 13:42:32')} },
            {id: 1, lastPostInfo: {timeCreation: new Date('2015/08/17 13:42:32')} }
        ];
        expect(sortedLastActiveTopicsArraySelector(state)).toEqual(expectedResult);
    });

    it('sortedLastActiveTopicsArraySelector without lastPostInfo should return expected array', () => {
        const state = {
            conferenceReducer: {
                lastActiveTopicArray: [
                    {id: 1},
                    {id: 3},
                    {id: 2}
                ]
            }
        };
        const expectedResult = [
            {id: 1},
            {id: 3},
            {id: 2}
        ];
        expect(sortedLastActiveTopicsArraySelector(state)).toEqual(expectedResult);
    });
});