import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import {defaults} from 'utils';
import sortLeft from 'images/svg/sort-left.svg';


const IconSortLeft = ({className}) =>
    (<SVGInline
        className={className}
        svg={sortLeft} />);

IconSortLeft.propTypes = {
    className: string
};

IconSortLeft.defaultProps = {
    className: defaults.emptyString
};

export default IconSortLeft;