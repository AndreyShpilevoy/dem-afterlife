const vimeoVideo = sourceLink => {
    const parsedLink = sourceLink.match(/(?:vimeo\.com|player\.vimeo\.com\/video)\/(\d+)/i);
    return parsedLink ?
        {
            type: 'iframe',
            success: true,
            url: `https://player.vimeo.com/video/${parsedLink[1]}`,
            shortHeight: false
        } :
        {success: false};
};

export default vimeoVideo;