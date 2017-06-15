const calculateStyles = ({mainWrapper}) => ({
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
    },
    options: {meta: 'LayoutContainer'}
});

export default calculateStyles;