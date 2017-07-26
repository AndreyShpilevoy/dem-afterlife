import React from 'react';
import {bool, string} from 'prop-types';

const Email = ({email, addBreak}) => (
    <span>
        <a href={`mailto:${email}`} rel='nofollow'>
            {email}
        </a>
        {addBreak ? <br /> : ''}
    </span>
);

Email.propTypes = {
    email: string.isRequired,
    addBreak: bool
};

Email.defaultProps = {
    addBreak: false
};

export default Email;
