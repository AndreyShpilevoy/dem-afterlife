import translations from './translations';

const milliseconds = {
    perMinute: 60000,
    perHour: 3600000,
    perDay: 86400000,
    perMonth: 2592000000,
    perYear: 31536000000
};

const getCurrentTranslations = locale => translations.find(x => x.locale === locale);

export const getTermTranslation = (term, locale) => {
    if (term && locale) {
        const currentTranslations = getCurrentTranslations(locale);
        if (currentTranslations) {
            const translation = currentTranslations.translationArray.find(x => x.id === term.id);
            if (translation) {
                return translation.value;
            }
            return term.value;
        }
        return term.value;
    } else if (term) {
        return term.value;
    }
    return 'no term';
};

export const transformRelativeLessThanMinute = (msDeltaTime, locale) => getTermTranslation({id: 5, value: 'less than a minute'}, locale);

export const transformRelativeMinute = (msDeltaTime, locale, dateTimeDeclension) => {
    const number = Math.round(msDeltaTime / milliseconds.perMinute);
    const oneMinute = getTermTranslation({id: 6, value: 'about a minute'}, locale);
    const firstForm = getTermTranslation({id: 7, value: 'minutes'}, locale);
    const secondForm = getTermTranslation({id: 8, value: 'minutes'}, locale);
    const thirdForm = getTermTranslation({id: 9, value: 'minutes'}, locale);
    return dateTimeDeclension(number, firstForm, secondForm, thirdForm, oneMinute);
};

export const transformRelativeHour = (msDeltaTime, locale, dateTimeDeclension) => {
    const number = Math.round(msDeltaTime / milliseconds.perHour);
    const firstForm = getTermTranslation({id: 10, value: 'about an hour'}, locale);
    const secondForm = getTermTranslation({id: 11, value: 'hours'}, locale);
    const thirdForm = getTermTranslation({id: 12, value: 'hours'}, locale);
    return dateTimeDeclension(number, firstForm, secondForm, thirdForm, firstForm);
};

export const transformRelativeDay = (msDeltaTime, locale, dateTimeDeclension) => {
    const number = Math.round(msDeltaTime / milliseconds.perDay);
    const firstForm = getTermTranslation({id: 13, value: 'a day'}, locale);
    const secondForm = getTermTranslation({id: 14, value: 'days'}, locale);
    const thirdForm = getTermTranslation({id: 15, value: 'days'}, locale);
    return dateTimeDeclension(number, firstForm, secondForm, thirdForm, firstForm);
};

export const transformRelativeMonth = (msDeltaTime, locale, dateTimeDeclension) => {
    const number = Math.round(msDeltaTime / milliseconds.perMonth);
    const firstForm = getTermTranslation({id: 16, value: 'about a month'}, locale);
    const secondForm = getTermTranslation({id: 17, value: 'months'}, locale);
    const thirdForm = getTermTranslation({id: 18, value: 'months'}, locale);
    return dateTimeDeclension(number, firstForm, secondForm, thirdForm, firstForm);
};

export const transformRelativeYear = (msDeltaTime, locale, dateTimeDeclension) => {
    const number = Math.round(msDeltaTime / milliseconds.perYear);
    const firstForm = getTermTranslation({id: 19, value: 'about a year'}, locale);
    const secondForm = getTermTranslation({id: 20, value: 'years'}, locale);
    const thirdForm = getTermTranslation({id: 21, value: 'years'}, locale);
    return dateTimeDeclension(number, firstForm, secondForm, thirdForm, firstForm);
};

/* eslint "complexity": [1, 6]*/
export const getTransformForPeriod = msDeltaTime => {
    if (msDeltaTime < milliseconds.perMinute) {
        return transformRelativeLessThanMinute;
    } else if (msDeltaTime < milliseconds.perHour) {
        return transformRelativeMinute;
    } else if (msDeltaTime < milliseconds.perDay) {
        return transformRelativeHour;
    } else if (msDeltaTime < milliseconds.perMonth) {
        return transformRelativeDay;
    } else if (msDeltaTime < milliseconds.perYear) {
        return transformRelativeMonth;
    }
    return transformRelativeYear;
};

export const getRelativeDateTime = (date, locale) => {
    if (!date) {
        return 'date is not defined';
    }

    const currentTranslations = getCurrentTranslations(locale);
    if (!currentTranslations) {
        return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`;
    }

    const suffixAgo = getTermTranslation({id: 4, value: 'ago'}, locale);
    const msDeltaTime = new Date() - date;

    return `${getTransformForPeriod(msDeltaTime)(msDeltaTime, locale, currentTranslations.dateTimeDeclension)} ${suffixAgo}`;
};

export const getLocaleDateTime = (date, locale, options) => {
    if (!date) {
        return 'date is not defined';
    }
    return date.toLocaleTimeString(locale, options);
};