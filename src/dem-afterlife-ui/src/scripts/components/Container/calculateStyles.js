import {createMediaQueryMin} from 'utils';

const calculateStyles = ({grid}) =>
    grid.containers.reduce((previouse, {width, mediaMinString}) => ({
        ...previouse,
        ...createMediaQueryMin(mediaMinString, {
            container: {
                width,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        })
    }), {options: {meta: 'Container'} });

export default calculateStyles;