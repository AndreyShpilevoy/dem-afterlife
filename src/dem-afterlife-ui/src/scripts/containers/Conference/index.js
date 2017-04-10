/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Presentation from './Presentation';

class Conference extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
      <Presentation
          children={this.props.children}/>
        );
    }
}

export default connect()(Conference);
