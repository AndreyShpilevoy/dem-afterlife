import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';
import headerLogotypeImage from 'images/DEM/header/Dem_Logo.png';
import footerBackgroundImageLg from 'images/DEM/footer/Dem_Footer_bg_lg.png';
import footerBackgroundImageXl from 'images/DEM/footer/Dem_Footer_bg_xl.png';
import defaultAvatar from 'images/DEM/default_avatar.png';

const colors = {
    backgroundColor: '#171717',
    headerBackground: '#322C27',
    navigationLinksBackground: '#252525',
    orangeColor: '#AC6B37',
    orangeColorHovered: '#EF9853',
    orangeColorBright: '#c57b3f',
    yellowTextColor: '#CBC065',
    yellowTextColorHovered: '#FFF495',
    footerBackgroundColor: '#3E3025',
    footerTextColor: '#CFB095',
    collapsebleSectionHeaderBackgroundColor: '#564B41',
    contentHolderBodyTextColor: '#48423D',
    collapsebleSectionBodyBackgroundColor: '#7B736B',
    forumSecondaryBackgroungColor: '#9C877C'

};

const sizes = {
    marginBetweenBlocks: 0.3125,
    horizontalPadingAndMargin: 0.9375,
    textBig: 1.3125,
    textSmall: 0.8
};

const headerXsSm = {
    height: 3.4375,
    backgroundColor: colors.headerBackground,
    logoContainerWidth: 11.25
};

const defaultTransition = 'all 350ms ease-in-out';
const linearTransition = 'all 400ms linear';

const headerLgXl = {
    height: 5,
    transition: linearTransition,
    logoContainerWidth: 16
};

const headerRightColumns = {
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: sizes.horizontalPadingAndMargin
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
    marginTop: sizes.marginBetweenBlocks,
    color: colors.footerTextColor
};

const footerXsSmMd = {
    height: 1.875,
    backgroundColor: colors.footerBackgroundColor
};

const footerLgXl = {
    height: 2.5
};

const subForum = {
    marginTop: 0.5,
    backgroundColor: colors.forumSecondaryBackgroungColor,
    paddingLeft: 0.125,
    iconTransform: 'translateY(-0.125rem)',
    iconSize: 1.3125
};

const forumTopicSeparator = {
    backgroundColor: colors.forumSecondaryBackgroungColor,
    height: 0.125,
    marginVertical: 0.3,
    marginHorizontal: 0
};

const defaultTheme = {
    themeName: 'default',
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
    mainWrapper: {
        fontSize: '16px',
        backgroundColor: colors.backgroundColor,
        fontFamily: 'Arial,sans-serif',
        lineHeight: '1.5'
    },
    link: {
        color: colors.yellowTextColor,
        textDecoration: 'none',
        hoveredColor: colors.yellowTextColorHovered,
        hoveredTextDecoration: 'underline'
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
            marginLeft: sizes.horizontalPadingAndMargin,
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
    },
    socialMediaLinkIcons: {
        svg: {
            opacity: 0.6,
            width: 2,
            height: 2,
            padding: 0.125
        }
    },
    collapsebleSection: {
        general: {
            marginTop: sizes.marginBetweenBlocks,
            padding: sizes.horizontalPadingAndMargin
        },
        header: {
            backgroundColor: colors.collapsebleSectionHeaderBackgroundColor,
            color: colors.orangeColor,
            height: 2.5,
            fontSize: 1.3125,
            iconSize: 1.3
        },
        body: {
            backgroundColor: colors.collapsebleSectionBodyBackgroundColor,
            color: colors.contentHolderBodyTextColor,
            transition: linearTransition
        }
    },
    forum: {
        separator: forumTopicSeparator,
        text: {
            big: sizes.textBig,
            small: sizes.textSmall
        },
        subForumContainer: {
            marginTop: subForum.marginTop
        }
    },
    topic: {
        separator: forumTopicSeparator,
        text: {
            big: sizes.textBig,
            small: sizes.textSmall
        },
        parentForumColor: colors.orangeColorBright,
        parentForumColorHover: colors.orangeColorHovered
    },
    subForum,
    avatar: {
        defaultImage: defaultAvatar,
        size: 2.5
    }
};

export default defaultTheme;