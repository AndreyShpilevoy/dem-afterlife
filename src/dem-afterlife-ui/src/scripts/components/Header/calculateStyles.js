import {createMediaQueryMinMax} from 'utils';
import R from 'ramda';

export const getCommonHeaderStyle = (gridSize, headerStyles) => ({
    height: headerStyles[gridSize].height,
    width: '100%'
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

export const getSpecificStyle = (gridSize, headerStyles) => {
    const specificStyles = {
        xs: getXsSmStyle,
        sm: getXsSmStyle,
        md: getMdStyle,
        lg: getLgXlStyle,
        xl: getLgXlStyle
    };
    return specificStyles[gridSize] ? specificStyles[gridSize](gridSize, headerStyles) : null;
};

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString, mediaMaxString, headerStyles) =>
    createMediaQueryMinMax(mediaMinString, mediaMaxString, {
        header: R.merge(getCommonHeaderStyle(gridSize, headerStyles), getSpecificStyle(gridSize, headerStyles)),
        headerPadding: {paddingTop: headerStyles[gridSize].height}
    });

const calculateStyles = ({grid, header}) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString, mediaMaxString}) =>
        R.merge(previous, constructMediaModelForCurrentSize(gridSize, mediaMinString, mediaMaxString, header))
    , {fixedOnTheTop: {position: 'fixed', top: 0} });

export default calculateStyles;