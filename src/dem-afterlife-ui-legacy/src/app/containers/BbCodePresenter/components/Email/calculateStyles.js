const getEmailLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getEmailLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({bbCodes, focus}) => ({
    email: {
        ...getEmailLinkStyle(bbCodes.email),
        '&:visited': getEmailLinkStyle(bbCodes.email),
        '&:hover': getEmailLinkHoverStyle(bbCodes.email),
        '&:visited:hover': getEmailLinkHoverStyle(bbCodes.email),
        '&:focus': {
            outlineColor: focus.colorDark
        }
    }
});

export default calculateStyles;