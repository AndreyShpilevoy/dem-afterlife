const arrowAfterBeforeCommon = height => ({
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: height / 2,
    borderTopColor: 'transparent',
    borderTopStyle: 'solid',
    borderTopWidth: height / 2,
    content: '""',
    position: 'absolute',
    top: 0
});

const calculateStyles = ({themeName, breadcrumbs}) => ({
    arrow: {
        backgroundColor: breadcrumbs.bgColor,
        height: breadcrumbs.height,
        display: 'block',
        paddingLeft: breadcrumbs.paddingLeft,
        paddingRight: breadcrumbs.marginAndPaddingRight,
        marginRight: breadcrumbs.marginAndPaddingRight,
        fontWeight: 'bold',
        fontSize: breadcrumbs.fontSize,
        lineHeight: breadcrumbs.lineHeight,
        textAlign: 'center',
        textDecoration: 'none',
        position: 'relative',
        '&>div': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        },
        '&:hover': {
            backgroundColor: breadcrumbs.hoveredBgColor,
            '&:after': {
                borderLeftColor: breadcrumbs.hoveredBgColor
            }
        },
        '&:after': {
            ...arrowAfterBeforeCommon(breadcrumbs.height),
            borderLeftColor: breadcrumbs.bgColor,
            borderLeftStyle: 'solid',
            borderLeftWidth: breadcrumbs.height / 2,
            right: - breadcrumbs.height / 2,
            zIndex: 1
        },
        '&:before': {
            ...arrowAfterBeforeCommon(breadcrumbs.height),
            borderLeftColor: breadcrumbs.mainBg,
            borderLeftStyle: 'solid',
            borderLeftWidth: breadcrumbs.height / 2,
            left: 0
        }
    },
    ellipsis: {
        '&:hover': {
            backgroundColor: breadcrumbs.bgColor,
            '&:after': {
                borderLeftColor: breadcrumbs.bgColor
            }
        }
    },
    item: {
        maxWidth: '24%',
        minWidth: '4%',
        '&:first-child': {
            '&>$arrow': {
                paddingLeft: breadcrumbs.height / 2,
                '&:before': {
                    display: 'none'
                }
            }
        },
        '&:last-child': {
            '&>$arrow': {
                paddingRight: breadcrumbs.height / 2,
                '&:after': {
                    content: 'none'
                }
            }
        }
    },
    active: {
        color: breadcrumbs.textColor,
        textDecoration: 'none',
        backgroundColor: breadcrumbs.hoveredBgColor
    },
    options: {meta: 'BreadcrumbListItem', themeName}
});

export default calculateStyles;