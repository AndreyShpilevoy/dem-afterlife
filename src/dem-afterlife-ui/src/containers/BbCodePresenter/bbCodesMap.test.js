/* eslint-disable no-undef, fp/no-unused-expression, fp/no-nil, fp/no-mutation, max-statements */

import bbCodesMap, { bbCodesMapNames } from "./bbCodesMap";
import { rootTag, codeTag, textlineTag, brTag } from "./constants";

describe("bbCodesMap", () => {
  it("function bbCodesMapNames array should match expected snapshot", () => {
    expect(bbCodesMapNames).toMatchSnapshot();
  });

  it("b should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { bold: "bold style" } };
    expect(bbCodesMap.b(children, key, option).props).toMatchSnapshot();
  });

  it("i should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { italic: "italic style" } };
    expect(bbCodesMap.i(children, key, option).props).toMatchSnapshot();
  });

  it("u should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { underline: "underline style" } };
    expect(bbCodesMap.u(children, key, option).props).toMatchSnapshot();
  });

  it("s should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { lineThrough: "lineThrough style" } };
    expect(bbCodesMap.s(children, key, option).props).toMatchSnapshot();
  });

  it("offtopic should match expected snapshot", () => {
    expect(bbCodesMap.offtopic("some text", 0).props).toMatchSnapshot();
  });

  it("think should match expected snapshot", () => {
    expect(bbCodesMap.think("some text", 0).props).toMatchSnapshot();
  });

  it("ol should match expected snapshot", () => {
    expect(bbCodesMap.ol("some text", 0).props).toMatchSnapshot();
  });

  it("ul should match expected snapshot", () => {
    expect(bbCodesMap.ul("some text", 0).props).toMatchSnapshot();
  });

  it("li should match expected snapshot", () => {
    expect(bbCodesMap.li("some text", 0).props).toMatchSnapshot();
  });

  it("media should match expected snapshot", () => {
    expect(bbCodesMap.media("some text", 0).props).toMatchSnapshot();
  });

  it("p should match expected snapshot", () => {
    expect(bbCodesMap.p("some text", 0).props).toMatchSnapshot();
  });

  it(`${brTag} should match expected snapshot`, () => {
    expect(bbCodesMap[brTag]("some text", 0).props).toMatchSnapshot();
  });

  it(`${textlineTag} should match expected snapshot`, () => {
    expect(bbCodesMap[textlineTag]("some text", 0).props).toMatchSnapshot();
  });

  it(`${rootTag} should match expected snapshot`, () => {
    expect(bbCodesMap[rootTag]("some text", 0).props).toMatchSnapshot();
  });

  it("color should match expected snapshot", () => {
    const options = { value: "red" };
    expect(bbCodesMap.color("some text", 0, options).props).toMatchSnapshot();
  });

  it("center should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { center: "center style" } };
    expect(bbCodesMap.center(children, key, option).props).toMatchSnapshot();
  });

  it("left should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { left: "left style" } };
    expect(bbCodesMap.left(children, key, option).props).toMatchSnapshot();
  });

  it("right should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { classes: { right: "right style" } };
    expect(bbCodesMap.right(children, key, option).props).toMatchSnapshot();
  });

  it("size with size less then 16 px should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { value: 10 };
    expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
  });

  it("size with size more then 16 px should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { value: 20 };
    expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
  });

  it("size with size equal 16 px should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { value: 16 };
    expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
  });

  it("size without size should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = {};
    expect(bbCodesMap.size(children, key, option).props).toMatchSnapshot();
  });

  it(`${codeTag} should match expected snapshot`, () => {
    const children = "some text";
    const key = 0;
    const option = { value: "some options" };
    expect(bbCodesMap[codeTag](children, key, option).props).toMatchSnapshot();
  });

  it("spoiler should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { value: "some options" };
    expect(bbCodesMap.spoiler(children, key, option).props).toMatchSnapshot();
  });

  it("quote should match expected snapshot", () => {
    const children = "some text";
    const key = 0;
    const option = { value: "some options" };
    expect(bbCodesMap.quote(children, key, option).props).toMatchSnapshot();
  });

  it("img with wrong link should return array with string", () => {
    const children = [{ key: 0, props: { children: "fakeLink.com" } }];
    const result = bbCodesMap.img(children);
    expect(result.length).toBe(1);
    expect(result[0]).toMatchSnapshot();
  });

  it("img with right link should match expected snapshot", () => {
    const children = [
      { key: 0, props: { children: "https://github.com/AndreyShpilevoy/" } }
    ];
    const result = bbCodesMap.img(children);
    expect(result.length).toBe(1);
    expect(result[0].props).toMatchSnapshot();
  });

  it("img with wrong and right links should return array with 2 items and match expected snapshot", () => {
    const children = [
      { key: 0, props: { children: "fakeLink.com" } },
      { key: 1, props: { children: "https://github.com/AndreyShpilevoy/" } }
    ];
    const result = bbCodesMap.img(children);
    expect(bbCodesMap.img(children).length).toBe(2);
    expect(result[0]).toMatchSnapshot();
    expect(result[1].props).toMatchSnapshot();
  });

  it("email with wrong Email should return array with string", () => {
    const children = [{ key: 0, props: { children: "fakeLink.com" } }];
    const result = bbCodesMap.email(children);
    expect(result.length).toBe(1);
    expect(result[0]).toMatchSnapshot();
  });

  it("email with right Email should match expected snapshot", () => {
    const children = [{ key: 0, props: { children: "goodLink@gmail.com" } }];
    const result = bbCodesMap.email(children);
    expect(result.length).toBe(1);
    expect(result[0].props).toMatchSnapshot();
  });

  it("email with wrong and right Emails should return array with 2 items and match expected snapshot", () => {
    const children = [
      { key: 0, props: { children: "fakeLink.com" } },
      { key: 1, props: { children: "goodLink@gmail.com" } }
    ];
    const result = bbCodesMap.email(children);
    expect(result.length).toBe(2);
    expect(result[0]).toMatchSnapshot();
    expect(result[1].props).toMatchSnapshot();
  });

  it("url with wrong link in options and single child should match expected snapshot", () => {
    const options = { value: "fakeLink.com" };
    const key = 0;
    const children = "anything";
    const result = bbCodesMap.url(children, key, options);
    expect(result).toMatchSnapshot();
  });

  it("url with right link in options and single child should match expected snapshot", () => {
    const options = { value: "https://github.com/AndreyShpilevoy/" };
    const key = 0;
    const children = "anything";
    const result = bbCodesMap.url(children, key, options);
    expect(result).toMatchSnapshot();
  });

  it("url with single wrong link as child should match expected snapshot", () => {
    const children = [{ key: 0, props: { children: "fakeLink.com" } }];
    const result = bbCodesMap.url(children, 1, {});
    expect(result.length).toBe(1);
    expect(result[0]).toMatchSnapshot();
  });

  it("url with single right link as child should match expected snapshot", () => {
    const children = [
      { key: 0, props: { children: "https://github.com/AndreyShpilevoy/" } }
    ];
    const result = bbCodesMap.url(children, 1, {});
    expect(result).toMatchSnapshot();
  });

  it("url with wrong and right links should return array with 2 items and match expected snapshot", () => {
    const children = [
      { key: 0, props: { children: "fakeLink.com" } },
      { key: 1, props: { children: "https://github.com/AndreyShpilevoy/" } }
    ];
    const result = bbCodesMap.url(children);
    expect(result.length).toBe(2);
    expect(result[0]).toMatchSnapshot();
    expect(result[1].props).toMatchSnapshot();
  });
});
