const getLinkStyle = ({color, textDecoration}) => ({
    color,
    textDecoration
});

const getLinkHoverStyle = ({hoveredColor, hoveredTextDecoration}) => ({
    color: hoveredColor,
    textDecoration: hoveredTextDecoration
});

const calculateStyles = ({link}) => ({
    link: {
        ...getLinkStyle(link),
        '&:visited': getLinkStyle(link),
        '&:hover': getLinkHoverStyle(link),
        '&:visited:hover': getLinkHoverStyle(link)
    },
    options: {meta: 'Link'}
});

export default calculateStyles;