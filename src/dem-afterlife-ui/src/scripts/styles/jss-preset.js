import jss from 'jss';
import jssExtend from 'jss-extend';
import jssNested from 'jss-nested';
import jssCamelCase from 'jss-camel-case';
import jssExpand from 'jss-expand';
import jssVendorPrefixer from 'jss-vendor-prefixer';
import jssPropsSort from 'jss-props-sort';

jss.use(jssExtend());
jss.use(jssNested());
jss.use(jssCamelCase());
jss.use(jssExpand());
jss.use(jssVendorPrefixer());
jss.use(jssPropsSort());

export default jss;