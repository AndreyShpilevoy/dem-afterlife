const calculateStyles = ({logotype}) => ({
    logotype: {
        backgroundImage: `url(${logotype.backgroundImage})`,
        backgroundRepeat: logotype.backgroundRepeat,
        backgroundSize: logotype.backgroundSize,
        height: '100%'
    },
    logotypeContainer: {
        height: logotype.height,
        display: 'block'
    }
});

export default calculateStyles;