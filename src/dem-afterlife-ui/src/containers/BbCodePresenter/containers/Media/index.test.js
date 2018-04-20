/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0, import/first:0 */
jest.mock("./processor");
import React from "react";
import { shallow } from "enzyme";

import Media from "./index";
import processTextLineContentViaParsers from "./processor";

describe("Media", () => {
  it('scenario without error and shortHeight set to "true" should match expected snapshot', () => {
    processTextLineContentViaParsers.mockImplementation(() => ({
      type: "iframe",
      success: true,
      url: "some_url",
      isShortHeight: true
    }));
    expect(shallow(<Media>test</Media>)).toMatchSnapshot();
  });

  it('scenario without error and shortHeight set to "false" should match expected snapshot', () => {
    processTextLineContentViaParsers.mockImplementation(() => ({
      type: "iframe",
      success: true,
      url: "some_url",
      isShortHeight: false
    }));
    expect(shallow(<Media>test</Media>)).toMatchSnapshot();
  });

  it("scenario with error should match expected snapshot", () => {
    processTextLineContentViaParsers.mockImplementation(() => ({
      type: "none",
      success: false,
      url: ""
    }));
    expect(shallow(<Media>test</Media>)).toMatchSnapshot();
  });
});
