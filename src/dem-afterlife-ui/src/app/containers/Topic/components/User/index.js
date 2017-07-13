import React from 'react';
import {shape} from 'prop-types';
import Avatar from 'components/Avatar';
import UserName from 'components/UserName';
import {sharedPropTypes} from 'utils';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const User = ({user, styles}) => {
    const {id, avatar, name, groupColor} = user;
    const {inLine} = styles;
    return (
        <div className={inLine}>
            <Avatar id={id} avatarUrl={avatar} size={2.5}/>
            <UserName name={name}
                id={id}
                color={groupColor}/>
        </div>
    );
};

User.propTypes = {
    user: sharedPropTypes.user.isRequired,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(User);