import React from 'react';
import {shape} from 'prop-types';
import Avatar from 'components/Avatar';
import UserName from 'components/UserName';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const UserPure = ({user, styles}) => {
    const {id, avatar, name, groupColor} = user;
    const {inLine, userNameStyle} = styles;
    return (
        <div className={inLine}>
            <Avatar id={id} avatarUrl={avatar} size={2.5} />
            <UserName
                className={userNameStyle}
                name={name}
                id={id}
                color={groupColor} />
        </div>
    );
};

UserPure.propTypes = {
    user: sharedPropTypes.user.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(UserPure);