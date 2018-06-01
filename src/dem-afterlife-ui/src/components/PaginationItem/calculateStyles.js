const calculateStyles = ({ pagination }) => ({
  item: {
    backgroundColor: pagination.bgColor,
    height: pagination.height,
    paddingRight: 0.3125,
    paddingLeft: 0.3125,
    fontSize: pagination.fontSize,
    lineHeight: pagination.lineHeight,
    display: "block",
    marginLeft: pagination.marginAndPaddingRight,
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    position: "relative",
    "&:hover": {
      backgroundColor: pagination.hoveredBgColor
    }
  },
  ellipsis: {
    "&:hover": {
      backgroundColor: pagination.bgColor
    }
  },
  active: {
    color: pagination.textColor,
    textDecoration: "none",
    backgroundColor: pagination.hoveredBgColor
  },
  small: {
    height: pagination.small.height,
    paddingRight: pagination.small.paddingRight,
    paddingLeft: pagination.small.paddingLeft,
    fontSize: pagination.small.fontSize,
    lineHeight: pagination.small.lineHeight
  }
});

export default calculateStyles;
