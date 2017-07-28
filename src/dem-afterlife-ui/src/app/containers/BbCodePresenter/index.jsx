/* eslint react/display-name: 0, fp/no-class: 0, no-unused-vars: 1, max-statements: 1, fp/no-nil: 1,
fp/no-unused-expression: 1, fp/no-mutation: 1, fp/no-this: 1, fp/no-let: 1, no-restricted-syntax: 1,
fp/no-loops: 1, fp/no-mutating-methods: 1, no-param-reassign:1 */

import React, {PureComponent} from 'react';
import {string, shape} from 'prop-types';
import {stringIsEmail, stringIsLink, defaults} from 'utils';
import {css, withStyles} from 'styles';
import parseTextToNodeTree from './parser';
import calculateStyles from './calculateStyles';
import BaseSpan from './components/BaseSpan';
import Code from './components/Code';
import Color from './components/Color';
import Email from './components/Email';
import Image from './components/Image';
import Url from './components/Url';
import ListItem from './components/ListItem';
import NewLine from './components/NewLine';
import OffTopic from './components/OffTopic';
import OrderedList from './components/OrderedList';
import Paragraph from './components/Paragraph';
import Quote from './components/Quote';
import Spoiler from './components/Spoiler';
import Root from './components/Root';
import TextLine from './components/TextLine';
import Think from './components/Think';
import UnorderedList from './components/UnorderedList';

const bbCodesMap = {
    b: (children, options) =>
        <BaseSpan key={Math.random()} className={options.styles.bold}>{children}</BaseSpan>,
    i: (children, options) =>
        <BaseSpan key={Math.random()} className={options.styles.italic}>{children}</BaseSpan>,
    u: (children, options) =>
        <BaseSpan key={Math.random()} className={options.styles.underline}>{children}</BaseSpan>,
    s: (children, options) =>
        <BaseSpan key={Math.random()} className={options.styles.lineThrough}>{children}</BaseSpan>,
    offtopic: children =>
        <OffTopic key={Math.random()}>{children}</OffTopic>,
    think: children =>
        <Think key={Math.random()}>{children}</Think>,
    color: (children, options) =>
        <Color key={Math.random()} options={options.value}>{children}</Color>,
    center: (children, options) =>
        <BaseSpan key={Math.random()} className={css([options.styles.position, options.styles.center])}>{children}</BaseSpan>,
    left: (children, options) =>
        <BaseSpan key={Math.random()} className={css([options.styles.position, options.styles.left])}>{children}</BaseSpan>,
    right: (children, options) =>
        <BaseSpan key={Math.random()} className={css([options.styles.position, options.styles.right])}>{children}</BaseSpan>,
    size: (children, options) => {
        const fontSizeByDefault = 16;
        const value = options.value;
        const style = value <= 150 && value > 0 ? {fontSize: `${value / fontSizeByDefault}rem`} : {fontSize: '1rem'};
        return (
            <BaseSpan key={Math.random()} styleObject={style}>
                {children}
            </BaseSpan>
        );
    },
    code: (children, options) => {
        const key = Math.random();
        return <Code key={key} id={key} options={options.value}>{children}</Code>;
    },
    spoiler: (children, options) =>
        <Spoiler key={Math.random()} options={options.value}>{children}</Spoiler>,
    quote: (children, options) =>
        <Quote key={Math.random()} options={options.value}>{children}</Quote>,
    email: children => {
        const result = [];
        const addBreak = children.length > 1;
        for (const child of children) {
            if (typeof child.props.children === 'string' && stringIsEmail(child.props.children)) {
                const email = child.props.children;
                result.push(<Email key={Math.random()} email={email} addBreak={addBreak}>{email}</Email>);
            }
        }
        return result;
    },
    url: (children, options) => {
        const result = [];
        const mapChildToUrl = url => <Url key={Math.random()} url={url}>{url}</Url>;

        if (typeof options.value === 'string' && stringIsLink(options.value)) {
            const url = options.value;
            result.push(<Url key={Math.random()} url={url}>{children}</Url>);
        } else if (Array.isArray(children) && children.length === 1 && children[0].props && typeof children[0].props.children === 'string' && stringIsLink(children[0].props.children)) {
            result.push(mapChildToUrl(children[0].props.children));
        } else if (Array.isArray(children) && children.length > 1) {
            children.forEach(item => {
                const {props} = item;
                if (props && typeof props.children === 'string' && stringIsLink(props.children)) {
                    result.push(mapChildToUrl(item.props.children));
                } else {
                    result.push(item);
                }
            });
        } else {
            result.push(children);
        }
        return result;
    },
    img: children => {
        const result = [];
        const addBreak = children.length > 1;
        for (const child of children) {
            if (typeof child.props.children === 'string' && stringIsLink(child.props.children)) {
                const url = child.props.children;
                result.push(<Image key={Math.random()} url={url} addBreak={addBreak} />);
            }
        }
        return result;
    },
    ol: children =>
        <OrderedList key={Math.random()}>{children}</OrderedList>,
    ul: children =>
        <UnorderedList key={Math.random()}>{children}</UnorderedList>,
    li: children =>
        <ListItem key={Math.random()}>{children}</ListItem>,

    // media
    p: children =>
        <Paragraph key={Math.random()}>{children}</Paragraph>,
    br: () =>
        <NewLine key={Math.random()} />,
    textline: children =>
        <TextLine key={Math.random()}>{children}</TextLine>,
    root: children =>
        <Root key={Math.random()}>{children}</Root>
};

const bbCodesMapNames = Object.getOwnPropertyNames(bbCodesMap);
const getComponentByTagName = tagName => bbCodesMap[tagName.toLowerCase()];

// todo: think about tail recursion
const mapNodeToComponent = (node, styles) => {
    const {content, type, options, children} = {...node, options: {value: node.options, styles} };
    const Component = getComponentByTagName(type);

    if (Component) {
        if (children.length > 0) {
            const childrenMappedToComponent = children.map(x => mapNodeToComponent(x, styles));
            return Component(childrenMappedToComponent, options);
        }
        return Component(content, options);
    }
    return defaults.emptyString;
};

const mapTextToComponentsTree = (text, styles) => {
    const parsedTree = parseTextToNodeTree(text);
    if (parsedTree.type === 'root' && parsedTree.children.length > 0) {
        return mapNodeToComponent(parsedTree, styles);
    }
    return defaults.emptyString;
};

const BbCodePresenter = ({text, styles}) => mapTextToComponentsTree(text, styles);

BbCodePresenter.propTypes = {
    styles: shape().isRequired,
    text: string.isRequired
};

export {bbCodesMapNames};
export default withStyles(theme => calculateStyles(theme))(BbCodePresenter);