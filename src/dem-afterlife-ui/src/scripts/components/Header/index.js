import React, { Component, PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import Container from 'components/Container';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

//const {string, node} = PropTypes;
class Header extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };

    constructor(props){
        super(props);
        this.state = {value: false};
    }

    handleScroll = (node) => {
        if (node) {
            node.ownerDocument.addEventListener('scroll',
                () => this.setState({
                    value: true
                }));
        }
    };

    render() {
        const {classNames} = this.props;
        return (
            <div>
                <Container className={classNames.fixedOnTheTop}>
                    <div className={classNames.header}>

                    </div>
                </Container>
                <div className={classNames.headerPadding} ref={this.handleScroll} />
            </div>
        );
    }
}

export default styler((theme) => (calculateStyles(theme)))(Header);