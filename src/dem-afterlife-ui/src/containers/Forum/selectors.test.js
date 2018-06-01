/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, import/first:0 */
import { topicArraySelector, sortedTopicArraySelector } from "./selectors";

describe("Forum selectors", () => {
  it("topicArraySelector should return expected array", () => {
    const state = {
      forumReducer: {
        topicArray: [
          {
            id: 1,
            lastPostInfo: { timeCreation: new Date("2015/08/17 13:42:32") }
          },
          {
            id: 3,
            lastPostInfo: { timeCreation: new Date("2017/08/17 13:42:32") }
          },
          {
            id: 2,
            lastPostInfo: { timeCreation: new Date("2016/08/17 13:42:32") }
          }
        ]
      }
    };
    const expectedResult = state.forumReducer.topicArray;
    expect(topicArraySelector(state)).toEqual(expectedResult);
  });

  it("sortedTopicArraySelector should return expected array", () => {
    const state = {
      forumReducer: {
        topicArray: [
          {
            id: 1,
            lastPostInfo: { timeCreation: new Date("2015/08/17 13:42:32") }
          },
          {
            id: 3,
            lastPostInfo: { timeCreation: new Date("2017/08/17 13:42:32") }
          },
          {
            id: 2,
            lastPostInfo: { timeCreation: new Date("2016/08/17 13:42:32") }
          }
        ]
      }
    };
    const expectedResult = [
      {
        id: 3,
        lastPostInfo: { timeCreation: new Date("2017/08/17 13:42:32") }
      },
      {
        id: 2,
        lastPostInfo: { timeCreation: new Date("2016/08/17 13:42:32") }
      },
      { id: 1, lastPostInfo: { timeCreation: new Date("2015/08/17 13:42:32") } }
    ];
    expect(sortedTopicArraySelector(state)).toEqual(expectedResult);
  });

  it("sortedTopicArraySelector without lastPostInfo should return expected array", () => {
    const state = {
      forumReducer: {
        topicArray: [{ id: 1 }, { id: 3 }, { id: 2 }]
      }
    };
    const expectedResult = [{ id: 1 }, { id: 3 }, { id: 2 }];
    expect(sortedTopicArraySelector(state)).toEqual(expectedResult);
  });
});
