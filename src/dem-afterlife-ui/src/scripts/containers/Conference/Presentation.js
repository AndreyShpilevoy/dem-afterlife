import React from 'react';
import {node} from 'prop-types';

const Presentation = ({children}) =>
    <div>
        {children}
    </div>;
Presentation.propTypes = {
    children: node
};

export default Presentation;