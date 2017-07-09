import {createSelector} from 'reselect';
import R from 'ramda';

export const forumArraySelector = state => {
    const {forumArray} = state.sharedReducer;
    return forumArray.map(forum => {
        const subForumArray = forumArray.filter(x => x.parentForumId === forum.id);
        const sortedSubForumArray = R.sortBy(R.prop('order'), subForumArray);
        return {...forum, subForumArray: sortedSubForumArray};
    });
};

export const sortedForumArraySelector = createSelector(
    forumArraySelector,
    forumArray => R.sortBy(R.prop('order'), forumArray)
);