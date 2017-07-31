const calculateStyles = ({themeName, focus}) => ({
    focus: {
        '&:focus': {
            outlineColor: focus.colorLight
        }
    },
    options: {meta: 'SocialMediaLink', themeName}
});

export default calculateStyles;