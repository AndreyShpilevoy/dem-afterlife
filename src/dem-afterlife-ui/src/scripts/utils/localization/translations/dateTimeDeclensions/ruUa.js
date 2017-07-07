const dateTimeDeclension = (number, firstForm, secondForm, thirdForm, singleForm) => {
    // singleForm - 1
    // firstForm - 21, 31, ...
    // secondForm - 2-4, 22-24, 32-34 ...
    // thirdForm - 5-20, 25-30, ...
    const remainder = number % 10;
    if (number === 1) {
        return singleForm;
    } else if (remainder === 1 && number > 20) {
        return `${number} ${firstForm}`;
    } else if (remainder > 1 && remainder < 5 && (number > 20 || number < 10)) {
        return `${number} ${secondForm}`;
    }
    return `${number} ${thirdForm}`;
};

export default dateTimeDeclension;