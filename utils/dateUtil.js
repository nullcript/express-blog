"use strict";

const { DateTime } = require("luxon");

module.exports = ({
  date,
  outputCalendar = "persian",
  zone = "Asia/Tehran",
  format = "F",
}) => {
  return DateTime.fromJSDate(date, { outputCalendar, zone })
    .setLocale("fa")
    .toFormat(format);
};
