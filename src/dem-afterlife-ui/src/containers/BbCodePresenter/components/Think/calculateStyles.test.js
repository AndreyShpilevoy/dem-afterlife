/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import calculateStyles from "./calculateStyles";

describe("Think calculateStyles", () => {
  const defaultThemeObject = {
    bbCodes: {
      think: {
        image: "thinkImage",
        backgroundSize: 2,
        paddingTop: 2,
        backgroundColor: "red",
        borderColor: "blue",
        borderWidth: 0.0625,
        borderRadius: 1,
        paddingContent: 0.4
      }
    }
  };

  it("should create expected object", () => {
    expect(calculateStyles(defaultThemeObject)).toMatchSnapshot();
  });
});
