/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BbCodePresenterPure} from './index';

configure({adapter: new Adapter()});

const classes = {
    '.default-BbCodePresenter-center:last-child': 'default-BbCodePresenter-center:last-child',
    '.default-BbCodePresenter-left:last-child': 'default-BbCodePresenter-left:last-child',
    '.default-BbCodePresenter-right:last-child': 'default-BbCodePresenter-right:last-child',
    bold: 'default-BbCodePresenter-bold',
    center: 'default-BbCodePresenter-center',
    italic: 'default-BbCodePresenter-italic',
    left: 'default-BbCodePresenter-left',
    lineThrough: 'default-BbCodePresenter-lineThrough',
    position: 'default-BbCodePresenter-position',
    right: 'default-BbCodePresenter-right',
    underline: 'default-BbCodePresenter-underline'
};

describe('BbCodePresenterPure', () => {
    it('component with correct message should match expected snapshot', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] text [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(shallow(<BbCodePresenterPure classes={classes} text={message} />)).toMatchSnapshot();
    });

    it('component with wrong message that contained wrong tags should  match expected snapshot', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this here is wrong [tag] in code tag [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(shallow(<BbCodePresenterPure classes={classes} text={message} />)).toMatchSnapshot();
    });

    it('component with incorrect message (one redundant [b] tag) should  match expected snapshot and does not include last root tag as text', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this text contains [b] that is a wrong tags [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(shallow(<BbCodePresenterPure classes={classes} text={message} />)).toMatchSnapshot();
    });

    it('component with incorrect message (one redundant [/b] tag)  match expected snapshot and does not include last root tag as text', () => {
        const message = '[url]wrong/url.png[/url] text [url]http://correct.url/content.png[/url]\r\n[url]https://correct.url/content.png[/url]\r\n[url=http://path.to/some/image.png]Link[/url] [url=http://path.to/some/image.png][img]https://path.to/some/image.png[/img][/url] text [U]text in u tag [color="red"]red text[/color] [b]text in b tag 21[/b] [u]text in u tag[/u]\r\ntext in u tag [b]text in b tag[/b] [/U] this text contains [/b] that is a wrong tags [code=\'kto\']some text[b]with other bbCodes[/b] in code tag[/code] text\r\n [img]http://fastpic.ru/big/e.gif\r\nhttp://fastpic.ru/big/7.gif\r\nhttp://fastpic.ru/big/c.gif\r\nhttp://fastpic.ru/big/3.gif[/img] [url]http://fastpic.ru/2015/0.png\r\nhttp://fastpic.ru/2015/0.gif [/url][quote] quote [quote="kto"] and subQuote [i]with [u]some[/u]tags[/i] param[/quote] [b]some[i]other[/i]text[/b] with tags[/quote] [url=http://fastpic.ru/10/0.png][img]http://fastpic.ru/e.gif[/img] Link with 2 images as link [img]http://fastpic.ru/big/7b40.gif[/img][/url]';
        expect(shallow(<BbCodePresenterPure classes={classes} text={message} />)).toMatchSnapshot();
    });
});