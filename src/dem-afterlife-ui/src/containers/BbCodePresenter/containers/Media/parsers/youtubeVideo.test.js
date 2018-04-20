/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import youtubeVideo from "./youtubeVideo";

describe("youtubeVideo", () => {
  it("should return valid result if pass link", () => {
    expect(
      youtubeVideo("https://www.youtube.com/watch?v=dJ3uR_UqVtQ")
    ).toMatchSnapshot();
  });

  it("should return unsuccessful result if pass wrong string", () => {
    expect(youtubeVideo("fake")).toMatchSnapshot();
  });
});
