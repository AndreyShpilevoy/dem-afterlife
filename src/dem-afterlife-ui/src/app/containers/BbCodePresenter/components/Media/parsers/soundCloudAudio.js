const soundCloudAudio = sourceLink => {
    const parsedLink = sourceLink.match(/api\.soundcloud\.com(?:\/|%2F)(?:tracks|(playlists))(?:\/|%2F).*(?=(?:"|&quot;))/i);
    return parsedLink ?
        {
            type: 'iframe',
            success: true,
            url: `https://w.soundcloud.com/player/?url=https%3A//${parsedLink[0]}`,
            shortHeight: !parsedLink[1]
        } :
        {success: false};
};

export default soundCloudAudio;