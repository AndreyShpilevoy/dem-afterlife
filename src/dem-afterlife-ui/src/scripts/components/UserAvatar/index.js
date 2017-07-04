import React from 'react';
import {string, number, shape} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


const getContainerStyles = size => size ? {width: `${size}rem`} : {};

const getImageStyles = size => size ? {height: `${size}rem`} : {};

export const UserAvatarPure = ({avatarUrl, size}) =>
      <div className={`${'userAvatarContainer'} ${'flexRowCenter'}`} style={getContainerStyles(size)}>
        <Link className={'userAvatar'} to={'/'} style={getImageStyles(size)}>
          {avatarUrl ? <img src={avatarUrl} /> : <div className={'userAvatarDefault'}/>}
        </Link>
      </div>;

UserAvatarPure.propTypes = {
    id: number.isRequired,
    avatarUrl: string,
    className: string,
    size: number,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(UserAvatarPure);