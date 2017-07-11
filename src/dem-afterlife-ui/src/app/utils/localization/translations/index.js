import en from './en';
import ru from './ru';
import ua from './ua';
import dateTimeDeclensionRuUa from './dateTimeDeclensions/ruUa';
import dateTimeDeclensionEn from './dateTimeDeclensions/en';

export default [
      {locale: 'en', translationArray: en, dateTimeDeclension: dateTimeDeclensionEn},
      {locale: 'ru', translationArray: ru, dateTimeDeclension: dateTimeDeclensionRuUa},
      {locale: 'ua', translationArray: ua, dateTimeDeclension: dateTimeDeclensionRuUa}
];