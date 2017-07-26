import {createSelector} from 'reselect';
import {sortObjectArrayByOrderProperty} from 'utils';

export const subForumArraySelector = state => state.sharedReducer.subForumArray;
export const forumArraySelector = state => state.sharedReducer.forumArray;


export const sortedSubForumArraySelector = createSelector(
    subForumArraySelector,
    subForumArray => sortObjectArrayByOrderProperty(subForumArray)
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
    forumArray => sortObjectArrayByOrderProperty(forumArray)
);