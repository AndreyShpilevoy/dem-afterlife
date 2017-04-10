/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale} from './layout-reducer';
import Presentation from './Presentation';

const {node, func} = PropTypes;
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
            <Presentation
                children={this.props.children}
                theme={'default'} />
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale
    }, dispatch);

export default connect(null, mapDispatchToProps)(Layout);
