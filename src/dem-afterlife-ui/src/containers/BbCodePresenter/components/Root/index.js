import React from "react";
import { node, shape } from "prop-types";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const RootPure = ({ children, classes }) => (
  <span className={classes.root}>{children}</span>
);

RootPure.propTypes = {
  classes: shape().isRequired,
  children: node.isRequired
};

export default injectSheet(calculateStyles, { componentName: "Root" })(
  RootPure
);
