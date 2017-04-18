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
        'margin-left': headerStyles.logotypeContainer['margin-left'],
        'margin-right': headerStyles.logotypeContainer['margin-right'],
        width: headerStyles[gridSize].logoContainerWidth
    }
});

export const getNavigationLinksStyle = (gridSize, headerStyles) => ({
    ...gridSize === 'lg' || gridSize === 'xl' ?
    {
        'flex-direction': 'row',
        'margin-left': headerStyles.navigationLinks['margin-left'],
        'margin-right': headerStyles.navigationLinks['margin-right']
    } : {'flex-direction': 'column'},
    ...{display: 'flex', 'list-style-type': 'none'}
});

export const getHeaderMenuButtonContainerStyle = headerStyles => ({
    'margin-left': headerStyles.menuButtonContainer['margin-left'],
    'margin-right': headerStyles.menuButtonContainer['margin-right']
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
                'min-height': '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }
        }
    );

export default calculateStyles;