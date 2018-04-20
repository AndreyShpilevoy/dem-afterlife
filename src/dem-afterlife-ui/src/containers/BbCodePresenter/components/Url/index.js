import React from "react";
import { node, string, shape } from "prop-types";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const UrlPure = ({ children, classes, url }) => (
  <a
    className={classes.url}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

UrlPure.propTypes = {
  url: string.isRequired,
  children: node.isRequired,
  classes: shape().isRequired
};

export default injectSheet(calculateStyles, { componentName: "Url" })(UrlPure);
