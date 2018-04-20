import React from "react";
import { string, number, shape } from "prop-types";
import Link from "components/Link";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

const getContainerStyles = size => ({ width: `${size}rem` });
const getImageStyles = size => ({ height: `${size}rem` });

export const AvatarPure = ({ avatarUrl, size, classes, className, id }) => {
  const localClassName = className
    ? `${className} ${classes.container}`
    : classes.container;
  const linkToProfile = `/${id}`;
  return (
    <div className={localClassName} style={getContainerStyles(size)}>
      <Link
        className={classes.avatar}
        to={linkToProfile}
        style={getImageStyles(size)}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="Avatar" />
        ) : (
          <div className={classes.avatarDefault} />
        )}
      </Link>
    </div>
  );
};

AvatarPure.propTypes = {
  id: number.isRequired,
  avatarUrl: string,
  className: string,
  size: number,
  classes: shape().isRequired
};

AvatarPure.defaultProps = {
  className: "",
  avatarUrl: "",
  size: 2.5
};

export default injectSheet(calculateStyles, { componentName: "Avatar" })(
  AvatarPure
);
