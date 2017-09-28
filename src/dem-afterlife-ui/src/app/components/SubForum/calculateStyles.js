const calculateStyles = ({subForum}) => ({
    link: {
        paddingLeft: subForum.paddingLeft
    },
    icon: {
        '& > .SVGInline-svg': {
            height: subForum.iconSize,
            width: subForum.iconSize,
            fill: subForum.backgroundColor,
            transform: subForum.iconTransform
        }
    },
    container: {
        marginTop: - subForum.marginTop
    }
});

export default calculateStyles;