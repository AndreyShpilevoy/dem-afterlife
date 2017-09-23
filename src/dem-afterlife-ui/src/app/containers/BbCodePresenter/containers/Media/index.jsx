import React from 'react';
import {node, arrayOf, number, func} from 'prop-types';
import Error from 'components/Error';
import Audio from '../../components/Audio';
import Video from '../../components/Video';
import Iframe from '../../components/Iframe';
import processTextLineContentViaParsers, {defaultListOfParsers} from './processor';

const objectTypeToPresenterMapping = {
    iframe: Iframe,
    video: Video,
    audio: Audio
};

const matchResourceTypeToPresenter = typeString => {
    const parsedType = typeString.match(/(iframe|audio|video)/i);
    return objectTypeToPresenterMapping[parsedType[0]];
};

const Media = ({children, listOfParsers, shortHeight, fullHeight, width}) => {
    const result = processTextLineContentViaParsers(children[0], listOfParsers);
    const props = {
        src: result.url,
        type: result.type,
        height: result.isShortHeight ? shortHeight : fullHeight,
        width
    };
    return (
        result.success ?
            matchResourceTypeToPresenter(result.type)(props) :
            <Error />
    );
};

Media.propTypes = {
    children: node.isRequired,
    listOfParsers: arrayOf(func),
    shortHeight: number,
    fullHeight: number,
    width: number
};

Media.defaultProps = {
    listOfParsers: defaultListOfParsers,
    shortHeight: 100,
    fullHeight: 360,
    width: 640
};

export default Media;
