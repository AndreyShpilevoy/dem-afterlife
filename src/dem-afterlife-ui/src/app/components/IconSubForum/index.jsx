import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import iconSubForum from 'images/svg/sub-forum.svg';


const IconSubForum = ({className}) =>
    (<SVGInline
        className={className}
        svg={iconSubForum} />);

IconSubForum.propTypes = {
    className: string
};

IconSubForum.defaultProps = {
    className: ''
};

export default IconSubForum;