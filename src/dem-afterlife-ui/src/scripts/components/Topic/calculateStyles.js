import {createMediaQueryMax} from 'utils';

const getLastPostInfoStyleMdMax = size => createMediaQueryMax(size, {flexDirection: 'row'});
const getLastPostInfoStyleSmMax = (mediaSize, fontSize) => createMediaQueryMax(mediaSize, {justifyContent: 'left', fontSize});
const getTextSizeMax = (mediaSize, fontSize) => createMediaQueryMax(mediaSize, {fontSize});

const calculateStyles = ({themeName, grid, topic}) => {
    const mdSize = grid.containers.find(x => x.gridSize === 'md').mediaMaxString;
    const smSize = grid.containers.find(x => x.gridSize === 'sm').mediaMaxString;
    return {
        centerRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        titleContainer: {
            width: '100%'
        },
        heightFull: {
            height: '100%'
        },
        noWrap: {
            whiteSpace: 'nowrap'
        },
        titleStyle: {
            display: 'block',
            fontSize: topic.text.big,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        parentForumWrapper: {
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: topic.text.small
        },
        parentForumTitleStyle: {
            color: topic.parentForumColor,
            '&:visited': {
                color: topic.parentForumColor
            },
            '&:hover': {
                color: topic.parentForumColorHover
            },
            '&:visited:hover': {
                color: topic.parentForumColorHover
            }
        },
        lastPostInfoStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            whiteSpace: 'nowrap',
            ...getLastPostInfoStyleMdMax(mdSize),
            ...getLastPostInfoStyleSmMax(smSize, topic.text.small)
        },
        textSmallMd: {
            ...getTextSizeMax(mdSize, topic.text.small)
        },
        separator: {
            backgroundColor: topic.separator.backgroundColor,
            height: topic.separator.height,
            marginTop: topic.separator.marginVertical,
            marginBottom: topic.separator.marginVertical,
            marginLeft: topic.separator.marginHorizontal,
            marginRight: topic.separator.marginHorizontal
        },
        wrapper: {
            '&:last-child': {
                '&>$separator': {
                    display: 'none'
                }
            }
        },
        options: {meta: 'Topic', themeName}
    };
};

export default calculateStyles;