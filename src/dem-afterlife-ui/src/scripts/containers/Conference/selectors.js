import {createSelector} from 'reselect';
import R from 'ramda';

export const chapterArraySelector = state => state.conferenceReducer.chapterArray;
export const forumArraySelector = state => state.conferenceReducer.forumArray.reduce(
    (previouse, current) => {
        if (current.subForumArray) {
            const sortedSubForumArray = R.sortBy(R.prop('order'), current.subForumArray);
            return [...previouse, {...current, subForumArray: sortedSubForumArray}];
        }
        return [...previouse, current];
    }, []
);
export const lastActiveTopicArraySelector = state => state.conferenceReducer.lastActiveTopicArray;

export const sortedChapterArraySelector = createSelector(
    chapterArraySelector,
    chapterArray => R.sortBy(R.prop('order'), chapterArray)
);

export const sortedForumArraySelector = createSelector(
    forumArraySelector,
    forumArray => R.sortBy(R.prop('order'), forumArray)
);

export const lastActiveTopicsOrderedArraySelector = createSelector(
    lastActiveTopicArraySelector,
    lastActiveTopicArray => R.sort((first, second) => {
        if (first && second && first.lastPostInfo && second.lastPostInfo) {
            return second.lastPostInfo.timeCreation.getTime() - first.lastPostInfo.timeCreation.getTime();
        }
        return 0;
    }, lastActiveTopicArray)
);

export const chaptersWithForumsArraySelector = createSelector(
    sortedChapterArraySelector,
    sortedForumArraySelector,
    (chapterArray, forumArray) => {
        if (forumArray && forumArray.length > 0) {
            return chapterArray.reduce((previouse, current) => {
                const filteredForumArray = forumArray.filter(x => x.chapterId === current.id);
                const chapterItemWithForumArray = {...current, ...{forumArray: filteredForumArray} };
                return [...previouse, chapterItemWithForumArray];
            }, []);
        }
        return chapterArray;
    }
);