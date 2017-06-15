/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {func, object} from 'prop-types';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';


export class MenuButtonPure extends PureComponent {
    static propTypes = {
        styles: object,
        onClick: func
    };

    constructor(props) {
        super(props);
        this.state = {opened: false};
    }

    onClickLocal = value => {
        const {onClick} = this.props;
        this.setState({opened: value});
        if (onClick) {
            onClick();
        }
    }

    render() {
        const {styles} = this.props;
        const {opened} = this.state;
        const openedClassName = opened ? 'open' : '';
        const menuButtonOnClick = () => this.onClickLocal(!opened);
        return (
            <div className={ css(styles.container) } onClick={menuButtonOnClick}>
                <div className={ `${css(styles.firstLine)} ${css(styles.allLines)} ${openedClassName}` } />
                <div className={ `${css(styles.secondLine)} ${css(styles.allLines)} ${openedClassName}` } />
                <div className={ `${css(styles.thirdLine)} ${css(styles.allLines)} ${openedClassName}` } />
                <div className={ `${css(styles.fourthLine)} ${css(styles.allLines)} ${openedClassName}` } />
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme))(MenuButtonPure);