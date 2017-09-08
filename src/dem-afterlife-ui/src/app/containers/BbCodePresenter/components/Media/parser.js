import TextLine from '../TextLine';
import coubVideo from './parsers/coubVideo';
import facebookVideo from './parsers/facebookVideo';
import googleMaps from './parsers/googleMaps';
import HTML5Tag from './parsers/HTML5Tag';
import soundCloudAudio from './parsers/soundCloudAudio';
import twitchVideo from './parsers/twitchVideo';
import vimeoVideo from './parsers/vimeoVideo';
import vkVideo from './parsers/vkVideo';
import yandexMusicAudio from './parsers/yandexMusicAudio';
import youtubePlaylist from './parsers/youtubePlaylist';
import youtubeVideo from './parsers/youtubeVideo';

const parseTextLineComponentToEmbedLink = textLineComponent => {
    if (textLineComponent.type.displayName === TextLine.displayName) {
        const youtubePlaylistResult = youtubePlaylist(textLineComponent.props.children);
        if (youtubePlaylistResult.success) {
            return youtubePlaylistResult;
        }

        const youtubeVideoResult = youtubeVideo(textLineComponent.props.children);
        if (youtubeVideoResult.success) {
            return youtubeVideoResult;
        }

        const vimeoVideoResult = vimeoVideo(textLineComponent.props.children);
        if (vimeoVideoResult.success) {
            return vimeoVideoResult;
        }

        const vkVideoResult = vkVideo(textLineComponent.props.children);
        if (vkVideoResult.success) {
            return vkVideoResult;
        }

        const facebookVideoResult = facebookVideo(textLineComponent.props.children);
        if (facebookVideoResult.success) {
            return facebookVideoResult;
        }

        const twitchVideoResult = twitchVideo(textLineComponent.props.children);
        if (twitchVideoResult.success) {
            return twitchVideoResult;
        }

        const coubVideoResult = coubVideo(textLineComponent.props.children);
        if (coubVideoResult.success) {
            return coubVideoResult;
        }

        const soundCloudAudioResult = soundCloudAudio(textLineComponent.props.children);
        if (soundCloudAudioResult.success) {
            return soundCloudAudioResult;
        }

        const yandexMusicAudioResult = yandexMusicAudio(textLineComponent.props.children);
        if (yandexMusicAudioResult.success) {
            return yandexMusicAudioResult;
        }

        const googleMapsResult = googleMaps(textLineComponent.props.children);
        if (googleMapsResult.success) {
            return googleMapsResult;
        }

        const HTML5TagResult = HTML5Tag(textLineComponent.props.children);
        if (HTML5TagResult.success) {
            return HTML5TagResult;
        }
    }
    return {
        type: 'none',
        success: false,
        url: ''
    };
};

export default parseTextLineComponentToEmbedLink;