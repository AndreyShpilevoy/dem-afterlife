import React from "react";
import { node, shape } from "prop-types";
import Term from "containers/Term";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

const offTopicTerm = { id: 31, value: "Offtopic:" };

export const OffTopicPure = ({ children, classes }) => (
  <div>
    <div className={classes.header}>
      <Term term={offTopicTerm} />
    </div>
    <div className={classes.content}>{children}</div>
  </div>
);

OffTopicPure.displayName = "OffTopicPure";

OffTopicPure.propTypes = {
  children: node.isRequired,
  classes: shape().isRequired
};

export default injectSheet(calculateStyles, { componentName: "OffTopic" })(
  OffTopicPure
);
