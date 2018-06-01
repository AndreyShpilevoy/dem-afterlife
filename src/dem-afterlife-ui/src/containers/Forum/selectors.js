import { createSelector } from "reselect";
import { sort } from "ramda";

export const topicArraySelector = state => state.forumReducer.topicArray;

export const sortedTopicArraySelector = createSelector(
  topicArraySelector,
  topicArray =>
    sort((first, second) => {
      if (first && second && first.lastPostInfo && second.lastPostInfo) {
        return (
          second.lastPostInfo.timeCreation.getTime() -
          first.lastPostInfo.timeCreation.getTime()
        );
      }
      return 0;
    }, topicArray)
);
