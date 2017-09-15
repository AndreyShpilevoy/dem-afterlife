const audioFormatTypeMatch = {
    aac: 'aac',
    m4a: 'mp4',
    mp3: 'mpeg',
    oga: 'ogg',
    ogg: 'ogg',
    opus: 'opus',
    wav: 'wav',
    webma: 'webm'
};

const videoFormatTypeMatch = {
    m4v: 'mp4',
    mp4: 'mp4',
    ogv: 'ogg',
    webm: 'webm',
    webmv: 'webm'
};

const HTML5Tag = sourceLink => {
    const parsedLink = sourceLink.match(/(?:https?:\/\/)?[^:"']*\.(?:(aac|m4a|mp3|oga|ogg|opus|wav|webma)|(mp4|m4v|ogv|webm|webmv))/i);
    if (parsedLink && parsedLink[1]) {
        return {
            type: `audio/${audioFormatTypeMatch[parsedLink[1]]}`,
            success: true,
            url: parsedLink[0]
        };
    } else if (parsedLink && parsedLink[2]) {
        return {
            type: `video/${videoFormatTypeMatch[parsedLink[2]]}`,
            success: true,
            url: parsedLink[0]
        };
    }
    return {success: false};
};

export default HTML5Tag;