const calculateStyles = ({mainWrapper}) => ({
    '@global': {
        body: {
            margin: 'initial',
            minWidth: 'initial'
        }
    },
    contentWrapper: {
        fontSize: mainWrapper.fontSize,
        backgroundColor: mainWrapper.backgroundColor,
        fontFamily: mainWrapper.fontFamily,
        lineHeight: mainWrapper.lineHeight
    },
    container: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    content: {
        flex: '1 !important'
    }
});

export default calculateStyles;