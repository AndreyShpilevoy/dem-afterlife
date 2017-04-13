/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {throttle, root} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import Container from 'components/Container';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';
import Column from '../Column';
import Logotype from '../Logotype';

export class HeaderPure extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };

    constructor(props) {
        super(props);
        this.state = {shrinkedHeader: false};
    }

    handleScroll = () => {
        root.addEventListener('scroll',
            throttle(({target}) => {
                target.scrollingElement.scrollTop > 25 ? // eslint-disable-line no-unused-expressions
                    this.setState({shrinkedHeader: true}) :
                    this.setState({shrinkedHeader: false});
            }, 250));
    };

    render() {
        const {classNames} = this.props;
        const {shrinkedHeader} = this.state;
        const headerClassName = shrinkedHeader ? `${classNames.header} shrinkedHeader` : classNames.header;
        return (
            <div>
                <Container className={classNames.fixedOnTheTop}>
                    <div className={headerClassName}>
                        <Column xs='6' className={classNames.logotypeColumn}>
                            <Logotype/>
                        </Column>
                    </div>
                </Container>
                <div className={classNames.headerPadding} ref={this.handleScroll} />
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(HeaderPure);