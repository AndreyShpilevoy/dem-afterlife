/* eslint-disable fp/no-class, fp/no-this, fp/no-unused-expression, fp/no-nil, fp/no-mutation */

import React, {PureComponent} from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const spoilerTerm = {id: 35, value: 'Spoiler'};

export class SpoilerPure extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
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

    render() {
        const {children, options, styles} = this.props;
        const {isOpen} = this.state;
        return (
            <div className={styles.spoiler}>
                <div className={styles.focus} onClick={this.toggle} role={'button'} tabIndex={0}>
                    <span className={styles.title}>
                        {options || <Term term={spoilerTerm} />}
                    </span>
                </div>
                {
                    isOpen ?
                        <div className={styles.content}>
                            {children}
                        </div> :
                        ''
                }
            </div>
        );
    }
}
export default withStyles(theme => calculateStyles(theme))(SpoilerPure);
