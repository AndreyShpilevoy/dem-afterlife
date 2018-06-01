import React from "react";
import { string, shape } from "prop-types";
import Link from "components/Link";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const LogotypePure = ({ classes, className }) => {
  const linkClassName = `${classes.logotypeContainer} ${className || ""}`;
  return (
    <Link className={linkClassName} to="/">
      <div className={classes.logotype} />
    </Link>
  );
};

LogotypePure.displayName = "LogotypePure";

LogotypePure.propTypes = {
  classes: shape().isRequired,
  className: string
};

LogotypePure.defaultProps = {
  className: ""
};

export default injectSheet(calculateStyles, { componentName: "Logotype" })(
  LogotypePure
);
