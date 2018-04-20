/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-nil: 0, import/no-duplicates: 0,react/jsx-filename-extension:0 */

import * as paginationListCreators from "./paginationListCreators";
import createPaginationList from "./createPaginationList";

describe("PaginationList arrayGenerator", () => {
  it("createPaginationList (default) when paginationItemsCount === 0 should return empty array ", () => {
    expect(createPaginationList(0, 0, 0, 0)).toEqual([]);
  });
  it("createPaginationList (default) when paginationItemsCount < maxListLength should call function generateFullPaginationList", () => {
    paginationListCreators.generateFullPaginationList = jest.fn();
    createPaginationList(9, 2, 10, 1);
    expect(
      paginationListCreators.generateFullPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when paginationItemsCount = maxListLength should call function generateFullPaginationList", () => {
    paginationListCreators.generateFullPaginationList = jest.fn();
    createPaginationList(10, 2, 10, 1);
    expect(
      paginationListCreators.generateFullPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when pageNumber < offsetListLength + 1 should call function generateStartPaginationList", () => {
    paginationListCreators.generateStartPaginationList = jest.fn();
    createPaginationList(20, 1, 9, 6, false);
    expect(
      paginationListCreators.generateStartPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when pageNumber < paginationItemsCount - offsetListLength should call function generateMiddlePaginationList", () => {
    paginationListCreators.generateMiddlePaginationList = jest.fn();
    createPaginationList(20, 8, 9, 6, false);
    expect(
      paginationListCreators.generateMiddlePaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when pageNumber = paginationItemsCount - offsetListLength should call function generateMiddlePaginationList", () => {
    paginationListCreators.generateMiddlePaginationList = jest.fn();
    createPaginationList(20, 14, 9, 6, false);
    expect(
      paginationListCreators.generateMiddlePaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) should call function generateEndPaginationList", () => {
    paginationListCreators.generateEndPaginationList = jest.fn();
    createPaginationList(20, 20, 9, 6, false);
    expect(
      paginationListCreators.generateEndPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when shortList && paginationItemsCount < 6 should call function generateFullPaginationList", () => {
    paginationListCreators.generateFullPaginationList = jest.fn();
    createPaginationList(3, 20, 9, 6, true);
    expect(
      paginationListCreators.generateFullPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when shortList && paginationItemsCount > 6 should call function generateEndPaginationList", () => {
    paginationListCreators.generateEndPaginationList = jest.fn();
    createPaginationList(20, 20, 9, 6, true);
    expect(
      paginationListCreators.generateEndPaginationList.mock.calls.length
    ).toEqual(1);
  });
  it("createPaginationList (default) when shortList && paginationItemsCount = 6 should call function generateEndPaginationList", () => {
    paginationListCreators.generateEndPaginationList = jest.fn();
    createPaginationList(6, 20, 9, 6, true);
    expect(
      paginationListCreators.generateEndPaginationList.mock.calls.length
    ).toEqual(1);
  });
});
