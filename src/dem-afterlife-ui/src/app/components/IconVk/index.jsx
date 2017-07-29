import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import vk from 'images/svg/vk.svg';


const IconVk = ({className}) =>
    (<SVGInline
        className={className}
        svg={vk} />);

IconVk.propTypes = {
    className: string
};

IconVk.defaultProps = {
    className: ''
};

export default IconVk;