const calculateStyles = ({bbCodes}) => {
    const {code, common} = bbCodes;
    return {
        main: {
            backgroundColor: code.backgroundColor,
            borderColor: code.borderColor,
            borderStyle: 'solid',
            borderWidth: common.borderWidth,
            padding: common.padding,
            marginLeft: common.marginHorizontal,
            marginRight: common.marginHorizontal,
            marginTop: common.marginVertical,
            marginBottom: common.marginVertical
        },
        header: {
            color: code.headerColor,
            display: 'flex'
        },
        headerLeft: {
            marginRight: 'auto'
        },
        headerRight: {
            marginLeft: 'auto'
        },
        content: {
            color: code.contentColor,
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap'
        }
    };
};

export default calculateStyles;