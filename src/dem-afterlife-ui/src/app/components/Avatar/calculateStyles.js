

const commonImagePart = {
    alignSelf: 'center',
    flex: '0 0 auto',
    margin: 'auto',
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'scale-down'
};

const calculateStyles = ({avatar}) => ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: avatar.size
    },
    avatar: {
        display: 'flex',
        flexDirection: 'row',
        height: avatar.size,
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        '&>img': {...commonImagePart}
    },
    avatarDefault: {
        backgroundImage: `url(${avatar.defaultImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        minHeight: '100%',
        minWidth: '100%',
        '&>img': {...commonImagePart}
    }
});

export default calculateStyles;