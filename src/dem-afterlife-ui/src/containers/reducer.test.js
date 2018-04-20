/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, max-statements: 0 */

import {
  GET_LOCALE,
  GET_LOCALE_SUCCESS,
  getLocale,
  getLocaleSuccess,
  getLocaleSaga,
  getLocaleNonBlockSaga,
  localeReducer,
  GET_FORUM_BY_ID,
  GET_FORUM_BY_ID_SUCCESS,
  GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
  GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
  GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
  GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
  getForumById,
  getForumByIdSuccess,
  getForumArrayByChapterIdArray,
  getForumArrayByChapterIdArraySuccess,
  getSubForumArrayByParentForumIdArray,
  getSubForumArrayByParentForumIdArraySuccess,
  getForumByIdSaga,
  getForumByIdNonBlockSaga,
  getForumsByChapterIdArraySaga,
  getForumsByChapterIdArrayNonBlockSaga,
  getForumsByParentForumIdSaga,
  getForumsByParentForumIdNonBlockSaga,
  getSubForumsByParentForumIdArraySaga,
  getSubForumsByParentForumIdArrayNonBlockSaga,
  forumReducer,
  GET_BREADCRUMB_ARRAY_SUCCESS,
  GET_FORUM_BREADCRUMB_ARRAY,
  GET_TOPIC_BREADCRUMB_ARRAY,
  getBreadcrumbArraySuccess,
  getConferenceBreadcrumbs,
  getForumBreadcrumbArray,
  getTopicBreadcrumbArray,
  getForumBreadcrumbArrayNonBlockSaga,
  getForumBreadcrumbArraySaga,
  getTopicBreadcrumbArrayNonBlockSaga,
  getTopicBreadcrumbArraySaga,
  breadcrumbReducer,
  SET_PAGINATION_PAGE_SIZE,
  SET_PAGINATION_PAGE_NUMBER,
  SET_PAGINATION_TOTAL_ITEMS_COUNT,
  setPaginationPageSize,
  setPaginationPageNumber,
  setPaginationTotalItemsCount,
  paginationReducer,
  sharedReducer,
  sharedSaga
} from "./reducer";

describe("Shared Locale Actions", () => {
  it("getLocale should create expected object", () => {
    const expectedResult = { type: GET_LOCALE };
    expect(getLocale()).toEqual(expectedResult);
  });

  it("getLocaleSuccess should create expected object", () => {
    const expectedResult = {
      type: GET_LOCALE_SUCCESS,
      payload: "ru"
    };
    expect(getLocaleSuccess("ru")).toEqual(expectedResult);
  });
});
describe("Shared Locale Reducers", () => {
  it("localeReducer with invalid (GET_SMTH) action should return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: "GET_SMTH",
      payload: "lol"
    };
    const expectedResult = {
      forumArray: []
    };
    expect(localeReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action GET_LOCALE_SUCCESS should call localeReducer return expected state", () => {
    const defaultState = {
      locale: "en"
    };
    const action = {
      type: GET_LOCALE_SUCCESS,
      payload: { locale: "ru" }
    };
    const expectedResult = {
      locale: "ru"
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
});
describe("Shared Locale Sagas", () => {
  it("getLocaleSaga should be in loop and return expected values", () => {
    const generator = getLocaleSaga();

    const firstYield = generator.next();
    const secondYield = generator.next();
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getLocaleNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done", () => {
    const generator = getLocaleNonBlockSaga();

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: { data: "en" },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getLocaleNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getLocaleNonBlockSaga();

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
});

describe("Shared Forums Actions", () => {
  it("getForumById should create expected object", () => {
    const expectedResult = { type: GET_FORUM_BY_ID, payload: { forumId: 1 } };
    expect(getForumById(1)).toEqual(expectedResult);
  });

  it("getForumByIdSuccess should create expected object", () => {
    const expectedResult = {
      type: GET_FORUM_BY_ID_SUCCESS,
      payload: {
        selectedForum: { id: 1, title: "Ex Machina", order: 1 }
      }
    };
    expect(
      getForumByIdSuccess({ id: 1, title: "Ex Machina", order: 1 })
    ).toEqual(expectedResult);
  });

  it("getForumArrayByChapterIdArray should create expected object", () => {
    const expectedResult = {
      type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY,
      payload: { chapterIdArray: [1] }
    };
    expect(getForumArrayByChapterIdArray([1])).toEqual(expectedResult);
  });

  it("getForumArrayByChapterIdArraySuccess should create expected object", () => {
    const expectedResult = {
      type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
      payload: {
        forumArray: [
          { id: 1, title: "Ex Machina Forum", order: 1 },
          { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
        ]
      }
    };
    expect(
      getForumArrayByChapterIdArraySuccess([
        { id: 1, title: "Ex Machina Forum", order: 1 },
        { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
      ])
    ).toEqual(expectedResult);
  });

  it("getSubForumArrayByParentForumIdArray should create expected object", () => {
    const expectedResult = {
      type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY,
      payload: { parentForumIdArray: [1] }
    };
    expect(getSubForumArrayByParentForumIdArray([1])).toEqual(expectedResult);
  });

  it("getSubForumArrayByParentForumIdArraySuccess should create expected object", () => {
    const expectedResult = {
      type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
      payload: {
        subForumArray: [
          { id: 1, title: "Ex Machina Forum", order: 1 },
          { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
        ]
      }
    };
    expect(
      getSubForumArrayByParentForumIdArraySuccess([
        { id: 1, title: "Ex Machina Forum", order: 1 },
        { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
      ])
    ).toEqual(expectedResult);
  });
});
describe("Shared Forums Reducers", () => {
  it("forumReducer with invalid (GET_SMTH) action should return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: "GET_SMTH",
      payload: "lol"
    };
    const expectedResult = {
      forumArray: []
    };
    expect(forumReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action GET_FORUM_BY_ID_SUCCESS and empty forumArray should call forumReducer and return expected state", () => {
    const defaultState = {
      selectedForum: {}
    };
    const action = {
      type: GET_FORUM_BY_ID_SUCCESS,
      payload: { selectedForum: { id: 1, title: "Ex Machina", order: 1 } }
    };
    const expectedResult = {
      selectedForum: { id: 1, title: "Ex Machina", order: 1 }
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("sharedReducer with action GET_FORUM_BY_ID_SUCCESS and not empty forumArray should call forumReducer and return expected state", () => {
    const defaultState = {
      selectedForum: { id: 2, title: "Ex Machina 2", order: 2 }
    };
    const action = {
      type: GET_FORUM_BY_ID_SUCCESS,
      payload: { selectedForum: { id: 1, title: "Ex Machina", order: 1 } }
    };
    const expectedResult = {
      selectedForum: { id: 1, title: "Ex Machina", order: 1 }
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("sharedReducer with action GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS should call forumReducer and return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: GET_FORUM_ARRAY_BY_CHAPTER_ID_ARRAY_SUCCESS,
      payload: {
        forumArray: [
          { id: 1, title: "Ex Machina Forum", order: 1 },
          { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
        ]
      }
    };
    const expectedResult = {
      forumArray: [
        { id: 1, title: "Ex Machina Forum", order: 1 },
        { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
      ]
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("sharedReducer with action GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS should call forumReducer and return expected state", () => {
    const defaultState = {
      subForumArray: []
    };
    const action = {
      type: GET_SUB_FORUM_ARRAY_BY_PARENT_FORUM_ID_ARRAY_SUCCESS,
      payload: {
        subForumArray: [
          { id: 1, title: "Ex Machina Forum", order: 1 },
          { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
          { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
        ]
      }
    };
    const expectedResult = {
      subForumArray: [
        { id: 1, title: "Ex Machina Forum", order: 1 },
        { id: 3, title: "Ex Machina: Arcade Forum", order: 3 },
        { id: 2, title: "Ex Machina Меридиан 113 Forum", order: 2 }
      ]
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
});
describe("Shared Forums Sagas", () => {
  it("getForumByIdSaga should be in loop and return expected values", () => {
    const generator = getForumByIdSaga();

    const firstYield = generator.next();
    const secondYield = generator.next({ payload: { forumId: 1 } });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumByIdNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done", () => {
    const generator = getForumByIdNonBlockSaga(1);

    const firstYield = generator.next(1);
    const secondYield = generator.next({
      response: { data: { id: 1, title: "Ex Machina", order: 1 } },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumByIdNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getForumByIdNonBlockSaga(1);

    const firstYield = generator.next(1);
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

  it("getForumsByChapterIdArraySaga should be in loop and return expected values", () => {
    const generator = getForumsByChapterIdArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next({
      payload: { chapterIdArray: [1, 2, 3] }
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumsByChapterIdArrayNonBlockSaga should return 3 expected yields with success response. 4 yield should be in state Done", () => {
    const generator = getForumsByChapterIdArrayNonBlockSaga([4, 5]);
    const forumArray = [
      { id: 1, title: "Ex Machina", order: 1 },
      { id: 3, title: "Ex Machina: Arcade", order: 3 },
      { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
    ];

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: { data: forumArray },
      error: null
    });
    const thirdYield = generator.next([1, 2, 3]);
    const fourthYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
    expect(fourthYield).toMatchSnapshot();
  });

  it("getForumsByChapterIdArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getForumsByChapterIdArrayNonBlockSaga([4, 5]);

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

  it("getForumsByParentForumIdSaga should be in loop and return expected values", () => {
    const generator = getForumsByParentForumIdSaga();

    const firstYield = generator.next();
    const secondYield = generator.next({ payload: { parentForumId: 1 } });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumsByParentForumIdNonBlockSaga should return 3 expected yields with success response. 4 yield should be in state Done", () => {
    const generator = getForumsByParentForumIdNonBlockSaga(4);
    const forumArray = [
      { id: 1, title: "Ex Machina", order: 1 },
      { id: 3, title: "Ex Machina: Arcade", order: 3 },
      { id: 2, title: "Ex Machina Меридиан 113", order: 2 }
    ];

    const firstYield = generator.next();
    const secondYield = generator.next({
      response: { data: forumArray },
      error: null
    });
    const thirdYield = generator.next([1, 2, 3]);
    const fourthYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
    expect(fourthYield).toMatchSnapshot();
  });

  it("getForumsByParentForumIdNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getForumsByParentForumIdNonBlockSaga(4);

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

  it("getSubForumsByParentForumIdArraySaga should be in loop and return expected values", () => {
    const generator = getSubForumsByParentForumIdArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next({
      payload: { parentForumIdArray: [1, 2, 3] }
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getSubForumsByParentForumIdArrayNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done", () => {
    const forumIdArray = [1, 2, 3];
    const generator = getSubForumsByParentForumIdArrayNonBlockSaga(
      forumIdArray
    );
    const forumsByParentForumId = [
      { id: 10, title: "first", parentForumId: 1, parentForumTitle: "one" },
      { id: 30, title: "second", parentForumId: 2, parentForumTitle: "two" },
      { id: 20, title: "third", parentForumId: 3, parentForumTitle: "three" }
    ];

    const firstYield = generator.next(forumIdArray);
    const secondYield = generator.next({
      response: { data: forumsByParentForumId },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getSubForumsByParentForumIdArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const forumIdArray = [1, 2, 3];
    const generator = getSubForumsByParentForumIdArrayNonBlockSaga(
      forumIdArray
    );

    const firstYield = generator.next(forumIdArray);
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
});

describe("Shared Breadcrumb Actions", () => {
  it("getBreadcrumbArraySuccess should create expected object", () => {
    const expectedResult = {
      type: GET_BREADCRUMB_ARRAY_SUCCESS,
      payload: {
        breadcrumbArray: [
          { path: "/Conference", title: "Conference", order: 1 },
          { path: "/Conference 2", title: "Conference 2", order: 2 }
        ]
      }
    };
    expect(
      getBreadcrumbArraySuccess([
        { path: "/Conference 2", title: "Conference 2", order: 2 }
      ])
    ).toEqual(expectedResult);
  });

  it("getConferenceBreadcrumbs should create expected object", () => {
    const expectedResult = {
      type: GET_BREADCRUMB_ARRAY_SUCCESS,
      payload: {
        breadcrumbArray: [
          { path: "/Conference", title: "Conference", order: 1 }
        ]
      }
    };
    expect(getConferenceBreadcrumbs()).toEqual(expectedResult);
  });

  it("getForumBreadcrumbArray should create expected object", () => {
    const expectedResult = {
      type: GET_FORUM_BREADCRUMB_ARRAY,
      payload: { forumId: 1 }
    };
    expect(getForumBreadcrumbArray(1)).toEqual(expectedResult);
  });

  it("getTopicBreadcrumbArray should create expected object", () => {
    const expectedResult = {
      type: GET_TOPIC_BREADCRUMB_ARRAY,
      payload: { topicId: 1 }
    };
    expect(getTopicBreadcrumbArray(1)).toEqual(expectedResult);
  });
});
describe("Shared Breadcrumb Reducers", () => {
  it("breadcrumbReducer with invalid (GET_SMTH) action should return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: "GET_SMTH",
      payload: "lol"
    };
    const expectedResult = {
      forumArray: []
    };
    expect(breadcrumbReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action GET_BREADCRUMB_ARRAY_SUCCESS should call breadcrumbReducer and return expected state", () => {
    const defaultState = {
      breadcrumbArray: [
        { path: "/Conference", title: "Conference", order: 1 },
        { path: "/Conference 2", title: "Conference 2", order: 2 }
      ]
    };
    const action = {
      type: GET_BREADCRUMB_ARRAY_SUCCESS,
      payload: {
        breadcrumbArray: [
          { path: "/Conference", title: "Conference", order: 1 },
          { path: "/Conference 3", title: "Conference 3", order: 3 }
        ]
      }
    };
    const expectedResult = {
      breadcrumbArray: [
        { path: "/Conference", title: "Conference", order: 1 },
        { path: "/Conference 3", title: "Conference 3", order: 3 }
      ]
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
});
describe("Shared Breadcrumb Sagas", () => {
  it("getForumBreadcrumbArraySaga should be in loop and return expected values", () => {
    const generator = getForumBreadcrumbArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next({ payload: { forumId: 1 } });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumBreadcrumbArrayNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done", () => {
    const generator = getForumBreadcrumbArrayNonBlockSaga(1);

    const firstYield = generator.next(1);
    const secondYield = generator.next({
      response: { data: [{ path: "/Forum_1", title: "Forum 1", order: 1 }] },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getForumBreadcrumbArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getForumBreadcrumbArrayNonBlockSaga(1);

    const firstYield = generator.next(1);
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

  it("getTopicBreadcrumbArraySaga should be in loop and return expected values", () => {
    const generator = getTopicBreadcrumbArraySaga();

    const firstYield = generator.next();
    const secondYield = generator.next({ payload: { topicId: 1 } });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(secondYield.value.FORK.fn.name).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getTopicBreadcrumbArrayNonBlockSaga should return 2 expected yields with success response. 3 yield should be in state Done", () => {
    const generator = getTopicBreadcrumbArrayNonBlockSaga(1);

    const firstYield = generator.next(1);
    const secondYield = generator.next({
      response: { data: [{ path: "/Topic_1", title: "Topic 1", order: 1 }] },
      error: null
    });
    const thirdYield = generator.next();

    expect(firstYield).toMatchSnapshot();
    expect(firstYield.value.CALL.fn.name).toMatchSnapshot();
    expect(secondYield).toMatchSnapshot();
    expect(thirdYield).toMatchSnapshot();
  });

  it("getTopicBreadcrumbArrayNonBlockSaga should return 2 expected yields with failed response. 3 yield should be in state Done", () => {
    const generator = getTopicBreadcrumbArrayNonBlockSaga(1);

    const firstYield = generator.next(1);
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
});

describe("Shared Pagination Actions", () => {
  it("setPaginationPageSize should create expected object", () => {
    const expectedResult = {
      type: SET_PAGINATION_PAGE_SIZE,
      payload: { pageSize: 10 }
    };
    expect(setPaginationPageSize(10)).toEqual(expectedResult);
  });
  it("setPaginationPageNumber should create expected object", () => {
    const expectedResult = {
      type: SET_PAGINATION_PAGE_NUMBER,
      payload: { pageNumber: 10 }
    };
    expect(setPaginationPageNumber(10)).toEqual(expectedResult);
  });
  it("setPaginationTotalItemsCount should create expected object", () => {
    const expectedResult = {
      type: SET_PAGINATION_TOTAL_ITEMS_COUNT,
      payload: { totalItemsCount: 10 }
    };
    expect(setPaginationTotalItemsCount(10)).toEqual(expectedResult);
  });
});
describe("Shared Pagination Reducers", () => {
  it("paginationReducer with invalid (GET_SMTH) action should return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: "GET_SMTH",
      payload: "lol"
    };
    const expectedResult = {
      forumArray: []
    };
    expect(paginationReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action SET_PAGINATION_PAGE_SIZE should call paginationReducer and return expected state", () => {
    const defaultState = { pagination: { pageSize: 0 } };
    const action = {
      type: SET_PAGINATION_PAGE_SIZE,
      payload: { pageSize: 10 }
    };
    const expectedResult = { pagination: { pageSize: 10 } };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action SET_PAGINATION_PAGE_NUMBER should call paginationReducer and return expected state", () => {
    const defaultState = { pagination: { pageNumber: 0 } };
    const action = {
      type: SET_PAGINATION_PAGE_NUMBER,
      payload: { pageNumber: 10 }
    };
    const expectedResult = { pagination: { pageNumber: 10 } };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
  it("sharedReducer with action SET_PAGINATION_TOTAL_ITEMS_COUNT should call paginationReducer and return expected state", () => {
    const defaultState = { pagination: { totalItemsCount: 0 } };
    const action = {
      type: SET_PAGINATION_TOTAL_ITEMS_COUNT,
      payload: { totalItemsCount: 10 }
    };
    const expectedResult = { pagination: { totalItemsCount: 10 } };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });
});

describe("Shared Default Reducer and Saga", () => {
  it("sharedReducer with invalid (GET_SMTH) action should return expected state", () => {
    const defaultState = {
      forumArray: []
    };
    const action = {
      type: "GET_SMTH",
      payload: "lol"
    };
    const expectedResult = {
      forumArray: []
    };
    expect(sharedReducer(defaultState, action)).toEqual(expectedResult);
  });

  it("default saga should return 1 yield with 7 sagas. 2 yield should be in state Done", () => {
    const generator = sharedSaga();
    expect(generator.next()).toMatchSnapshot();
    expect(generator.next()).toMatchSnapshot();
  });
});
