const calculateStyles = ({error}) => ({
    container: {
        width: 'fit-content',
        textAlign: 'center',
        borderColor: error.color,
        borderStyle: 'solid',
        borderWidth: error.borderWidth,
        padding: error.padding
    },
    image: {
        width: error.widthAndheight,
        height: error.widthAndheight,
        '& > .SVGInline-svg': {
            width: error.widthAndheight,
            height: error.widthAndheight,
            fill: error.color
        }
    }
});

export default calculateStyles;