const calculateStyles = ({themeName}) => ({
    link: {
        paddingLeft: 0.125
    },
    icon: {
        '& > .SVGInline-svg': {
            height: 1.3125,
            width: 1.3125,
            fill: '#9C877C',
            transform: `translateY(${- 0.125}rem)`
        }
    },
    container: {
        marginTop: - 0.5
    },
    options: {meta: 'SubForum', themeName}
});

export default calculateStyles;