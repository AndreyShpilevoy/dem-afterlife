import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import {defaults} from 'utils';
import iconSubForum from 'images/svg/subForum.svg';


const IconSubForum = ({className}) =>
    (<SVGInline
        className={className}
        svg={iconSubForum} />);

IconSubForum.propTypes = {
    className: string
};

IconSubForum.defaultProps = {
    className: defaults.emptyString
};

export default IconSubForum;