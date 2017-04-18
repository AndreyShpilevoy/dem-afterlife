const getLinkStyle = ({link}) => ({
    color: link.color,
    textDecoration: link.textDecoration
});

const getLinkHoverStyle = ({link}) => ({
    color: link.hoveredColor,
    textDecoration: link.hoveredTextDecoration
});

const globalStyles = ({global}) => ({
    '@global': {
        html: {
            fontSize: global.html.fontSize
        },
        body: {
            backgroundColor: global.body.backgroundColor,
            fontFamily: global.body.fontFamily,
            fontSize: global.body.fontSize,
            lineHeight: global.body.lineHeight,
            minWidth: global.body.minWidth,
            margin: global.body.margin
        },
        a: {
            '&:link': getLinkStyle(global),
            '&:visited': getLinkStyle(global),
            '&:link:hover': getLinkHoverStyle(global),
            '&:visited:hover': getLinkHoverStyle(global)
        }
    }
});

export default globalStyles;