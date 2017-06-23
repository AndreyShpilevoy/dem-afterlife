import {createMediaQueryMinMax} from 'utils';

const getCommonPart = ({general, header, body}) => ({
    '@global': {
        '@keyframes collapsebleSection-SlideDown': {
            from: {
                maxHeight: '0vh'
            },
            to: {
                maxHeight: '100vh'
            }
        },
        '@keyframes collapsebleSection-SlideUp': {
            from: {
                maxHeight: '100vh'
            },
            to: {
                maxHeight: '0vh'
            }
        }
    },
    general: {
        marginTop: general.marginTop
    },
    header: {
        backgroundColor: header.backgroundColor,
        color: header.color,
        height: header.height
    },
    titleClass: {
        paddingLeft: general.padding,
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    headerHolder: {
        display: 'flex',
        alignItems: 'center'
    },
    headerText: {
        width: 'initial',
        fontSize: header.fontSize,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    body: {
        backgroundColor: body.backgroundColor,
        color: body.color,
        paddingTop: general.padding / 2,
        paddingBottom: general.padding / 2,
        paddingLeft: general.padding,
        paddingRight: general.padding
    },
    termedSection: {
        width: '100%'
    },
    headerColumn: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const getSizeSpecific = (grid, collapsebleSection) =>
    grid.containers.reduce((previouse, {gridSize, mediaMinString, mediaMaxString}) => gridSize !== 'lg' && gridSize !== 'xl' ?
    {
        ...previouse,
        ...createMediaQueryMinMax(
                mediaMinString,
                mediaMaxString,
            {
                headerCursor: {
                    cursor: 'pointer'
                },
                headerArrowHolder: {
                    marginLeft: 'auto',
                    marginRight: 1
                },
                headerArrow: {
                    display: 'block',
                    width: 1.3,
                    height: 1.3,
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center center',
                    transition: 'transform 0.5s ease-in',
                    '&.closed': {
                        transform: 'rotate(0deg)'
                    },
                    '& > .SVGInline-svg': {
                        width: 1.3,
                        height: 1.3,
                        fill: collapsebleSection.header.color
                    }
                },
                bodyHolder: {
                    transformOrigin: 'top',
                    transition: collapsebleSection.body.transition,
                    animation: 'collapsebleSection-SlideDown 500ms ease-in',
                    '&.closed': {
                        animation: 'collapsebleSection-SlideUp 500ms ease-in',
                        transform: 'scaleY(0)',
                        maxHeight: 0
                    }
                }
            }
            )
    } :
    previouse,
{});

const calculateStyles = ({themeName, grid, collapsebleSection}) => ({
    ...getCommonPart(collapsebleSection),
    ...getSizeSpecific(grid, collapsebleSection),
    ...{options: {meta: 'CollapsebleSection', themeName} }
});

export default calculateStyles;