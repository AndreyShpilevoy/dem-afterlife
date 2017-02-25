import React, { PropTypes } from 'react';

const Presentation = ({children}) => (
    <div>
        {'Some fake data'}
        {children}
    </div>
);
Presentation.propTypes = {
    children: PropTypes.node
};

export default Presentation;