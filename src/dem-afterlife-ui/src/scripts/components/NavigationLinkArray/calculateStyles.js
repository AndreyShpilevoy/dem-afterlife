import {createMediaQueryMinMax} from 'utils';

const getNavigationLinksStyle = (gridSize, navigationLinks) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        backgroundColor: navigationLinks[gridSize].backgroundColor,
        margin: 'initial',
        padding: 'initial'
    } :
    {};

const getNavigationSeparatorStyle = (gridSize, navigationLinks) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        backgroundColor: navigationLinks[gridSize].separator.backgroundColor,
        height: navigationLinks[gridSize].separator.height
    } :
    {};

const calculateStyles = ({themeName, grid, navigationLinks}) =>
    grid.containers.reduce(
        (previous, {gridSize, mediaMinString, mediaMaxString}) => ({
            ...previous,
            ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {
                list: getNavigationLinksStyle(gridSize, navigationLinks),
                separator: getNavigationSeparatorStyle(gridSize, navigationLinks)
            })
        }), {options: {meta: 'NavigationLinkArray', themeName} });

export default calculateStyles;


