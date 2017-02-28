const calculateStyles = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: {
                container: {
                    width: current.width,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            }
        })
    ), {});

export default calculateStyles;