import {createSelector} from 'reselect';
import R from 'ramda';

export const subForumArraySelector = state => state.sharedReducer.subForumArray;
export const forumArraySelector = state => state.sharedReducer.forumArray;


export const sortedSubForumArraySelector = createSelector(
    subForumArraySelector,
    subForumArray => R.sortBy(R.prop('order'), subForumArray)
);

export const forumArrayWithSubForumsSelector = createSelector(
    sortedSubForumArraySelector,
    forumArraySelector,
    (subForumArray, forumArray) =>
        forumArray.map(forum => {
            const filteredSubForumArray = subForumArray.filter(x => x.parentForumId === forum.id);
            return {...forum, subForumArray: filteredSubForumArray};
        })
);

export const sortedForumArrayWithSubForumsSelector = createSelector(
    forumArrayWithSubForumsSelector,
    forumArray => R.sortBy(R.prop('order'), forumArray)
);