const calculateStyles = ({ post }) => ({
  separator: {
    backgroundColor: post.separator.backgroundColor,
    height: post.separator.height / 2,
    marginTop: post.separator.marginVertical,
    marginBottom: post.separator.marginVertical,
    marginLeft: post.separator.marginHorizontal,
    marginRight: post.separator.marginHorizontal
  },

  container: {
    "& img": {
      verticalAlign: "sub"
    }
  }
});

export default calculateStyles;
