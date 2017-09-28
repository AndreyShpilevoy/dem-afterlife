const coubVideo = sourceLink => {
    const parsedLink = sourceLink.match(/coub\.com\/(?:view|embed)\/([-_\w\d]+)/i);
    return parsedLink ?
        {
            type: 'iframe',
            success: true,
            url: `https://coub.com/embed/${parsedLink[1]}`,
            isShortHeight: false
        } :
        {success: false};
};

export default coubVideo;