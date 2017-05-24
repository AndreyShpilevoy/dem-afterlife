import {arrayOf, shape, number, string} from 'prop-types';

const chapterItem = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired
});
const navigationLinkItem = shape({
    id: number.isRequired,
    title: string.isRequired,
    href: string.isRequired,
    order: number.isRequired
});
const socialMediaLinkItem = shape({
    id: number.isRequired,
    title: string.isRequired,
    href: string.isRequired,
    svgImageName: string.isRequired,
    order: number.isRequired
});
const sharedPropTypes = {
    navigationLinkItem,
    navigationLinkArray: arrayOf(navigationLinkItem).isRequired,
    socialMediaLinkItem,
    socialMediaLinkArray: arrayOf(socialMediaLinkItem).isRequired,
    chapterItem,
    chapterArray: arrayOf(chapterItem).isRequired
};

export default sharedPropTypes;