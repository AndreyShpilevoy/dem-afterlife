import thinkImage from 'images/Smiles/forBbCode/think.gif';

const calculateStyles = ({themeName}) => ({
    think: {
        padding: 0.4
    },
    thinkContent: {
        backgroundColor: '#D4C5B6',
        border: '0.0625 solid #FFFFFF',
        borderRadius: 1,
        padding: 0.4
    },
    thinkImage: {
        backgroundImage: `url(${thinkImage});`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 2,
        paddingTop: 2
    },
    options: {meta: 'Think', themeName}
});

export default calculateStyles;