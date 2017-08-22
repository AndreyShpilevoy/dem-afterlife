/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0 */

import {
    GET_LOCALE,
    GET_LOCALE_SUCCESS,
    GET_FORUM_BY_ID,
    GET_FORUM_BY_ID_SUCCESS,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
    GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
    GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
    GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
    getLocale,
    getLocaleSuccess,
    getLocaleSaga,
    getForumById,
    getForumByIdSuccess,
    getForumArrayByChapterIdArray,
    getForumArrayByChapterIdArraySuccess,
    getSubForumArrayByParentForumIdArray,
    getSubForumArrayByParentForumIdArraySuccess,
    sharedReducer,
    getForumByIdSaga,
    sharedSaga,
    getForumsByChapterIdArraySaga,
    getForumsByChapterIdArrayNonBlockSaga,
    getSubForumsByParentForumIdArraySaga,
    getSubForumsByParentForumIdArrayNonBlockSaga
} from './reducer';

describe('Shared reducer', () => {
    it('getLocale should create expected object', () => {
        const expectedResult = {type: GET_LOCALE};
        expect(getLocale()).toEqual(expectedResult);
    });

    it('getLocaleSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_LOCALE_SUCCESS,
            payload: 'ru'
        };
        expect(getLocaleSuccess('ru')).toEqual(expectedResult);
    });

    it('getForumById should create expected object', () => {
        const expectedResult = {type: GET_FORUM_BY_ID, payload: {forumId: 1} };
        expect(getForumById(1)).toEqual(expectedResult);
    });

    it('getForumByIdSuccess should create expected object', () => {
        const expectedResult = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {
                selectedForum: {id: 1, title: 'Ex Machina', order: 1}
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

    it('getSubForumArrayByParentForumIdArray should create expected object', () => {
        const expectedResult = {type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY, payload: {parentForumIdArray: [1] } };
        expect(getSubForumArrayByParentForumIdArray([1])).toEqual(expectedResult);
    });

    it('getSubForumArrayByParentForumIdArraySuccess should create expected object', () => {
        const expectedResult = {
            type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
            payload: {
                subForumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        expect(getSubForumArrayByParentForumIdArraySuccess([
            {id: 1, title: 'Ex Machina Forum', order: 1},
            {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
        ])).toEqual(expectedResult);
    });

    it('sharedReducer with action GET_LOCALE_SUCCESS should return expected state', () => {
        const defaultState = {
            locale: 'en'
        };
        const action = {
            type: GET_LOCALE_SUCCESS,
            payload: {locale: 'ru'}
        };
        const expectedResult = {
            locale: 'ru'
        };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('sharedReducer with invalid (GET_LOCALE) action should return expected state', () => {
        const defaultState = {
            locale: 'en'
        };
        const action = {
            type: 'GET_LOCALE',
            payload: 'ru'
        };
        const expectedResult = {
            locale: 'en'
        };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getLocaleSaga should be in loop and return expected values', () => {
        const generator = getLocaleSaga();

        const firstYield = generator.next();
        const secondYield = generator.next();
        const thirdYield = generator.next('en');
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.CALL.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('sharedReducer with invalid (GET_SMTH) action should return expected state', () => {
        const defaultState = {
            forumArray: []
        };
        const action = {
            type: 'GET_SMTH',
            payload: 'lol'
        };
        const expectedResult = {
            forumArray: []
        };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('sharedReducer with action GET_FORUM_BY_ID_SUCCESS and empty forumArray should return expected state', () => {
        const defaultState = {
            selectedForum: {}
        };
        const action = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {selectedForum: {id: 1, title: 'Ex Machina', order: 1} }
        };
        const expectedResult = {selectedForum: {id: 1, title: 'Ex Machina', order: 1} };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('sharedReducer with action GET_FORUM_BY_ID_SUCCESS and not empty forumArray should return expected state', () => {
        const defaultState = {
            selectedForum: {id: 2, title: 'Ex Machina 2', order: 2}
        };
        const action = {
            type: GET_FORUM_BY_ID_SUCCESS,
            payload: {selectedForum: {id: 1, title: 'Ex Machina', order: 1} }
        };
        const expectedResult = {selectedForum: {id: 1, title: 'Ex Machina', order: 1} };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('sharedReducer with action GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS should return expected state', () => {
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
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('sharedReducer with action GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS should return expected state', () => {
        const defaultState = {
            subForumArray: []
        };
        const action = {
            type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
            payload: {
                subForumArray: [
                    {id: 1, title: 'Ex Machina Forum', order: 1},
                    {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                    {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
                ]
            }
        };
        const expectedResult = {
            subForumArray: [
                {id: 1, title: 'Ex Machina Forum', order: 1},
                {id: 3, title: 'Ex Machina: Arcade Forum', order: 3},
                {id: 2, title: 'Ex Machina Меридиан 113 Forum', order: 2}
            ]
        };
        expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
    });

    it('getForumByIdSaga should be in loop and return expected values', () => {
        const generator = getForumByIdSaga();

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {forumId: 1} });
        const thirdYield = generator.next({id: 1, title: 'Ex Machina', order: 1});
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.CALL.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('getForumsByChapterIdArraySaga should be in loop and return expected values', () => {
        const generator = getForumsByChapterIdArraySaga();

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {chapterIdArray: [1, 2, 3] } });
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getForumsByChapterIdArrayNonBlockSaga should return 3 expected yields. 4 yield should be in state Done', () => {
        const generator = getForumsByChapterIdArrayNonBlockSaga([4, 5]);
        const forumArray = [
            {id: 1, title: 'Ex Machina', order: 1},
            {id: 3, title: 'Ex Machina: Arcade', order: 3},
            {id: 2, title: 'Ex Machina Меридиан 113', order: 2}
        ];

        const firstYield = generator.next();
        const secondYield = generator.next(forumArray);
        const thirdYield = generator.next([1, 2, 3]);
        const fourthYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
        expect(fourthYield).toMatchSnapshot();
    });

    it('getSubForumsByParentForumIdArraySaga should be in loop and return expected values', () => {
        const generator = getSubForumsByParentForumIdArraySaga();

        const firstYield = generator.next();
        const secondYield = generator.next({payload: {parentForumIdArray: [1, 2, 3] } });
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('getSubForumsByParentForumIdArrayNonBlockSaga should return 2 expected yields. 3 yield should be in state Done', () => {
        const forumIdArray = [1, 2, 3];
        const generator = getSubForumsByParentForumIdArrayNonBlockSaga(forumIdArray);
        const forumsByParentForumId = [
            {id: 10, title: 'first', parentForumId: 1, parentForumTitle: 'one'},
            {id: 30, title: 'second', parentForumId: 2, parentForumTitle: 'two'},
            {id: 20, title: 'third', parentForumId: 3, parentForumTitle: 'three'}
        ];

        const firstYield = generator.next(forumIdArray);
        const secondYield = generator.next(forumsByParentForumId);
        const thirdYield = generator.next();

        expect(firstYield).toMatchSnapshot();
        expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
        expect(secondYield).toMatchSnapshot();
        expect(thirdYield).toMatchSnapshot();
    });

    it('default saga should return 1 yield with 7 sagas. 2 yield should be in state Done', () => {
        const generator = sharedSaga();
        expect(generator.next()).toMatchSnapshot();
        expect(generator.next()).toMatchSnapshot();
    });
});