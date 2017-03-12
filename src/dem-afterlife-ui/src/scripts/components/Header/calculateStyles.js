const constructHeaderModel = (size, min, header) => ({
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


const combineHeaderPaddingStyles = headerPadding => header => ({ header, headerPadding });

const constructMediaModelForCurrentSize = (size, min, header) => {
    let model = constructHeaderModel(size, min, header);
    model = (size === 'xs' || size === 'sm') ?
        addXsSmSpecificStyles(model, size, header) :
        addMdLgXlSpecificStyles(model, size, header);

    if (size === 'lg' || size === 'xl') {
        model = addLgXlShrinkedStyles(model, size, header);
    }
    return { [`@media (${min})`]: combineHeaderPaddingStyles({ headerPadding: { paddingTop: header[size].height } })(model) };
};

const combineMediaModelsWithRootModel = (rootModel, grid, header) =>
    grid.containers.reduce((previous, { size, min }) =>
        ({ ...previous, ...constructMediaModelForCurrentSize(size, min, header) }),
        rootModel);

const calculateStyles = ({ grid, header }) => {
    const rootModel = {
        fixedOnTheTop: {
            position: 'fixed',
            top: 0
        }
    };
    return combineMediaModelsWithRootModel(rootModel, grid, header);
};


export default calculateStyles;