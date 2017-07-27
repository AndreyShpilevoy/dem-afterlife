/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0, no-return-assign: 0 */

import React, {PureComponent} from 'react';
import {node, string, shape} from 'prop-types';
import Term from 'containers/Term';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

class Code extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
        children: node.isRequired,
        options: string // eslint-disable-line react/require-default-props
    }

    render() {
        const {children, options, styles} = this.props;
        const {code, codeHeader, codeHeaderLeft, codeHeaderRight, codeContent} = styles;
        return (
            <div className={code}>
                <div className={codeHeader}>
                    <div className={codeHeaderLeft}>
                        <Term spaceAfter term={{id: 34, value: 'Code'}} untermedPostfix={':'} />
                    </div>
                    <div className={codeHeaderRight}>
                        {options || null}
                    </div>
                </div>
                <span ref={codeContainer => this.codeContainer = codeContainer} className={codeContent}>
                    {children}
                </span>
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme))(Code);
