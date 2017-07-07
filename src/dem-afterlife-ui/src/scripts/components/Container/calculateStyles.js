import {createMediaQueryMin} from 'utils';

const calculateStyles = ({themeName, grid}) =>
    grid.containers.reduce((previous, {width, mediaMinString}) => ({
        ...previous,
        ...createMediaQueryMin(mediaMinString, {
            container: {
                width,
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        })
    }), {options: {meta: 'Container', themeName} });

export default calculateStyles;