/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from "react";
import { mount } from "enzyme";
import { root } from "utils";
import { HeaderPure } from "./index";

jest.mock("react-router-dom/Link");
jest.mock("components/Container");
jest.mock("components/Column");
jest.mock("components/Hidden");
jest.mock("components/Row");
jest.mock("../Logotype");
jest.mock("../MenuButton");
jest.mock("../NavigationLinkList");

describe("Header Pure Mount", () => {
  const map = {};
  window.addEventListener = jest.genMockFn().mockImplementation((event, cb) => {
    map[event] = cb;
  });

  const classes = {
    ".default-Header-header.shrinkedHeader":
      "default-Header-header.shrinkedHeader",
    ".default-Header-headerLogoContainer.shrinkedHeader":
      "default-Header-headerLogoContainer.shrinkedHeader",
    ".default-Header-navigationLinksContainer.closed":
      "default-Header-navigationLinksContainer.closed",
    fixedOnTheTop: "default-Header-fixedOnTheTop",
    header: "default-Header-header",
    headerColumn: "default-Header-headerColumn",
    headerLogoContainer: "default-Header-headerLogoContainer",
    headerMenuButtonContainer: "default-Header-headerMenuButtonContainer",
    headerPadding: "default-Header-headerPadding",
    navigationLinks: "default-Header-navigationLinks",
    navigationLinksContainer: "default-Header-navigationLinksContainer"
  };

  it('component with scrolled down document since to "scrollTop: 100" match expected snapshot', () => {
    const wrapper = mount(
      <HeaderPure classes={classes} navigationLinkArray={[]} />
    );
    map.scroll({ target: { scrollingElement: { scrollTop: 100 } } });
    expect(wrapper).toMatchSnapshot();
  });

  it('component with scrolled down document since to "scrollTop: 24" match expected snapshot', () => {
    const wrapper = mount(
      <HeaderPure classes={classes} navigationLinkArray={[]} />
    );
    map.scroll({ target: { scrollingElement: { scrollTop: 24 } } });
    expect(wrapper).toMatchSnapshot();
  });

  it("component should removeEventListener on unmount", () => {
    root.removeEventListener = jest.fn();
    const wrapper = mount(
      <HeaderPure classes={classes} navigationLinkArray={[]} />
    );
    wrapper.unmount();
    expect(root.removeEventListener.mock.calls.length).toBeGreaterThan(0);
  });
});
