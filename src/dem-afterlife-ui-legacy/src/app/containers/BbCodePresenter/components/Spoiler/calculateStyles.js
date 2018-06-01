const calculateStyles = ({bbCodes, focus}) => {
    const {common, spoiler} = bbCodes;
    return {
        title: {
            fontWeight: 'bold'
        },
        spoiler: {
            color: spoiler.color,
            backgroundColor: spoiler.backgroundColor,
            borderColor: spoiler.borderColor,
            borderStyle: 'solid',
            borderWidth: common.borderWidth,
            padding: common.padding,
            marginLeft: common.marginHorizontal,
            marginRight: common.marginHorizontal,
            marginTop: common.marginVertical,
            marginBottom: common.marginVertical
        },
        content: {
            marginTop: spoiler.contentMarginTop
        },
        focus: {
            '&:focus': {
                outlineColor: focus.colorDark
            }
        }
    };
};

export default calculateStyles;