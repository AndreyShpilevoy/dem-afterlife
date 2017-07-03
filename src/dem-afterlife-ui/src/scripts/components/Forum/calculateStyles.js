import {createMediaQueryMax} from 'utils';

const getFlexDirection = mediaMaxString =>
createMediaQueryMax(mediaMaxString, {flexDirection: 'row'});

const getDisplayInline = mediaMaxString =>
createMediaQueryMax(mediaMaxString, {display: 'inline'});

const calculateStyles = ({themeName, grid, forum}) => {
    const {separator, text, subForumContainer} = forum;
    const {mediaMaxString: mdMediaMaxString} = grid.containers.find(x => x.gridSize === 'md');
    const {mediaMaxString: smMediaMaxString} = grid.containers.find(x => x.gridSize === 'sm');
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
            '&:last-child': {
                '&>$separator': {
                    display: 'none'
                }
            }
        },
        bigText: {
            display: 'block',
            fontSize: text.big,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        smallText: {
            display: 'block',
            fontSize: text.small,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        lastTopicInfoWrapper: {
            width: '100%',
            textAlign: 'center'
        },
        subForumContainer: {
            marginTop: subForumContainer.marginTop
        },
        flexBoxRow: getFlexDirection(mdMediaMaxString),
        displayInline: getDisplayInline(smMediaMaxString),
        options: {meta: 'Forum', themeName}
    };
};

export default calculateStyles;