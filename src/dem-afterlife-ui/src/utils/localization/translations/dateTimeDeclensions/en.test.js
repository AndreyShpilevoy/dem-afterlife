/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import dateTimeDeclension from "./en";

describe("EN dateTimeDeclension", () => {
  it("dateTimeDeclension return singleForm string for 1 item", () => {
    expect(
      dateTimeDeclension(
        1,
        "firstForm",
        "secondForm",
        "thirdForm",
        "singleForm"
      )
    ).toEqual("singleForm");
  });

  it("dateTimeDeclension return secondForm string for 2 item", () => {
    expect(
      dateTimeDeclension(
        2,
        "firstForm",
        "secondForm",
        "thirdForm",
        "singleForm"
      )
    ).toEqual("2 secondForm");
  });
});
