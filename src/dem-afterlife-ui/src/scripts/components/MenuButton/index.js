/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


export class MenuButtonPure extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };

    constructor(props) {
        super(props);
        this.state = {opened: false};
    }

    onClick = () => {
        this.setState({opened: !this.state.opened});
    }

    render() {
        const {classNames} = this.props;
        const opened = this.state.opened ? 'open' : '';
        return (
            <div className={ classNames.container } onClick={this.onClick}>
                <div className={ `${classNames.firstLine} ${classNames.allLines} ${opened}` } />
                <div className={ `${classNames.secondLine} ${classNames.allLines} ${opened}` } />
                <div className={ `${classNames.thirdLine} ${classNames.allLines} ${opened}` } />
                <div className={ `${classNames.fourthLine} ${classNames.allLines} ${opened}` } />
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(MenuButtonPure);