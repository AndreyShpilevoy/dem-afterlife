export const calculateColumnStyles = (size) =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reduce((previouse, current) => {
        const columnSize = `${8.333333333333334 * current}%`;
        return Object.assign({}, previouse, {
            [`col-${size}-${current}`]: {
                flexBasis: columnSize,
                maxWidth: columnSize
            },
            [`col-${size}Offset-${current}`]: {
                marginLeft: columnSize
            }
        });
    }, {});



const calculateStyles = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: calculateColumnStyles(current.size)
        })
    ), {});

export default calculateStyles;