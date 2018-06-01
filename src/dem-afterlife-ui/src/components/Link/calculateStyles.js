const getLinkStyle = ({ color, textDecoration }) => ({
  color,
  textDecoration
});

const getLinkHoverStyle = ({ hoveredColor, hoveredTextDecoration }) => ({
  color: hoveredColor,
  textDecoration: hoveredTextDecoration
});

const calculateStyles = ({ link, focus }) => ({
  link: {
    ...getLinkStyle(link),
    "&:visited": getLinkStyle(link),
    "&:hover": getLinkHoverStyle(link),
    "&:visited:hover": getLinkHoverStyle(link),
    "&:focus": {
      outlineColor: focus.colorDark
    }
  }
});

export default calculateStyles;
