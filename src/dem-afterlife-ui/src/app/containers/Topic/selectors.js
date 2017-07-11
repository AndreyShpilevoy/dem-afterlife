import {createSelector} from 'reselect';
import R from 'ramda';

export const postArraySelector = state => state.topicReducer.postArray;

export const sortedPostArrayWithUsersSelector = createSelector(
    postArraySelector,
    postArray => R.sort((first, second) => second.postTime.getTime() - first.postTime.getTime(), postArray)
);