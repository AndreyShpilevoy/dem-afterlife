const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { gridSize, mediaMinString, mediaMaxString }) => ({
        ...previouse,
        [`@media (${mediaMinString})`]: { [`hidden-up-${gridSize}`]: { display: 'none' } },
        [`@media (${mediaMaxString})`]: { [`hidden-down-${gridSize}`]: { display: 'none' } },
        [`@media (${mediaMinString}) and (${mediaMaxString})`]: { [`hidden-exact-${gridSize}`]: { display: 'none' } }
    }), {});

export default calculateStyles;