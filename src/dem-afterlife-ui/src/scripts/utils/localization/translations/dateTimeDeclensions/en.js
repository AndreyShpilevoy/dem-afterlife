const dateTimeDeclension = (number, firstForm, secondForm, thirdForm, singleForm) => {
    // always return secondForm or singleForm
    if (number === 1) {
        return singleForm;
    }
    return `${number} ${secondForm}`;
};

export default dateTimeDeclension;