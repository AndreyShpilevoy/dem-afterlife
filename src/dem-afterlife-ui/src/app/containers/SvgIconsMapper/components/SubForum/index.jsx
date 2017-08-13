import React from 'react';
import {string} from 'prop-types';
import SVGInline from 'react-svg-inline';
import subForum from 'images/svg/sub-forum.svg';


const SubForum = ({className}) =>
    (<SVGInline
        className={className}
        svg={subForum} />);

SubForum.propTypes = {
    className: string
};

SubForum.defaultProps = {
    className: ''
};

export default SubForum;