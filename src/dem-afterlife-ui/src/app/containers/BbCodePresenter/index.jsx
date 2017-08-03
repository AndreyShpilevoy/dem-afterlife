import {string, shape} from 'prop-types';
import {withStyles} from 'styles';
import parseTextToNodeTree from './parser';
import bbCodesMap from './bbCodesMap';
import constants from './constants';
import calculateStyles from './calculateStyles';


const getComponentByTagName = tagName => bbCodesMap[tagName.toLowerCase()];

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
    return '';
};

const mapTextToComponentsTree = (text, styles) => {
    const parsedTree = parseTextToNodeTree(text);
    if (parsedTree.type === constants.rootTag && parsedTree.children.length > 0) {
        return mapNodeToComponent(parsedTree, styles);
    }
    return '';
};

const BbCodePresenter = ({text, styles}) => mapTextToComponentsTree(text, styles);

BbCodePresenter.propTypes = {
    styles: shape().isRequired,
    text: string.isRequired
};

export default withStyles(theme => calculateStyles(theme))(BbCodePresenter);