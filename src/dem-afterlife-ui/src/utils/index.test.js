/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import {
  createMediaQueryMin,
  createMediaQueryMax,
  createMediaQueryMinMax,
  mergeTwoArraysOfObjectMatchById,
  stringIsLink,
  stringIsEmail
} from "./index";

const testData = {
  mediaQueryMin: "min-width: 0px",
  mediaQueryMax: "max-width: 575px",
  model: { row: { width: "100%" } }
};

describe("Utils", () => {
  it("createMediaQueryMin should create expected object", () => {
    const expectedResult = {
      "@media (min-width: 0px)": { row: { width: "100%" } }
    };
    const calculatedStyle = createMediaQueryMin(
      testData.mediaQueryMin,
      testData.model
    );
    expect(calculatedStyle).toEqual(expectedResult);
  });

  it("createMediaQueryMax should create expected object", () => {
    const expectedResult = {
      "@media (max-width: 575px)": { row: { width: "100%" } }
    };
    const calculatedStyle = createMediaQueryMax(
      testData.mediaQueryMax,
      testData.model
    );
    expect(calculatedStyle).toEqual(expectedResult);
  });

  it("createMediaQueryMinMax should create expected object", () => {
    const expectedResult = {
      "@media (min-width: 0px) and (max-width: 575px)": {
        row: { width: "100%" }
      }
    };
    const calculatedStyle = createMediaQueryMinMax(
      testData.mediaQueryMin,
      testData.mediaQueryMax,
      testData.model
    );
    expect(calculatedStyle).toEqual(expectedResult);
  });

  it("mergeTwoArraysOfObjectMatchById should create expected object", () => {
    const firstArray = [{ id: 1, title: "Ok" }, { id: 2, title: "Ok" }];
    const secondArray = [
      { id: 1, title: "Not ok" },
      { id: 3, title: "Not ok" }
    ];
    const expectedResult = [
      { id: 2, title: "Ok" },
      { id: 1, title: "Not ok" },
      { id: 3, title: "Not ok" }
    ];
    expect(mergeTwoArraysOfObjectMatchById(firstArray, secondArray)).toEqual(
      expectedResult
    );
  });

  it("stringIsLink should return true on valid link", () => {
    expect(
      stringIsLink("http://facebook.github.io/jest/docs/expect.html")
    ).toBeTruthy();
  });

  it("stringIsLink should return false on invalid string", () => {
    expect(stringIsLink("wrong link")).toBeFalsy();
  });

  it("stringIsLink should return false on not a string", () => {
    expect(stringIsLink(55)).toBeFalsy();
  });

  it("stringIsEmail should return true on valid email", () => {
    expect(stringIsEmail("something@sample.com")).toBeTruthy();
  });

  it("stringIsEmail should return false on invalid string", () => {
    expect(stringIsEmail("wrong email")).toBeFalsy();
  });

  it("stringIsEmail should return false on not a string", () => {
    expect(stringIsEmail(55)).toBeFalsy();
  });
});
