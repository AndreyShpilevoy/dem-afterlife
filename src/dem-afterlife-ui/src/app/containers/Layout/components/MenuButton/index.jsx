/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0 */

import React, {PureComponent} from 'react';
import {func, shape} from 'prop-types';
import {css, withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';


export class MenuButtonPure extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
        onClick: func.isRequired
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
        const {container, firstLine, secondLine, thirdLine, fourthLine, allLines} = styles;
        const {opened} = this.state;
        const openedClassName = opened ? 'open' : defaults.emptyString;
        const firstLineStyle = css([firstLine, allLines, openedClassName]);
        const secondLineStyle = css([secondLine, allLines, openedClassName]);
        const thirdLineStyle = css([thirdLine, allLines, openedClassName]);
        const fourthLineStyle = css([fourthLine, allLines, openedClassName]);
        const menuButtonOnClick = () => this.onClickLocal(!opened);
        return (
            <div className={container} onClick={menuButtonOnClick} role={'button'} tabIndex={0}>
                <div className={firstLineStyle} />
                <div className={secondLineStyle} />
                <div className={thirdLineStyle} />
                <div className={fourthLineStyle} />
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(MenuButtonPure);