/* eslint react/display-name: 0 */

import React from 'react';
import {stringIsEmail, stringIsLink} from 'utils';
import {css} from 'styles';
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
import {rootTag, codeTag, textlineTag, brTag} from './constants';

const bbCodesMap = {
    b: (children, key, options) =>
        <BaseSpan key={key} className={options.styles.bold}>{children}</BaseSpan>,
    i: (children, key, options) =>
        <BaseSpan key={key} className={options.styles.italic}>{children}</BaseSpan>,
    u: (children, key, options) =>
        <BaseSpan key={key} className={options.styles.underline}>{children}</BaseSpan>,
    s: (children, key, options) =>
        <BaseSpan key={key} className={options.styles.lineThrough}>{children}</BaseSpan>,
    offtopic: (children, key) =>
        <OffTopic key={key}>{children}</OffTopic>,
    think: (children, key) =>
        <Think key={key}>{children}</Think>,
    color: (children, key, options) =>
        <Color key={key} options={options.value}>{children}</Color>,
    center: (children, key, options) =>
        <BaseSpan key={key} className={css([options.styles.position, options.styles.center])}>{children}</BaseSpan>,
    left: (children, key, options) =>
        <BaseSpan key={key} className={css([options.styles.position, options.styles.left])}>{children}</BaseSpan>,
    right: (children, key, options) =>
        <BaseSpan key={key} className={css([options.styles.position, options.styles.right])}>{children}</BaseSpan>,
    size: (children, key, options) => {
        const fontSizeByDefault = 16;
        const value = options.value;
        const style = value <= 150 && value > 0 ? {fontSize: `${value / fontSizeByDefault}rem`} : {fontSize: '1rem'};
        return (
            <BaseSpan key={key} styleObject={style}>
                {children}
            </BaseSpan>
        );
    },
    [codeTag]: (children, key, options) =>
        <Code key={key} id={key} options={options.value}>{children}</Code>,
    spoiler: (children, key, options) =>
        <Spoiler key={key} options={options.value}>{children}</Spoiler>,
    quote: (children, key, options) =>
        <Quote key={key} options={options.value}>{children}</Quote>,
    email: children => {
        const addBreak = children.length > 1;
        return children.reduce((previous, current) => {
            if (typeof current.props.children === 'string' && stringIsEmail(current.props.children)) {
                const email = current.props.children;
                return [...previous, <Email key={current.key} email={email} addBreak={addBreak}>{email}</Email>];
            }
            return previous;
        }, []);
    },
    url: (children, key, options) => {
        const mapChildToUrl = (url, childKey, addBreak = false) => <Url key={childKey} url={url} addBreak={addBreak}>{url}</Url>;

        if (typeof options.value === 'string' && stringIsLink(options.value)) {
            const url = options.value;
            return <Url key={key} url={url}>{children}</Url>;
        } else if (Array.isArray(children) && children.length === 1 && children[0].props && typeof children[0].props.children === 'string' && stringIsLink(children[0].props.children)) {
            return mapChildToUrl(children[0].props.children, children[0].key);
        } else if (Array.isArray(children) && children.length > 1) {
            return children.reduce((previous, current) => {
                if (current.props && typeof current.props.children === 'string' && stringIsLink(current.props.children)) {
                    return [...previous, mapChildToUrl(current.props.children, current.key, true)];
                }
                return previous;
            }, []);
        }
        return children;
    },
    img: children => {
        const addBreak = children.length > 1;
        return children.reduce((previous, current) => {
            if (typeof current.props.children === 'string' && stringIsLink(current.props.children)) {
                const url = current.props.children;
                return [...previous, <Image key={current.key} url={url} addBreak={addBreak} />];
            }
            return previous;
        }, []);
    },
    ol: (children, key) =>
        <OrderedList key={key}>{children}</OrderedList>,
    ul: (children, key) =>
        <UnorderedList key={key}>{children}</UnorderedList>,
    li: (children, key) =>
        <ListItem key={key}>{children}</ListItem>,

    // media
    p: (children, key) =>
        <Paragraph key={key}>{children}</Paragraph>,
    [brTag]: (children, key) =>
        <NewLine key={key} />,
    [textlineTag]: (children, key) =>
        <TextLine key={key}>{children}</TextLine>,
    [rootTag]: (children, key) =>
        <Root key={key}>{children}</Root>
};


export const bbCodesMapNames = Object.getOwnPropertyNames(bbCodesMap);
export default bbCodesMap;