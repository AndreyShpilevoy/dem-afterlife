import React from 'react';
import {string, number} from 'prop-types';
import Link from 'components/Link';

const getStyles = color => ({
    color
});

const UserName = ({name, color, id}) => {
    const linkToProfile = `/UserProfile/${id}`;
    return <Link style={getStyles(color)} to={linkToProfile}>
        {name}
    </Link>;
};

UserName.propTypes = {
    color: string,
    name: string.isRequired,
    id: number.isRequired,
    className: string
};

export default UserName;