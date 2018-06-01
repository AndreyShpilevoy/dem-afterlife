import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import error from 'images/svg/times-circle-o.svg';


const Error = ({className}) =>
    (<SVGInline
        className={className}
        svg={error} />);

Error.propTypes = {
    className: string
};

Error.defaultProps = {
    className: ''
};

export default Error;