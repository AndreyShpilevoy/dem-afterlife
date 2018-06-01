import React from "react";
import { string } from "prop-types";
import LinkIcon from "images/svg/link.svg";
import ReactSVG from "react-inlinesvg";

const Link = ({ className }) => (
  <ReactSVG src={LinkIcon} className={className} />
);

Link.propTypes = {
  className: string
};

Link.defaultProps = {
  className: ""
};

export default Link;
