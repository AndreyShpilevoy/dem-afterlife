const calculateStyles = ({themeName, logotype}) => ({
    logotype: {
        backgroundImage: `url(${logotype.backgroundImage})`,
        backgroundRepeat: logotype.backgroundRepeat,
        backgroundSize: logotype.backgroundSize,
        height: '100%'
    },
    logotypeContainer: {
        height: logotype.height
    },
    options: {meta: 'Logotype', themeName}
});

export default calculateStyles;