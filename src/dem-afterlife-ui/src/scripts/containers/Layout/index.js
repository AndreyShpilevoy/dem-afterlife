/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {node, func, arrayOf, shape, number, string} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getLocale, getnavigationLinkArray} from './layout-reducer';
import Presentation from './Presentation';

class Layout extends Component {
    static propTypes = {
        children: node,
        getLocale: func.isRequired,
        getnavigationLinkArray: func.isRequired,
        navigationLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            order: number.isRequired
        })).isRequired
    };

    componentDidMount() {
        this.props.getLocale();
        this.props.getnavigationLinkArray();
    }

    render() {
        const {navigationLinkArray} = this.props;
        return (
            <Presentation theme={ 'default' } navigationLinkArray={navigationLinkArray}>
                {this.props.children}
            </Presentation>
        );
    }
}

const mapStateToProps = ({layoutReducer}) => ({navigationLinkArray: layoutReducer.navigationLinkArray});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getLocale,
        getnavigationLinkArray
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
