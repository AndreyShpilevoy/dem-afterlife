const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { width, min }) => ({
        ...previouse,
        [`@media (${min})`]: {
            container: {
                width: width,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }
    }), {});

export default calculateStyles;