const calculateStyles = ({themeName}) => ({
    media: {
        width: '100%',
        wordBreak: 'break-word'
    },
    options: {meta: 'Root', themeName}
});

export default calculateStyles;