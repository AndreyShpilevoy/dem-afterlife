import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import iconSubForum from 'images/svg/subforum.svg';


const IconSubForum = ({className}) =>
    <SVGInline
        className={className}
        svg={ iconSubForum } />;

IconSubForum.propTypes = {
    className: string
};

export default IconSubForum;