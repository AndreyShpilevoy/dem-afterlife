import {createMediaQueryMinMax} from 'utils';

export const getNavigationLinksStyle = (gridSize, navigationLinks) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        'background-color': navigationLinks[gridSize]['background-color'],
        margin: 'initial',
        padding: 'initial'
    } : {};

const calculateStyles = ({grid, navigationLinks}) =>
    grid.containers.reduce(
        (previous, {gridSize, mediaMinString, mediaMaxString}) => ({
            ...previous,
            ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {list: getNavigationLinksStyle(gridSize, navigationLinks)})
        }), {});

export default calculateStyles;


