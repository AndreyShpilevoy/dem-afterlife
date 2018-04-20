import React from "react";
import { node, shape } from "prop-types";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const ThinkPure = ({ children, classes }) => (
  <div className={classes.think}>
    <span className={classes.content}>{children}</span>
    <div className={classes.image} />
  </div>
);

ThinkPure.propTypes = {
  classes: shape().isRequired,
  children: node.isRequired
};

export default injectSheet(calculateStyles, { componentName: "Think" })(
  ThinkPure
);
