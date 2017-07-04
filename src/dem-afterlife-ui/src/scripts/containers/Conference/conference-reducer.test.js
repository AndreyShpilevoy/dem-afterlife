/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {
    getChapterArrayApi,
    getForumArrayByChapterIdArrayApi,
    getLastActiveTopicArrayApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    GET_CHAPTER_ARRAY,
    GET_CHAPTER_ARRAY_SUCCESS,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
    GET_LAST_ACTIVE_TOPICS_ARRAY,
    GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
    getChapterArray,
    getChapterArraySuccess,
    getForumArrayByChapterIdArray,
    getForumArrayByChapterIdArraySuccess,
    getLastActiveTopicArray,
    getLastActiveTopicArraySuccess,
    conferenceReducer,
    getChapterArraySaga,
    conferenceSaga,
    getForumsByChapterIdArraySaga,
    getForumsByChapterIdArrayNonBlockSaga,
    getLastActiveTopicArraySaga
} from './conference-reducer';

describe('Conference reducer', () => {
    it('getChapterArray should create expected object', () => {
        const expectedResult = {type: GET_CHAPTER_ARRAY};
        expect(getChapterArray()).toEqual(expectedResult);
    });

    it('getChapterArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_CHAPTER_ARRAY_SUCCESS,
            payload: {
                chapterArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
                ]
            }
        };
        expect(getChapterArraySuccess([
            {id: 1, title: 'Ex Machina', order: 1},
            {id: 3, title: 'Ex Machina: Arcade', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
        ])).toEqual(expectedResult);
    });

    it('getForumArrayByChapterIdArray should create expected object', () => {
        const expectedResult = {type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY, payload: {chapterIdArray: [1] } };
        expect(getForumArrayByChapterIdArray([1])).toEqual(expectedResult);
    });

    it('getForumArrayByChapterIdArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
            payload: {
                forumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        expect(getForumArrayByChapterIdArraySuccess([
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
        ])).toEqual(expectedResult);
    });

    it('getLastActiveTopicArray should create expected object', () => {
        const expectedResult = {type: GET_LAST_ACTIVE_TOPICS_ARRAY};
        expect(getLastActiveTopicArray()).toEqual(expectedResult);
    });

    it('getLastActiveTopicArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
            payload: {
                lastActiveTopicArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
                ]
            }
        };
        expect(getLastActiveTopicArraySuccess([
            {id: 1, title: 'Ex Machina', order: 1},
            {id: 3, title: 'Ex Machina: Arcade', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
        ])).toEqual(expectedResult);
    });

    it('conferenceReducer with action GET_CHAPTER_ARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            chapterArray: []
        };
        const action = {
            type: GET_CHAPTER_ARRAY_SUCCESS,
            payload: {
                chapterArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
                ]
            }
        };
        const expectedResult = {
            chapterArray: [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
            ]
        };
        expect(conferenceReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('conferenceReducer with action GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            forumArray: []
        };
        const action = {
            type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
            payload: {
                forumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        const expectedResult = {
            forumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
            ]
        };
        expect(conferenceReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('conferenceReducer with action GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            lastActiveTopicArray: []
        };
        const action = {
            type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
            payload: {
                lastActiveTopicArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        const expectedResult = {
            lastActiveTopicArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
            ]
        };
        expect(conferenceReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('getChapterArraySaga first yeald should return TAKE pattern "GET_CHAPTER_ARRAY"', () => {
        const generator = getChapterArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_CHAPTER_ARRAY);
    });

    it('getChapterArraySaga second yeald should return CALL to function "getChapterArrayApi"', () => {
        const generator = getChapterArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getChapterArrayApi);
    });

    it('getChapterArraySaga third yeald should return PUT action.type "GET_CHAPTER_ARRAY_SUCCESS"', () => {
        const generator = getChapterArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getChapterArrayApi()).value.PUT.action.type).toEqual(GET_CHAPTER_ARRAY_SUCCESS);
    });

    it('getChapterArraySaga third yeald should return PUT action.payload.chapterArray that is a Promise', () => {
        const generator = getChapterArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getChapterArrayApi()).value.PUT.action.payload.chapterArray)).toBeTruthy();
    });

    it('getChapterArraySaga fourth yeald should return the same result as first', () => {
        const chapterArray = [
                    {id: 1, title: 'Ex Machina', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
        ];
        const generator = getChapterArraySaga();
        const expectedResult = generator.next();
        generator.next();
        generator.next(chapterArray);
        generator.next(getForumArrayByChapterIdArrayApi([1, 2, 3]));
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getForumsByChapterIdArraySaga first yeald should return TAKE pattern "GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY"', () => {
        const generator = getForumsByChapterIdArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY');
    });

    it('getForumsByChapterIdArraySaga second yeald should return FORK to function "getForumsByChapterIdArrayNonBlockSaga"', () => {
        const generator = getForumsByChapterIdArraySaga();

        generator.next();
        expect(generator.next({payload: {chapterIdArray: [] } }).value.FORK.fn).toEqual(getForumsByChapterIdArrayNonBlockSaga);
    });

    it('getForumsByChapterIdArraySaga fourth yeald should return the same result as first', () => {
        const generator = getForumsByChapterIdArraySaga();
        const expectedResult = generator.next();
        generator.next({payload: {chapterIdArray: [] } });
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getForumsByChapterIdArrayNonBlockSaga second yeald should return CALL to function "getForumArrayByChapterIdArrayApi"', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);

        expect(generator.next().value.CALL.fn).toEqual(getForumArrayByChapterIdArrayApi);
    });

    it('getForumsByChapterIdArrayNonBlockSaga third yeald should return PUT action.type "GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS"', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);
        const forumsByChapterId = getForumArrayByChapterIdArrayApi(testChapterIdArray);

        generator.next();
        expect(generator.next(forumsByChapterId).value.PUT.action.type).toEqual('GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS');
    });

    it('getForumsByChapterIdArrayNonBlockSaga third yeald should return PUT action.forums that is a Promise', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);
        const forumsByChapterId = getForumArrayByChapterIdArrayApi(testChapterIdArray);

        generator.next();
        expect(IsPromise(generator.next(forumsByChapterId).value.PUT.action.payload.forumArray)).toBeTruthy();
    });

    it('getLastActiveTopicArraySaga first yeald should return TAKE pattern "GET_LAST_ACTIVE_TOPICS_ARRAY"', () => {
        const generator = getLastActiveTopicArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_LAST_ACTIVE_TOPICS_ARRAY);
    });

    it('getLastActiveTopicArraySaga second yeald should return CALL to function "getLastActiveTopicArrayApi"', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getLastActiveTopicArrayApi);
    });

    it('getLastActiveTopicArraySaga third yeald should return PUT action.type "GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS"', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getLastActiveTopicArrayApi()).value.PUT.action.type).toEqual(GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS);
    });

    it('getLastActiveTopicArraySaga third yeald should return PUT action.payload.chapterArray that is a Promise', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getLastActiveTopicArrayApi()).value.PUT.action.payload.lastActiveTopicArray)).toBeTruthy();
    });

    it('should return 3 Sagas from default generator', () => {
        const generator = conferenceSaga();
        expect(generator.next().value.ALL.length).toEqual(3);
    });
});