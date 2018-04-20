/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import calculateStyles from "./calculateStyles";

describe("Error calculateStyles", () => {
  const defaultThemeObject = {
    error: {
      color: "orange",
      borderWidth: 0.125,
      padding: 0.25,
      widthAndHeight: 3
    }
  };

  it("should create expected object", () => {
    expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
  });
});
