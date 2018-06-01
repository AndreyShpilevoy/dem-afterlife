import React from "react";
import { node, string, shape } from "prop-types";
import Term from "containers/Term";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

const wroteTerm = { id: 32, value: "wrote:" };
const quoteTerm = { id: 33, value: "Quote:" };

export const QuotePure = ({ children, options, classes }) => (
  <blockquote className={classes.quote}>
    {
      <div>
        <span className={classes.author}>
          {options || <Term term={quoteTerm} untermedPostfix=":" />}
        </span>
        {options ? (
          <Term spaceBefore term={wroteTerm} untermedPostfix=":" />
        ) : (
          ""
        )}
      </div>
    }
    {children}
  </blockquote>
);

QuotePure.displayName = "QuotePure";

QuotePure.propTypes = {
  classes: shape().isRequired,
  children: node.isRequired,
  options: string
};

QuotePure.defaultProps = {
  options: ""
};

export default injectSheet(calculateStyles, { componentName: "Quote" })(
  QuotePure
);
