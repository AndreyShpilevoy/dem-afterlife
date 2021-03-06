/* eslint-disable max-statements */
import {rootTag, codeTag, textlineTag, brTag, OPEN_TAG, CLOSE_TAG, TEXT} from './constants';
import {bbCodesMapNames} from './bbCodesMap';

const wrapToRootNodeIfNeeded = text =>
    `${
        text.substring(0, 6) !== `[${rootTag}]` ? `[${rootTag}]` : ''
    }${text}${
        text.substring(text.length - 7) !== `[/${rootTag}]` ? `[/${rootTag}]` : ''
    }`;

const getAllTagsRecursively = (text, regex, result = [], codeIndex = 0) => {
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

    const processTextType = localCodeIndex => {
        if (localCodeIndex === 0 || (matchedResult.tag.toLowerCase() === codeTag || matchedResult.tag.toLowerCase() === brTag)) {
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
        return [];
    };

    // if tag is not exist in available maps - skip step
    if (!bbCodesMapNames.includes(matchedResult.tag.toLowerCase())) {
        return getAllTagsRecursively(text, regex, result, codeIndex);

    // if open tag 'code' - codeIndex++
    } else if (matchedResult.type === OPEN_TAG && matchedResult.tag.toLowerCase() === codeTag) {
        const newCodeIndex = codeIndex + 1;
        return getAllTagsRecursively(text, regex, [...result, ...processTextType(newCodeIndex)], newCodeIndex);

    // if close tag 'code' - codeIndex--
    } else if (matchedResult.type === CLOSE_TAG && matchedResult.tag.toLowerCase() === codeTag) {
        const newCodeIndex = codeIndex - 1;
        return getAllTagsRecursively(text, regex, [...result, ...processTextType(newCodeIndex)], newCodeIndex);
    }

    return getAllTagsRecursively(text, regex, [...result, ...processTextType(codeIndex)], codeIndex);
};

const buildNodeTreeRecursively = (tagsArray, tagIndex = 0, result = {}, parentNode = {}) => {
    const currentTag = tagsArray[tagIndex];
    if (currentTag) {
        const node = {
            type: currentTag.tag,
            key: tagIndex,
            options: currentTag.options,
            content: '',
            children: [],
            parentNode
        };

        if (currentTag.type === OPEN_TAG) {
            const nextTagIndex = tagIndex + 1;
            if (Object.keys(parentNode).length !== 0) {
                parentNode.children.push(node); // eslint-disable-line fp/no-mutating-methods, fp/no-unused-expression
                return buildNodeTreeRecursively(tagsArray, nextTagIndex, result, node);
            }
            return buildNodeTreeRecursively(tagsArray, nextTagIndex, node, node);
        } else if (currentTag.type === CLOSE_TAG && currentTag.tag === parentNode.type) {
            const nextTagIndex = tagIndex + 1;
            return buildNodeTreeRecursively(tagsArray, nextTagIndex, result, parentNode.parentNode);
        } else if (currentTag.match !== `[/${rootTag}]`) {
            const nextTagIndex = tagIndex + 1;
            const textNode = {...node, content: currentTag.match, type: textlineTag};
            parentNode.children.push(textNode); // eslint-disable-line fp/no-mutating-methods, fp/no-unused-expression
            return buildNodeTreeRecursively(tagsArray, nextTagIndex, result, parentNode);
        }
    }
    return result;
};

const parseTextToNodeTree = text => {
    const message = wrapToRootNodeIfNeeded(text).replace(/\r\n|\n|\r/g, '[br][/br]');
    const allTags = getAllTagsRecursively(message, /(?:\[([a-z0-9*]{1,16})(?:=(?:"|'|)([^\x00-\x1F"'()<>[\]]{1,256}))?(?:"|'|)\])|(?:\[\/([a-z0-9*]{1,16})\])/gi); // eslint-disable-line no-control-regex
    return buildNodeTreeRecursively(allTags);
};

export default parseTextToNodeTree;