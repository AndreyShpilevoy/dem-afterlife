/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";
import { RowPure } from "./index";

describe("Row Pure", () => {
  const classes = {
    ".default-Row-row.reverse": "default-Row-row.reverse",
    row: "default-Row-row"
  };

  it("component match expected snapshot", () => {
    expect(
      shallow(
        <RowPure classes={classes}>
          <div>row content</div>
        </RowPure>
      )
    ).toMatchSnapshot();
  });

  it("component match expected snapshot with reverse prop", () => {
    expect(
      shallow(
        <RowPure classes={classes} reverse>
          <div>row content</div>
        </RowPure>
      )
    ).toMatchSnapshot();
  });
});
