import React from "react";
import { node, string } from "prop-types";
import injectSheet, { ThemeProvider as ThemeProviderBase } from "react-jss";
import classNames from "classnames";
import defaultTheme from "./themes/default";
import overriddenTheme from "./themes/overridden";

const themeObjectName = {
  default: defaultTheme,
  overridden: overriddenTheme
};

const concatStyleNames = styleNameArray => classNames(...styleNameArray);

const ThemeProvider = ({ themeName, children }) => (
  <ThemeProviderBase theme={themeObjectName[themeName]}>
    {children}
  </ThemeProviderBase>
);
ThemeProvider.propTypes = {
  children: node.isRequired,
  themeName: string
};
ThemeProvider.defaultProps = {
  themeName: "default"
};
export { ThemeProvider, injectSheet, concatStyleNames };
