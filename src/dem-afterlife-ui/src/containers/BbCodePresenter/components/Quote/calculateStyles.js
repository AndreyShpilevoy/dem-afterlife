const calculateStyles = ({ bbCodes }) => {
  const { common, quote } = bbCodes;
  return {
    author: {
      fontWeight: "bold"
    },
    quote: {
      backgroundColor: quote.backgroundColor,
      borderColor: quote.borderColor,
      borderStyle: "solid",
      borderWidth: common.borderWidth,
      padding: common.padding,
      marginLeft: common.marginHorizontal,
      marginRight: common.marginHorizontal,
      marginTop: common.marginVertical,
      marginBottom: common.marginVertical
    }
  };
};

export default calculateStyles;
