import React from 'react';
import {string, number} from 'prop-types';
import {defaults} from 'utils';
import Link from 'components/Link';

const getStyles = color => ({
    color
});

const UserName = ({name, color, id, className}) => {
    const linkToProfile = `/UserProfile/${id}`;
    return (<Link className={className} style={getStyles(color)} to={linkToProfile}>
        {name}
    </Link>);
};

UserName.propTypes = {
    color: string,
    name: string.isRequired,
    id: number.isRequired,
    className: string
};

UserName.defaultProps = {
    className: defaults.emptyString,
    color: defaults.emptyString
};

export default UserName;