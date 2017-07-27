/* eslint react/display-name: 1, no-unused-vars: 1, max-statements: 1, fp/no-class: 1, fp/no-nil: 1,
fp/no-unused-expression: 1, fp/no-mutation: 1, fp/no-this: 1, fp/no-let: 1, no-restricted-syntax: 1,
fp/no-loops: 1, fp/no-mutating-methods: 1, no-param-reassign:1 */

import React, {PureComponent} from 'react';
import {string, shape} from 'prop-types';
import {stringIsEmail, stringIsLink} from 'utils';
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
        if (options <= 150 && options > 0) {
            return (
                <BaseSpan key={Math.random()} className='' styleObject={{fontSize: `${options / fontSizeByDefault}rem`}}>
                    {children}
                </BaseSpan>
            );
        }
        return (
            <BaseSpan key={Math.random()} className='' styleObject={{fontSize: '1rem'}}>
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

class BbCodePresenter extends PureComponent {
    static propTypes = {
        styles: shape().isRequired,
        text: string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {parsedTree: parseTextToNodeTree(this.props.text)};
    }

    getComponentByTagName = tagName => bbCodesMap[tagName.toLowerCase()]

    mapTreeToComponent = () => {
        const parsedTree = this.state.parsedTree;
        let mappedTree;
        if (parsedTree.type === 'root' && parsedTree.children.length > 0) {
            mappedTree = this.mapNodeToComponent(parsedTree);
        }
        return mappedTree;
    }

    mapNodeToComponent = node => {
        const {styles} = this.props;
        node.options = {value: node.options, styles};
        const Component = this.getComponentByTagName(node.type);
        let result;
        if (Component) {
            if (node.children.length > 0) {
                const children = [];
                for (const child of node.children) {
                    children.push(this.mapNodeToComponent(child));
                }
                result = Component(children, node.options);
            } else {
                result = Component(node.content, node.options);
            }
        }
        return result;
    }

    render() {
        return this.mapTreeToComponent();
    }
}

export {bbCodesMapNames};
export default withStyles(theme => calculateStyles(theme))(BbCodePresenter);