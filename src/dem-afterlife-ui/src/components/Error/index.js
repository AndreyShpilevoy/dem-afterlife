import React from "react";
import { shape, node } from "prop-types";
import SvgIconsMapper from "containers/SvgIconsMapper";
import Term from "containers/Term";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

const errorTerm = { id: 36, value: "Error" };

export const ErrorPure = ({ classes, children }) => (
  <div className={classes.container}>
    <SvgIconsMapper className={classes.image} iconName="Error" />
    <div>{children}</div>
  </div>
);

ErrorPure.propTypes = {
  classes: shape().isRequired,
  children: node
};

ErrorPure.defaultProps = {
  children: <Term term={errorTerm} />
};

export default injectSheet(calculateStyles, { componentName: "Error" })(
  ErrorPure
);
