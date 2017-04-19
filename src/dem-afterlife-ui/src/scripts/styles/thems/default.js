import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';
import headerLogotypeImage from 'images/DEM/header/Dem_Logo.png';
import footerBackgroundImageLg from 'images/DEM/footer/Dem_Footer_bg_lg.png';
import footerBackgroundImageXl from 'images/DEM/footer/Dem_Footer_bg_xl.png';

const colors = {
    backgroundColor: '#171717',
    headerBackground: '#322C27',
    navigationLinksBackground: '#252525',
    orangeColor: '#AC6B37',
    orangeColorHovered: '#EF9853',
    yellowTextColor: '#CBC065',
    yellowTextColorHovered: '#FFF495',
    footerBackgroundColor: '#3E3025',
    footerTextColor: '#CFB095'
};

const headerXsSm = {
    height: 3.4375,
    backgroundColor: colors.headerBackground,
    logoContainerWidth: 11.25
};

const headerLgXl = {
    height: 5,
    transition: 'all 400ms linear',
    logoContainerWidth: 16
};

const headerSideMargin = 0.9375;

const defaultTransition = '0.35s ease-in-out';

const headerRightColumns = {
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: headerSideMargin
};

const navigationLinksXsSmMd = {
    backgroundColor: colors.navigationLinksBackground,
    color: colors.orangeColor,
    colorHovered: colors.orangeColorHovered,
    fontSize: 1.3125,
    separator: {
        backgroundColor: colors.orangeColor,
        height: 0.1875
    }
};

const navigationLinksPadding = {
    padding: 0.5
};

const footerCommon = {
    color: colors.footerTextColor
};

const footerXsSmMd = {
    height: 1.875,
    backgroundColor: colors.footerBackgroundColor
};

const footerLgXl = {
    height: 2.5
};

const defaultTheme = {
    global: {
        html: {
            fontSize: '16px'
        },
        body: {
            backgroundColor: colors.backgroundColor,
            fontFamily: 'Arial,sans-serif',
            fontSize: 1,
            lineHeight: '1.5',
            minWidth: '290px',
            margin: 'initial'
        },
        link: {
            color: colors.yellowTextColor,
            textDecoration: 'none',
            hoveredColor: colors.yellowTextColorHovered,
            hoveredTextDecoration: 'underline'
        }
    },
    grid: {
        containers: [
            {
                gridSize: 'xs',
                mediaMinString: 'min-width: 0px',
                mediaMaxString: 'max-width: 575px',
                width: '100%'
            },
            {
                gridSize: 'sm',
                mediaMinString: 'min-width: 576px',
                mediaMaxString: 'max-width: 767px',
                width: '540px'
            },
            {
                gridSize: 'md',
                mediaMinString: 'min-width: 768px',
                mediaMaxString: 'max-width: 991px',
                width: '720px'
            },
            {
                gridSize: 'lg',
                mediaMinString: 'min-width: 992px',
                mediaMaxString: 'max-width: 1199px',
                width: '960px'
            },
            {
                gridSize: 'xl',
                mediaMinString: 'min-width: 1200px',
                mediaMaxString: 'max-width: 100vw',
                width: '1140px'
            }
        ]
    },
    header: {
        xs: headerXsSm,
        sm: headerXsSm,
        md: {
            backgroundImage: headerBackgroundImageMd,
            height: 3.75,
            logoContainerWidth: 12.1875
        },
        lg: {...headerLgXl, backgroundImage: headerBackgroundImageLg},
        xl: {...headerLgXl, backgroundImage: headerBackgroundImageXl},
        logotypeContainer: {
            marginLeft: headerSideMargin,
            marginTop: 'auto'
        },
        menuButtonContainer: headerRightColumns,
        navigationLinks: {...headerRightColumns, transition: defaultTransition}
    },
    logotype: {
        backgroundImage: headerLogotypeImage,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '81.5%'
    },
    menuButton: {
        line: {
            color: colors.orangeColor,
            transition: defaultTransition
        },
        widthAndHeight: 2,
        cursor: 'pointer'
    },
    navigationLinks: {
        xs: {...navigationLinksXsSmMd, ...navigationLinksPadding},
        sm: {...navigationLinksXsSmMd, ...navigationLinksPadding},
        md: {...navigationLinksXsSmMd, ...navigationLinksPadding},
        lg: navigationLinksPadding,
        xl: navigationLinksPadding
    },
    footer: {
        xs: {...footerCommon, ...footerXsSmMd},
        sm: {...footerCommon, ...footerXsSmMd},
        md: {...footerCommon, ...footerXsSmMd},
        lg: {...footerCommon, ...footerLgXl, backgroundImage: footerBackgroundImageLg},
        xl: {...footerCommon, ...footerLgXl, backgroundImage: footerBackgroundImageXl}
    }
};

export default defaultTheme;