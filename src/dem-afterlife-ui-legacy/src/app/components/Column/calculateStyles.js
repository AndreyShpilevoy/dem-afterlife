import {createMediaQueryMin} from 'utils';

const calculateColumnStyles = gridSize =>
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((previous, current) => {
        const columnSize = `${8.333333333333334 * current}%`;
        return {
            ...previous,
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

const calculateStyles = ({grid}) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString}) => (
        {...previous, ...createMediaQueryMin(mediaMinString, calculateColumnStyles(gridSize))}
    ), {});

export default calculateStyles;