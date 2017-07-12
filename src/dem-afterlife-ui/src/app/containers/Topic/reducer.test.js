/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0*/

import {
    getPostArrayByTopicIdApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    topicSaga,
    getPostArrayByTopicIdSaga,
    getPostArrayByTopicIdNonBlockSaga
} from './reducer';

describe('Forum reducer', () => {
    // it('getpostArrayByForumId should create expected object', () => {
        // const expectedResult = {type: GET_TOPIC_ARRAY_BY_FORUM_ID, payload: {forumId: 1} };
        // expect(getpostArrayByForumId(1)).toEqual(expectedResult);
    // });

    // it('getpostArrayByForumIdSuccess should create expected object', () => {
    //     const expectedResult = {
    //         type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
    //         payload: {
    //             postArray: [
    //                 {id: 1, title: 'Ex Machina Forum', order: 1},
    //                 {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
    //                 {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
    //             ]
    //         }
    //     };
    //     expect(getpostArrayByForumIdSuccess([
    //                 {id: 1, title: 'Ex Machina Forum', order: 1},
    //                 {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
    //                 {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
    //     ])).toEqual(expectedResult);
    // });

    // it('forumReducer with invalid (GET_LOCALE) action should return expected state', () => {
    //     const defaultState = {
    //         postArray: []
    //     };
    //     const action = {
    //         type: 'GET_LOCALE',
    //         payload: 'ru'
    //     };
    //     const expectedResult = {
    //         postArray: []
    //     };
    //     expect(forumReducer(defaultState, action)).toEqual(expectedResult);
    // });

    // it('forumReducer with action GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS should return expected state', () => {
    //     const defaultState = {
    //         postArray: []
    //     };
    //     const action = {
    //         type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
    //         payload: {
    //             postArray: [
    //                 {id: 1, title: 'Ex Machina Forum', order: 1},
    //                 {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
    //                 {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
    //             ]
    //         }
    //     };
    //     const expectedResult = {
    //         postArray: [
    //                 {id: 1, title: 'Ex Machina Forum', order: 1},
    //                 {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
    //                 {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
    //         ]
    //     };
    //     expect(forumReducer(defaultState, action)).toEqual(expectedResult);
    // });

    it('getPostArrayByTopicIdSaga first yield should return TAKE pattern "GET_POST_ARRAY_BY_TOPIC_ID"', () => {
        const generator = getPostArrayByTopicIdSaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_POST_ARRAY_BY_TOPIC_ID');
    });

    it('getPostArrayByTopicIdSaga second yield should return FORK to function "getPostArrayByTopicIdNonBlockSaga"', () => {
        const generator = getPostArrayByTopicIdSaga();

        generator.next();
        expect(generator.next({payload: {topicId: 1} }).value.FORK.fn).toEqual(getPostArrayByTopicIdNonBlockSaga);
    });

    it('getPostArrayByTopicIdSaga third yield should return the same result as first', () => {
        const generator = getPostArrayByTopicIdSaga();
        const expectedResult = generator.next();
        generator.next({payload: {topicId: 1} });
        expect(generator.next()).toEqual(expectedResult);
    });

    it('getPostArrayByTopicIdNonBlockSaga first yield should return CALL to function "getPostArrayByTopicIdApi"', () => {
        const testTopicId = 1;
        const generator = getPostArrayByTopicIdNonBlockSaga(testTopicId);

        expect(generator.next().value.CALL.fn).toEqual(getPostArrayByTopicIdApi);
    });

    it('getPostArrayByTopicIdNonBlockSaga second yield should return PUT action.type "GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS"', () => {
        const testTopicId = 1;
        const generator = getPostArrayByTopicIdNonBlockSaga(testTopicId);
        const postsByTopicId = getPostArrayByTopicIdApi(testTopicId);

        generator.next();
        expect(generator.next(postsByTopicId).value.PUT.action.type).toEqual('GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS');
    });

    it('getPostArrayByTopicIdNonBlockSaga second yield should return PUT action.payload.postArray that is a Promise', () => {
        const testTopicId = 1;
        const generator = getPostArrayByTopicIdNonBlockSaga(testTopicId);
        const postsByTopicId = getPostArrayByTopicIdApi(testTopicId);

        generator.next();
        expect(IsPromise(generator.next(postsByTopicId).value.PUT.action.payload.postArray)).toBeTruthy();
    });

    it('getPostArrayByTopicIdNonBlockSaga third yield should return PUT action.type "GET_USER_ARRAY_BY_USER_ID_ARRAY"', () => {
        const testTopicId = 1;
        const generator = getPostArrayByTopicIdNonBlockSaga(testTopicId);
        const postsByTopicId = getPostArrayByTopicIdApi(testTopicId);

        generator.next();
        generator.next([{userId: 1}, {userId: 22}]);
        expect(generator.next(postsByTopicId).value.PUT.action.type).toEqual('GET_USER_ARRAY_BY_USER_ID_ARRAY');
    });

    it('getPostArrayByTopicIdNonBlockSaga second yield should return PUT action.payload.postArray that is a Promise', () => {
        const testTopicId = 1;
        const generator = getPostArrayByTopicIdNonBlockSaga(testTopicId);

        generator.next();
        generator.next([{userId: 1}, {userId: 22}]);
        expect(generator.next().value.PUT.action.payload.userIdArray).toEqual([1, 22]);
    });

    it('should return 2 Saga from default generator', () => {
        const generator = topicSaga();
        expect(generator.next().value.ALL.length).toEqual(2);
    });
});