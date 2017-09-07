import React from 'react';
import {node, shape} from 'prop-types';
import {injectSheet} from 'styles';
import Term from 'containers/Term';
import parseFirstTextLineComponentToEmbedLink from './parser';
import calculateStyles from './calculateStyles';

const createIframe = ({height, width, src, shortHeight}) => // eslint-disable-line react/prop-types
    <iframe title='This is a unique title' width={width} height={shortHeight ? 100 : height} src={src} allowFullScreen frameBorder='0' />;

const createVideo = ({height, width, src, type}) => { // eslint-disable-line react/prop-types
    const videoTerm = {id: 29, value: 'Video'};
    return <video width={width} height={height} controls><source src={src} type={type} /><a href={src}><Term term={videoTerm} /></a></video>; // eslint-disable-line jsx-a11y/media-has-caption
};

const createAudio = ({src, type}) => { // eslint-disable-line react/prop-types
    const audioTerm = {id: 28, value: 'Audio'};
    return <audio controls><source src={src} type={type} /><a href={src}><Term term={audioTerm} /></a></audio>; // eslint-disable-line jsx-a11y/media-has-caption
};

const objectTypeToPresenterMapping = {
    iframe: createIframe,
    video: createVideo,
    audio: createAudio
};

export const MediaPure = ({children, classes}) => {
    const result = parseFirstTextLineComponentToEmbedLink(children[0]);
    const object = {height: 360, width: 640, src: result.url, shortHeight: result.shortHeight};
    return (<span
        className={classes.media}>
        {result.success ? objectTypeToPresenterMapping[result.type](object) : 'Error'}
    </span>);
};

MediaPure.propTypes = {
    classes: shape().isRequired,
    children: node.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Media'})(MediaPure);
