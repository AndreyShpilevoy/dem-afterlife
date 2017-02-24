import Aesthetic, { createStyler } from 'aesthetic';
import JSSAdapter from 'aesthetic-adapter-jss';
import jss from './jss-preset';
import defaultTheme from './thems/default';
import overriddenTheme from './thems/overridden';

const aesthetic = new Aesthetic(new JSSAdapter(jss));

aesthetic.registerTheme('default', defaultTheme);
aesthetic.registerTheme('overridden', overriddenTheme);

export default createStyler(aesthetic);
