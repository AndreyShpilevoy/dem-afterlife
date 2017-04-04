import {createMediaQueryMin, createMediaQueryMax, createMediaQueryMinMax} from 'utils';

const calculateStyles = ({grid}) =>
    grid.containers.reduce((previouse, {gridSize, mediaMinString, mediaMaxString}) => ({
        ...previouse,
        ...createMediaQueryMin(mediaMinString, {[`hidden-up-${gridSize}`]: {display: 'none'} }),
        ...createMediaQueryMax(mediaMaxString, {[`hidden-down-${gridSize}`]: {display: 'none'} }),
        ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {[`hidden-exact-${gridSize}`]: {display: 'none'} })
    }), {});

export default calculateStyles;