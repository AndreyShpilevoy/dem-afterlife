const calculateStyles = ({ breadcrumbs }) => ({
  list: {
    display: "flex",
    flexFlow: "row wrap",
    marginTop: breadcrumbs.listMarginTop
  }
});

export default calculateStyles;
