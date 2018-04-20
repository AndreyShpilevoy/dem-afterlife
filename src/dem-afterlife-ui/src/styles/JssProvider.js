import React from "react";
import { node } from "prop-types";
import { create } from "jss";
import jssGlobal from "jss-global";
import jssExtend from "jss-extend";
import jssNested from "jss-nested";
import jssCamelCase from "jss-camel-case";
import jssDefaultUnit from "jss-default-unit";
import jssExpand from "jss-expand";
import jssVendorPrefixer from "jss-vendor-prefixer";
import jssPropsSort from "jss-props-sort";
import jssIsolate from "jss-isolate";
import { JssProvider as JssProviderBase } from "react-jss";
import defaultUnits from "./defaultUnits";

const createGenerateClassName = () => (rule, sheet) =>
  `${sheet.options.componentName}-${rule.key}${sheet.options.index}`;

const jss = create({ createGenerateClassName });
jss.use(jssGlobal());
jss.use(jssExtend());
jss.use(jssNested());
jss.use(jssCamelCase());
jss.use(jssDefaultUnit(defaultUnits));
jss.use(jssExpand());
jss.use(jssVendorPrefixer());
jss.use(jssPropsSort());
jss.use(jssIsolate({ isolate: false }));

const JssProvider = ({ children }) => (
  <JssProviderBase jss={jss}>{children}</JssProviderBase>
);

JssProvider.propTypes = {
  children: node.isRequired
};
export default JssProvider;
