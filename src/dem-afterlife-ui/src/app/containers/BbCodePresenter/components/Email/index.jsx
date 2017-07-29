import React from 'react';
import {bool, string, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Email = ({email, addBreak, styles}) => (
    <span>
        <a className={styles.email} href={`mailto:${email}`} rel='nofollow'>
            {email}
        </a>
        {addBreak ? <br /> : ''}
    </span>
);

Email.propTypes = {
    styles: shape().isRequired,
    email: string.isRequired,
    addBreak: bool
};

Email.defaultProps = {
    addBreak: false
};

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(Email);
