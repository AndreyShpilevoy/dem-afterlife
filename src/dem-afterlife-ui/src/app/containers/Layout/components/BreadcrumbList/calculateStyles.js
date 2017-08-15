const calculateStyles = ({themeName}) => ({
    list: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: 0.3125
    },
    options: {meta: 'BreadcrumbList', themeName}
});

export default calculateStyles;