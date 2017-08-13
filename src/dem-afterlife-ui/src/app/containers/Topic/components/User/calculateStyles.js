const calculateStyles = ({post, themeName}) => ({
    inLine: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userNameStyle: {
        paddingLeft: post.usernamePaddingLeft
    },
    options: {meta: 'User', themeName}
});

export default calculateStyles;