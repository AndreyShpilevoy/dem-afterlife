const calculateStyles = ({post}) => ({
    inLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    },
    textEllipsis: {
        width: 'initial',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    separator: {
        backgroundColor: post.separator.backgroundColor,
        height: post.separator.height,
        marginTop: post.separator.marginVertical,
        marginBottom: post.separator.marginVertical,
        marginLeft: post.separator.marginHorizontal,
        marginRight: post.separator.marginHorizontal
    }
});

export default calculateStyles;