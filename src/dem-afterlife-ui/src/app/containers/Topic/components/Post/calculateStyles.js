const calculateStyles = ({post, themeName}) => ({
    inLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: post.separator,
    options: {meta: 'Post', themeName}
});

export default calculateStyles;