import {arrayOf, shape, number, string, instanceOf, oneOfType, node, bool} from 'prop-types';

const subForum = shape({
    id: number.isRequired,
    title: string.isRequired,
    order: number.isRequired
});

const forum = shape({
    id: number.isRequired,
    chapterId: number,
    parentForumId: number,
    order: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    topicsCount: number.isRequired,
    postsCount: number.isRequired,
    lastTopicInfo: shape({
        topicId: number.isRequired,
        topicDescription: string.isRequired,
        latestPostTimeCreation: instanceOf(Date).isRequired,
        latestPostAuthorId: number.isRequired,
        latestPostAuthorName: string.isRequired,
        latestPostAuthorGroupColor: string.isRequired
    }).isRequired,
    subForumArray: arrayOf(subForum)
});

const chapter = shape({
    id: number.isRequired,
    title: oneOfType([string, node]).isRequired,
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

const topic = shape({
    id: number.isRequired,
    forumId: number.isRequired,
    title: string.isRequired,
    postsCount: number.isRequired,
    topicViewsCount: number.isRequired,
    lastPostInfo: shape({
        timeCreation: instanceOf(Date).isRequired,
        authorId: number.isRequired,
        authorName: string.isRequired,
        authorAvatar: string,
        authorGroupColor: string.isRequired
    }).isRequired,
    parentForumTitle: string
});

const user = shape({
    id: number.isRequired,
    name: string.isRequired,
    registrationDate: instanceOf(Date).isRequired,
    birthday: instanceOf(Date).isRequired,
    email: string.isRequired,
    emailConfirmed: bool.isRequired,
    gender: number.isRequired,
    rank: string.isRequired,
    avatar: string,
    signature: string,
    from: string,
    steam: string,
    skype: string,
    icq: string,
    vk: string,
    fb: string,
    website: string,
    profession: string,
    interests: string,
    groupColor: string.isRequired
});

const post = shape({
    id: number.isRequired,
    topicId: number.isRequired,
    postTime: instanceOf(Date).isRequired,
    subject: string,
    message: string.isRequired,
    rate: number.isRequired,
    userId: number.isRequired,
    user,
    editInfo: shape({
        userId: number.isRequired,
        user,
        editReason: string,
        editTime: instanceOf(Date).isRequired,
        editCount: number.isRequired
    })
});

const breadcrumb = shape({
    path: string.isRequired,
    title: string.isRequired,
    order: number.isRequired
});

const sharedPropTypes = {
    navigationLinkItem,
    navigationLinkArray: arrayOf(navigationLinkItem),
    socialMediaLinkItem,
    socialMediaLinkArray: arrayOf(socialMediaLinkItem),
    forum,
    forumArray: arrayOf(forum),
    subForum,
    subForumArray: arrayOf(subForum),
    chapter,
    chapterArray: arrayOf(chapter),
    topic,
    topicArray: arrayOf(topic),
    post,
    postArray: arrayOf(post),
    user,
    userArray: arrayOf(user),
    breadcrumb,
    breadcrumbArray: arrayOf(breadcrumb)
};

export default sharedPropTypes;