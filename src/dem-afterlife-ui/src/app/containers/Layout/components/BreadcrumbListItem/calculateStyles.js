const size1 = 1.25;
const size2 = 0.9;
const size3 = 1.4;
const size4 = 0.1875;
const size5 = 0.625;
const size6 = 0.9375;

const arrowAfterBeforeCommon = {
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: size5,
    borderTopColor: 'transparent',
    borderTopStyle: 'solid',
    borderTopWidth: size5,
    content: '""',
    position: 'absolute',
    top: 0
};

const calculateStyles = ({themeName}) => ({
    arrow: {
        backgroundColor: '#5D5956',
        height: size1,
        display: 'block',
        paddingLeft: size6,
        paddingRight: size4,
        marginRight: size4,
        fontWeight: 'bold',
        fontSize: size2,
        lineHeight: size3,
        textAlign: 'center',
        textDecoration: 'none',
        position: 'relative',
        '&:after': {
            ...arrowAfterBeforeCommon,
            borderLeftColor: '#5D5956',
            borderLeftStyle: 'solid',
            borderLeftWidth: size5,
            right: - size5,
            zIndex: 1
        },
        '&:before': {
            ...arrowAfterBeforeCommon,
            borderLeftColor: '#171717',
            borderLeftStyle: 'solid',
            borderLeftWidth: size5,
            left: 0
        }
    },
    item: {
        '&:first-child': {
            '&>$arrow': {
                paddingLeft: size5,
                '&:before': {
                    display: 'none'
                }
            }
        },
        '&:last-child': {
            '&>$arrow': {
                paddingRight: size5,
                '&:after': {
                    content: 'none'
                }
            }
        }
    },
    options: {meta: 'BreadcrumbListItem', themeName}
});

export default calculateStyles;