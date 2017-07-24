const calculateStyles = themeName => ({
    code: {
        backgroundColor: '#59534D',
        border: '0.0625rem solid #9C9085',
        padding: 0.4
    },
    codeHeader: {
        color: '#D4D4D4',
        display: 'flex'
    },
    codeHeaderLeft: {
        marginRight: 'auto'
    },
    codeHeaderRight: {
        marginLeft: 'auto'
    },
    codeContent: {
        color: '#FFA100',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap'
    },
    codeSelectButton: {
        color: '#CBC065',
        cursor: 'pointer',
        '&:hover': {
            color: '#FFF495'
        }
    },
    options: {meta: 'Code', themeName}
});

export default calculateStyles;