import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import {defaults} from 'utils';
import steamSquare from 'images/svg/steam-square.svg';


const IconSteam = ({className}) =>
    (<SVGInline
        className={className}
        svg={steamSquare} />);

IconSteam.propTypes = {
    className: string
};

IconSteam.defaultProps = {
    className: defaults.emptyString
};

export default IconSteam;