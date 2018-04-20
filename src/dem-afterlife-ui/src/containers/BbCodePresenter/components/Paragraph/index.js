import React from "react";
import { node } from "prop-types";

const Paragraph = ({ children }) => <p>{children}</p>;

Paragraph.propTypes = {
  children: node.isRequired
};

export default Paragraph;
