import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import sortLeft from 'images/svg/sort-left.svg';


const SortLeft = ({className}) =>
    (<SVGInline
        className={className}
        svg={sortLeft} />);

SortLeft.propTypes = {
    className: string
};

SortLeft.defaultProps = {
    className: ''
};

export default SortLeft;