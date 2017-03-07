import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { ClassNamesPropType } from 'aesthetic';
import Container from 'components/Container';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

//const {string, node} = PropTypes;
class Header extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };

    constructor(props) {
        super(props);
        this.state = { shrinkedHeader: false };
    }

    handleScroll = (node) => {
        if (node) {
            node.ownerDocument.addEventListener('scroll',
                _.throttle(({target}) => {
                    target.scrollingElement.scrollTop > 25 ?
                        this.setState({ shrinkedHeader: true }) :
                        this.setState({ shrinkedHeader: false });
                }, 500));
        }
    };

    render() {
        const { classNames } = this.props;
        const { shrinkedHeader } = this.state;
        const className = shrinkedHeader ? `${classNames.header} shrinkedHeader` : classNames.header;
        return (
            <div>
                <Container className={classNames.fixedOnTheTop}>
                    <div className={className} />
                </Container>
                <div className={classNames.headerPadding} ref={this.handleScroll} />
            </div>
        );
    }
}

export default styler((theme) => (calculateStyles(theme)))(Header);