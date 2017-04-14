const calculateStyles = ({menuButton}) => ({
    container: {
        width: '60px',
        height: '45px',
        position: 'relative',
        margin: '50px auto',
        transform: 'rotate(0deg)',
        transition: '0.5s ease-in-out',
        cursor: 'pointer'
    },
    allLines: {
        display: 'block',
        position: 'absolute',
        height: ' 9px',
        width: '100%',
        background: '#d3531a',
        'border-radius': '9px',
        opacity: 1,
        left: 0,
        transform: 'rotate(0deg)',
        transition: '0.25s ease-in-out'
    },
    firstLine: {
        top: '0px',
        '&.open': {
            top: '18px',
            width: '0%',
            left: '50%'
        }
    },
    fourthLine: {
        top: '36px',
        '&.open': {
            top: '18px',
            width: '0%',
            left: '50%'
        }
    },
    secondLine: {
        top: '18px',
        '&.open': {
            transform: 'rotate(45deg)'
        }
    },
    thirdLine: {
        top: '18px',
        '&.open': {
            transform: 'rotate(-45deg)'
        }
    }
});

export default calculateStyles;

