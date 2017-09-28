/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import soundCloudAudio from './soundCloudAudio';

describe('soundCloudAudio', () => {
    it('should return valid Album result if pass iframe html code', () => {
        expect(soundCloudAudio('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/127854788&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>')).toMatchSnapshot();
    });

    it('should return valid Single result if pass iframe html code', () => {
        expect(soundCloudAudio('<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232504408&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(soundCloudAudio('fake')).toMatchSnapshot();
    });
});
