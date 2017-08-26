const calculateStyles = ({themeName, breadcrumbs}) => ({
    list: {
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: breadcrumbs.listMarginTop
    },
    options: {meta: 'BreadcrumbList', themeName}
});

export default calculateStyles;