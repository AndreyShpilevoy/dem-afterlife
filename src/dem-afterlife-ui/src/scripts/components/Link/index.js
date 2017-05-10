import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import link from 'images/svg/link.svg';


const Link = ({className}) =>
    <SVGInline
        className={className}
        svg={ link } />;

Link.propTypes = {
    className: string
};

export default Link;