import {createMediaQueryMinMax} from 'utils';

export const getCommonFooterStyle = (gridSize, footerStyles) => ({
    height: footerStyles[gridSize].height,
    color: footerStyles[gridSize].color,
    width: '100%',
    display: 'flex'
});

export const getXsSmMdStyle = (gridSize, footerStyles) => ({
    backgroundColor: footerStyles[`${gridSize}`].backgroundColor
});

export const getLgXlStyle = (gridSize, footerStyles) => ({
    backgroundImage: `url(${footerStyles[`${gridSize}`].backgroundImage})`
});

export const getSpecificStyle = gridSize => {
    const specificStyles = {
        xs: getXsSmMdStyle,
        sm: getXsSmMdStyle,
        md: getXsSmMdStyle,
        lg: getLgXlStyle,
        xl: getLgXlStyle
    };
    return specificStyles[gridSize] ? specificStyles[gridSize] : {};
};

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString, mediaMaxString, footerStyles) =>
    createMediaQueryMinMax(mediaMinString, mediaMaxString, {
        footer: {...getCommonFooterStyle(gridSize, footerStyles), ...getSpecificStyle(gridSize)(gridSize, footerStyles)}
    });

const calculateStyles = ({grid, footer}) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString, mediaMaxString}) =>
        ({...previous, ...constructMediaModelForCurrentSize(gridSize, mediaMinString, mediaMaxString, footer)}),
        {
            copyright: {
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    );

export default calculateStyles;