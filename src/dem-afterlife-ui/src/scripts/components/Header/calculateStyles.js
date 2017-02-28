const calculateStyles = ({grid, header}) => {
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

export default calculateStyles;