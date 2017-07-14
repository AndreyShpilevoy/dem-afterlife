const calculateStyles = ({themeName}) => ({
    inLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userNameStyle: {
        paddingLeft: 0.3125
    },
    options: {meta: 'User', themeName}
});

export default calculateStyles;