/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import {node, shape, number, bool, arrayOf, string} from 'prop-types';
import Term from 'containers/Term';
import processTextLineContantViaParsers, {defaultListOfParsers} from './processor';

const iframePresenter = ({height, width, src, shortHeight}) =>
    <iframe title='This is a unique title' width={width} height={shortHeight ? 100 : height} src={src} allowFullScreen frameBorder='0' />;

iframePresenter.propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    shortHeight: bool.isRequired,
    src: string.isRequired
};

const videoPresenter = ({height, width, src, type}) => {
    const videoTerm = {id: 29, value: 'Video'};
    return (
        <video width={width} height={height} controls>
            <source src={src} type={type} />
            <a href={src}>
                <Term term={videoTerm} />
            </a>
        </video>
    );
};

videoPresenter.propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    type: string.isRequired,
    src: string.isRequired
};

const audioPresenter = ({src, type}) => {
    const audioTerm = {id: 28, value: 'Audio'};
    return (
        <audio controls>
            <source src={src} type={type} />
            <a href={src}><Term term={audioTerm} /></a>
        </audio>
    );
};

audioPresenter.propTypes = {
    type: string.isRequired,
    src: string.isRequired
};


const objectTypeToPresenterMapping = {
    iframe: iframePresenter,
    video: videoPresenter,
    audio: audioPresenter
};

const matchResourceTypeToPresenter = typeString => {
    const parsedType = typeString.match(/(iframe|audio|video)/i);
    return objectTypeToPresenterMapping[parsedType[0]];
};

const Media = ({children, listOfParsers}) => {
    const result = processTextLineContantViaParsers(children[0], listOfParsers);
    const object = {height: 360, width: 640, src: result.url, shortHeight: result.shortHeight, type: result.type};
    return (
        result.success ? matchResourceTypeToPresenter(result.type)(object) : 'Error'
    );
};

Media.propTypes = {
    children: node.isRequired,
    listOfParsers: arrayOf(shape())
};

Media.defaultProps = {
    listOfParsers: defaultListOfParsers
};

export default Media;
