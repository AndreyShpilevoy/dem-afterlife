import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import vk from 'images/svg/vk.svg';


const Vk = ({className}) =>
    <SVGInline
        className={className}
        svg={ vk } />;

Vk.propTypes = {
    className: string
};

export default Vk;