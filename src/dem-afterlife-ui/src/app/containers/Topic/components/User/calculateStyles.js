const calculateStyles = ({themeName}) => ({
    inLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    options: {meta: 'User', themeName}
});

export default calculateStyles;