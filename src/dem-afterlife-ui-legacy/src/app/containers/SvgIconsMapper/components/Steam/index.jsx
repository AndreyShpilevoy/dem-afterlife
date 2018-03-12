import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import steamSquare from 'images/svg/steam-square.svg';


const Steam = ({className}) =>
    (<SVGInline
        className={className}
        svg={steamSquare} />);

Steam.propTypes = {
    className: string
};

Steam.defaultProps = {
    className: ''
};

export default Steam;