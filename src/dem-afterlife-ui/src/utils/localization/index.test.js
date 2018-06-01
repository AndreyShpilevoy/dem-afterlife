/* eslint no-undefined: 0, no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0 max-statements: 0 */
import dateTimeDeclension from "./translations/dateTimeDeclensions/ruUa";
import {
  getTermTranslation,
  transformRelativeLessThanMinute,
  transformRelativeMinute,
  transformRelativeHour,
  transformRelativeDay,
  transformRelativeMonth,
  transformRelativeYear,
  getTransformForPeriod,
  getRelativeDateTime,
  getLocaleDateTime
} from "./index";

const milliseconds = {
  perMinute: 60000,
  perHour: 3600000,
  perDay: 86400000,
  perMonth: 2592000000,
  perYear: 31536000000
};

describe("EN dateTimeDeclension", () => {
  it("getTermTranslation should return right translation for ru locale", () => {
    expect(getTermTranslation({ id: 1, value: "Topics" }, "ru")).toEqual("Тем");
  });

  it("getTermTranslation should return default form if locale not found", () => {
    expect(getTermTranslation({ id: 1, value: "Topics" }, "ururur")).toEqual(
      "Topics"
    );
  });

  it("getTermTranslation should return default form if locale is undefined", () => {
    expect(getTermTranslation({ id: 1, value: "Topics" }, undefined)).toEqual(
      "Topics"
    );
  });

  it("getTermTranslation should return error message if term is undefined", () => {
    expect(getTermTranslation(undefined, "ru")).toEqual("no term");
  });

  it("getTermTranslation should return default if locale ru and id wasnt found", () => {
    expect(getTermTranslation({ id: 0, value: "Topics" }, "ru")).toEqual(
      "Topics"
    );
  });

  it('transformRelativeLessThanMinute should return "меньше минуты"', () => {
    expect(transformRelativeLessThanMinute(5, "ru")).toEqual("меньше минуты");
  });

  it("transformRelativeMinute should return 4 right forms for ru locale", () => {
    expect(
      transformRelativeMinute(milliseconds.perMinute, "ru", dateTimeDeclension)
    ).toEqual("минуту");
    expect(
      transformRelativeMinute(
        2 * milliseconds.perMinute,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("2 минуты");
    expect(
      transformRelativeMinute(
        5 * milliseconds.perMinute,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("5 минут");
    expect(
      transformRelativeMinute(
        21 * milliseconds.perMinute,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("21 минута");
  });

  it("transformRelativeHour should return 4 right forms for ru locale", () => {
    expect(
      transformRelativeHour(milliseconds.perHour, "ru", dateTimeDeclension)
    ).toEqual("час");
    expect(
      transformRelativeHour(2 * milliseconds.perHour, "ru", dateTimeDeclension)
    ).toEqual("2 часа");
    expect(
      transformRelativeHour(5 * milliseconds.perHour, "ru", dateTimeDeclension)
    ).toEqual("5 часов");
    expect(
      transformRelativeHour(21 * milliseconds.perHour, "ru", dateTimeDeclension)
    ).toEqual("21 час");
  });

  it("transformRelativeDay should return 4 right forms for ru locale", () => {
    expect(
      transformRelativeDay(milliseconds.perDay, "ru", dateTimeDeclension)
    ).toEqual("день");
    expect(
      transformRelativeDay(2 * milliseconds.perDay, "ru", dateTimeDeclension)
    ).toEqual("2 дня");
    expect(
      transformRelativeDay(5 * milliseconds.perDay, "ru", dateTimeDeclension)
    ).toEqual("5 дней");
    expect(
      transformRelativeDay(21 * milliseconds.perDay, "ru", dateTimeDeclension)
    ).toEqual("21 день");
  });

  it("transformRelativeMonth should return 4 right forms for ru locale", () => {
    expect(
      transformRelativeMonth(milliseconds.perMonth, "ru", dateTimeDeclension)
    ).toEqual("месяц");
    expect(
      transformRelativeMonth(
        2 * milliseconds.perMonth,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("2 месяца");
    expect(
      transformRelativeMonth(
        5 * milliseconds.perMonth,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("5 месяцев");
    expect(
      transformRelativeMonth(
        21 * milliseconds.perMonth,
        "ru",
        dateTimeDeclension
      )
    ).toEqual("21 месяц");
  });

  it("transformRelativeYear should return 4 right forms for ru locale", () => {
    expect(
      transformRelativeYear(milliseconds.perYear, "ru", dateTimeDeclension)
    ).toEqual("год");
    expect(
      transformRelativeYear(2 * milliseconds.perYear, "ru", dateTimeDeclension)
    ).toEqual("2 года");
    expect(
      transformRelativeYear(5 * milliseconds.perYear, "ru", dateTimeDeclension)
    ).toEqual("5 лет");
    expect(
      transformRelativeYear(21 * milliseconds.perYear, "ru", dateTimeDeclension)
    ).toEqual("21 год");
  });

  it("getTransformForPeriod should return right functions per each deltaTime", () => {
    expect(getTransformForPeriod(1).name).toEqual(
      "transformRelativeLessThanMinute"
    );
    expect(getTransformForPeriod(milliseconds.perMinute).name).toEqual(
      "transformRelativeMinute"
    );
    expect(getTransformForPeriod(milliseconds.perHour).name).toEqual(
      "transformRelativeHour"
    );
    expect(getTransformForPeriod(milliseconds.perDay).name).toEqual(
      "transformRelativeDay"
    );
    expect(getTransformForPeriod(milliseconds.perMonth).name).toEqual(
      "transformRelativeMonth"
    );
    expect(getTransformForPeriod(milliseconds.perYear).name).toEqual(
      "transformRelativeYear"
    );
  });

  it("getRelativeDateTime should return expected string for wrong date", () => {
    expect(getRelativeDateTime("bla-bla", "ru")).toEqual("Invalid Date");
  });

  it("getRelativeDateTime should return expected string for wrong locale", () => {
    expect(getRelativeDateTime("Tue May 30 2017 12:32:49", "ururur")).toEqual(
      "5/30/2017 12:32"
    );
  });

  it("getRelativeDateTime should return expected string for right params", () => {
    expect(getRelativeDateTime(new Date(), "ru")).toEqual(
      "меньше минуты назад"
    );
  });

  it("getLocaleDateTime should return expected string for correct date", () => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    expect(
      getLocaleDateTime("Tue May 30 2017 12:32:49", "en", options)
    ).toEqual("May 30, 2017, 12:32 PM");
  });

  it("getLocaleDateTime should return expected string for wrong date", () => {
    expect(getLocaleDateTime("bla-bla", "ru")).toEqual("Invalid Date");
  });
});
