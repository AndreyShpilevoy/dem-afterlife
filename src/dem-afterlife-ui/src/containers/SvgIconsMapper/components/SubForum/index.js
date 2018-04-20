import React from "react";
import { string } from "prop-types";
import ReactSVG from "react-inlinesvg";
import SubForumIcon from "images/svg/sub-forum.svg";

const SubForum = ({ className }) => (
  <ReactSVG src={SubForumIcon} className={className} />
);

SubForum.propTypes = {
  className: string
};

SubForum.defaultProps = {
  className: ""
};

export default SubForum;
