import headerBackgroundImageMd from 'images/DEM/header/Dem_NavBar_bg_md.png';
import headerBackgroundImageLg from 'images/DEM/header/Dem_NavBar_bg_lg.png';
import headerBackgroundImageXl from 'images/DEM/header/Dem_NavBar_bg_xl.png';
import headerLogotypeImage from 'images/DEM/header/Dem_Logo.png';
import footerBackgroundImageLg from 'images/DEM/footer/Dem_Footer_bg_lg.png';
import footerBackgroundImageXl from 'images/DEM/footer/Dem_Footer_bg_xl.png';
import defaultAvatar from 'images/DEM/default_avatar.png';
import thinkImage from 'images/Smiles/forBbCode/think.gif';
import grid from './grid';

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
    collapsibleSectionHeaderBackgroundColor: '#564B41',
    contentHolderBodyTextColor: '#48423D',
    collapsibleSectionBodyBackgroundColor: '#7B736B',
    forumSecondaryBackgroundColor: '#9C877C',
    bbCodeCodeContentColor: '#FFA100',
    bbCodeCodeHeaderContentColor: '#D4D4D4',
    bbCodeCodeBackgroundColor: '#59534D',
    bbCodeCodeBorderColor: '#44423f',
    bbCodeQuoteBackgroundColor: '#9A8D7F',
    bbCodeQuoteBorderColor: '#5f554b',
    bbCodeSpoilerBackgroundColor: '#67605a',
    bbCodeSpoilerBorderColor: '#44423f',
    bbCodeSpoilerColor: '#D4D4D4',
    bbCodeOffTopicColor: '#67605A',
    bbCodeThinkBackgroundColor: '#D4C5B6',
    bbCodeThinkBorderColor: '#ffffff',
    focusColorLight: '#D4D4D4',
    focusColorDark: '#44423f',
    breadcrumbBackgroundColor: '#5D5956',
    breadcrumbHoveredBackgroundColor: '#564B41'
};

const sizes = {
    marginBetweenBlocks: 0.3125,
    horizontalPaddingAndMargin: 0.9375,
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
    marginRight: sizes.horizontalPaddingAndMargin
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
    backgroundColor: colors.forumSecondaryBackgroundColor,
    paddingLeft: 0.125,
    iconTransform: 'translateY(-0.125rem)',
    iconSize: 1.3125
};

const sharedSeparator = {
    backgroundColor: colors.forumSecondaryBackgroundColor,
    height: 0.125,
    marginVertical: 0.3,
    marginHorizontal: 0
};

const link = {
    color: colors.yellowTextColor,
    textDecoration: 'none',
    hoveredColor: colors.yellowTextColorHovered,
    hoveredTextDecoration: 'underline'
};

const defaultTheme = {
    themeName: 'default',
    grid,
    mainWrapper: {
        fontSize: '16px',
        backgroundColor: colors.backgroundColor,
        fontFamily: 'Arial,sans-serif',
        lineHeight: '1.5'
    },
    link,
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
            marginLeft: sizes.horizontalPaddingAndMargin,
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
    collapsibleSection: {
        general: {
            marginTop: sizes.marginBetweenBlocks,
            padding: sizes.horizontalPaddingAndMargin
        },
        header: {
            backgroundColor: colors.collapsibleSectionHeaderBackgroundColor,
            color: colors.orangeColor,
            height: 2.5,
            fontSize: 1.3125,
            iconSize: 1.3
        },
        body: {
            backgroundColor: colors.collapsibleSectionBodyBackgroundColor,
            color: colors.contentHolderBodyTextColor,
            transition: linearTransition
        }
    },
    forum: {
        separator: sharedSeparator,
        text: {
            big: sizes.textBig,
            small: sizes.textSmall
        },
        subForumContainer: {
            marginTop: subForum.marginTop
        }
    },
    topic: {
        separator: sharedSeparator,
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
    },
    post: {
        separator: sharedSeparator,
        usernamePaddingLeft: 0.3125
    },
    bbCodes: {
        common: {
            borderWidth: 0.0625,
            padding: 0.4,
            marginHorizontal: 1.25,
            marginVertical: 0.3125
        },
        code: {
            contentColor: colors.bbCodeCodeContentColor,
            headerColor: colors.bbCodeCodeHeaderContentColor,
            backgroundColor: colors.bbCodeCodeBackgroundColor,
            borderColor: colors.bbCodeCodeBorderColor
        },
        quote: {
            backgroundColor: colors.bbCodeQuoteBackgroundColor,
            borderColor: colors.bbCodeQuoteBorderColor
        },
        spoiler: {
            backgroundColor: colors.bbCodeSpoilerBackgroundColor,
            borderColor: colors.bbCodeSpoilerBorderColor,
            color: colors.bbCodeSpoilerColor,
            contentMarginTop: 0.3125
        },
        offtopic: {
            color: colors.bbCodeOffTopicColor
        },
        think: {
            image: thinkImage,
            backgroundSize: 2,
            paddingTop: 2,
            backgroundColor: colors.bbCodeThinkBackgroundColor,
            borderColor: colors.bbCodeThinkColor,
            borderWidth: 0.0625,
            borderRadius: 1,
            paddingContent: 0.4
        },
        email: link,
        url: link
    },
    breadcrumbs: {
        listMarginTop: sizes.marginBetweenBlocks,
        bgColor: colors.breadcrumbBackgroundColor,
        hoveredBgColor: colors.breadcrumbHoveredBackgroundColor,
        mainBg: colors.backgroundColor,
        textColor: colors.yellowTextColor,
        height: 1.25,
        fontSize: 0.9,
        lineHeight: 1.4,
        marginAndPaddingRight: 0.1875,
        paddingLeft: 0.9375
    },
    focus: {
        colorLight: colors.focusColorLight,
        colorDark: colors.focusColorDark
    }
};

export default defaultTheme;