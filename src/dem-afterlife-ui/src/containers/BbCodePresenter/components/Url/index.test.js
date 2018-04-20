/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";

import { UrlPure } from "./index";

const classes = {
  ".default-Url-url:focus": "default-Url-url:focus",
  ".default-Url-url:hover": "default-Url-url:hover",
  ".default-Url-url:visited": "default-Url-url:visited",
  ".default-Url-url:visited:hover": "default-Url-url:visited:hover",
  url: "default-Url-url"
};

describe("UrlPure", () => {
  it("component with correct message should match expected snapshot", () => {
    expect(
      shallow(
        <UrlPure url="test" classes={classes}>
          content
        </UrlPure>
      )
    ).toMatchSnapshot();
  });
});
