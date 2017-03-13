export const calculateColumnStyles = (gridSize) =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((previouse, current) => {
        const columnSize = `${8.333333333333334 * current}%`;
        return Object.assign({}, previouse, {
            [`col-${gridSize}-${current}`]: {
                flexBasis: columnSize,
                maxWidth: columnSize
            },
            [`col-${gridSize}Offset-${current}`]: {
                marginLeft: columnSize
            }
        });
    }, {});

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString) => ({
    [`@media (${mediaMinString})`]: calculateColumnStyles(gridSize)
});



const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { size, min }) => (
        { ...previouse, ...constructMediaModelForCurrentSize(size, min) }
    ), {});

export default calculateStyles;