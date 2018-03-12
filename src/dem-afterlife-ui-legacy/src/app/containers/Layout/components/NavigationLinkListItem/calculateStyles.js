import {createMediaQueryMinMax} from 'utils';

const getNavigationLinkStyle = (gridSize, navigationLinks) => ({
    ...gridSize !== 'lg' && gridSize !== 'xl' ?
        {
            display: 'block',
            fontSize: navigationLinks[gridSize].fontSize,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            padding: navigationLinks[gridSize].padding,
            color: `${navigationLinks[gridSize].color} !important`,
            '&:hover': {
                color: `${navigationLinks[gridSize].colorHovered} !important`
            }
        } : {},
    ...{paddingLeft: navigationLinks[gridSize].padding}
});

const calculateStyles = ({grid, navigationLinks, focus}) =>
    grid.containers.reduce(
        (previous, {gridSize, mediaMinString, mediaMaxString}) => ({
            ...previous,
            ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {
                link: {
                    ...getNavigationLinkStyle(gridSize, navigationLinks),
                    '&:focus': {
                        outlineColor: focus.colorLight
                    }
                }
            })
        }), {});

export default calculateStyles;


