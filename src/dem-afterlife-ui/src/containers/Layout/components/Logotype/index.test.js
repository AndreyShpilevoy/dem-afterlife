/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";
import { LogotypePure } from "./index";

describe("Logotype Pure", () => {
  const classes = {
    logotype: "default-Logotype-logotype",
    logotypeContainer: "default-Logotype-logotypeContainer"
  };

  it("component match expected snapshot", () => {
    expect(shallow(<LogotypePure classes={classes} />)).toMatchSnapshot();
  });
});
