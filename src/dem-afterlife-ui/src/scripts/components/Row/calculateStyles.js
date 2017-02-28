const calculateStyles = () => ({
    row: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 'initial',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '&.reverse': {
            flexDirection: 'row-reverse'
        }
    }
});

export default calculateStyles;