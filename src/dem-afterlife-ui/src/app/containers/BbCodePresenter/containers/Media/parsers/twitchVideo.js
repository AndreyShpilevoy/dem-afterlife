const twitchVideo = sourceLink => {
    const parsedLink = sourceLink.match(/(player\.twitch\.tv\/\?(?:channel=([-_\w\d]+)|stream=([\d]+)&channelId=([\d]+)))/i);
    return parsedLink ?
        {
            type: 'iframe',
            success: true,
            url: `https://${parsedLink[1]}`,
            isShortHeight: false
        } :
        {success: false};
};

export default twitchVideo;