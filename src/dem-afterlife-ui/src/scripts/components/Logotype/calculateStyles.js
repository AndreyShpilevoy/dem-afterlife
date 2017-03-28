const calculateStyles = ({logotype}) => ({
    logotype: {
        backgroundImage: `url(${logotype.backgroundImage})`,
        backgroundSize: logotype.backgroundSize,
        height: logotype.height,
        width: logotype.width
    }
});

export default calculateStyles;