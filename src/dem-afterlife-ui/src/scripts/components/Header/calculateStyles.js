const initialModel = {
    fixedOnTheTop: {
        position: 'fixed',
        top: 0
    }
};

const template = (size, min, header) => {
    let model = {
        [`@media (${min})`]: {
            header: {
                height: header[size].height,
                width: '100%'
            },
            headerPadding: {
                paddingTop: header[size].height,
            }
        }
    };
    if (size === 'xs' && size === 'sm') {
        model[`@media (${min})`].header = Object.assign({}, model[`@media (${min})`].header,
            {
                backgroundColor: header[`${size}`].backgroundColor
            });
    } else {
        model[`@media (${min})`].header = Object.assign({}, model[`@media (${min})`].header,
            {
                backgroundImage: `url(${header[`${size}`].backgroundImage})`
            });

        model[`@media (${min})`] = Object.assign({}, model[`@media (${min})`],
            {
                shrinkedHeader: {
                    height: header[size].height/2,
                }
            });
    }
    return model;
};

const calculateStyles = ({ grid, header }) =>
    grid.containers.reduce((previouse, { size, min }) =>
        Object.assign({}, previouse, template(size, min, header)), initialModel);

export default calculateStyles;