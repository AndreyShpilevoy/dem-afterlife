const getEmailLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getEmailLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({themeName, link}) => ({
    email: {
        ...getEmailLinkStyle(link),
        '&:visited': getEmailLinkStyle(link),
        '&:hover': getEmailLinkHoverStyle(link),
        '&:visited:hover': getEmailLinkHoverStyle(link)
    },
    options: {meta: 'Email', themeName}
});

export default calculateStyles;