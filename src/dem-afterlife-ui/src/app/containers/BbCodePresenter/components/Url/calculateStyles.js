const getUrlLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getUrlLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({themeName, bbCodes, focus}) => ({
    url: {
        wordBreak: 'break-all',
        ...getUrlLinkStyle(bbCodes.url),
        '&:visited': getUrlLinkStyle(bbCodes.url),
        '&:hover': getUrlLinkHoverStyle(bbCodes.url),
        '&:visited:hover': getUrlLinkHoverStyle(bbCodes.url),
        '&:focus': {
            outlineColor: focus.colorDark
        }
    },
    options: {meta: 'Url', themeName}
});

export default calculateStyles;