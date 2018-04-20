import defaultTheme from "./default";

const overriddenTheme = {
  menuButton: {
    line: {
      color: "green"
    }
  }
};

export default { ...defaultTheme, ...overriddenTheme };
