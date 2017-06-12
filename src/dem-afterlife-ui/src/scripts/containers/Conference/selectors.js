import {createSelector} from 'reselect';
import R from 'ramda';

export const chapterArraySelector = state => state.conferenceReducer.chapterArray;
export const forumArraySelector = state => state.conferenceReducer.forumArray;

export const sortedChapterArraySelector = createSelector(
    chapterArraySelector,
    chapterArray => R.sortBy(R.prop('order'), chapterArray)
);

export const sortedForumArraySelector = createSelector(
    forumArraySelector,
    forumArray => R.sortBy(R.prop('order'), forumArray)
);

const chaptersWithForumsArraySelector = createSelector(
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

export default chaptersWithForumsArraySelector;