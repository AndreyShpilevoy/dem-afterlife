/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";

import { RootPure } from "./index";

const classes = {
  root: "default-Root-root"
};

describe("RootPure", () => {
  it("component should match expected snapshot", () => {
    expect(
      shallow(<RootPure classes={classes}>content</RootPure>)
    ).toMatchSnapshot();
  });
});
