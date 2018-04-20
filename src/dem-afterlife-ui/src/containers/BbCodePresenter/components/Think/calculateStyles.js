const calculateStyles = ({ bbCodes }) => {
  const { think } = bbCodes;
  return {
    think: {
      width: "fit-content",
      display: "inline-block"
    },
    content: {
      backgroundColor: think.backgroundColor,
      borderColor: think.borderColor,
      borderStyle: "solid",
      borderWidth: think.borderWidth,
      borderRadius: think.borderRadius,
      padding: think.paddingContent
    },
    image: {
      backgroundImage: `url(${think.image});`,
      backgroundRepeat: "no-repeat",
      backgroundSize: think.backgroundSize,
      paddingTop: think.paddingTop
    }
  };
};

export default calculateStyles;
