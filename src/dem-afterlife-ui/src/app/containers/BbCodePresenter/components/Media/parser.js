import TextLine from '../TextLine';

export const youtubePlaylistParser = text => {
    const parsedLink = text.match(/youtube(?:-nocookie)?\.com\/(?:playlist\?list=|embed\/videoseries\?list=)([-_\w\d]+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://www.youtube.com/embed/videoseries?list=${parsedLink[1]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const youtubeVideoParser = text => {
    const parsedLink = text.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|(?:embed\/(?!videoseries))|v\/))([-_\w\d]+)(?:.*(?:start)=(\d+))?/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://www.youtube.com/embed/${parsedLink[1]}?start=${parsedLink[2] || 0}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const vimeoVideoParser = text => {
    const parsedLink = text.match(/(?:vimeo\.com|player\.vimeo\.com\/video)\/(\d+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://player.vimeo.com/video/${parsedLink[1]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const vkVideoParser = text => {
    const parsedLink = text.match(/(?:vk\.com|vkontakte\.ru)\/video_ext\.php\?oid=([-_\w\d]+)(?:&|&amp;)id=([-_\w\d]+)(?:&|&amp;)hash=([-_\w\d]+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://vk.com/video_ext.php?oid=${parsedLink[1]}&id=${parsedLink[2]}&hash=${parsedLink[3]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const facebookVideoParser = text => {
    const parsedLink = text.match(/facebook\.com(?:\/|%2F)(?:v=|video(?:\/|%2F)embed\?(?:.*&)?video_id=|v(?:\/|%2F)|[-_.\w\d]+(?:\/|%2F)videos(?:\/|%2F))([-_\w\d]+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${parsedLink[1]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const twitchVideoParser = text => {
    const parsedLink = text.match(/(player\.twitch\.tv\/\?(?:channel=([-_\w\d]+)|stream=([\d]+)&channelId=([\d]+)))/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://${parsedLink[1]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const coubVideoParser = text => {
    const parsedLink = text.match(/coub\.com\/(?:view|embed)\/([-_\w\d]+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://coub.com/embed/${parsedLink[1]}`,
            shortHeight: false
        };
    }
    return {success: false};
};

export const soundCloudAudioParser = text => {
    const parsedLink = text.match(/api\.soundcloud\.com(?:\/|%2F)(?:tracks|(playlists))(?:\/|%2F).*(?=(?:"|&quot;))/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://w.soundcloud.com/player/?url=https%3A//${parsedLink[0]}`,
            shortHeight: !parsedLink[1]
        };
    }
    return {success: false};
};

export const yandexMusicAudioParser = text => {
    const parsedLink = text.match(/music\.yandex\.(?:ru|by|ua|kz)\/iframe\/(?:(#album)\/\d+|#track\/\d+\/\d+)/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://${parsedLink[0]}`,
            shortHeight: !parsedLink[1]
        };
    }
    return {success: false};
};

export const googleMapsParser = text => { // eslint-disable-line max-statements
    const parsedLink = text.match(/google(?:\.com)?\.\w+\/maps\/@(\d+\.\d+),(\d+\.\d+),(\d+|\d+.\d+)([zm])/i);
    if (parsedLink) {
        if (parsedLink[4] === 'z') {
            return {
                type: 'iframe',
                success: true,
                url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=m&z=${Number.parseInt(parsedLink[3], 10)}`,
                shortHeight: !parsedLink[1]
            };
        }

        // let counter = 377;
        // let zoomLevel = 18;
        // let initialDifference = Math.abs(counter - parseInt(parsedSourceLink[3]));
        // for (let i = 17; i >= 3; i--) {
        //     counter *= 2;
        //     const processedDifference = Math.abs(counter - parseInt(parsedSourceLink[3]));
        //     if (processedDifference < initialDifference) {
        //         initialDifference = processedDifference;
        //         zoomLevel = i;
        //     }
        // }
        return {
            type: 'iframe',
            success: true,

            // url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=h&z=${zoomLevel}`,
            shortHeight: !parsedLink[1]
        };
    }
    return {success: false};
};

const parseTextLineComponentToEmbedLink = textLineComponent => { // eslint-disable-line max-statements, complexity
    if (textLineComponent.type.displayName === TextLine.displayName) {
        const youtubePlaylist = youtubePlaylistParser(textLineComponent.props.children);
        if (youtubePlaylist.success) {
            return youtubePlaylist;
        }

        const youtubeVideo = youtubeVideoParser(textLineComponent.props.children);
        if (youtubeVideo.success) {
            return youtubeVideo;
        }

        const vimeoVideo = vimeoVideoParser(textLineComponent.props.children);
        if (vimeoVideo.success) {
            return vimeoVideo;
        }

        const vkVideo = vkVideoParser(textLineComponent.props.children);
        if (vkVideo.success) {
            return vkVideo;
        }

        const facebookVideo = facebookVideoParser(textLineComponent.props.children);
        if (facebookVideo.success) {
            return facebookVideo;
        }

        const twitchVideo = twitchVideoParser(textLineComponent.props.children);
        if (twitchVideo.success) {
            return twitchVideo;
        }

        const coubVideo = coubVideoParser(textLineComponent.props.children);
        if (coubVideo.success) {
            return coubVideo;
        }

        const soundCloudAudio = soundCloudAudioParser(textLineComponent.props.children);
        if (soundCloudAudio.success) {
            return soundCloudAudio;
        }

        const yandexMusicAudio = yandexMusicAudioParser(textLineComponent.props.children);
        if (yandexMusicAudio.success) {
            return yandexMusicAudio;
        }
    }
    return {
        type: 'none',
        success: false,
        url: ''
    };
};

export default parseTextLineComponentToEmbedLink;

// private createFrame(urlLink: string, width: number, height: number) {
//     return `<iframe style="vertical-align: bottom; width: ${width}px; height: ${height}px;" width="${width}" height="${height}" src="${urlLink}" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>`;
// }

// private createHtml5TagFromTheSource(sourceLink: string, frameWidth: number, frameHeight: number): string {
//     var parsedSourceLink: RegExpMatchArray;
//     var sourceLinkMatchAudioFormats = sourceLink.match(/\.(ogg|oga|opus|webma|mp3|aac|m4a|wav)(?:\s*;|$)/i);
//     var sourceLinkMatchVideoFormats = sourceLink.match(/\.(ogv|webm|webmv|mp4|m4v)(?:\s*;|$)/i);
//     var audioOrVideoFormats = new Dictionary<string, string>();
//     if ((sourceLinkMatchAudioFormats || sourceLinkMatchVideoFormats) && !(sourceLinkMatchAudioFormats && sourceLinkMatchVideoFormats)) {
//         var resourceType: string;
//         if (sourceLinkMatchAudioFormats) {
//             resourceType = "audio";
//             audioOrVideoFormats.add("aac", "aac");
//             audioOrVideoFormats.add("m4a", "mp4");
//             audioOrVideoFormats.add("mp3", "mpeg");
//             audioOrVideoFormats.add("mp4", "mp4");
//             audioOrVideoFormats.add("oga", "ogg");
//             audioOrVideoFormats.add("ogg", "ogg");
//             audioOrVideoFormats.add("opus", "opus");
//             audioOrVideoFormats.add("wav", "wav");
//             audioOrVideoFormats.add("webm", "webm");
//             audioOrVideoFormats.add("webma", "webm");

//         } else if (sourceLinkMatchVideoFormats) {
//             resourceType = "video";
//             audioOrVideoFormats.add("m4v", "mp4");
//             audioOrVideoFormats.add("mp4", "mp4");
//             audioOrVideoFormats.add("ogg", "ogg");
//             audioOrVideoFormats.add("ogv", "ogg");
//             audioOrVideoFormats.add("webm", "webm");
//             audioOrVideoFormats.add("webmv", "webm");
//         } else {
//             return undefined;
//         }

//         var sourceLinkCollection = sourceLink.split(/\s*;\s*/);
//         var sourceTag = "";
//         var aTag = "";
//         var posterLink = "";
//         $.each(sourceLinkCollection, (index, link) => {
//             if ((parsedSourceLink = link.match(/^(?:https?:\/\/)?[^:"']*\.(ogg|oga|ogv|opus|webm|webma|webmv|mp3|aac|mp4|m4a|m4v|wav)$/i))) {
//                 var fileFormat = parsedSourceLink[1];
//                 if (!audioOrVideoFormats.getValueByKey(fileFormat)) {
//                     sourceTag = "";
//                     return false;
//                 }
//                 var type = resourceType + "/" + audioOrVideoFormats.getValueByKey(fileFormat);
//                 sourceTag += `<source src="${link}" type="${type}">`;
//                 aTag += `${aTag ? ", " : ""}<a href="${link}">${parsedSourceLink[1].toUpperCase()}</a>`;
//             } else {
//                 if (sourceLinkMatchVideoFormats && !posterLink && link.match(/^(?:https?:\/\/)?[^:"']*\.(png|jpg|gif|webp)$/i)) {
//                     posterLink = link;
//                 } else {
//                     sourceTag = "";
//                     return false;
//                 }
//             }
//         });
//         if (sourceTag) {
//             return (sourceLinkMatchAudioFormats ? "<audio controls>" : `<video width="${frameWidth}" height="${frameHeight}" controls${posterLink ? ` poster="${posterLink}">` : ">"}`) + sourceTag + aTag + (sourceLinkMatchAudioFormats ? "</audio>" : "</video>");
//         }
//     }
//     return undefined;
// }