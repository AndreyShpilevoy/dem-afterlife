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

export const defaultListOfParsers = [
    coubVideo,
    facebookVideo,
    googleMaps,
    HTML5Tag,
    soundCloudAudio,
    twitchVideo,
    vimeoVideo,
    vkVideo,
    yandexMusicAudio,
    youtubePlaylist,
    youtubeVideo
];

const processTextLineContantViaParsers = (textLineComponent, listOfParsers) => {
    const defaultResult = {
        type: 'none',
        success: false,
        url: ''
    };
    if (textLineComponent.type && textLineComponent.type.displayName === TextLine.displayName) {
        const text = textLineComponent.props.children;
        const result = listOfParsers.reduce((previous, current) => {
            if (previous.success) {
                return previous;
            }
            const parserResult = current(text);
            if (parserResult.success) {
                return parserResult;
            }
            return previous;
        }, defaultResult);
        return result;
    }
    return defaultResult;
};

export default processTextLineContantViaParsers;