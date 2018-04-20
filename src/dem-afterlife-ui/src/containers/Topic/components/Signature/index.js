import React from "react";
import { shape, string } from "prop-types";
import BbCodePresenter from "containers/BbCodePresenter";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const SignaturePure = ({ signature, classes }) => (
  <div className={classes.container}>
    <div className={classes.separator} />
    <BbCodePresenter text={signature} />
  </div>
);

SignaturePure.displayName = "SignaturePure";

SignaturePure.propTypes = {
  signature: string.isRequired,
  classes: shape().isRequired
};

export default injectSheet(calculateStyles, { componentName: "Signature" })(
  SignaturePure
);
