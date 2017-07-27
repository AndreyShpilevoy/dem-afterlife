const getUrlLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getUrlLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({themeName, link}) => ({
    url: {
        wordBreak: 'break-all',
        ...getUrlLinkStyle(link),
        '&:visited': getUrlLinkStyle(link),
        '&:hover': getUrlLinkHoverStyle(link),
        '&:visited:hover': getUrlLinkHoverStyle(link)
    },
    options: {meta: 'Url', themeName}
});

export default calculateStyles;