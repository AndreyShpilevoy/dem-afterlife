/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import HTML5VideoAudioTags from "./HTML5VideoAudioTags";

describe("HTML5VideoAudioTags", () => {
  it("should return valid result if pass Audio link", () => {
    expect(
      HTML5VideoAudioTags("http://www.w3schools.com/tags/horse.mp3")
    ).toMatchSnapshot();
  });

  it("should return valid result if pass Video link", () => {
    expect(
      HTML5VideoAudioTags("http://www.w3schools.com/html/mov_bbb.mp4")
    ).toMatchSnapshot();
  });

  it("should return unsuccessful result if pass wrong string", () => {
    expect(HTML5VideoAudioTags("fake")).toMatchSnapshot();
  });
});
