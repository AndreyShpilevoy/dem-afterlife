import React from "react";
import { node, string, shape } from "prop-types";

const BaseSpan = ({ children, className, style }) => (
  <span className={className} style={style}>
    {children}
  </span>
);

BaseSpan.propTypes = {
  children: node.isRequired,
  className: string,
  style: shape()
};

BaseSpan.defaultProps = {
  className: "",
  style: {}
};

export default BaseSpan;
