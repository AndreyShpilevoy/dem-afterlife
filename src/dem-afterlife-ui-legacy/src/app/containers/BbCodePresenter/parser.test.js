/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, max-statements: 0 */

import parseTextToNodeTree from './parser';

describe('BbCodePresenter parser', () => {
    it('parseTextToNodeTree with correct message should create expected object', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] text [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(parseTextToNodeTree(message)).toMatchSnapshot();
    });

    it('parseTextToNodeTree with wrong message that contained wrong tags should create expected object', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this here is wrong [tag] in code tag [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(parseTextToNodeTree(message)).toMatchSnapshot();
    });

    it('parseTextToNodeTree with incorrect message (one redundant [b] tag) should create expected object and does not include last root tag as text', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this text contains [b] that is a wrong tags [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(parseTextToNodeTree(message)).toMatchSnapshot();
    });

    it('parseTextToNodeTree with incorrect message (one redundant [/b] tag) should create expected object and does not include last root tag as text', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this text contains [/b] that is a wrong tags [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(parseTextToNodeTree(message)).toMatchSnapshot();
    });
});
