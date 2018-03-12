const calculateStyles = ({logotype, focus}) => ({
    logotype: {
        backgroundImage: `url(${logotype.backgroundImage})`,
        backgroundRepeat: logotype.backgroundRepeat,
        backgroundSize: logotype.backgroundSize,
        height: '100%'
    },
    logotypeContainer: {
        height: logotype.height,
        '&:focus': {
            outlineColor: focus.colorLight
        }
    }
});

export default calculateStyles;