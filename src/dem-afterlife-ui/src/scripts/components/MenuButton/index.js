/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


export class MenuButtonPure extends PureComponent {
    static propTypes = {
        classNames: ClassNamesPropType,
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
        const {classNames} = this.props;
        const {opened} = this.state;
        const openedClassName = opened ? 'open' : '';
        return (
            <div className={ classNames.container } onClick={() => this.onClickLocal(!opened)}>
                <div className={ `${classNames.firstLine} ${classNames.allLines} ${openedClassName}` } />
                <div className={ `${classNames.secondLine} ${classNames.allLines} ${openedClassName}` } />
                <div className={ `${classNames.thirdLine} ${classNames.allLines} ${openedClassName}` } />
                <div className={ `${classNames.fourthLine} ${classNames.allLines} ${openedClassName}` } />
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(MenuButtonPure);