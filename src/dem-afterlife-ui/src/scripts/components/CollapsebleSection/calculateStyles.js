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
    title: {
        paddingLeft: general.padding
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
                header: {
                    cursor: 'pointer'
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
        previouse, {});

const calculateStyles = ({grid, collapsebleSection}) => ({
    ...getCommonPart(collapsebleSection), ...getSizeSpecific(grid, collapsebleSection)
});

export default calculateStyles;