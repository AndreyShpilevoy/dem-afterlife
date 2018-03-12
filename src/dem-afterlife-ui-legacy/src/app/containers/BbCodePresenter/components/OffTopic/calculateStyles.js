const calculateStyles = ({bbCodes}) => ({
    content: {
        color: bbCodes.offtopic.color
    },
    header: {
        fontWeight: 'bold'
    }
});

export default calculateStyles;