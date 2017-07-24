import {createMediaQueryMinMax} from 'utils';

const getCommonFooterStyle = (gridSize, footerStyles) => ({
    height: footerStyles[gridSize].height,
    color: footerStyles[gridSize].color,
    width: '100%',
    display: 'flex',
    marginTop: footerStyles[gridSize].marginTop
});

const getXsSmMdStyle = (gridSize, footerStyles) => ({
    backgroundColor: footerStyles[`${gridSize}`].backgroundColor
});

const getLgXlStyle = (gridSize, footerStyles) => ({
    backgroundImage: `url(${footerStyles[`${gridSize}`].backgroundImage})`
});

const getSpecificStyle = gridSize => {
    const specificStyles = {
        xs: getXsSmMdStyle,
        sm: getXsSmMdStyle,
        md: getXsSmMdStyle,
        lg: getLgXlStyle,
        xl: getLgXlStyle
    };
    return specificStyles[gridSize];
};

const constructMediaModelForCurrentSize = (gridSize, mediaMinString, mediaMaxString, footerStyles) =>
    createMediaQueryMinMax(mediaMinString, mediaMaxString, {
        footer: {...getCommonFooterStyle(gridSize, footerStyles), ...getSpecificStyle(gridSize)(gridSize, footerStyles)}
    });

const calculateStyles = ({themeName, grid, footer, socialMediaLinkIcons}) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString, mediaMaxString}) =>
        ({...previous, ...constructMediaModelForCurrentSize(gridSize, mediaMinString, mediaMaxString, footer)}),
    {
        copyright: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        socialMediaLinkIconContainer: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: socialMediaLinkIcons.svg.padding * 7.5
        },
        socialMediaLinkIcon: {
            '& > .SVGInline-svg': {
                display: 'block',
                padding: socialMediaLinkIcons.svg.padding,
                opacity: socialMediaLinkIcons.svg.opacity,
                width: socialMediaLinkIcons.svg.width,
                height: socialMediaLinkIcons.svg.height
            }
        },
        options: {meta: 'Footer', themeName}
    }
    );

export default calculateStyles;