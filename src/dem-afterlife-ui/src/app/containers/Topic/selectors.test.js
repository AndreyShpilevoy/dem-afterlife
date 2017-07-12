/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, import/first:0*/
import {
    postArraySelector,
    userArraySelector,
    postArrayWithMappedUserSelector,
    sortedPostArrayWithUsersSelector
} from './selectors';

describe('Topic selectors', () => {
    it('postArraySelector should return expected array', () => {
        const state = {
            topicReducer: {
                postArray: [
                    {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1},
                    {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2},
                    {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1}
                ]
            }
        };
        const expectedResult = state.topicReducer.postArray;
        expect(postArraySelector(state)).toEqual(expectedResult);
    });

    it('userArraySelector should return expected array', () => {
        const state = {topicReducer: {userArray: [{id: 1}, {id: 3}, {id: 2}] } };
        const expectedResult = state.topicReducer.userArray;
        expect(userArraySelector(state)).toEqual(expectedResult);
    });

    it('postArrayWithMappedUserSelector without editInfo should return expected array', () => {
        const state = {
            topicReducer: {
                postArray: [
                    {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1},
                    {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2},
                    {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1}
                ],
                userArray: [{id: 1}, {id: 3}, {id: 2}]
            }
        };
        const expectedResult = [
            {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1, user: {id: 1} },
            {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2, user: {id: 2} },
            {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1, user: {id: 1} }
        ];
        expect(postArrayWithMappedUserSelector(state)).toEqual(expectedResult);
    });


    it('postArrayWithMappedUserSelector wit editInfo should return expected array', () => {
        const state = {
            topicReducer: {
                postArray: [
                    {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1, editInfo: {userId: 2} },
                    {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2},
                    {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1}
                ],
                userArray: [{id: 1}, {id: 3}, {id: 2}]
            }
        };
        const expectedResult = [
            {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1, user: {id: 1}, editInfo: {userId: 2, user: {id: 2} } },
            {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2, user: {id: 2} },
            {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1, user: {id: 1} }
        ];
        expect(postArrayWithMappedUserSelector(state)).toEqual(expectedResult);
    });

    it('sortedPostArrayWithUsersSelector should return expected array', () => {
        const state = {
            topicReducer: {
                postArray: [
                    {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1},
                    {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2},
                    {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1}
                ]
            }
        };
        const expectedResult = [
            {id: 1, postTime: new Date('2015/08/17 13:42:32'), userId: 1},
            {id: 2, postTime: new Date('2016/08/17 13:42:32'), userId: 1},
            {id: 3, postTime: new Date('2017/08/17 13:42:32'), userId: 2}
        ];
        expect(sortedPostArrayWithUsersSelector(state)).toEqual(expectedResult);
    });
});