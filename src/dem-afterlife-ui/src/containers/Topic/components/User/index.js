import React from "react";
import { shape } from "prop-types";
import Avatar from "components/Avatar";
import UserName from "components/UserName";
import { sharedPropTypes } from "utils";
import { injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export const UserPure = ({ user, classes }) => {
  const { id, avatar, name, groupColor } = user;
  const { inLine, userNameStyle } = classes;
  return (
    <div className={inLine}>
      <Avatar id={id} avatarUrl={avatar} size={2.5} />
      <UserName
        className={userNameStyle}
        name={name}
        id={id}
        color={groupColor}
      />
    </div>
  );
};

UserPure.displayName = "UserPure";

UserPure.propTypes = {
  user: sharedPropTypes.user.isRequired,
  classes: shape().isRequired
};

export default injectSheet(calculateStyles, { componentName: "User" })(
  UserPure
);
