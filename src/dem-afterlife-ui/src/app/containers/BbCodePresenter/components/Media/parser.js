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
    const parsedLink = text.match(/google(?:\.com)?\.\w+\/maps\/(?:@(\d+\.\d+),(\d+\.\d+),(\d+|\d+.\d+)([zm]))|(embed\?[!=.-_\w\d]+)/i);
    if (parsedLink) {
        if (parsedLink[4] === 'z') {
            return {
                type: 'iframe',
                success: true,
                url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=m&z=${Number.parseInt(parsedLink[3], 10)}&output=embed`,
                shortHeight: false
            };
        } else if (parsedLink[4] === 'm') {
            const calculateRoadMapZoomLevel = (value, result = 2) => value >= 2 ? calculateRoadMapZoomLevel(value / 2, result + 1) : result;
            const getSatelliteZoomLevel = satelliteZoom => calculateRoadMapZoomLevel(45875200 / satelliteZoom);
            return {
                type: 'iframe',
                success: true,
                url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=h&z=${getSatelliteZoomLevel(parsedLink[3])}&output=embed`,
                shortHeight: false
            };
        } else if (parsedLink[5]) {
            return {
                type: 'iframe',
                success: true,
                url: `https://www.google.com/maps/${parsedLink[5]}`,
                shortHeight: false
            };
        }
    }
    return {success: false};
};

export const HTML5TagParser = text => {
    const parsedLink = text.match(/(?:https?:\/\/)?[^:"']*\.(?:(aac|m4a|mp3|oga|ogg|opus|wav|webma)|(mp4|m4v|ogv|webm|webmv))/i);
    if (parsedLink[1]) {
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
        return {
            type: `audio/${audioFormatTypeMatch[parsedLink[1]]}`,
            success: true,
            url: parsedLink[0]
        };
    } else if (parsedLink[2]) {
        const videoFormatTypeMatch = {
            m4v: 'mp4',
            mp4: 'mp4',
            ogv: 'ogg',
            webm: 'webm',
            webmv: 'webm'
        };
        return {
            type: `video/${videoFormatTypeMatch[parsedLink[2]]}`,
            success: true,
            url: parsedLink[0]
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

        const googleMaps = googleMapsParser(textLineComponent.props.children);
        if (googleMaps.success) {
            return googleMaps;
        }

        const HTML5Tag = HTML5TagParser(textLineComponent.props.children);
        if (HTML5Tag.success) {
            return HTML5Tag;
        }
    }
    return {
        type: 'none',
        success: false,
        url: ''
    };
};

export default parseTextLineComponentToEmbedLink;