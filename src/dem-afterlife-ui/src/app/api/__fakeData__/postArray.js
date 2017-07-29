const postArray = [
    {
        id: 1,
        topicId: 1,
        postTime: new Date('2015/01/01 10:10:10'),
        subject: 'subject 2',
        message: 'Народ, кто [think]может[/think] прислать скрины [offtopic]такого[/offtopic] [email] zua [/email] [email] z@a.ua [/email] плана [email]a@a.ua[/email]  автомобилей [email]a@a.ua\r\nb@a.ua[/email] из модов?\r\n[spoiler][img]http://cs615717.vk.me/v615717358/f843/NoO3LUHNbYE.jpg[/img][/spoiler]\r\nНу там &quot;Бульдога&quot; и прочих, которых не было в оригинале.\r\nНадо для настолки.',
        rate: 5,
        userId: 1,
        editInfo: null
    },
    {
        id: 2,
        topicId: 1,
        postTime: new Date('2015/01/02 10:10:10'),
        subject: 'subject 3',
        message: 'Вот вам тема для &quot;беседы&quot;:\r\nЕсли кто пройдёт какой-нибудь рут [b]Clannad[/b] без использования подсказок хотя бы с трёх попыток, не слив его в &quot;Ничего нового не будет, ничто не изменится.&quot; - я сожру свои дырявые ботинки!',
        rate: 2,
        userId: 2,
        editInfo: null
    },
    {
        id: 3,
        topicId: 1,
        postTime: new Date('2015/01/03 10:10:10'),
        subject: null,
        message: '[b]Golden_Fox[/b], [size=20]видимо[/size] \r\n[center]некорректно[/center]\r\n[right]некорректно[/right]\r\n[left]некорректно[/left] отработала кнопка \r\n[code][url][/url][/code]\r\n\r\nВ итоге в БД ушло:\r\n[code][b]Хотите[/b] общаться с лисом - идите к нему в стим или вк:\r\n[url=http://]http://steamcommunity.com/profiles/76561198013411783/[/url]\r\n[url=http://]https://vk.com/asx1347[/url]\r\n\r\nКто не в курсе, ВК подвезли немножко допиленную версию, можно включить там, внизу страницы: [url]https://new.vk.com/blog[/url][/code]\r\n\r\nЭта кнопка, каки все остальные, будут переписаны при переезде на AngularJS или ReactJS.',
        rate: 4,
        userId: 3,
        editInfo: {
            userId: 5,
            editReason: 'Сосиска. П.п.2',
            editTime: new Date('2015/01/03 10:10:10'),
            editCount: 1
        }
    },
    {
        id: 4,
        topicId: 1,
        postTime: new Date('2015/01/04 10:10:10'),
        subject: 'subject 5',
        message: '[u][center][b]Ну[/b] [i]надо[/i] [u]же[/u], [s]работает[/s][/center][/u]\r\n[spoiler][media]https://youtu.be/WHBbt-Qk6mk[/media][/spoiler][spoiler=\'lol\'][media]https://youtu.be/WHBbt-Qk6mk[/media][/spoiler]',
        rate: 343,
        userId: 4,
        editInfo: null
    },
    {
        id: 5,
        topicId: 1,
        postTime: new Date('2015/01/05 10:10:10'),
        subject: 'subject 1',
        message: '[url]i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url] text [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url]\r\n[url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png]Link[/url] [url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png][img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img][/url] tag 01 [U]text in [color="red"]tag[/color] 11 [b]text in tag 21[/b] [u]text in tag 22[/u]\r\ntext beetwin tags 12 [b]text in tag 23[/b] [/U][code=\'kto\']ss[b]g[/b]fsfdgdfg[/code] tar\r\n [img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img] [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif [/url][quote]blah blah [quote="kto"]blah  blah [i]ta[u]r[/u]am[/i] param[/quote] [b]ta[i]r[/i]am[/b] param[/quote]  [url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png][img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img] LOL [img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img][/url]',
        rate: 0,
        userId: 5,
        editInfo: {
            userId: 5,
            editReason: 'gust for lulz',
            editTime: new Date('2015/01/03 10:10:10'),
            editCount: 1
        }
    }
];

export default postArray;
