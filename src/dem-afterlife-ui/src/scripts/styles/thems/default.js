import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';

const colors = {
    headerBackground: '#322C27'
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
            },
        ]
    },
    header: {
        xs: {
            height: 3.4375,
            backgroundColor: colors.headerBackground
        },
        sm: {
            height: 3.4375,
            backgroundColor: colors.headerBackground
        },
        md: {
            backgroundImage: headerBackgroundImageMd,
            height: 3.75
        },
        lg: {
            backgroundImage: headerBackgroundImageLg,
            height: 5,
            transition: 'all 400ms linear'
        },
        xl: {
            backgroundImage: headerBackgroundImageXl,
            height: 5,
            transition: 'all 400ms linear'
        }
    }
};

export default defaultTheme;