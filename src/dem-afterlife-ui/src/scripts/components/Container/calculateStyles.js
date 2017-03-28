import { createMediaQueryMinMax } from 'utils';

const calculateStyles = ({ grid }) =>
    grid.containers.reduce((previouse, { width, mediaMinString, mediaMaxString }) => ({
        ...previouse,
        ...createMediaQueryMinMax(mediaMinString, mediaMaxString, {
            container: {
                width: width,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        })
    }), {});

export default calculateStyles;