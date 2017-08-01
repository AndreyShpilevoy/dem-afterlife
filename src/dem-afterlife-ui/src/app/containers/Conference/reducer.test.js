/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0 */

import {
    getChapterArrayApi,
    getLastActiveTopicArrayApi
} from 'api';
import IsPromise from 'tools/testHelper';
import {
    GET_CHAPTER_ARRAY,
    GET_CHAPTER_ARRAY_SUCCESS,
    GET_LAST_ACTIVE_TOPICS_ARRAY,
    GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
    getChapterArray,
    getChapterArraySuccess,
    getLastActiveTopicArray,
    getLastActiveTopicArraySuccess,
    conferenceReducer,
    getChapterArraySaga,
    getChapterArrayNonBlockSaga,
    conferenceSaga,
    getLastActiveTopicArraySaga
} from './reducer';

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

    it('conferenceReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            chapterArray: []
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            chapterArray: []
        };
        expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('conferenceReducer with action GET_CHAPTER_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
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
        expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('conferenceReducer with action GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
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
        expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getChapterArraySaga should be in cycle and return expected values', () => {
        const generator = getChapterArraySaga();

        const firstYield = generator.next();
        const secondYield = generator.next();
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getChapterArrayNonBlockSaga should return 3 expected yields. 4 yield should be in state Done', () => {
        const generator = getChapterArrayNonBlockSaga();
        const chapterArray = [
            {id: 1, title: 'Ex Machina', order: 1},
            {id: 3, title: 'Ex Machina: Arcade', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
        ];

        const firstYield = generator.next();
        const secondYield = generator.next(chapterArray);
        const thirdYield = generator.next(chapterArray);
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('getLastActiveTopicArraySaga first yield should return TAKE pattern "GET_LAST_ACTIVE_TOPICS_ARRAY"', () => {
        const generator = getLastActiveTopicArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual('GET_LAST_ACTIVE_TOPICS_ARRAY');
    });

    it('getLastActiveTopicArraySaga second yield should return CALL to function "getLastActiveTopicArrayApi"', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getLastActiveTopicArrayApi);
    });

    it('getLastActiveTopicArraySaga third yield should return PUT action.type "GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS"', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getLastActiveTopicArrayApi()).value.PUT.action.type).toEqual('GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS');
    });

    it('getLastActiveTopicArraySaga third yield should return PUT action.payload.lastActiveTopicArray that is a Promise', () => {
        const generator = getLastActiveTopicArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getLastActiveTopicArrayApi()).value.PUT.action.payload.lastActiveTopicArray)).toBeTruthy();
    });

    it('should return 3 Sagas from default generator', () => {
        const generator = conferenceSaga();
        expect(generator.next().value.ALL.length).toEqual(2);
    });
});