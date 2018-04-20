import React from "react";
import { node } from "prop-types";

const OrderedList = ({ children }) => <ol>{children}</ol>;

OrderedList.propTypes = {
  children: node.isRequired
};

export default OrderedList;
