import React from "react";
import { node, shape } from "prop-types";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const TextLinePure = ({ children, classes }) => (
  <span className={classes.text}>{children}</span>
);

TextLinePure.propTypes = {
  classes: shape().isRequired,
  children: node.isRequired
};

export default injectSheet(calculateStyles, { componentName: "TextLine" })(
  TextLinePure
);
