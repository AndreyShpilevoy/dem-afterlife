import {createSelector} from 'reselect';
import R from 'ramda';
import {sortObjectArrayByOrderProperty} from 'utils';
import {sortedForumArrayWithSubForumsSelector} from 'containers/selectors';

export const chapterArraySelector = state => state.conferenceReducer.chapterArray;
export const lastActiveTopicArraySelector = state => state.conferenceReducer.lastActiveTopicArray;

export const sortedChapterArraySelector = createSelector(
    chapterArraySelector,
    chapterArray => sortObjectArrayByOrderProperty(chapterArray)
);

export const sortedLastActiveTopicsArraySelector = createSelector(
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
    sortedForumArrayWithSubForumsSelector,
    (chapterArray, forumArray) => {
        if (forumArray && forumArray.length > 0) {
            return chapterArray.reduce((previous, current) => {
                const filteredForumArray = forumArray.filter(x => x.chapterId === current.id);
                const chapterItemWithForumArray = {...current, ...{forumArray: filteredForumArray} };
                return [...previous, chapterItemWithForumArray];
            }, []);
        }
        return chapterArray;
    }
);