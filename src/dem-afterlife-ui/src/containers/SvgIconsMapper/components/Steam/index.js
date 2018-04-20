import React from "react";
import { string } from "prop-types";
import ReactSVG from "react-inlinesvg";
import SteamIcon from "images/svg/steam-square.svg";

const Steam = ({ className }) => (
  <ReactSVG src={SteamIcon} className={className} />
);

Steam.propTypes = {
  className: string
};

Steam.defaultProps = {
  className: ""
};

export default Steam;
