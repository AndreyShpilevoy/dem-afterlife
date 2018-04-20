import React from "react";
import { string } from "prop-types";
import ReactSVG from "react-inlinesvg";
import VkIcon from "images/svg/vk.svg";

const Vk = ({ className }) => <ReactSVG src={VkIcon} className={className} />;

Vk.propTypes = {
  className: string
};

Vk.defaultProps = {
  className: ""
};

export default Vk;
