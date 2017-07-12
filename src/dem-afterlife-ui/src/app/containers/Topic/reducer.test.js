/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0*/

import {
    getPostArrayByTopicIdApi,
    getUserArrayByUserIdArrayApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    getPostArrayByTopicId,
    getPostArrayByTopicIdSuccess,
    getUserArrayByUserIdArray,
    getUserArrayByUserIdArraySuccess,
    GET_POST_ARRAY_BY_TOPIC_ID,
    GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
    GET_USER_ARRAY_BY_USER_ID_ARRAY,
    GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS,
    topicReducer,
    topicSaga,
    getPostArrayByTopicIdSaga,
    getPostArrayByTopicIdNonBlockSaga,
    getUserArrayByUserIdArraySaga
} from './reducer';

describe('Forum reducer', () => {
    it('getPostArrayByTopicId should create expected object', () => {
        const expectedResult = {type: GET_POST_ARRAY_BY_TOPIC_ID, payload: {topicId: 1} };
        expect(getPostArrayByTopicId(1)).toEqual(expectedResult);
    });

    it('getPostArrayByTopicIdSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
            payload: {
                postArray: [
                    {id: 1, message: 'Ex Machina Forum', userId: 1},
                    {id: 3, message: 'Ex Machina: Arcade Forum', userId: 3},
                    {id: 2, message: 'Ex Machina Меридиан 113 Forum', userId: 2}
                ]
            }
        };
        expect(getPostArrayByTopicIdSuccess([
            {id: 1, message: 'Ex Machina Forum', userId: 1},
            {id: 3, message: 'Ex Machina: Arcade Forum', userId: 3},
            {id: 2, message: 'Ex Machina Меридиан 113 Forum', userId: 2}
        ])).toEqual(expectedResult);
    });

    it('getUserArrayByUserIdArray should create expected object', () => {
        const expectedResult = {type: GET_USER_ARRAY_BY_USER_ID_ARRAY, payload: {userIdArray: [1] } };
        expect(getUserArrayByUserIdArray([1])).toEqual(expectedResult);
    });

    it('getUserArrayByUserIdArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS,
            payload: {
                userArray: [
                    {id: 1, name: 'kto'},
                    {id: 3, message: 'Buba'},
                    {id: 2, message: 'Seel'}
                ]
            }
        };
        expect(getUserArrayByUserIdArraySuccess([
            {id: 1, name: 'kto'},
            {id: 3, message: 'Buba'},
            {id: 2, message: 'Seel'}
        ])).toEqual(expectedResult);
    });

    it('topicReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            postArray: []
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            postArray: []
        };
        expect(topicReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('topicReducer with action GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS should return expected state', () => {
        const defaultState = {
            postArray: []
        };
        const action = {
            type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
            payload: {
                postArray: [
                    {id: 1, message: 'Ex Machina Forum', userId: 1},
                    {id: 3, message: 'Ex Machina: Arcade Forum', userId: 3},
                    {id: 2, message: 'Ex Machina Меридиан 113 Forum', userId: 2}
                ]
            }
        };
        const expectedResult = {
            postArray: [
                    {id: 1, message: 'Ex Machina Forum', userId: 1},
                    {id: 3, message: 'Ex Machina: Arcade Forum', userId: 3},
                    {id: 2, message: 'Ex Machina Меридиан 113 Forum', userId: 2}
            ]
        };
        expect(topicReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('topicReducer with action GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS and empty userArray should return expected state', () => {
        const defaultState = {
            userArray: []
        };
        const action = {
            type: GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS,
            payload: {
                userArray: [
                    {id: 1, name: 'kto'},
                    {id: 3, message: 'Buba'},
                    {id: 2, message: 'Seel'}
                ]
            }
        };
        const expectedResult = {
            userArray: [
                {id: 1, name: 'kto'},
                {id: 3, message: 'Buba'},
                {id: 2, message: 'Seel'}
            ]
        };
        expect(topicReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('topicReducer with action GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS and not empty userArray should return expected state', () => {
        const defaultState = {
            userArray: [{id: 3, message: 'Buba'}, {id: 4, message: 'lol'}]
        };
        const action = {
            type: GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS,
            payload: {
                userArray: [
                    {id: 1, name: 'kto'},
                    {id: 2, message: 'Seel'},
                    {id: 4, message: 'ololoid'}
                ]
            }
        };
        const expectedResult = {
            userArray: [
                {id: 3, message: 'Buba'},
                {id: 1, name: 'kto'},
                {id: 2, message: 'Seel'},
                {id: 4, message: 'ololoid'}
            ]
        };
        expect(topicReducer(defaultState, action)).toEqual(expectedResult);
    });

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


    it('getUserArrayByUserIdArraySaga first yield should return TAKE pattern "GET_USER_ARRAY_BY_USER_ID_ARRAY"', () => {
        const generator = getUserArrayByUserIdArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_USER_ARRAY_BY_USER_ID_ARRAY');
    });

    it('getUserArrayByUserIdArraySaga second yield should return CALL to function "getUserArrayByUserIdArrayApi"', () => {
        const generator = getUserArrayByUserIdArraySaga();

        generator.next();
        expect(generator.next({payload: {userIdArray: [1, 2, 3, 4, 5] } }).value.CALL.fn).toEqual(getUserArrayByUserIdArrayApi);
    });

    it('getUserArrayByUserIdArraySaga third yield should return PUT action.type "GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS"', () => {
        const generator = getUserArrayByUserIdArraySaga();

        generator.next();
        generator.next({payload: {userIdArray: [1, 2, 3, 4, 5] } });
        expect(generator.next(getUserArrayByUserIdArrayApi([1, 2, 3, 4, 5])).value.PUT.action.type).toEqual('GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS');
    });

    it('getUserArrayByUserIdArraySaga third yield should return PUT action.payload.userArray that is a Promise', () => {
        const generator = getUserArrayByUserIdArraySaga();

        generator.next();
        generator.next({payload: {userIdArray: [1, 2, 3, 4, 5] } });
        expect(IsPromise(generator.next(getUserArrayByUserIdArrayApi([1, 2, 3, 4, 5])).value.PUT.action.payload.userArray)).toBeTruthy();
    });

    it('should return 2 Saga from default generator', () => {
        const generator = topicSaga();
        expect(generator.next().value.ALL.length).toEqual(2);
    });
});