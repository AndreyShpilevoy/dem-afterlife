const calculateStyles = ({ error }) => ({
  container: {
    width: "fit-content",
    textAlign: "center",
    borderColor: error.color,
    borderStyle: "solid",
    borderWidth: error.borderWidth,
    padding: error.padding
  },
  image: {
    "& > svg": {
      width: error.widthAndHeight,
      height: error.widthAndHeight,
      fill: error.color
    }
  }
});

export default calculateStyles;
