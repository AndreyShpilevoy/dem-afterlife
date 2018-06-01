import React from "react";
import { node } from "prop-types";

const UnorderedList = ({ children }) => <ul>{children}</ul>;

UnorderedList.propTypes = {
  children: node.isRequired
};

export default UnorderedList;
