import React, { Component, PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import Container from 'components/Container';
import styler from 'styles/styler';

//const {string, node} = PropTypes;
class Header extends Component {
    static propTypes = {
        classNames: ClassNamesPropType
    };
    render() {
        const {classNames} = this.props;
        return (
            <div>
            <Container className={classNames.fixedOnTheTop}>
                <div id='header' className={ classNames.header }>

                </div>
            </Container>
                <div className={classNames.headerPadding}/>
            </div>
        );
    }
}

export const constructStylesFromTheme = ({grid, header}) => {
    return grid.containers.reduce((previouse, current) => {
        let result;
        if (current.size !== 'xs' && current.size !== 'sm') {
            result = Object.assign({}, previouse, {
                [ `@media (${ current.min })` ]: {
                    header: {
                        backgroundImage: `url(${ header[ `${ current.size }` ].backgroundImage })`,
                        height: header[ current.size ].height,
                        width: '100%'
                    },
                    headerPadding: {
                        paddingTop: header[ current.size ].height,
                    }
                }
            });
        } else {
            result = Object.assign({}, previouse, {
                [ `@media (${ current.min })` ]: {
                    header: {
                        height: header[ current.size ].height,
                        width: '100%'
                    },
                    headerPadding: {
                        paddingTop: header[ current.size ].height,
                    }
                }
            });
        }
        return result;
    },
        {
            fixedOnTheTop: {
                position: 'fixed',
                top: 0
            }
        });
};

export default styler((theme) => (constructStylesFromTheme(theme)))(Header);