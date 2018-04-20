const calculateStyles = ({ menuButton, focus }) => ({
  container: {
    cursor: menuButton.cursor,
    height: menuButton.widthAndHeight,
    transform: "rotate(0deg)",
    width: menuButton.widthAndHeight,
    "&:focus": {
      outlineColor: focus.colorLight
    }
  },
  allLines: {
    borderRadius: "3.333%",
    background: menuButton.line.color,
    height: "10%",
    left: 0,
    marginLeft: "10%",
    position: "absolute",
    transform: "rotate(0deg)",
    transition: menuButton.line.transition,
    width: "80%"
  },
  firstLine: {
    top: "20%",
    "&.open": {
      top: "45%",
      width: "0%",
      left: "50%"
    }
  },
  secondLine: {
    top: "45%",
    "&.open": {
      transform: "rotate(45deg)"
    }
  },
  thirdLine: {
    top: "45%",
    "&.open": {
      transform: "rotate(-45deg)"
    }
  },
  fourthLine: {
    top: "70%",
    "&.open": {
      top: "45%",
      width: "0%",
      left: "50%"
    }
  }
});

export default calculateStyles;
