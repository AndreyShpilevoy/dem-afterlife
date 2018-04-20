/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-nil: 0, import/no-duplicates: 0,react/jsx-filename-extension:0 */
import {
  generateFullPaginationList,
  generateStartPaginationList,
  generateMiddlePaginationList,
  generateEndPaginationList
} from "./paginationListCreators";

describe("PaginationList creator", () => {
  it("generateFullPaginationList should match expected snapshot", () => {
    expect(generateFullPaginationList(9, 2, 10, 1)).toMatchSnapshot();
  });
  it("generateStartPaginationList should match expected snapshot", () => {
    expect(generateStartPaginationList(20, 1, 9, 6)).toMatchSnapshot();
  });
  it("generateMiddlePaginationList should match expected snapshot", () => {
    expect(generateMiddlePaginationList(20, 8, 9, 6)).toMatchSnapshot();
  });
  it("generateEndPaginationList should match expected snapshot", () => {
    expect(generateEndPaginationList(20, 20, 9, 6)).toMatchSnapshot();
  });
});
