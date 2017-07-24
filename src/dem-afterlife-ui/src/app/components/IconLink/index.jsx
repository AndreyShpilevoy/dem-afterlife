import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import {defaults} from 'utils';
import link from 'images/svg/link.svg';


const IconLink = ({className}) =>
    (<SVGInline
        className={className}
        svg={link} />);

IconLink.propTypes = {
    className: string
};

IconLink.defaultProps = {
    className: defaults.emptyString
};

export default IconLink;