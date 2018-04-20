import { createMediaQueryMax } from "utils";

const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

const textBase = {
  display: "block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const getDisplayInline = mediaMaxString =>
  createMediaQueryMax(mediaMaxString, { display: "inline" });

const getDisableRow = mediaMaxString =>
  createMediaQueryMax(mediaMaxString, {
    flex: "initial",
    width: "initial",
    display: "initial",
    flexWrap: "initial",
    boxSizing: "initial",
    flexDirection: "initial"
  });

const getDisableCenter = mediaMaxString =>
  createMediaQueryMax(mediaMaxString, {
    display: "initial",
    alignItems: "initial",
    flexDirection: "initial",
    justifyContent: "initial"
  });

const getSmLastTopicInfoContainer = mediaMaxString =>
  createMediaQueryMax(mediaMaxString, {
    textAlign: "initial",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  });

const getSmSmallText = (mediaMaxString, size) =>
  createMediaQueryMax(mediaMaxString, { fontSize: size });

const getTopicsMessagesContainer = (mediaMaxString, size) =>
  createMediaQueryMax(mediaMaxString, { fontSize: size, flexDirection: "row" });

const calculateStyles = ({ grid, forum }) => {
  const { separator, text, subForumContainer } = forum;
  const { mediaMaxString: mdMediaMaxString } = grid.containers.find(
    x => x.gridSize === "md"
  );
  const { mediaMaxString: smMediaMaxString } = grid.containers.find(
    x => x.gridSize === "sm"
  );
  return {
    separator: {
      backgroundColor: separator.backgroundColor,
      height: separator.height,
      marginTop: separator.marginVertical,
      marginBottom: separator.marginVertical,
      marginLeft: separator.marginHorizontal,
      marginRight: separator.marginHorizontal
    },
    mainContainer: {
      "&:last-child": {
        "&>$separator": {
          display: "none"
        }
      }
    },
    bigText: {
      ...textBase,
      fontSize: text.big
    },
    smallText: {
      ...textBase,
      fontSize: text.small
    },
    center,
    centerMdUp: {
      ...center,
      ...getDisableCenter(smMediaMaxString)
    },
    lastTopicInfoWrapper: {
      ...center,
      ...getSmSmallText(smMediaMaxString, text.small),
      "&>div": {
        width: "100%",
        textAlign: "center",
        ...getSmLastTopicInfoContainer(smMediaMaxString)
      }
    },
    subForumContainer: {
      marginTop: subForumContainer.marginTop
    },
    topicsMessages: getTopicsMessagesContainer(mdMediaMaxString, text.small),
    displayInline: getDisplayInline(smMediaMaxString),
    disableRowOnSmXs: getDisableRow(smMediaMaxString)
  };
};

export default calculateStyles;
