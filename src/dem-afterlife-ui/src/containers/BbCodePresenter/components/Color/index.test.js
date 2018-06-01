/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";
import Color from "./index";

describe("Color", () => {
  it("component match expected snapshot", () => {
    expect(
      shallow(<Color options="red">Test content</Color>)
    ).toMatchSnapshot();
  });
});
