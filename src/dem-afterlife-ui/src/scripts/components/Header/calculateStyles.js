const initialModel = {
    fixedOnTheTop: {
        position: 'fixed',
        top: 0
    }
};

const headerModel = (size, min, header) => ({
    height: header[size].height,
    width: '100%'
});

const addXsSmSpecificStyles = (model, size, header) => ({
    ...model, backgroundColor: header[`${size}`].backgroundColor
});

const addMdLgXlSpecificStyles = (model, size, header) => ({
    ...model, backgroundImage: `url(${header[`${size}`].backgroundImage})`
});

const addLgXlShrinkedStyles = (model, size, header) => ({
    ...model, '&.shrinkedHeader': { height: header[size].height / 2 }
});

const addHeaderPaddingStyles = (model, size, header) => ({
    header: model, headerPadding: { paddingTop: header[size].height }
});

const template = (size, min, header) => {
    let model = headerModel(size, min, header);
    model = (size === 'xs' || size === 'sm') ?
        addXsSmSpecificStyles(model, size, header) :
        addMdLgXlSpecificStyles(model, size, header);

    if (size === 'lg' || size === 'xl') {
        model = addLgXlShrinkedStyles(model, size, header);
    }

    return { [`@media (${min})`]: addHeaderPaddingStyles(model, size, header) };
};

const calculateStyles = ({ grid, header }) =>
    grid.containers.reduce((previous, { size, min }) =>
        ({ ...previous, ...template(size, min, header) }),
        initialModel);

export default calculateStyles;