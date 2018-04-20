const calculateStyles = ({ post }) => ({
  inLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  userNameStyle: {
    paddingLeft: post.usernamePaddingLeft
  }
});

export default calculateStyles;
