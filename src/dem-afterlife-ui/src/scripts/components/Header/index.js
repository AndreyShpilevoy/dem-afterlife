import React, {Component} from 'react';
import {throttle, root} from 'utils';
import {ClassNamesPropType} from 'aesthetic';
import Container from 'components/Container';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';
import Logotype from '../Logotype';

// const {string, node} = PropTypes;
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
                        <Logotype/>
                    </div>
                </Container>
                <div className={classNames.headerPadding} ref={this.handleScroll} />
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(HeaderPure);