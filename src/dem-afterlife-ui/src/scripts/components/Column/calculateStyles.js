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

export const constructMediaModelForCurrentSize = (gridSize, mediaMinString, mediaMaxString) => ({
    [`@media (${mediaMinString}) and (${mediaMaxString})`]: calculateColumnStyles(gridSize)
});



const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { gridSize, mediaMinString, mediaMaxString }) => (
        { ...previouse, ...constructMediaModelForCurrentSize(gridSize, mediaMinString, mediaMaxString) }
    ), {});

export default calculateStyles;