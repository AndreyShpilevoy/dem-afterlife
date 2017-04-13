/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {node, func} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale} from './layout-reducer';
import Presentation from './Presentation';

class Layout extends Component {
    static propTypes = {
        children: node,
        getLocale: func.isRequired
    };

    componentDidMount() {
        this.props.getLocale();
    }

    render() {
        return (
            <Presentation theme={ 'default' }>
                {this.props.children}
            </Presentation>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale
    }, dispatch);

export default connect(null, mapDispatchToProps)(Layout);
