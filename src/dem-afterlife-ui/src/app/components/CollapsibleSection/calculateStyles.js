import {createMediaQueryMinMax} from 'utils';

const getCommonPart = ({general, header, body}) => ({
    '@global': {
        '@keyframes collapsibleSection-SlideDown': {
            from: {
                maxHeight: '0vh'
            },
            to: {
                maxHeight: '100vh'
            }
        },
        '@keyframes collapsibleSection-SlideUp': {
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
        whiteSpace: 'nowrap',
        height: '100%'
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

const getSizeSpecific = (grid, collapsibleSection) =>
    grid.containers.reduce((previous, {gridSize, mediaMinString, mediaMaxString}) => gridSize !== 'lg' && gridSize !== 'xl' ?
        {
            ...previous,
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
                        width: collapsibleSection.header.iconSize,
                        height: collapsibleSection.header.iconSize,
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center center',
                        transition: 'transform 0.5s ease-in',
                        '&.closed': {
                            transform: 'rotate(0deg)'
                        },
                        '& > .SVGInline-svg': {
                            width: collapsibleSection.header.iconSize,
                            height: collapsibleSection.header.iconSize,
                            fill: collapsibleSection.header.color
                        }
                    },
                    bodyHolder: {
                        transformOrigin: 'top',
                        transition: collapsibleSection.body.transition,
                        animation: 'collapsibleSection-SlideDown 500ms ease-in',
                        '&.closed': {
                            animation: 'collapsibleSection-SlideUp 500ms ease-in',
                            transform: 'scaleY(0)',
                            maxHeight: 0
                        }
                    }
                }
            )
        } :
        previous,
    {});

const calculateStyles = ({themeName, grid, collapsibleSection}) => ({
    ...getCommonPart(collapsibleSection),
    ...getSizeSpecific(grid, collapsibleSection),
    ...{options: {meta: 'CollapsibleSection', themeName} }
});

export default calculateStyles;