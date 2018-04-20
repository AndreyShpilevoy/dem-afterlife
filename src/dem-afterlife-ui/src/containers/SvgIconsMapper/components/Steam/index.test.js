/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";

import Steam from "./index";

describe("Steam", () => {
  it("component match expected snapshot", () => {
    expect(shallow(<Steam className="steamIconClassName" />)).toMatchSnapshot();
  });
});
