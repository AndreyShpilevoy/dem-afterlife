/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import twitchVideo from "./twitchVideo";

describe("twitchVideo", () => {
  it("should return valid result if pass iframe html code", () => {
    expect(
      twitchVideo(
        '<iframe src="http://player.twitch.tv/?channel=horror_gameluver42" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="http://www.twitch.tv/horror_gameluver42?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from Horror_gameluver42  on www.twitch.tv</a>'
      )
    ).toMatchSnapshot();
  });

  it("should return unsuccessful result if pass wrong string", () => {
    expect(twitchVideo("fake")).toMatchSnapshot();
  });
});
