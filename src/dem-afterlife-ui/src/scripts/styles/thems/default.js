import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';
import headerLogotypeImage from 'images/DEM/header/Dem_Logo.png';

const colors = {
    headerBackground: '#322C27',
    orangeColor: '#AC6B37'
};

const defaultTheme = {
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
        xs: {
            height: 3.4375,
            backgroundColor: colors.headerBackground,
            logoContainerWidth: 11.25
        },
        sm: {
            height: 3.4375,
            backgroundColor: colors.headerBackground,
            logoContainerWidth: 11.25
        },
        md: {
            backgroundImage: headerBackgroundImageMd,
            height: 3.75,
            logoContainerWidth: 12.1875
        },
        lg: {
            backgroundImage: headerBackgroundImageLg,
            height: 5,
            transition: 'all 400ms linear',
            logoContainerWidth: 16
        },
        xl: {
            backgroundImage: headerBackgroundImageXl,
            height: 5,
            transition: 'all 400ms linear',
            logoContainerWidth: 16
        },
        logotypeContainer: {
            'margin-left': 0.3125,
            'margin-right': 'auto'
        },
        menuButtonContainer: {
            'margin-left': 'auto',
            'margin-right': 0.3125
        }
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
            transition: '0.25s ease-in-out'
        },
        widthAndHeight: 2,
        cursor: 'pointer'
    }
};

export default defaultTheme;