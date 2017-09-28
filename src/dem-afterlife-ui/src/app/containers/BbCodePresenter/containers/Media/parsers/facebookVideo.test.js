/* eslint-disable react/jsx-filename-extension, no-undef, fp/no-unused-expression, fp/no-nil, max-statements */

import facebookVideo from './facebookVideo';

describe('facebookVideo', () => {
    it('should return valid result if pass old iframe html code', () => {
        expect(facebookVideo('<div id="fb-root"></div><script>(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return;  js = d.createElement(s); js.id = id;  js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.3";  fjs.parentNode.insertBefore(js, fjs);}(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));</script><div class="fb-video" data-allowfullscreen="1" data-href="/kto.deus/videos/vb.1678897377/10204840935178043/?type=3"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/kto.deus/videos/10204840935178043/"><a href="https://www.facebook.com/kto.deus/videos/10204840935178043/"></a><p>для теста bbCode Media на сайте Dem.org.ua</p>Опубликовано <a href="https://www.facebook.com/kto.deus">Шпилевоем Андреем</a> 7 февраля 2016 г.</blockquote></div></div><iframe style="vertical-align: bottom; width: 640px; height: 360px;" width="640" height="360" src="https://www.facebook.com/video/embed?video_id=10204840935178043" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0"></iframe>')).toMatchSnapshot();
    });

    it('should return valid result if pass new iframe html code', () => {
        expect(facebookVideo('<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10155479830046729%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>')).toMatchSnapshot();
    });

    it('should return unsuccessful result if pass wrong string', () => {
        expect(facebookVideo('fake')).toMatchSnapshot();
    });
});
