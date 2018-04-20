/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from "./calculateStyles";

describe("Post calculateStyles", () => {
  const defaultThemeObject = {
    post: {
      separator: {
        backgroundColor: "red",
        height: 0.125,
        marginVertical: 0.3,
        marginHorizontal: 0
      }
    }
  };

  it("should create expected object", () => {
    expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
  });
});
