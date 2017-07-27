const calculateStyles = ({themeName}) => ({
    spoilerAuthor: {
        fontWeight: 'bold'
    },
    spoiler: {
        color: '#D4D4D4',
        backgroundColor: '#67605a',
        border: '0.0625rem solid #44423f',
        marginLeft: 1.25,
        marginRight: 1.25,
        marginTop: 0.3125,
        marginBottom: 0.3125,
        padding: 0.4
    },
    spoilerContent: {
        marginTop: 0.3125
    },
    options: {meta: 'Spoiler', themeName}
});

export default calculateStyles;