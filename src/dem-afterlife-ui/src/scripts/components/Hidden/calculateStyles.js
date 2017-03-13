const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { size, min, max }) => ({
        ...previouse,
        [`@media (${min})`]: { [`hidden-up-${size}`]: { display: 'none' } },
        [`@media (${max})`]: { [`hidden-down-${size}`]: { display: 'none' } },
        [`@media (${min}) and (${max})`]: { [`hidden-exact-${size}`]: { display: 'none' } }
    }), {});

export default calculateStyles;