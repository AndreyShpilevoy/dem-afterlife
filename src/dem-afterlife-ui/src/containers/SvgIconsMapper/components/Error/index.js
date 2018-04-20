import React from "react";
import { string } from "prop-types";
import ErrorIcon from "images/svg/times-circle-o.svg";
import ReactSVG from "react-inlinesvg";

const Error = ({ className }) => (
  <ReactSVG src={ErrorIcon} className={className} />
);

Error.propTypes = {
  className: string
};

Error.defaultProps = {
  className: ""
};

export default Error;
