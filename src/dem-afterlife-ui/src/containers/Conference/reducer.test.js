/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, max-statements, no-underscore-dangle */

import {
  GET_CHAPTER_ARRAY,
  GET_CHAPTER_ARRAY_SUCCESS,
  GET_LAST_ACTIVE_TOPICS_ARRAY,
  GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
  getChapterArray,
  getChapterArraySuccess,
  getLastActiveTopicArray,
  getLastActiveTopicArraySuccess,
  conferenceReducer,
  getChapterArraySaga,
  getChapterArrayNonBlockSaga,
  getLastActiveTopicArraySaga,
  getLastActiveTopicArrayNonBlockSaga,
  conferenceSaga
} from "./reducer";

describe("Conference reducer", () => {
  it("getChapterArray should create expected object", () => {
    const expectedResult = { type: GET_CHAPTER_ARRAY };
    expect(getChapterArray()).toEqual(expectedResult);
  });

  it("getChapterArraySuccess should create expected object", () => {
    const expectedResult = {
      type: GET_CHAPTER_ARRAY_SUCCESS,
      payload: {
        chapterArray: [
          { id: 1, title: "Ex Machina", order: 1 },
          { id: 3, title: "Ex Machina: Arcade", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
        ]
      }
    };
    expect(
      getChapterArraySuccess([
        { id: 1, title: "Ex Machina", order: 1 },
        { id: 3, title: "Ex Machina: Arcade", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
      ])
    ).toEqual(expectedResult);
  });

  it("getLastActiveTopicArray should create expected object", () => {
    const expectedResult = { type: GET_LAST_ACTIVE_TOPICS_ARRAY };
    expect(getLastActiveTopicArray()).toEqual(expectedResult);
  });

  it("getLastActiveTopicArraySuccess should create expected object", () => {
    const expectedResult = {
      type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
      payload: {
        lastActiveTopicArray: [
          { id: 1, title: "Ex Machina", order: 1 },
          { id: 3, title: "Ex Machina: Arcade", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
        ]
      }
    };
    expect(
      getLastActiveTopicArraySuccess([
        { id: 1, title: "Ex Machina", order: 1 },
        { id: 3, title: "Ex Machina: Arcade", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
      ])
    ).toEqual(expectedResult);
  });

  it("conferenceReducer with invalid (GET_LOCALE) action should return expected state", () => {
    const defaultState = {
      chapterArray: []
    };
    const action = {
      type: "GET_LOCALE",
      payload: "ru"
    };
    const expectedResult = {
      chapterArray: []
    };
    expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("conferenceReducer with action GET_CHAPTER_ARRAY_SUCCESS should return expected state", () => {
    const defaultState = {
      chapterArray: []
    };
    const action = {
      type: GET_CHAPTER_ARRAY_SUCCESS,
      payload: {
        chapterArray: [
          { id: 1, title: "Ex Machina", order: 1 },
          { id: 3, title: "Ex Machina: Arcade", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
        ]
      }
    };
    const expectedResult = {
      chapterArray: [
        { id: 1, title: "Ex Machina", order: 1 },
        { id: 3, title: "Ex Machina: Arcade", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
      ]
    };
    expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("conferenceReducer with action GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS should return expected state", () => {
    const defaultState = {
      lastActiveTopicArray: []
    };
    const action = {
      type: GET_LAST_ACTIVE_TOPICS_ARRAY_SUCCESS,
      payload: {
        lastActiveTopicArray: [
          { id: 1, title: "Ex Machina Forum", order: 1 },
          { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
        ]
      }
    };
    const expectedResult = {
      lastActiveTopicArray: [
        { id: 1, title: "Ex Machina Forum", order: 1 },
        { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
      ]
    };
    expect(conferenceReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("getChapterArraySaga should be in loop and return expected values", () => {
    const generator = getChapterArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next();
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getChapterArrayNonBlockSaga should return 3 expected yields with success response. 4 yield should be in state Done", () => {
    const generator = getChapterArrayNonBlockSaga();
    const chapterArray = [
      { id: 1, title: "Ex Machina", order: 1 },
      { id: 3, title: "Ex Machina: Arcade", order: 3 },
      { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
    ];

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: { data: chapterArray },
      error: null
    });
    const thirdYield = generator.next(chapterArray);
    const fourthYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
    expect(fourthYield).toMatchSnapshot();
  });

  it("getChapterArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getChapterArrayNonBlockSaga();

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: null,
      error: "failed response"
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getLastActiveTopicArraySaga should be in loop and return expected values", () => {
    const generator = getLastActiveTopicArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next();
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getLastActiveTopicArrayNonBlockSaga should return 2 expected yields with success response. 4 yield should be in state Done", () => {
    const generator = getLastActiveTopicArrayNonBlockSaga();
    const lastActiveTopicArray = [
      { id: 1, title: "first", parentForumId: 10, parentForumTitle: "one" },
      { id: 3, title: "second", parentForumId: 11, parentForumTitle: "two" },
      { id: 2, title: "third", parentForumId: 12, parentForumTitle: "three" }
    ];

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: { data: lastActiveTopicArray },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getLastActiveTopicArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getLastActiveTopicArrayNonBlockSaga();

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: null,
      error: "failed response"
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("default saga should return 1 yield with 2 sagas. 2 yield should be in state Done", () => {
    const generator = conferenceSaga();
    expect(generator.next()).toMatchSnapshot();
    expect(generator.next()).toMatchSnapshot();
  });
});
