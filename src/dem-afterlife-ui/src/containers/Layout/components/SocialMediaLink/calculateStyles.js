const calculateStyles = ({ focus }) => ({
  focus: {
    "&:focus": {
      outlineColor: focus.colorLight
    }
  }
});

export default calculateStyles;
