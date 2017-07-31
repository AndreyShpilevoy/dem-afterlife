const getLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({themeName, link, focus}) => ({
    link: {
        ...getLinkStyle(link),
        '&:visited': getLinkStyle(link),
        '&:hover': getLinkHoverStyle(link),
        '&:visited:hover': getLinkHoverStyle(link),
        '&:focus': {
            outlineColor: focus.colorDark
        }
    },
    options: {meta: 'Link', themeName}
});

export default calculateStyles;