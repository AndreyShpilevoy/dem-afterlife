import {createMediaQueryMin} from 'utils';

const calculateColumnStyles = gridSize =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((previouse, current) => {
        const columnSize = `${8.333333333333334 * current}%`;
        return {
            ...previouse,
            ...{
                [`col-${gridSize}-${current}`]: {
                    flexBasis: columnSize,
                    maxWidth: columnSize
                },
                [`col-${gridSize}Offset-${current}`]: {
                    marginLeft: columnSize
                }
            }
        };
    }, {});

const calculateStyles = ({themeName, grid}) =>
    grid.containers.reduce((previouse, {gridSize, mediaMinString}) => (
        {...previouse, ...createMediaQueryMin(mediaMinString, calculateColumnStyles(gridSize))}
    ), {options: {meta: 'Column', themeName} });

export default calculateStyles;