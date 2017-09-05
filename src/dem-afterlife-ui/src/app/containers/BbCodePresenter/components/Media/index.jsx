import React from 'react';
import {node, shape} from 'prop-types';
import {injectSheet} from 'styles';
import Term from 'containers/Term';
import calculateStyles from './calculateStyles';

const createIframe = ({height, width, src}) => // eslint-disable-line react/prop-types
    <iframe title='This is a unique title' width={width} height={height} src={src} webkitallowfullscreen mozallowfullscreen allowFullScreen frameBorder='0' />;

const createVideo = ({height, width, src, type}) => { // eslint-disable-line react/prop-types
    const videoTerm = {id: 29, value: 'Video'};
    return <video width={width} height={height} controls><source src={src} type={type} /><a href={src}><Term term={videoTerm} /></a></video>; // eslint-disable-line jsx-a11y/media-has-caption
};

const createAudio = ({src, type}) => { // eslint-disable-line react/prop-types
    const audioTerm = {id: 28, value: 'Audio'};
    return <audio controls><source src={src} type={type} /><a href={src}><Term term={audioTerm} /></a></audio>; // eslint-disable-line jsx-a11y/media-has-caption
};

export const MediaPure = ({children, classes}) => (
    <span
        className={classes.media}>
        {createAudio({height: 360, width: 640, src: 'http://www.w3schools.com/tags/horse.mp3'})}
        {createIframe({height: 360, width: 640, src: 'https://player.vimeo.com/video/231557692'})}
        {createVideo({height: 360, width: 640, src: 'http://www.w3schools.com/html/mov_bbb.mp4'})}
    </span>
);

MediaPure.propTypes = {
    classes: shape().isRequired,
    children: node.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Media'})(MediaPure);
