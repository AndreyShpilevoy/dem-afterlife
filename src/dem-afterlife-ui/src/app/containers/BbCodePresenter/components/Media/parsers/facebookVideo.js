const facebookVideo = sourceLink => {
    const parsedLink = sourceLink.match(/facebook\.com(?:\/|%2F)(?:v=|video(?:\/|%2F)embed\?(?:.*&)?video_id=|v(?:\/|%2F)|[-_.\w\d]+(?:\/|%2F)videos(?:\/|%2F))([-_\w\d]+)/i);
    return parsedLink ?
        {
            type: 'iframe',
            success: true,
            url: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${parsedLink[1]}`,
            shortHeight: false
        } :
        {success: false};
};

export default facebookVideo;