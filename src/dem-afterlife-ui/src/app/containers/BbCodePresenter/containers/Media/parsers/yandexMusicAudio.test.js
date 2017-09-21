/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import yandexMusicAudio from './yandexMusicAudio';

describe('yandexMusicAudio', () => {
    it('should return valid result if pass iframe html code for playlist', () => {
        expect(yandexMusicAudio('<iframe frameborder="0" style="border:none;width:900px;height:600px;" width="900" height="600" src="https://music.yandex.ua/iframe/#album/1683701">Слушайте <a href=&#39;https://music.yandex.ua/album/1683701&#39;>Новинки</a> — <a href=&#39;https://music.yandex.ua/artist/168851&#39;>Ленинград</a> на Яндекс.Музыке</iframe>')).toMatchSnapshot();
    });

    it('should return valid result if pass iframe html code for single song', () => {
        expect(yandexMusicAudio('<iframe frameborder="0" style="border:none;width:600px;height:100px;" width="600" height="100" src="https://music.yandex.ua/iframe/#track/26800290/1683701">Слушайте <a href=&#39;https://music.yandex.ua/album/1683701/track/26800290&#39;>Экспонат</a> — <a href=&#39;https://music.yandex.ua/artist/168851&#39;>Ленинград</a> на Яндекс.Музыке</iframe>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(yandexMusicAudio('fake')).toMatchSnapshot();
    });
});
