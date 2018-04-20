import React from "react";
import { string, shape, number } from "prop-types";
import SvgIconsMapper from "containers/SvgIconsMapper";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const SocialMediaLinkPure = ({
  className,
  socialMediaLinkItem,
  classes
}) => (
  <a
    className={classes.focus}
    href={socialMediaLinkItem.href}
    title={socialMediaLinkItem.title}
    target="_blank"
    rel="noopener noreferrer"
  >
    <SvgIconsMapper
      className={className}
      iconName={socialMediaLinkItem.svgImageName}
    />
  </a>
);

SocialMediaLinkPure.propTypes = {
  className: string,
  classes: shape().isRequired,
  socialMediaLinkItem: shape({
    id: number.isRequired,
    title: string.isRequired,
    href: string.isRequired,
    svgImageName: string.isRequired,
    order: number.isRequired
  }).isRequired
};

SocialMediaLinkPure.defaultProps = {
  className: ""
};

export default injectSheet(calculateStyles, {
  componentName: "SocialMediaLink"
})(SocialMediaLinkPure);
