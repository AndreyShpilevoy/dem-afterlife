import {createMediaQueryMinMax} from 'utils';

export const getNavigationLinksStyle = (gridSize, navigationLinks) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        backgroundColor: navigationLinks[gridSize].backgroundColor,
        margin: 'initial',
        padding: 'initial'
    } : {};
export const getNavigationSeparatorStyle = (gridSize, navigationLinks) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        backgroundColor: navigationLinks[gridSize].separator.backgroundColor,
        height: navigationLinks[gridSize].separator.height
    } : {};

const calculateStyles = ({grid, navigationLinks}) =>
    grid.containers.reduce(
        (previous, {gridSize, mediaMinString, mediaMaxString}) => ({
            ...previous,
            ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {
                list: getNavigationLinksStyle(gridSize, navigationLinks),
                separator: getNavigationSeparatorStyle(gridSize, navigationLinks)
            })
        }), {});

export default calculateStyles;


