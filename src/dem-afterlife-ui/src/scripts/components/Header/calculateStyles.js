import {createMediaQueryMinMax} from 'utils';

export const getCommonHeaderStyle = (gridSize, headerStyles) => ({
    height: headerStyles[gridSize].height,
    width: '100%',
    display: 'flex'
});

export const getXsSmStyle = (gridSize, headerStyles) => ({
    backgroundColor: headerStyles[`${gridSize}`].backgroundColor
});

export const getMdStyle = (gridSize, headerStyles) => ({
    backgroundImage: `url(${headerStyles[`${gridSize}`].backgroundImage})`
});

export const getLgXlStyle = (gridSize, headerStyles) => ({
    backgroundImage: `url(${headerStyles[`${gridSize}`].backgroundImage})`,
    transition: headerStyles[`${gridSize}`].transition,
    '&.shrinkedHeader': {
        height: headerStyles[gridSize].height / 2,
        backgroundPositionY: '50%'
    }
});

export const getHeaderLogoContainerStyle = (gridSize, headerStyles) => ({
    ...gridSize === 'lg' || gridSize === 'xl' ?
    {
        '&.shrinkedHeader': {
            transition: headerStyles[`${gridSize}`].transition,
            width: headerStyles[gridSize].logoContainerWidth / 2
        }
    } : {},
    ...{
        marginLeft: headerStyles.logotypeContainer.marginLeft,
        marginRight: headerStyles.logotypeContainer.marginRight,
        width: headerStyles[gridSize].logoContainerWidth
    }
});

export const getNavigationLinksStyle = (gridSize, {navigationLinks}) => ({
    ...gridSize === 'lg' || gridSize === 'xl' ?
    {
        flexDirection: 'row',
        marginLeft: navigationLinks.marginLeft,
        marginRight: navigationLinks.marginRight,
        marginTop: navigationLinks.marginTop,
        marginBottom: navigationLinks.marginBottom
    } : {flexDirection: 'column'},
    ...{display: 'flex', listStyleType: 'none'}
});

export const getNavigationLinksContainerStyle = (gridSize, {navigationLinks}) =>
    gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        transformOrigin: 'top',
        transition: navigationLinks.transition,
        '&.closed': {
            transform: 'scaleY(0)'
        }
    } : {};

export const getHeaderMenuButtonContainerStyle = headerStyles => ({
    marginLeft: headerStyles.menuButtonContainer.marginLeft,
    marginRight: headerStyles.menuButtonContainer.marginRight
});

export const getSpecificStyle = gridSize => {
    const specificStyles = {
        xs: getXsSmStyle,
        sm: getXsSmStyle,
        md: getMdStyle,
        lg: getLgXlStyle,
        xl: getLgXlStyle
    };
    return specificStyles[gridSize] ? specificStyles[gridSize] : {};
};

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString, mediaMaxString, headerStyles) =>
    createMediaQueryMinMax(mediaMinString, mediaMaxString, {
        header: {...getCommonHeaderStyle(gridSize, headerStyles), ...getSpecificStyle(gridSize)(gridSize, headerStyles)},
        headerPadding: {paddingTop: headerStyles[gridSize].height},
        headerLogoContainer: getHeaderLogoContainerStyle(gridSize, headerStyles),
        navigationLinks: getNavigationLinksStyle(gridSize, headerStyles),
        navigationLinksContainer: getNavigationLinksContainerStyle(gridSize, headerStyles),
        headerMenuButtonContainer: getHeaderMenuButtonContainerStyle(headerStyles)
    });

const calculateStyles = ({grid, header}) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString, mediaMaxString}) =>
        ({...previous, ...constructMediaModelForCurrentSize(gridSize, mediaMinString, mediaMaxString, header)}),
        {
            fixedOnTheTop: {
                position: 'fixed',
                top: 0
            },
            headerColumn: {
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }
        }
    );

export default calculateStyles;