import {create} from 'jss';
import jssGlobal from 'jss-global';
import jssExtend from 'jss-extend';
import jssNested from 'jss-nested';
import jssCamelCase from 'jss-camel-case';
import jssDefaultUnit from 'jss-default-unit';
import jssExpand from 'jss-expand';
import jssVendorPrefixer from 'jss-vendor-prefixer';
import jssPropsSort from 'jss-props-sort';
import jssIsolate from 'jss-isolate';
import classNames from 'classnames';
import defaultUnits from './defaultUnits';

const jss = create();
jss.use(jssGlobal());
jss.use(jssExtend());
jss.use(jssNested());
jss.use(jssCamelCase());
jss.use(jssDefaultUnit(defaultUnits));
jss.use(jssExpand());
jss.use(jssVendorPrefixer());
jss.use(jssPropsSort());
jss.use(jssIsolate({isolate: false}));

export default {
    create(styleHash) {
        const {options, ...styleHashFiltered} = styleHash;
        return jss.createStyleSheet(styleHashFiltered, options).attach().classes;
    },

  // Styles is an array of properties returned by `create()`, a POJO, or an
  // array thereof. POJOs are treated as inline styles.
  // This function returns an object to be spread onto an element.
    resolve(styles) {
        return {className: classNames(styles)};
    },

  // Flushes all buffered styles to a style tag. Required for components
  // that depend upon previous styles in the component tree (i.e.
  // for calculating container width, including padding/margin).
    flush() {
    }
};