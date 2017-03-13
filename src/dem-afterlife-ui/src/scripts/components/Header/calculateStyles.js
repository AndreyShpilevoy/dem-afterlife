import { merge } from 'utils';

export const headerModel = (gridSize, headerStyles) => ({
    height: headerStyles[gridSize].height,
    width: '100%'
});

export const xsSmStyle = (gridSize, headerStyles) => ({
    backgroundColor: headerStyles[`${gridSize}`].backgroundColor
});

export const mdLgXlStyle = (gridSize, headerStyles) => ({
    backgroundImage: `url(${headerStyles[`${gridSize}`].backgroundImage})`
});

export const lgXlShrinkedStyle = (gridSize, headerStyles) => ({
    '&.shrinkedHeader': { height: headerStyles[gridSize].height / 2 }
});

export const constructHeaderStyle = (gridSize, mediaMinString, headerStyles) => {
    let result;
    if (gridSize === 'xs' || gridSize === 'sm') {
        result = merge(headerModel(gridSize, headerStyles), xsSmStyle(gridSize, headerStyles));
    } else if (gridSize === 'md') {
        result = merge(headerModel(gridSize, headerStyles), mdLgXlStyle(gridSize, headerStyles));
    } else if (gridSize === 'lg' || gridSize === 'xl') {
        result = merge(headerModel(gridSize, headerStyles), mdLgXlStyle(gridSize, headerStyles), lgXlShrinkedStyle(gridSize, headerStyles));
    }
    return result;
};

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString, headerStyles) => ({
    [`@media (${mediaMinString})`]: {
        header: constructHeaderStyle(gridSize, mediaMinString, headerStyles),
        headerPadding: { paddingTop: headerStyles[gridSize].height }
    }
});

const calculateStyles = ({ grid, header }) => (
    grid.containers.reduce((previous, { size, min }) => (
        merge(previous, constructMediaModelForCurrentSize(size, min, header))
    ), { fixedOnTheTop: { position: 'fixed', top: 0 } }));

export default calculateStyles;