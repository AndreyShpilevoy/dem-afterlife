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
    }
};

export default defaultTheme;