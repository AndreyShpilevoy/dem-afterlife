import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import steamSquare from 'images/svg/steam-square.svg';


const IconSteam = ({className}) =>
    <SVGInline
        className={className}
        svg={ steamSquare } />;

IconSteam.propTypes = {
    className: string
};

export default IconSteam;