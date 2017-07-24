/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {node, string, number, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

// import styles from './index.scss';
// import SelectTextFromContainerById from 'services/domScripts/SelectTextFromContainerById';

class Code extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
        id: number.isRequired,
        children: node,
        options: string
    }

    // state = {
    //     buttonId: `button-${this.props.id}`,
    //     containedId: `container-${this.props.id}`
    // }

    // componentDidMount() {
    //     const {buttonId, containedId} = this.state;

        // SelectTextFromContainerById.init(buttonId, containedId);
    // }

    render() {
        const {buttonId, containedId} = this.state;
        const {children, options, styles} = this.props;
        const {code, codeHeader, codeHeaderLeft, codeSelectButton, codeHeaderRight, codeContent} = styles;
        return (
            <div className = {code}>
                <div className = {codeHeader}>
                    <div className = {codeHeaderLeft}>
                        <Term spaceAfter term={{id: 34, value: 'Code:'}} />
                        <span id={buttonId} className = {codeSelectButton}>
                            <Term spaceAfter term={{id: 35, value: 'Ctrl+A, Ctrl+C'}} />
                        </span>
                    </div>
                    <div className = {codeHeaderRight}>
                        {options || null}
                    </div>
                </div>
                <span id={containedId} className = {codeContent}>
                    {children}
                </span>
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(Code);
