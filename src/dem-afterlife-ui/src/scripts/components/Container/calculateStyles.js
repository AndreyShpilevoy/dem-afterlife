const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { width, mediaMinString, mediaMaxString }) => ({
        ...previouse,
        [`@media (${mediaMinString}) and (${mediaMaxString})`]: {
            container: {
                width: width,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }
    }), {});

export default calculateStyles;