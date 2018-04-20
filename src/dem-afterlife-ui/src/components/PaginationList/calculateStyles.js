const calculateStyles = ({ pagination }) => ({
  list: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    marginTop: pagination.listMarginTop
  },
  small: {
    marginTop: 0.0625
  }
});

export default calculateStyles;
