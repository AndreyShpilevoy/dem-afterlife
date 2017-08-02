/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, max-statements, no-underscore-dangle */

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

    it('getTopicArrayForumIdSaga should be in loop and return expected values', () => {
        const generator = getTopicArrayForumIdSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {forumId: 1} });
        const thirdYield = generator.next({payload: {forumId: [1] } });
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('getTopicArrayForumIdNonBlockSaga should return 2 expected yields. 3 yield should be in state Done', () => {
        const forumIdArray = [1, 2, 3];
        const generator = getTopicArrayForumIdNonBlockSaga(forumIdArray);
        const topicsByForumId = [
            {id: 1, forumId: 1, title: 'First'},
            {id: 2, forumId: 2, title: 'Second'},
            {id: 3, forumId: 2, title: 'Third'},
            {id: 4, forumId: 3, title: 'Fourth'}
        ];

        const firstYield = generator.next();
        const secondYield = generator.next(topicsByForumId);
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('default saga should return 1 yield with 2 sagas. 2 yield should be in state Done', () => {
        const generator = forumSaga();
        expect(generator.next()).toMatchSnapshot();
        expect(generator.next()).toMatchSnapshot();
    });
});