const calculateStyles = () => ({
  bold: {
    fontWeight: "bold"
  },

  italic: {
    fontStyle: "italic"
  },

  underline: {
    textDecoration: "underline"
  },

  lineThrough: {
    textDecoration: "lineThrough"
  },

  position: {
    display: "inline-flex",
    width: "100%"
  },
  center: {
    "&:last-child": {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  right: {
    "&:last-child": {
      marginLeft: "auto"
    }
  },
  left: {
    "&:last-child": {
      marginRight: "auto"
    }
  }
});

export default calculateStyles;
