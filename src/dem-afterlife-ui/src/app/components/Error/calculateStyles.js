const calculateStyles = () => ({
    container: {
        width: 6.25,
        textAlign: 'center',
        borderColor: '#fb7c20',
        borderStyle: 'solid',
        borderWidth: 0.125
    },
    image: {
        width: 3,
        height: 3,
        '& > .SVGInline-svg': {
            width: 3,
            height: 3,
            fill: '#fb7c20'
        }
    }
});

export default calculateStyles;