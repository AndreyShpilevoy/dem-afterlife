/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/
import React, {Component} from 'react';
import {node} from 'prop-types';
import {connect} from 'react-redux';
import Presentation from './Presentation';

class Conference extends Component {
    static propTypes = {
        children: node
    };

    render() {
        const {children} = this.props;
        return (
            <Presentation>
                {children}
            </Presentation>
        );
    }
}

export default connect()(Conference);
