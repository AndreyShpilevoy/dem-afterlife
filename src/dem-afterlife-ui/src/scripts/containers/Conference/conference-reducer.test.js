/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {getChapterArrayApi} from 'api';
import IsPromise from 'tools/testHelper';
import {
    GET_CHAPTERARRAY,
    GET_CHAPTERARRAY_SUCCESS,
    getChapterArray,
    getChapterArraySuccess,
    conferenceReducer,
    getChapterArraySaga,
    conferenceSaga
} from './conference-reducer';

describe('Conference reducer', () => {
    it('getChapterArray should create expected object', () => {
        const expectedResult = {type: GET_CHAPTERARRAY};
        expect(getChapterArray()).toEqual(expectedResult);
    });

    it('getChapterArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_CHAPTERARRAY_SUCCESS,
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

    it('conferenceReducer with action GET_CHAPTERARRAY_SUCCESS should return expected state', () => {
        const defaulState = {
            chapterArray: []
        };
        const action = {
            type: GET_CHAPTERARRAY_SUCCESS,
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

    it('getChapterArraySaga first yeald should return TAKE pattern "GET_CHAPTERARRAY"', () => {
        const generator = getChapterArraySaga();

        expect(generator.next().value.TAKE.pattern).toEqual(GET_CHAPTERARRAY);
    });

    it('getChapterArraySaga second yeald should return CALL to function "getChapterArrayApi"', () => {
        const generator = getChapterArraySaga();

        generator.next();
        expect(generator.next().value.CALL.fn).toEqual(getChapterArrayApi);
    });

    it('getChapterArraySaga third yeald should return PUT action.type "GET_CHAPTERARRAY_SUCCESS"', () => {
        const generator = getChapterArraySaga();

        generator.next();
        generator.next();
        expect(generator.next(getChapterArrayApi()).value.PUT.action.type).toEqual(GET_CHAPTERARRAY_SUCCESS);
    });

    it('getChapterArraySaga third yeald should return PUT action.payload.chapterArray that is a Promise', () => {
        const generator = getChapterArraySaga();

        generator.next();
        generator.next();
        expect(IsPromise(generator.next(getChapterArrayApi()).value.PUT.action.payload.chapterArray)).toBeTruthy();
    });

    it('getChapterArraySaga fourth yeald should return the same result as first', () => {
        const generator = getChapterArraySaga();
        const expectedResult = generator.next();
        generator.next();
        generator.next(getChapterArrayApi());
        expect(generator.next()).toEqual(expectedResult);
    });

    it('should return 1 Sagas from default generator', () => {
        const generator = conferenceSaga();
        expect(generator.next().value.ALL.length).toEqual(1);
    });
});