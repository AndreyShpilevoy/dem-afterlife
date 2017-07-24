/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0 */

import {
    getTopicArrayByForumIdApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    GET_TOPIC_ARRAY_BY_FORUM_ID,
    GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS,
    getTopicArrayByForumId,
    getTopicArrayByForumIdSuccess,
    forumReducer,
    forumSaga,
    getTopicArrayForumIdSaga,
    getTopicArrayForumIdNonBlockSaga
} from './reducer';

describe('Forum reducer', () => {
    it('getTopicArrayByForumId should create expected object', () => {
        const expectedResult = {type: GET_TOPIC_ARRAY_BY_FORUM_ID, payload: {forumId: 1} };
        expect(getTopicArrayByForumId(1)).toEqual(expectedResult);
    });

    it('getTopicArrayByForumIdSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS,
            payload: {
                topicArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        expect(getTopicArrayByForumIdSuccess([
            {id: 1, title: 'Ex Machina Forum', order: 1},
            {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
        ])).toEqual(expectedResult);
    });

    it('forumReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            topicArray: []
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            topicArray: []
        };
        expect(forumReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('forumReducer with action GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS should return expected state', () => {
        const defaultState = {
            topicArray: []
        };
        const action = {
            type: GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS,
            payload: {
                topicArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        const expectedResult = {
            topicArray: [
                {id: 1, title: 'Ex Machina Forum', order: 1},
                {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
            ]
        };
        expect(forumReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getTopicArrayForumIdSaga first yield should return TAKE pattern "GET_TOPIC_ARRAY_BY_FORUM_ID"', () => {
        const generator = getTopicArrayForumIdSaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_TOPIC_ARRAY_BY_FORUM_ID');
    });

    it('getTopicArrayForumIdSaga second yield should return FORK to function "getTopicArrayForumIdNonBlockSaga"', () => {
        const generator = getTopicArrayForumIdSaga();

        generator.next();
        expect(generator.next({payload: {forumId: 1} }).value.FORK.fn).toEqual(getTopicArrayForumIdNonBlockSaga);
    });

    it('getTopicArrayForumIdSaga third yield should return ', () => {
        const expectedResult = {action: {payload: {parentForumIdArray: [1] }, type: 'GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY'}, channel: null};
        const generator = getTopicArrayForumIdSaga();
        generator.next();
        generator.next({payload: {forumId: 1} });
        expect(generator.next({payload: {forumId: [1] } }).value.PUT).toEqual(expectedResult);
    });

    it('getTopicArrayForumIdSaga fourth yield should return the same result as first', () => {
        const generator = getTopicArrayForumIdSaga();
        const expectedResult = generator.next();
        generator.next({payload: {forumId: 1} });
        generator.next({payload: {forumId: [1] } });
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getTopicArrayForumIdNonBlockSaga first yield should return CALL to function "getTopicArrayByForumIdApi"', () => {
        const testForumIdArray = [1];
        const generator = getTopicArrayForumIdNonBlockSaga(testForumIdArray);

        expect(generator.next().value.CALL.fn).toEqual(getTopicArrayByForumIdApi);
    });

    it('getTopicArrayForumIdNonBlockSaga second yield should return PUT action.type "GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS"', () => {
        const testForumIdArray = [1];
        const generator = getTopicArrayForumIdNonBlockSaga(testForumIdArray);
        const forumsByChapterId = getTopicArrayByForumIdApi(testForumIdArray);

        generator.next();
        expect(generator.next(forumsByChapterId).value.PUT.action.type).toEqual('GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS');
    });

    it('getTopicArrayForumIdNonBlockSaga third yield should return PUT action.forums that is a Promise', () => {
        const testForumIdArray = [1];
        const generator = getTopicArrayForumIdNonBlockSaga(testForumIdArray);
        const forumsByChapterId = getTopicArrayByForumIdApi(testForumIdArray);

        generator.next();
        expect(IsPromise(generator.next(forumsByChapterId).value.PUT.action.payload.topicArray)).toBeTruthy();
    });

    it('should return 1 Saga from default generator', () => {
        const generator = forumSaga();
        expect(generator.next().value.ALL.length).toEqual(1);
    });
});