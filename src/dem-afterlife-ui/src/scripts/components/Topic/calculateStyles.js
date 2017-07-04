import {createMediaQueryMax} from 'utils';

const calculateStyles = ({themeName, grid, topic}) => ({
    separator: {
        backgroundColor: topic.separator.backgroundColor,
        height: topic.separator.height,
        marginTop: topic.separator.marginVertical,
        marginBottom: topic.separator.marginVertical,
        marginLeft: topic.separator.marginHorizontal,
        marginRight: topic.separator.marginHorizontal
    },
    options: {meta: 'Topic', themeName}
});

export default calculateStyles;