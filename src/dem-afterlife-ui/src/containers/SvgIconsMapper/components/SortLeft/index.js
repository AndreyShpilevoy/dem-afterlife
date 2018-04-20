import React from "react";
import { string } from "prop-types";
import SortLeftIcon from "images/svg/sort-left.svg";
import ReactSVG from "react-inlinesvg";

const SortLeft = ({ className }) => (
  <ReactSVG src={SortLeftIcon} className={className} />
);

SortLeft.propTypes = {
  className: string
};

SortLeft.defaultProps = {
  className: ""
};

export default SortLeft;
