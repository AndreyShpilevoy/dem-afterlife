/* eslint react/display-name: 0, no-unused-vars: 0, max-statements: 0 */

import React from 'react';
import {string, shape} from 'prop-types';
import {defaults} from 'utils';
import {css, withStyles} from 'styles';
import parsedTextToTree from './parser';
import calculateStyles from './calculateStyles';
import BaseSpan from './components/BaseSpan';
import Code from './components/Code';
import Color from './components/Color';
import Email from './components/Email';
import Image from './components/Image';
import Link from './components/Link';
import ListItem from './components/ListItem';
import NewLine from './components/NewLine';
import OffTopic from './components/OffTopic';
import OrderedList from './components/OrderedList';
import Paragraph from './components/Paragraph';
import Quote from './components/Quote';
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
        <Color key={Math.random()} options={options}>{children}</Color>,
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
        return <Code key={key} id={key} options={options}>{children}</Code>;
    },

    // spoiler
    quote: (children, options) =>
        <Quote key={Math.random()} options={options}>{children}</Quote>,

    // email: children => {
    //     const result = [];
    //     const addBreak = children.length > 1;
    //     for (const child of children) {
    //         if (typeof child.props.children === 'string' && StringHelper.stringIsEmail(child.props.children)) {
    //             const email = child.props.children;
    //             result.push(<Email key={Math.random()} email={email} addBreak={addBreak}>{email}</Email>);
    //         } else {
    //             continue;
    //         }
    //     }
    //     return result;
    // },
    // url: (children, options) => {
    //     const result = [];
    //     if (typeof options === 'string' && StringHelper.stringIsLink(options)) {
    //         const url = options;
    //         result.push(<Link key={Math.random()} url={url}>{children}</Link>);
    //     } else {
    //         const addBreak = children.length > 1;
    //         for (const child of children) {
    //             if (typeof child.props.children === 'string' && StringHelper.stringIsLink(child.props.children)) {
    //                 const url = child.props.children;
    //                 result.push(<Link key={Math.random()} url={url} addBreak={addBreak}>{url}</Link>);
    //             } else {
    //                 continue;
    //             }
    //         }
    //     }
    //     return result;
    // },
    // img: children => {
    //     const result = [];
    //     const addBreak = children.length > 1;
    //     for (const child of children) {
    //         if (typeof child.props.children === 'string' && StringHelper.stringIsLink(child.props.children)) {
    //             const url = child.props.children;
    //             result.push(<Image key={Math.random()} url={url} addBreak={addBreak} />);
    //         } else {
    //             continue;
    //         }
    //     }
    //     return result;
    // },
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

const BbCodePresenter = ({text, styles}) => {
    const a = parsedTextToTree(text);
    return <div />;
};

//   state = {
//     parsedTree: BbCodeParser.getParsedTree(this.props.text)
//   }

//   getComponentByTagName = (tagName) => {
//     return bbCodesMap[tagName.toLowerCase()];
//   }

//   mapTreeToComponent = () => {
//     let parsedTree = this.state.parsedTree;
//     let mappedTree;
//     if(parsedTree.type === 'root' && parsedTree.children.length > 0){
//       mappedTree = this.mapNodeToComponent(parsedTree);
//     }
//     return mappedTree;
//   }

//   mapNodeToComponent = (node) => {
//     let Component = this.getComponentByTagName(node.type);
//     let result;
//     if(Component){
//       if(node.children.length > 0) {
//         let children = [];
//         for(let child of node.children){
//           children.push(this.mapNodeToComponent(child));
//         }
//         result = Component(children, node.options);
//       }
//       else {
//         result = Component(node.content, node.options);
//       }
//     }
//     return result;
//   }

//   render(){
//     return this.mapTreeToComponent();
//   }
// }

BbCodePresenter.propTypes = {
    styles: shape().isRequired,
    text: string.isRequired
};

export {bbCodesMapNames};
export default withStyles(theme => calculateStyles(theme))(BbCodePresenter);