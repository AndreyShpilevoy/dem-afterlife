import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';
import headerLogotypeImage from 'images/DEM/header/Dem_Logo.png';

const colors = {
    backgroundColor: '#171717',
    headerBackground: '#322C27',
    navigationLinksBackground: '#252525',
    orangeColor: '#AC6B37',
    orangeColorHovered: '#EF9853',
    yellowTextColor: '#CBC065',
    yellowTextColorHovered: '#FFF495'
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

const headerRightColumns = {
    marginLeft: 'auto',
    marginRight: 0.3125
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
            marginLeft: 0.3125,
            marginRight: 'auto'
        },
        menuButtonContainer: headerRightColumns,
        navigationLinks: {...headerRightColumns, transition: '0.35s ease-in-out'}
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
            transition: '0.35s ease-in-out'
        },
        widthAndHeight: 2,
        cursor: 'pointer'
    },
    navigationLinks: {
        xs: {...navigationLinksXsSmMd, padding: 0.5},
        sm: {...navigationLinksXsSmMd, padding: 0.5},
        md: {...navigationLinksXsSmMd, padding: 0.5},
        lg: {padding: 0.5},
        xl: {padding: 0.5}
    }
};

export default defaultTheme;