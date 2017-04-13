import React from 'react';
import {node} from 'prop-types';
import {connect} from 'react-redux';
import Presentation from './Presentation';

const Conference = ({children}) =>
    <Presentation>
        {children}
    </Presentation>;

Conference.propTypes = {
    children: node
};

export default connect()(Conference);
