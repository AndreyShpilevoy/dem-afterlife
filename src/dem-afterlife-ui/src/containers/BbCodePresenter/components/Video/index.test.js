/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { shallow } from "enzyme";

import Video from "./index";

describe("Video", () => {
  it("component match expected snapshot", () => {
    const props = {
      src: "http://example.mp4",
      type: "video/mp4",
      height: 360,
      width: 640
    };
    expect(shallow(<Video {...props} />)).toMatchSnapshot();
  });
});
