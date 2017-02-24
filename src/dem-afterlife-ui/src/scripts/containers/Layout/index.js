import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocale } from './layout-reducer';
import Presentation from './Presentation';


const { node, func } = PropTypes;
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getLocale
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(Layout);
