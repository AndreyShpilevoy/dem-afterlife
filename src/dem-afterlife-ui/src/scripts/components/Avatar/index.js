import React from 'react';
import {string, number, shape} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


const getContainerStyles = size => size ? {width: `${size}rem`} : {};

const getImageStyles = size => size ? {height: `${size}rem`} : {};

export const AvatarPure = ({avatarUrl, size, styles}) =>
      <div className={styles.container} style={getContainerStyles(size)}>
        <Link className={styles.avatar} to={'/'} style={getImageStyles(size)}>
          {avatarUrl ? <img src={avatarUrl} /> : <div className={styles.avatarDefault}/>}
        </Link>
      </div>;

AvatarPure.propTypes = {
    id: number.isRequired,
    avatarUrl: string,
    className: string,
    size: number,
    styles: shape().isRequired
};

export default withStyles(theme => calculateStyles(theme))(AvatarPure);