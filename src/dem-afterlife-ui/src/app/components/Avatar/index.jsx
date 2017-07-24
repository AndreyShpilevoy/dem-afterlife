import React from 'react';
import {string, number, shape} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';


const getContainerStyles = size => ({width: `${size}rem`});
const getImageStyles = size => ({height: `${size}rem`});

export const AvatarPure = ({avatarUrl, size, styles, className, id}) => {
    const localClassName = className ? `${className} ${styles.container}` : styles.container;
    const linkToProfile = `/${id}`;
    return (
        <div className={localClassName} style={getContainerStyles(size)}>
            <Link className={styles.avatar} to={linkToProfile} style={getImageStyles(size)}>
                {avatarUrl ? <img src={avatarUrl} alt={'Avatar'} /> : <div className={styles.avatarDefault} />}
            </Link>
        </div>
    );
};

AvatarPure.propTypes = {
    id: number.isRequired,
    avatarUrl: string,
    className: string,
    size: number,
    styles: shape().isRequired
};

AvatarPure.defaultProps = {
    className: defaults.emptyString,
    avatarUrl: defaults.emptyString,
    size: 2.5
};

export default withStyles(theme => calculateStyles(theme))(AvatarPure);