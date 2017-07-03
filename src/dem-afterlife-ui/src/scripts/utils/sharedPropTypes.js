import {arrayOf, shape, number, string, instanceOf} from 'prop-types';

const subForum = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired
});
const forum = shape({
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
const chapter = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired,
    forumArray: arrayOf(forum)
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
    forum,
    forumArray: arrayOf(forum).isRequired,
    subForum,
    subForumArray: arrayOf(subForum).isRequired,
    chapter,
    chapterArray: arrayOf(chapter).isRequired
};

export default sharedPropTypes;