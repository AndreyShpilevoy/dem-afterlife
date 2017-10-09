/* eslint-disable fp/no-class, fp/no-this, fp/no-unused-expression, fp/no-nil, fp/no-mutation */

import React, {PureComponent} from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {injectSheet} from 'styles';
import {handleEnterKeyDown} from 'utils';
import calculateStyles from './calculateStyles';

export class SpoilerPure extends PureComponent {
    static propTypes = {
        classes: shape().isRequired,
        children: node.isRequired,
        options: string
    };

    static defaultProps = {
        options: ''
    }

    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleKeyDown = event => handleEnterKeyDown(event) ? this.toggle() : () => ({});

    render() {
        const spoilerTerm = {id: 35, value: 'Spoiler'};
        const {children, options, classes} = this.props;
        const {isOpen} = this.state;
        return (
            <div className={classes.spoiler}>
                <div className={classes.focus} onClick={this.toggle} onKeyDown={this.handleKeyDown} role='button' tabIndex={0}>
                    <span className={classes.title}>
                        {options || <Term term={spoilerTerm} />}
                    </span>
                </div>
                {
                    isOpen ?
                        <div className={classes.content}>
                            {children}
                        </div> :
                        ''
                }
            </div>
        );
    }
}
export default injectSheet(calculateStyles, {componentName: 'Spoiler'})(SpoilerPure);
