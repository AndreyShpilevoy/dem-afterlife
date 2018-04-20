import { string, shape } from "prop-types";
import { injectSheet } from "styles";
import parseTextToNodeTree from "./parser";
import bbCodesMap from "./bbCodesMap";
import { rootTag } from "./constants";
import calculateStyles from "./calculateStyles";

const getComponentByTagName = tagName => bbCodesMap[tagName.toLowerCase()];

const mapNodeToComponent = (node, classes) => {
  const { content, key, type, options, children } = {
    ...node,
    options: { value: node.options, classes }
  };
  const Component = getComponentByTagName(type);

  if (Component) {
    if (children.length > 0) {
      const childrenMappedToComponent = children.map(x =>
        mapNodeToComponent(x, classes)
      );
      return Component(childrenMappedToComponent, key, options);
    }
    return Component(content, key, options);
  }
  return "";
};

const mapTextToComponentsTree = (text, classes) => {
  const parsedTree = parseTextToNodeTree(text);
  if (parsedTree.type === rootTag && parsedTree.children.length > 0) {
    return mapNodeToComponent(parsedTree, classes);
  }
  return "";
};

export const BbCodePresenterPure = ({ text, classes }) =>
  mapTextToComponentsTree(text, classes);

BbCodePresenterPure.propTypes = {
  classes: shape().isRequired,
  text: string.isRequired
};

export default injectSheet(calculateStyles, {
  componentName: "BbCodePresenter"
})(BbCodePresenterPure);
