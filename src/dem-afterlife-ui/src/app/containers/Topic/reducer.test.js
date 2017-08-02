/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0 */
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

    it('getPostArrayByTopicIdSaga should be in loop and return expected values', () => {
        const generator = getPostArrayByTopicIdSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {topicId: 1} });
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getPostArrayByTopicIdNonBlockSaga should return 3 expected yields. 4 yield should be in state Done', () => {
        const generator = getPostArrayByTopicIdNonBlockSaga(1);

        const firstYield = generator.next();
        const secondYield = generator.next([{userId: 1}, {userId: 22}]);
        const thirdYield = generator.next();
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('getUserArrayByUserIdArraySaga should be in loop and return expected values', () => {
        const generator = getUserArrayByUserIdArraySaga();
        const userArray = [
            {id: 1, name: 'first'},
            {id: 3, name: 'second'},
            {id: 2, name: 'third'}
        ];

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {userIdArray: [1, 2, 3, 4, 5] } });
        const thirdYield = generator.next(userArray);
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.CALL.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('default saga should return 1 yield with 2 sagas. 2 yield should be in state Done', () => {
        const generator = topicSaga();
        expect(generator.next()).toMatchSnapshot();
        expect(generator.next()).toMatchSnapshot();
    });
});