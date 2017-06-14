const calculateStyles = () => ({
    separator: {
        backgroundColor: '#9C877C',
        height: 0.125,
        marginTop: 0.3,
        marginBottom: 0.3,
        marginLeft: 0,
        marginRight: 0.3
    },
    mainContainer: {
        '&:last-child': {
            '&>$separator': {
                display: 'none'
            }
        }
    },
    bigText: {
        display: 'block',
        fontSize: 1.3125,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    smallText: {
        display: 'block',
        fontSize: 0.8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    lastTopicInfoWrapper: {
        width: '100%',
        textAlign: 'center'
    }
});

export default calculateStyles;