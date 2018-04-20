/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0,
react/no-multi-comp:0, react/prop-types:0, react/jsx-filename-extension:0 */

import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import Topic, { TopicPure } from "./index";

jest.mock("react-router-dom");
jest.mock("containers/Term");
jest.mock("./components/Post", () => {
  const Post = ({ children }) => <div>{children}</div>;
  return Post;
});

jest.mock("components/CollapsibleSection", () => {
  const CollapsibleSection = ({ children }) => <div>{children}</div>;
  return CollapsibleSection;
});

jest.mock("components/PaginationList", () => {
  const PaginationList = ({ children }) => <div>{children}</div>;
  return PaginationList;
});

describe("Topic HOC", () => {
  const mockStore = configureMockStore();

  it("component with empty post and user arrays match expected snapshot", () => {
    const props = {
      store: mockStore({
        topicReducer: { postArray: [], userArray: [] },
        sharedReducer: {
          pagination: { pageNumber: 1, pageSize: 20, totalItemsCount: 400 }
        }
      }),
      match: { params: { topicId: "10", pageNumber: "1" } }
    };
    expect(
      mount(
        <Topic {...props}>
          <div>Topic content</div>
        </Topic>,
        { lifecycleExperimental: true }
      )
    ).toMatchSnapshot();
  });

  it("component with filled post and user arrays match expected snapshot", () => {
    const props = {
      store: mockStore({
        topicReducer: {
          postArray: [
            {
              id: 4,
              topicId: 1,
              postTime: new Date("2015/01/04 10:10:10"),
              subject: "subject 5",
              message:
                "[u][center][b]Ну[/b] [i]надо[/i] [u]же[/u], [s]работает[/s][/center][/u]\r\n[spoiler][media]https://youtu.be/WHBbt-Qk6mk[/media][/spoiler]",
              rate: 343,
              userId: 4,
              editInfo: null
            },
            {
              id: 5,
              topicId: 1,
              postTime: new Date("2015/01/05 10:10:10"),
              subject: "subject 1",
              message:
                '[url]i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url] text [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url]\r\n[url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png]Link[/url] [url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png][img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img][/url] tag 01 [U]text in [color="red"]tag[/color] 11 [b]text in tag 21[/b] [u]text in tag 22[/u]\r\ntext beetwin tags 12 [b]text in tag 23[/b] [/U][code=\'kto\']ss[b]g[/b]fsfdgdfg[/code] tar\r\n [img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img] [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif [/url][quote]blah blah [quote="kto"]blah  blah [i]ta[u]r[/u]am[/i] param[/quote] [b]ta[i]r[/i]am[/b] param[/quote]',
              rate: 0,
              userId: 5,
              editInfo: {
                userId: 5,
                editReason: "gust for lulz",
                editTime: new Date("2015/01/03 10:10:10"),
                editCount: 1
              }
            }
          ],
          userArray: [
            {
              id: 4,
              name: "ololoid",
              registrationDate: new Date("2015/01/04 10:10:10"),
              birthday: new Date("2015/01/02 10:10:10"),
              email: "ololoid@lol.ua",
              emailConfirmed: true,
              gender: 1,
              rank: "Боец",
              avatar:
                "http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png",
              signature: undefined,
              from: undefined,
              steam: undefined,
              skype: undefined,
              icq: undefined,
              vk: undefined,
              fb: undefined,
              website: undefined,
              profession: undefined,
              interests: undefined,
              groupColor: "#99ccff"
            },
            {
              id: 5,
              name: "kto",
              registrationDate: new Date("2015/01/04 10:10:10"),
              birthday: new Date("2015/01/02 10:10:10"),
              email: "4252744@ukr.net",
              emailConfirmed: true,
              gender: 1,
              rank: "Официально сумасшедший",
              avatar:
                "http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif",
              signature:
                "__________!///_ _____\r\n_________( @@ )_____\r\n_______ooO-(_)-o o____\r\nПришёл, увидел, забанил. Ещё вопросы?",
              from: undefined,
              steam: undefined,
              skype: undefined,
              icq: undefined,
              vk: undefined,
              fb: undefined,
              website: undefined,
              profession: undefined,
              interests: undefined,
              groupColor: "#ffa510"
            }
          ]
        },
        sharedReducer: {
          pagination: { pageNumber: 1, pageSize: 20, totalItemsCount: 400 }
        }
      }),
      match: { params: { topicId: "10", pageNumber: "1" } }
    };
    expect(
      mount(
        <Topic {...props}>
          <div>Topic content</div>
        </Topic>,
        { lifecycleExperimental: true }
      )
    ).toMatchSnapshot();
  });

  it("Pure component should call mocked action twice", () => {
    const getPostArrayByTopicId = jest.fn();
    const getTopicBreadcrumbArray = jest.fn();
    const props = {
      getPostArrayByTopicId,
      getTopicBreadcrumbArray,
      postArray: [],
      userArray: [],
      pageSize: 20,
      totalItemsCount: 400,
      match: { params: { topicId: "10", pageNumber: "1" } }
    };
    const postArray = [
      {
        id: 4,
        topicId: 1,
        postTime: new Date("2015/01/04 10:10:10"),
        subject: "subject 5",
        message:
          "[u][center][b]Ну[/b] [i]надо[/i] [u]же[/u], [s]работает[/s][/center][/u]\r\n[spoiler][media]https://youtu.be/WHBbt-Qk6mk[/media][/spoiler]",
        rate: 343,
        userId: 4,
        editInfo: null
      },
      {
        id: 5,
        topicId: 1,
        postTime: new Date("2015/01/05 10:10:10"),
        subject: "subject 1",
        message:
          '[url]i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url] text [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png[/url]\r\n[url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png]Link[/url] [url=http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png][img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img][/url] tag 01 [U]text in [color="red"]tag[/color] 11 [b]text in tag 21[/b] [u]text in tag 22[/u]\r\ntext beetwin tags 12 [b]text in tag 23[/b] [/U][code=\'kto\']ss[b]g[/b]fsfdgdfg[/code] tar\r\n [img]http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif[/img] [url]http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png\r\nhttp://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif [/url][quote]blah blah [quote="kto"]blah  blah [i]ta[u]r[/u]am[/i] param[/quote] [b]ta[i]r[/i]am[/b] param[/quote]',
        rate: 0,
        userId: 5,
        editInfo: {
          userId: 5,
          editReason: "gust for lulz",
          editTime: new Date("2015/01/03 10:10:10"),
          editCount: 1
        }
      }
    ];
    const userArray = [
      {
        id: 4,
        name: "ololoid",
        registrationDate: new Date("2015/01/04 10:10:10"),
        birthday: new Date("2015/01/02 10:10:10"),
        email: "ololoid@lol.ua",
        emailConfirmed: true,
        gender: 1,
        rank: "Боец",
        avatar:
          "http://i72.fastpic.ru/big/2015/0522/10/f93fff451e934900bfb1463615b5b310.png",
        signature: undefined,
        from: undefined,
        steam: undefined,
        skype: undefined,
        icq: undefined,
        vk: undefined,
        fb: undefined,
        website: undefined,
        profession: undefined,
        interests: undefined,
        groupColor: "#99ccff"
      },
      {
        id: 5,
        name: "kto",
        registrationDate: new Date("2015/01/04 10:10:10"),
        birthday: new Date("2015/01/02 10:10:10"),
        email: "4252744@ukr.net",
        emailConfirmed: true,
        gender: 1,
        rank: "Официально сумасшедший",
        avatar:
          "http://i69.fastpic.ru/big/2015/0729/7e/6a397a33426917b4087e403270383c7e.gif",
        signature:
          "__________!///_ _____\r\n_________( @@ )_____\r\n_______ooO-(_)-o o____\r\nПришёл, увидел, забанил. Ещё вопросы?",
        from: undefined,
        steam: undefined,
        skype: undefined,
        icq: undefined,
        vk: undefined,
        fb: undefined,
        website: undefined,
        profession: undefined,
        interests: undefined,
        groupColor: "#ffa510"
      }
    ];
    const wrapper = shallow(
      <TopicPure {...props}>
        <div>Topic content</div>
      </TopicPure>,
      { lifecycleExperimental: true }
    );
    wrapper.setProps({
      postArray,
      userArray,
      match: { params: { topicId: "11", pageNumber: "1" } }
    });
    expect(getPostArrayByTopicId.mock.calls.length).toEqual(2);
    expect(getTopicBreadcrumbArray.mock.calls.length).toEqual(2);
  });

  it("Pure component should call mocked action once", () => {
    const getPostArrayByTopicId = jest.fn();
    const getTopicBreadcrumbArray = jest.fn();
    const props = {
      getPostArrayByTopicId,
      getTopicBreadcrumbArray,
      postArray: [],
      userArray: [],
      pageSize: 20,
      totalItemsCount: 400,
      match: { params: { topicId: "10", pageNumber: "1" } }
    };
    const wrapper = shallow(
      <TopicPure {...props}>
        <div>Topic content</div>
      </TopicPure>,
      { lifecycleExperimental: true }
    );
    wrapper.setProps({ match: { params: { topicId: "10", pageNumber: "1" } } });
    expect(getPostArrayByTopicId.mock.calls.length).toEqual(1);
    expect(getTopicBreadcrumbArray.mock.calls.length).toEqual(1);
  });
});
