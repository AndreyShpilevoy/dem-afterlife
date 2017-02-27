import React, { Component, PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

//const {string, node} = PropTypes;
class Header extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };
    render() {
        const {classNames} = this.props;
        return (
            <div id='header' className={classNames.header}>
                {'header'}
            </div>
        );
    }
}

export const constructStylesFromTheme = ({grid, header}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: {
                header: {
                    backgroundImage: `url(${header.backgroundImageMd})`
                }
            }
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Header);