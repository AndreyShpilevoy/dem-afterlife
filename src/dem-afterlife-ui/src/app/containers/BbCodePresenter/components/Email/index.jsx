import React from 'react';
import {string, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Email = ({email, styles}) => (
    <a className={styles.email} href={`mailto:${email}`} rel='nofollow'>
        {email}
    </a>
);

Email.propTypes = {
    styles: shape().isRequired,
    email: string.isRequired
};

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(Email);
