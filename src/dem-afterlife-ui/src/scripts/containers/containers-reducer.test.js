/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0*/

import {
    getForumByIdApi,
    getForumArrayByChapterIdArrayApi,
    getForumArrayByParentForumIdArrayApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    GET_FORUM_BY_ID,
    GET_FORUM_BY_ID_SUCCESS,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
    GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
    GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
    getForumById,
    getForumByIdSuccess,
    getForumArrayByChapterIdArray,
    getForumArrayByChapterIdArraySuccess,
    getForumArrayByParentForumIdArray,
    getForumArrayByParentForumIdArraySuccess,
    containersReducer,
    getForumByIdSaga,
    containersSaga,
    getForumsByChapterIdArraySaga,
    getForumsByChapterIdArrayNonBlockSaga,
    getForumsByParentForumIdArraySaga,
    getForumsByParentForumIdArrayNonBlockSaga
} from './containers-reducer';

describe('Conference reducer', () => {
    it('getForumById should create expected object', () => {
        const expectedResult = {type: GET_FORUM_BY_ID, payload: {forumId: 1} };
        expect(getForumById(1)).toEqual(expectedResult);
    });

    it('getForumByIdSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {
                forum: {id: 1, title: 'Ex Machina', order: 1}
            }
        };
        expect(getForumByIdSuccess({id: 1, title: 'Ex Machina', order: 1})).toEqual(expectedResult);
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

    it('getForumArrayByParentForumIdArray should create expected object', () => {
        const expectedResult = {type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY, payload: {parentForumIdArray: [1] } };
        expect(getForumArrayByParentForumIdArray([1])).toEqual(expectedResult);
    });

    it('getForumArrayByParentForumIdArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
            payload: {
                forumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        expect(getForumArrayByParentForumIdArraySuccess([
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
        ])).toEqual(expectedResult);
    });

    it('containersReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            forumArray: []
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            forumArray: []
        };
        expect(containersReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('containersReducer with action GET_FORUM_BY_ID_SUCCESS and empty forumArray should return expected state', () => {
        const defaultState = {
            forumArray: []
        };
        const action = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {forum: {id: 1, title: 'Ex Machina', order: 1} }
        };
        const expectedResult = {forumArray: [{id: 1, title: 'Ex Machina', order: 1}] };
        expect(containersReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('containersReducer with action GET_FORUM_BY_ID_SUCCESS and not empty forumArray should return expected state', () => {
        const defaultState = {
            forumArray: [{id: 2, title: 'Ex Machina 2', order: 2}]
        };
        const action = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {forum: {id: 1, title: 'Ex Machina', order: 1} }
        };
        const expectedResult = {forumArray: [
            {id: 2, title: 'Ex Machina 2', order: 2},
            {id: 1, title: 'Ex Machina', order: 1}
        ] };
        expect(containersReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('containersReducer with action GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
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
        expect(containersReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('containersReducer with action GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
            forumArray: []
        };
        const action = {
            type: GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
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
        expect(containersReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getForumByIdSaga first yield should return TAKE pattern "GET_FORUM_BY_ID"', () => {
        const generator = getForumByIdSaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_FORUM_BY_ID);
    });

    it('getForumByIdSaga second yield should return CALL to function "getForumByIdApi"', () => {
        const generator = getForumByIdSaga();

        generator.next();
        expect(generator.next({payload: {forumId: 1} }).value.CALL.fn).toEqual(getForumByIdApi);
    });

    it('getForumByIdSaga third yield should return PUT action.type "GET_FORUM_BY_ID_SUCCESS"', () => {
        const generator = getForumByIdSaga();

        generator.next();
        generator.next({payload: {forumId: 1} });
        expect(generator.next(getForumByIdApi()).value.PUT.action.type).toEqual(GET_FORUM_BY_ID_SUCCESS);
    });

    it('getForumByIdSaga third yield should return PUT action.payload.forumArray that is a Promise', () => {
        const generator = getForumByIdSaga();

        generator.next();
        generator.next({payload: {forumId: 1} });
        expect(IsPromise(generator.next(getForumByIdApi()).value.PUT.action.payload.forum)).toBeTruthy();
    });

    it('getForumByIdSaga fourth yield should return the same result as first', () => {
        const forum = {id: 1, title: 'Ex Machina', order: 1};
        const generator = getForumByIdSaga();
        const expectedResult = generator.next();
        generator.next({payload: {forumId: 1} });
        generator.next(forum);
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getForumsByChapterIdArraySaga first yield should return TAKE pattern "GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY"', () => {
        const generator = getForumsByChapterIdArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY');
    });

    it('getForumsByChapterIdArraySaga second yield should return FORK to function "getForumsByChapterIdArrayNonBlockSaga"', () => {
        const generator = getForumsByChapterIdArraySaga();

        generator.next();
        expect(generator.next({payload: {chapterIdArray: [] } }).value.FORK.fn).toEqual(getForumsByChapterIdArrayNonBlockSaga);
    });

    it('getForumsByChapterIdArraySaga fourth yield should return the same result as first', () => {
        const generator = getForumsByChapterIdArraySaga();
        const expectedResult = generator.next();
        generator.next({payload: {chapterIdArray: [] } });
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getForumsByChapterIdArrayNonBlockSaga second yield should return CALL to function "getForumArrayByChapterIdArrayApi"', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);

        expect(generator.next().value.CALL.fn).toEqual(getForumArrayByChapterIdArrayApi);
    });

    it('getForumsByChapterIdArrayNonBlockSaga third yield should return PUT action.type "GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS"', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);
        const forumsByChapterId = getForumArrayByChapterIdArrayApi(testChapterIdArray);

        generator.next();
        expect(generator.next(forumsByChapterId).value.PUT.action.type).toEqual('GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS');
    });

    it('getForumsByChapterIdArrayNonBlockSaga third yield should return PUT action.forums that is a Promise', () => {
        const testChapterIdArray = [1];
        const generator = getForumsByChapterIdArrayNonBlockSaga(testChapterIdArray);
        const forumsByChapterId = getForumArrayByChapterIdArrayApi(testChapterIdArray);

        generator.next();
        expect(IsPromise(generator.next(forumsByChapterId).value.PUT.action.payload.forumArray)).toBeTruthy();
    });

    it('getForumsByParentForumIdArraySaga first yield should return TAKE pattern "GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY"', () => {
        const generator = getForumsByParentForumIdArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY');
    });

    it('getForumsByParentForumIdArraySaga second yield should return FORK to function "getForumsByParentForumIdArrayNonBlockSaga"', () => {
        const generator = getForumsByParentForumIdArraySaga();

        generator.next();
        expect(generator.next({payload: {chapterIdArray: [] } }).value.FORK.fn).toEqual(getForumsByParentForumIdArrayNonBlockSaga);
    });

    it('getForumsByParentForumIdArraySaga fourth yield should return the same result as first', () => {
        const generator = getForumsByParentForumIdArraySaga();
        const expectedResult = generator.next();
        generator.next({payload: {chapterIdArray: [] } });
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getForumsByParentForumIdArrayNonBlockSaga second yield should return CALL to function "getForumArrayByParentForumIdArrayApi"', () => {
        const testForumIdArray = [1];
        const generator = getForumsByParentForumIdArrayNonBlockSaga(testForumIdArray);

        expect(generator.next().value.CALL.fn).toEqual(getForumArrayByParentForumIdArrayApi);
    });

    it('getForumsByParentForumIdArrayNonBlockSaga third yield should return PUT action.type "GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS"', () => {
        const testForumIdArray = [1];
        const generator = getForumsByParentForumIdArrayNonBlockSaga(testForumIdArray);
        const forumsByChapterId = getForumArrayByParentForumIdArrayApi(testForumIdArray);

        generator.next();
        expect(generator.next(forumsByChapterId).value.PUT.action.type).toEqual('GET_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS');
    });

    it('getForumsByParentForumIdArrayNonBlockSaga third yield should return PUT action.forums that is a Promise', () => {
        const testForumIdArray = [1];
        const generator = getForumsByParentForumIdArrayNonBlockSaga(testForumIdArray);
        const forumsByChapterId = getForumArrayByParentForumIdArrayApi(testForumIdArray);

        generator.next();
        expect(IsPromise(generator.next(forumsByChapterId).value.PUT.action.payload.forumArray)).toBeTruthy();
    });

    it('should return 3 Sagas from default generator', () => {
        const generator = containersSaga();
        expect(generator.next().value.ALL.length).toEqual(3);
    });
});