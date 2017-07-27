const calculateStyles = ({themeName}) => ({
    quoteAuthor: {
        fontWeight: 'bold'
    },
    quote: {
        backgroundColor: '#9A8D7F',
        border: '0.0625rem solid #5f554b',
        margin: '0.3125rem 1.25rem',
        padding: 0.4
    },
    options: {meta: 'Quote', themeName}
});

export default calculateStyles;