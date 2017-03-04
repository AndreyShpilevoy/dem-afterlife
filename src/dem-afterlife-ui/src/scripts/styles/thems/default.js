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
                size: 'xs',
                min: 'min-width: 0px',
                max: 'max-width: 575px',
                width: '100%'
            },
            {
                size: 'sm',
                min: 'min-width: 576px',
                max: 'max-width: 767px',
                width: '558px'
            },
            {
                size: 'md',
                min: 'min-width: 768px',
                max: 'max-width: 991px',
                width: '720px'
            },
            {
                size: 'lg',
                min: 'min-width: 992px',
                max: 'max-width: 1199px',
                width: '960px'
            },
            {
                size: 'xl',
                min: 'min-width: 1200px',
                max: 'max-width: 999999999px',
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
            height: 5
        },
        xl: {
            backgroundImage: headerBackgroundImageXl,
            height: 5
        }
    }
};

export default defaultTheme;