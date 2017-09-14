const calculateStyles = () => ({
    row: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flex: '0 1 auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '&.reverse': {
            flexDirection: 'row-reverse'
        }
    }
});

export default calculateStyles;