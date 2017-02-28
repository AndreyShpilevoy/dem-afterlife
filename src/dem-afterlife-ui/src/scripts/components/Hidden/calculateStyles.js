const calculateStyles = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: { [`hidden-up-${current.size}`]: { display: 'none' } },
            [`@media (${current.max})`]: { [`hidden-down-${current.size}`]: { display: 'none' } },
            [`@media (${current.min}) and (${current.max})`]: { [`hidden-exact-${current.size}`]: { display: 'none' } }
        })
    ), {});

export default calculateStyles;