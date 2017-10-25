const calculateStyles = ({pagination}) => ({
    list: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        marginTop: pagination.listMarginTop
    }
});

export default calculateStyles;


