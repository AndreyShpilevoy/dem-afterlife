import {arrayOf, shape, number, string, instanceOf} from 'prop-types';

const subForum = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired
});
const forumItem = shape({
    id: number.isRequired,
    chapterId: number,
    order: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    topicsCount: number.isRequired,
    postsCount: number.isRequired,
    lastTopicInfo: shape({
        lastActiveTopicId: number.isRequired,
        lastActiveTopic: string.isRequired,
        latesPostTimeCreation: instanceOf(Date),
        latesPostAutorId: number.isRequired,
        latesPostAutorName: string.isRequired,
        latesPostAutorGroupColor: string.isRequired
    }).isRequired,
    subForumArray: arrayOf(subForum)
});
const chapterItem = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired,
    forumArray: arrayOf(forumItem)
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
    forumItem,
    forumArray: arrayOf(forumItem).isRequired,
    subForum,
    subForumArray: arrayOf(subForum).isRequired,
    chapterItem,
    chapterArray: arrayOf(chapterItem).isRequired
};

export default sharedPropTypes;