import React from "react";
import { node } from "prop-types";

const ListItem = ({ children }) => <li>{children}</li>;

ListItem.propTypes = {
  children: node.isRequired
};

export default ListItem;
