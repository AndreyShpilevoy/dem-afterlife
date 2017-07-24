import {defaults} from 'utils';
import {bbCodesMapNames} from './index';

const OPEN_TAG = 'OPEN_TAG';
const CLOSE_TAG = 'CLOSE_TAG';
const TEXT = 'TEXT';

const wrapToRootNodeIfNeeded = text =>
    `${
        text.substring(0, 6) !== '[root]' ?
            '[root]' :
            defaults.emptyString
    }${text}${
        text.substring(text.length - 7) !== '[/root]' ?
            '[/root]' :
            defaults.emptyString
    }`;

const getAllTagsRecursively = (text, regex, result = defaults.emptyArray, codeIndex = 0) => {
    const match = regex.exec(text);
    if (!match) {
        return result;
    }
    const matchedResult = {
        type: match[1] ? OPEN_TAG : CLOSE_TAG,
        match: match[0],
        tag: match[1] ? match[1] : match[3],
        options: match[2],
        firstIndex: match.index,
        lastIndex: regex.lastIndex
    };

    // if tag is not exist in available maps - skip step
    if (!bbCodesMapNames.includes(matchedResult.tag.toLowerCase())) {
        return getAllTagsRecursively(text, regex, [...result], codeIndex);
    }

    const processTextType = localCodeIndex => {
        if (localCodeIndex === 0 || (matchedResult.tag.toLowerCase() === 'code' || matchedResult.tag.toLowerCase() === 'br')) {
            if (result.length > 0 && result[result.length - 1].lastIndex !== matchedResult.firstIndex) {
                const calculatedTextPart = {
                    type: TEXT,
                    match: text.substring(result[result.length - 1].lastIndex, matchedResult.firstIndex),
                    firstIndex: result[result.length - 1].lastIndex,
                    lastIndex: matchedResult.firstIndex
                };
                return [calculatedTextPart, matchedResult];
            }
            return [matchedResult];
        }
        return defaults.emptyArray;
    };

    // if open tag 'code' - codeIndex++
    if (matchedResult.type === OPEN_TAG && matchedResult.tag.toLowerCase() === 'code') {
        const newCodeIndex = codeIndex + 1;
        return getAllTagsRecursively(text, regex, [...result, ...processTextType(newCodeIndex)], newCodeIndex);

    // if close tag 'code' - codeIndex--
    } else if (matchedResult.type === CLOSE_TAG && matchedResult.tag.toLowerCase() === 'code') {
        const newCodeIndex = codeIndex - 1;
        return getAllTagsRecursively(text, regex, [...result, ...processTextType(newCodeIndex)], newCodeIndex);
    }

    return getAllTagsRecursively(text, regex, [...result, ...processTextType(codeIndex)], codeIndex);
};

const getParsedTree = text => {
    const allTags = getAllTagsRecursively(wrapToRootNodeIfNeeded(text).replace(/\r\n|\n|\r/g, '[br][/br]'), /(?:\[([a-z0-9*]{1,16})(?:=(?:"|'|)([^\x00-\x1F"'()<>[\]]{1,256}))?(?:"|'|)\])|(?:\[\/([a-z0-9*]{1,16})\])/gi);
    debugger; //eslint-disable-line
    // return this.buildTree(allTags);
    return [];
};


const parsedTextToTree = text => {
    const a = getParsedTree(text);
    return 'rolf';
};

export default parsedTextToTree;