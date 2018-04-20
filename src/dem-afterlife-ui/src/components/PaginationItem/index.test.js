/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";
import { PaginationItemPure } from "./index";

jest.mock("components/Link");

describe("PaginationItem Pure", () => {
  const classes = {
    item: "item",
    ellipsis: "ellipsis",
    active: "active",
    small: "small"
  };

  it("component with not active state and page #11 match expected snapshot", () => {
    expect(
      shallow(
        <PaginationItemPure
          containerName="SomeContainer"
          containerId={1990}
          value={{
            key: 11,
            page: 11,
            active: false,
            isEllipsis: false
          }}
          classes={classes}
        />
      )
    ).toMatchSnapshot();
  });

  it("component with not active and isSmall state and page #11 match expected snapshot", () => {
    expect(
      shallow(
        <PaginationItemPure
          containerName="SomeContainer"
          containerId={1990}
          value={{
            key: 11,
            page: 11,
            active: false,
            isEllipsis: false
          }}
          isSmall
          classes={classes}
        />
      )
    ).toMatchSnapshot();
  });

  it("component with active state and page #11 match expected snapshot", () => {
    expect(
      shallow(
        <PaginationItemPure
          containerName="SomeContainer"
          containerId={1990}
          value={{
            key: 11,
            page: 11,
            active: true,
            isEllipsis: false
          }}
          classes={classes}
        />
      )
    ).toMatchSnapshot();
  });

  it("component with isEllipsis state true match expected snapshot", () => {
    expect(
      shallow(
        <PaginationItemPure
          containerName="SomeContainer"
          containerId={1990}
          value={{
            key: 11,
            page: "...",
            active: false,
            isEllipsis: true
          }}
          classes={classes}
        />
      )
    ).toMatchSnapshot();
  });
});
