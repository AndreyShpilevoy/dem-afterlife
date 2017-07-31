const calculateStyles = ({themeName, bbCodes}) => ({
    content: {
        color: bbCodes.offtopic.color
    },
    header: {
        fontWeight: 'bold'
    },
    options: {meta: 'OffTopic', themeName}
});

export default calculateStyles;