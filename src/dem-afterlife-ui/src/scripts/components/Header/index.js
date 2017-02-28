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
    render() {
        const {classNames} = this.props;
        return (
            <div>
            <Container className={classNames.fixedOnTheTop}>
                <div id='header' className={ classNames.header }>

                </div>
            </Container>
                <div className={classNames.headerPadding}/>
            </div>
        );
    }
}

export default styler((theme) => (calculateStyles(theme)))(Header);