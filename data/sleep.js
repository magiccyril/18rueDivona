#!/usr/bin/env node
var moment = require('moment');

moment.locale('fr', {
    months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd D MMMM YYYY LT"
    },
    calendar: {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "une année",
        yy: "%d années"
    },
    ordinal: function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4  // The week that contains Jan 4th is the first week of the year.
    }
});

var sleepEfficiency = [
    {
        "dateTime": "2014-01-01",
        "value": "0"
    },
    {
        "dateTime": "2014-01-02",
        "value": "0"
    },
    {
        "dateTime": "2014-01-03",
        "value": "0"
    },
    {
        "dateTime": "2014-01-04",
        "value": "0"
    },
    {
        "dateTime": "2014-01-05",
        "value": "0"
    },
    {
        "dateTime": "2014-01-06",
        "value": "0"
    },
    {
        "dateTime": "2014-01-07",
        "value": "0"
    },
    {
        "dateTime": "2014-01-08",
        "value": "0"
    },
    {
        "dateTime": "2014-01-09",
        "value": "0"
    },
    {
        "dateTime": "2014-01-10",
        "value": "0"
    },
    {
        "dateTime": "2014-01-11",
        "value": "0"
    },
    {
        "dateTime": "2014-01-12",
        "value": "0"
    },
    {
        "dateTime": "2014-01-13",
        "value": "0"
    },
    {
        "dateTime": "2014-01-14",
        "value": "0"
    },
    {
        "dateTime": "2014-01-15",
        "value": "0"
    },
    {
        "dateTime": "2014-01-16",
        "value": "0"
    },
    {
        "dateTime": "2014-01-17",
        "value": "0"
    },
    {
        "dateTime": "2014-01-18",
        "value": "0"
    },
    {
        "dateTime": "2014-01-19",
        "value": "0"
    },
    {
        "dateTime": "2014-01-20",
        "value": "0"
    },
    {
        "dateTime": "2014-01-21",
        "value": "0"
    },
    {
        "dateTime": "2014-01-22",
        "value": "0"
    },
    {
        "dateTime": "2014-01-23",
        "value": "0"
    },
    {
        "dateTime": "2014-01-24",
        "value": "0"
    },
    {
        "dateTime": "2014-01-25",
        "value": "98"
    },
    {
        "dateTime": "2014-01-26",
        "value": "99"
    },
    {
        "dateTime": "2014-01-27",
        "value": "73"
    },
    {
        "dateTime": "2014-01-28",
        "value": "71"
    },
    {
        "dateTime": "2014-01-29",
        "value": "84"
    },
    {
        "dateTime": "2014-01-30",
        "value": "83"
    },
    {
        "dateTime": "2014-01-31",
        "value": "92"
    },
    {
        "dateTime": "2014-02-01",
        "value": "73"
    },
    {
        "dateTime": "2014-02-02",
        "value": "74"
    },
    {
        "dateTime": "2014-02-03",
        "value": "74"
    },
    {
        "dateTime": "2014-02-04",
        "value": "76"
    },
    {
        "dateTime": "2014-02-05",
        "value": "65"
    },
    {
        "dateTime": "2014-02-06",
        "value": "84"
    },
    {
        "dateTime": "2014-02-07",
        "value": "76"
    },
    {
        "dateTime": "2014-02-08",
        "value": "71"
    },
    {
        "dateTime": "2014-02-09",
        "value": "68"
    },
    {
        "dateTime": "2014-02-10",
        "value": "79"
    },
    {
        "dateTime": "2014-02-11",
        "value": "81"
    },
    {
        "dateTime": "2014-02-12",
        "value": "81"
    },
    {
        "dateTime": "2014-02-13",
        "value": "78"
    },
    {
        "dateTime": "2014-02-14",
        "value": "82"
    },
    {
        "dateTime": "2014-02-15",
        "value": "75"
    },
    {
        "dateTime": "2014-02-16",
        "value": "77"
    },
    {
        "dateTime": "2014-02-17",
        "value": "81"
    },
    {
        "dateTime": "2014-02-18",
        "value": "80"
    },
    {
        "dateTime": "2014-02-19",
        "value": "72"
    },
    {
        "dateTime": "2014-02-20",
        "value": "69"
    },
    {
        "dateTime": "2014-02-21",
        "value": "73"
    },
    {
        "dateTime": "2014-02-22",
        "value": "76"
    },
    {
        "dateTime": "2014-02-23",
        "value": "74"
    },
    {
        "dateTime": "2014-02-24",
        "value": "80"
    },
    {
        "dateTime": "2014-02-25",
        "value": "67"
    },
    {
        "dateTime": "2014-02-26",
        "value": "81"
    },
    {
        "dateTime": "2014-02-27",
        "value": "79"
    },
    {
        "dateTime": "2014-02-28",
        "value": "64"
    },
    {
        "dateTime": "2014-03-01",
        "value": "84"
    },
    {
        "dateTime": "2014-03-02",
        "value": "72"
    },
    {
        "dateTime": "2014-03-03",
        "value": "80"
    },
    {
        "dateTime": "2014-03-04",
        "value": "76"
    },
    {
        "dateTime": "2014-03-05",
        "value": "70"
    },
    {
        "dateTime": "2014-03-06",
        "value": "70"
    },
    {
        "dateTime": "2014-03-07",
        "value": "0"
    },
    {
        "dateTime": "2014-03-08",
        "value": "72"
    },
    {
        "dateTime": "2014-03-09",
        "value": "75"
    },
    {
        "dateTime": "2014-03-10",
        "value": "77"
    },
    {
        "dateTime": "2014-03-11",
        "value": "67"
    },
    {
        "dateTime": "2014-03-12",
        "value": "74"
    },
    {
        "dateTime": "2014-03-13",
        "value": "78"
    },
    {
        "dateTime": "2014-03-14",
        "value": "73"
    },
    {
        "dateTime": "2014-03-15",
        "value": "75"
    },
    {
        "dateTime": "2014-03-16",
        "value": "62"
    },
    {
        "dateTime": "2014-03-17",
        "value": "78"
    },
    {
        "dateTime": "2014-03-18",
        "value": "68"
    },
    {
        "dateTime": "2014-03-19",
        "value": "78"
    },
    {
        "dateTime": "2014-03-20",
        "value": "74"
    },
    {
        "dateTime": "2014-03-21",
        "value": "77"
    },
    {
        "dateTime": "2014-03-22",
        "value": "80"
    },
    {
        "dateTime": "2014-03-23",
        "value": "74"
    },
    {
        "dateTime": "2014-03-24",
        "value": "79"
    },
    {
        "dateTime": "2014-03-25",
        "value": "73"
    },
    {
        "dateTime": "2014-03-26",
        "value": "65"
    },
    {
        "dateTime": "2014-03-27",
        "value": "75"
    },
    {
        "dateTime": "2014-03-28",
        "value": "80"
    },
    {
        "dateTime": "2014-03-29",
        "value": "79"
    },
    {
        "dateTime": "2014-03-30",
        "value": "79"
    },
    {
        "dateTime": "2014-03-31",
        "value": "63"
    },
    {
        "dateTime": "2014-04-01",
        "value": "73"
    },
    {
        "dateTime": "2014-04-02",
        "value": "88"
    },
    {
        "dateTime": "2014-04-03",
        "value": "80"
    },
    {
        "dateTime": "2014-04-04",
        "value": "82"
    },
    {
        "dateTime": "2014-04-05",
        "value": "91"
    },
    {
        "dateTime": "2014-04-06",
        "value": "79"
    },
    {
        "dateTime": "2014-04-07",
        "value": "76"
    },
    {
        "dateTime": "2014-04-08",
        "value": "87"
    },
    {
        "dateTime": "2014-04-09",
        "value": "73"
    },
    {
        "dateTime": "2014-04-10",
        "value": "78"
    },
    {
        "dateTime": "2014-04-11",
        "value": "83"
    },
    {
        "dateTime": "2014-04-12",
        "value": "77"
    },
    {
        "dateTime": "2014-04-13",
        "value": "71"
    },
    {
        "dateTime": "2014-04-14",
        "value": "73"
    },
    {
        "dateTime": "2014-04-15",
        "value": "74"
    },
    {
        "dateTime": "2014-04-16",
        "value": "76"
    },
    {
        "dateTime": "2014-04-17",
        "value": "72"
    },
    {
        "dateTime": "2014-04-18",
        "value": "78"
    },
    {
        "dateTime": "2014-04-19",
        "value": "75"
    },
    {
        "dateTime": "2014-04-20",
        "value": "84"
    },
    {
        "dateTime": "2014-04-21",
        "value": "75"
    },
    {
        "dateTime": "2014-04-22",
        "value": "75"
    },
    {
        "dateTime": "2014-04-23",
        "value": "75"
    },
    {
        "dateTime": "2014-04-24",
        "value": "83"
    },
    {
        "dateTime": "2014-04-25",
        "value": "72"
    },
    {
        "dateTime": "2014-04-26",
        "value": "70"
    },
    {
        "dateTime": "2014-04-27",
        "value": "77"
    },
    {
        "dateTime": "2014-04-28",
        "value": "72"
    },
    {
        "dateTime": "2014-04-29",
        "value": "76"
    },
    {
        "dateTime": "2014-04-30",
        "value": "70"
    },
    {
        "dateTime": "2014-05-01",
        "value": "74"
    },
    {
        "dateTime": "2014-05-02",
        "value": "75"
    },
    {
        "dateTime": "2014-05-03",
        "value": "75"
    },
    {
        "dateTime": "2014-05-04",
        "value": "70"
    },
    {
        "dateTime": "2014-05-05",
        "value": "69"
    },
    {
        "dateTime": "2014-05-06",
        "value": "80"
    },
    {
        "dateTime": "2014-05-07",
        "value": "85"
    },
    {
        "dateTime": "2014-05-08",
        "value": "69"
    },
    {
        "dateTime": "2014-05-09",
        "value": "57"
    },
    {
        "dateTime": "2014-05-10",
        "value": "66"
    },
    {
        "dateTime": "2014-05-11",
        "value": "76"
    },
    {
        "dateTime": "2014-05-12",
        "value": "87"
    },
    {
        "dateTime": "2014-05-13",
        "value": "81"
    },
    {
        "dateTime": "2014-05-14",
        "value": "80"
    },
    {
        "dateTime": "2014-05-15",
        "value": "85"
    },
    {
        "dateTime": "2014-05-16",
        "value": "75"
    },
    {
        "dateTime": "2014-05-17",
        "value": "76"
    },
    {
        "dateTime": "2014-05-18",
        "value": "74"
    },
    {
        "dateTime": "2014-05-19",
        "value": "67"
    },
    {
        "dateTime": "2014-05-20",
        "value": "75"
    },
    {
        "dateTime": "2014-05-21",
        "value": "70"
    },
    {
        "dateTime": "2014-05-22",
        "value": "71"
    },
    {
        "dateTime": "2014-05-23",
        "value": "75"
    },
    {
        "dateTime": "2014-05-24",
        "value": "83"
    },
    {
        "dateTime": "2014-05-25",
        "value": "76"
    },
    {
        "dateTime": "2014-05-26",
        "value": "77"
    },
    {
        "dateTime": "2014-05-27",
        "value": "64"
    },
    {
        "dateTime": "2014-05-28",
        "value": "73"
    },
    {
        "dateTime": "2014-05-29",
        "value": "79"
    },
    {
        "dateTime": "2014-05-30",
        "value": "69"
    },
    {
        "dateTime": "2014-05-31",
        "value": "70"
    },
    {
        "dateTime": "2014-06-01",
        "value": "80"
    },
    {
        "dateTime": "2014-06-02",
        "value": "72"
    },
    {
        "dateTime": "2014-06-03",
        "value": "80"
    },
    {
        "dateTime": "2014-06-04",
        "value": "77"
    },
    {
        "dateTime": "2014-06-05",
        "value": "76"
    },
    {
        "dateTime": "2014-06-06",
        "value": "88"
    },
    {
        "dateTime": "2014-06-07",
        "value": "87"
    },
    {
        "dateTime": "2014-06-08",
        "value": "71"
    },
    {
        "dateTime": "2014-06-09",
        "value": "79"
    },
    {
        "dateTime": "2014-06-10",
        "value": "67"
    },
    {
        "dateTime": "2014-06-11",
        "value": "76"
    },
    {
        "dateTime": "2014-06-12",
        "value": "83"
    },
    {
        "dateTime": "2014-06-13",
        "value": "81"
    },
    {
        "dateTime": "2014-06-14",
        "value": "82"
    },
    {
        "dateTime": "2014-06-15",
        "value": "65"
    },
    {
        "dateTime": "2014-06-16",
        "value": "76"
    },
    {
        "dateTime": "2014-06-17",
        "value": "79"
    },
    {
        "dateTime": "2014-06-18",
        "value": "81"
    },
    {
        "dateTime": "2014-06-19",
        "value": "66"
    },
    {
        "dateTime": "2014-06-20",
        "value": "73"
    },
    {
        "dateTime": "2014-06-21",
        "value": "64"
    },
    {
        "dateTime": "2014-06-22",
        "value": "77"
    },
    {
        "dateTime": "2014-06-23",
        "value": "70"
    },
    {
        "dateTime": "2014-06-24",
        "value": "76"
    },
    {
        "dateTime": "2014-06-25",
        "value": "76"
    },
    {
        "dateTime": "2014-06-26",
        "value": "88"
    },
    {
        "dateTime": "2014-06-27",
        "value": "76"
    },
    {
        "dateTime": "2014-06-28",
        "value": "77"
    },
    {
        "dateTime": "2014-06-29",
        "value": "72"
    },
    {
        "dateTime": "2014-06-30",
        "value": "74"
    },
    {
        "dateTime": "2014-07-01",
        "value": "80"
    },
    {
        "dateTime": "2014-07-02",
        "value": "76"
    },
    {
        "dateTime": "2014-07-03",
        "value": "76"
    },
    {
        "dateTime": "2014-07-04",
        "value": "76"
    },
    {
        "dateTime": "2014-07-05",
        "value": "71"
    },
    {
        "dateTime": "2014-07-06",
        "value": "71"
    },
    {
        "dateTime": "2014-07-07",
        "value": "64"
    },
    {
        "dateTime": "2014-07-08",
        "value": "81"
    },
    {
        "dateTime": "2014-07-09",
        "value": "82"
    },
    {
        "dateTime": "2014-07-10",
        "value": "71"
    },
    {
        "dateTime": "2014-07-11",
        "value": "77"
    },
    {
        "dateTime": "2014-07-12",
        "value": "79"
    },
    {
        "dateTime": "2014-07-13",
        "value": "65"
    },
    {
        "dateTime": "2014-07-14",
        "value": "71"
    },
    {
        "dateTime": "2014-07-15",
        "value": "79"
    },
    {
        "dateTime": "2014-07-16",
        "value": "63"
    },
    {
        "dateTime": "2014-07-17",
        "value": "68"
    },
    {
        "dateTime": "2014-07-18",
        "value": "64"
    },
    {
        "dateTime": "2014-07-19",
        "value": "84"
    },
    {
        "dateTime": "2014-07-20",
        "value": "68"
    },
    {
        "dateTime": "2014-07-21",
        "value": "76"
    },
    {
        "dateTime": "2014-07-22",
        "value": "60"
    },
    {
        "dateTime": "2014-07-23",
        "value": "74"
    },
    {
        "dateTime": "2014-07-24",
        "value": "80"
    },
    {
        "dateTime": "2014-07-25",
        "value": "62"
    },
    {
        "dateTime": "2014-07-26",
        "value": "78"
    },
    {
        "dateTime": "2014-07-27",
        "value": "76"
    },
    {
        "dateTime": "2014-07-28",
        "value": "69"
    },
    {
        "dateTime": "2014-07-29",
        "value": "64"
    },
    {
        "dateTime": "2014-07-30",
        "value": "62"
    },
    {
        "dateTime": "2014-07-31",
        "value": "73"
    },
    {
        "dateTime": "2014-08-01",
        "value": "75"
    },
    {
        "dateTime": "2014-08-02",
        "value": "75"
    },
    {
        "dateTime": "2014-08-03",
        "value": "71"
    },
    {
        "dateTime": "2014-08-04",
        "value": "67"
    },
    {
        "dateTime": "2014-08-05",
        "value": "55"
    },
    {
        "dateTime": "2014-08-06",
        "value": "74"
    },
    {
        "dateTime": "2014-08-07",
        "value": "66"
    },
    {
        "dateTime": "2014-08-08",
        "value": "75"
    },
    {
        "dateTime": "2014-08-09",
        "value": "79"
    },
    {
        "dateTime": "2014-08-10",
        "value": "63"
    },
    {
        "dateTime": "2014-08-11",
        "value": "55"
    },
    {
        "dateTime": "2014-08-12",
        "value": "80"
    },
    {
        "dateTime": "2014-08-13",
        "value": "87"
    },
    {
        "dateTime": "2014-08-14",
        "value": "74"
    },
    {
        "dateTime": "2014-08-15",
        "value": "76"
    },
    {
        "dateTime": "2014-08-16",
        "value": "69"
    },
    {
        "dateTime": "2014-08-17",
        "value": "86"
    },
    {
        "dateTime": "2014-08-18",
        "value": "63"
    },
    {
        "dateTime": "2014-08-19",
        "value": "90"
    },
    {
        "dateTime": "2014-08-20",
        "value": "83"
    },
    {
        "dateTime": "2014-08-21",
        "value": "77"
    },
    {
        "dateTime": "2014-08-22",
        "value": "73"
    },
    {
        "dateTime": "2014-08-23",
        "value": "75"
    },
    {
        "dateTime": "2014-08-24",
        "value": "75"
    },
    {
        "dateTime": "2014-08-25",
        "value": "73"
    },
    {
        "dateTime": "2014-08-26",
        "value": "67"
    },
    {
        "dateTime": "2014-08-27",
        "value": "86"
    },
    {
        "dateTime": "2014-08-28",
        "value": "79"
    },
    {
        "dateTime": "2014-08-29",
        "value": "72"
    },
    {
        "dateTime": "2014-08-30",
        "value": "83"
    },
    {
        "dateTime": "2014-08-31",
        "value": "79"
    },
    {
        "dateTime": "2014-09-01",
        "value": "67"
    },
    {
        "dateTime": "2014-09-02",
        "value": "71"
    },
    {
        "dateTime": "2014-09-03",
        "value": "80"
    },
    {
        "dateTime": "2014-09-04",
        "value": "76"
    },
    {
        "dateTime": "2014-09-05",
        "value": "76"
    },
    {
        "dateTime": "2014-09-06",
        "value": "80"
    },
    {
        "dateTime": "2014-09-07",
        "value": "63"
    },
    {
        "dateTime": "2014-09-08",
        "value": "67"
    },
    {
        "dateTime": "2014-09-09",
        "value": "75"
    },
    {
        "dateTime": "2014-09-10",
        "value": "68"
    },
    {
        "dateTime": "2014-09-11",
        "value": "71"
    },
    {
        "dateTime": "2014-09-12",
        "value": "76"
    },
    {
        "dateTime": "2014-09-13",
        "value": "76"
    },
    {
        "dateTime": "2014-09-14",
        "value": "59"
    },
    {
        "dateTime": "2014-09-15",
        "value": "70"
    },
    {
        "dateTime": "2014-09-16",
        "value": "71"
    },
    {
        "dateTime": "2014-09-17",
        "value": "73"
    },
    {
        "dateTime": "2014-09-18",
        "value": "90"
    },
    {
        "dateTime": "2014-09-19",
        "value": "70"
    },
    {
        "dateTime": "2014-09-20",
        "value": "62"
    },
    {
        "dateTime": "2014-09-21",
        "value": "78"
    },
    {
        "dateTime": "2014-09-22",
        "value": "70"
    },
    {
        "dateTime": "2014-09-23",
        "value": "82"
    },
    {
        "dateTime": "2014-09-24",
        "value": "93"
    },
    {
        "dateTime": "2014-09-25",
        "value": "71"
    },
    {
        "dateTime": "2014-09-26",
        "value": "63"
    },
    {
        "dateTime": "2014-09-27",
        "value": "79"
    },
    {
        "dateTime": "2014-09-28",
        "value": "71"
    },
    {
        "dateTime": "2014-09-29",
        "value": "73"
    },
    {
        "dateTime": "2014-09-30",
        "value": "73"
    },
    {
        "dateTime": "2014-10-01",
        "value": "69"
    },
    {
        "dateTime": "2014-10-02",
        "value": "77"
    },
    {
        "dateTime": "2014-10-03",
        "value": "73"
    },
    {
        "dateTime": "2014-10-04",
        "value": "75"
    },
    {
        "dateTime": "2014-10-05",
        "value": "80"
    },
    {
        "dateTime": "2014-10-06",
        "value": "76"
    },
    {
        "dateTime": "2014-10-07",
        "value": "77"
    },
    {
        "dateTime": "2014-10-08",
        "value": "69"
    },
    {
        "dateTime": "2014-10-09",
        "value": "69"
    },
    {
        "dateTime": "2014-10-10",
        "value": "72"
    },
    {
        "dateTime": "2014-10-11",
        "value": "61"
    },
    {
        "dateTime": "2014-10-12",
        "value": "76"
    },
    {
        "dateTime": "2014-10-13",
        "value": "74"
    },
    {
        "dateTime": "2014-10-14",
        "value": "74"
    },
    {
        "dateTime": "2014-10-15",
        "value": "61"
    },
    {
        "dateTime": "2014-10-16",
        "value": "76"
    },
    {
        "dateTime": "2014-10-17",
        "value": "82"
    },
    {
        "dateTime": "2014-10-18",
        "value": "74"
    },
    {
        "dateTime": "2014-10-19",
        "value": "76"
    },
    {
        "dateTime": "2014-10-20",
        "value": "70"
    },
    {
        "dateTime": "2014-10-21",
        "value": "69"
    },
    {
        "dateTime": "2014-10-22",
        "value": "73"
    },
    {
        "dateTime": "2014-10-23",
        "value": "66"
    },
    {
        "dateTime": "2014-10-24",
        "value": "83"
    },
    {
        "dateTime": "2014-10-25",
        "value": "64"
    },
    {
        "dateTime": "2014-10-26",
        "value": "55"
    },
    {
        "dateTime": "2014-10-27",
        "value": "74"
    },
    {
        "dateTime": "2014-10-28",
        "value": "65"
    },
    {
        "dateTime": "2014-10-29",
        "value": "74"
    },
    {
        "dateTime": "2014-10-30",
        "value": "77"
    },
    {
        "dateTime": "2014-10-31",
        "value": "77"
    },
    {
        "dateTime": "2014-11-01",
        "value": "83"
    },
    {
        "dateTime": "2014-11-02",
        "value": "77"
    },
    {
        "dateTime": "2014-11-03",
        "value": "75"
    },
    {
        "dateTime": "2014-11-04",
        "value": "74"
    },
    {
        "dateTime": "2014-11-05",
        "value": "76"
    },
    {
        "dateTime": "2014-11-06",
        "value": "83"
    },
    {
        "dateTime": "2014-11-07",
        "value": "70"
    },
    {
        "dateTime": "2014-11-08",
        "value": "76"
    },
    {
        "dateTime": "2014-11-09",
        "value": "66"
    },
    {
        "dateTime": "2014-11-10",
        "value": "68"
    },
    {
        "dateTime": "2014-11-11",
        "value": "72"
    },
    {
        "dateTime": "2014-11-12",
        "value": "77"
    },
    {
        "dateTime": "2014-11-13",
        "value": "70"
    },
    {
        "dateTime": "2014-11-14",
        "value": "68"
    },
    {
        "dateTime": "2014-11-15",
        "value": "82"
    },
    {
        "dateTime": "2014-11-16",
        "value": "74"
    },
    {
        "dateTime": "2014-11-17",
        "value": "73"
    },
    {
        "dateTime": "2014-11-18",
        "value": "74"
    },
    {
        "dateTime": "2014-11-19",
        "value": "82"
    },
    {
        "dateTime": "2014-11-20",
        "value": "67"
    },
    {
        "dateTime": "2014-11-21",
        "value": "78"
    },
    {
        "dateTime": "2014-11-22",
        "value": "70"
    },
    {
        "dateTime": "2014-11-23",
        "value": "71"
    },
    {
        "dateTime": "2014-11-24",
        "value": "75"
    },
    {
        "dateTime": "2014-11-25",
        "value": "75"
    },
    {
        "dateTime": "2014-11-26",
        "value": "60"
    },
    {
        "dateTime": "2014-11-27",
        "value": "81"
    },
    {
        "dateTime": "2014-11-28",
        "value": "73"
    },
    {
        "dateTime": "2014-11-29",
        "value": "75"
    },
    {
        "dateTime": "2014-11-30",
        "value": "72"
    },
    {
        "dateTime": "2014-12-01",
        "value": "74"
    },
    {
        "dateTime": "2014-12-02",
        "value": "73"
    },
    {
        "dateTime": "2014-12-03",
        "value": "75"
    },
    {
        "dateTime": "2014-12-04",
        "value": "67"
    },
    {
        "dateTime": "2014-12-05",
        "value": "77"
    },
    {
        "dateTime": "2014-12-06",
        "value": "67"
    },
    {
        "dateTime": "2014-12-07",
        "value": "70"
    },
    {
        "dateTime": "2014-12-08",
        "value": "72"
    },
    {
        "dateTime": "2014-12-09",
        "value": "73"
    },
    {
        "dateTime": "2014-12-10",
        "value": "74"
    },
    {
        "dateTime": "2014-12-11",
        "value": "79"
    },
    {
        "dateTime": "2014-12-12",
        "value": "81"
    },
    {
        "dateTime": "2014-12-13",
        "value": "76"
    },
    {
        "dateTime": "2014-12-14",
        "value": "75"
    },
    {
        "dateTime": "2014-12-15",
        "value": "75"
    },
    {
        "dateTime": "2014-12-16",
        "value": "76"
    },
    {
        "dateTime": "2014-12-17",
        "value": "82"
    },
    {
        "dateTime": "2014-12-18",
        "value": "72"
    },
    {
        "dateTime": "2014-12-19",
        "value": "55"
    },
    {
        "dateTime": "2014-12-20",
        "value": "70"
    },
    {
        "dateTime": "2014-12-21",
        "value": "80"
    },
    {
        "dateTime": "2014-12-22",
        "value": "71"
    },
    {
        "dateTime": "2014-12-23",
        "value": "64"
    },
    {
        "dateTime": "2014-12-24",
        "value": "69"
    },
    {
        "dateTime": "2014-12-25",
        "value": "73"
    },
    {
        "dateTime": "2014-12-26",
        "value": "75"
    },
    {
        "dateTime": "2014-12-27",
        "value": "70"
    },
    {
        "dateTime": "2014-12-28",
        "value": "78"
    },
    {
        "dateTime": "2014-12-29",
        "value": "82"
    },
    {
        "dateTime": "2014-12-30",
        "value": "75"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];
var timeInBed = [
    {
        "dateTime": "2014-01-01",
        "value": "0"
    },
    {
        "dateTime": "2014-01-02",
        "value": "0"
    },
    {
        "dateTime": "2014-01-03",
        "value": "0"
    },
    {
        "dateTime": "2014-01-04",
        "value": "0"
    },
    {
        "dateTime": "2014-01-05",
        "value": "0"
    },
    {
        "dateTime": "2014-01-06",
        "value": "0"
    },
    {
        "dateTime": "2014-01-07",
        "value": "0"
    },
    {
        "dateTime": "2014-01-08",
        "value": "0"
    },
    {
        "dateTime": "2014-01-09",
        "value": "0"
    },
    {
        "dateTime": "2014-01-10",
        "value": "0"
    },
    {
        "dateTime": "2014-01-11",
        "value": "0"
    },
    {
        "dateTime": "2014-01-12",
        "value": "0"
    },
    {
        "dateTime": "2014-01-13",
        "value": "0"
    },
    {
        "dateTime": "2014-01-14",
        "value": "0"
    },
    {
        "dateTime": "2014-01-15",
        "value": "0"
    },
    {
        "dateTime": "2014-01-16",
        "value": "0"
    },
    {
        "dateTime": "2014-01-17",
        "value": "0"
    },
    {
        "dateTime": "2014-01-18",
        "value": "0"
    },
    {
        "dateTime": "2014-01-19",
        "value": "0"
    },
    {
        "dateTime": "2014-01-20",
        "value": "0"
    },
    {
        "dateTime": "2014-01-21",
        "value": "0"
    },
    {
        "dateTime": "2014-01-22",
        "value": "0"
    },
    {
        "dateTime": "2014-01-23",
        "value": "0"
    },
    {
        "dateTime": "2014-01-24",
        "value": "0"
    },
    {
        "dateTime": "2014-01-25",
        "value": "494"
    },
    {
        "dateTime": "2014-01-26",
        "value": "565"
    },
    {
        "dateTime": "2014-01-27",
        "value": "350"
    },
    {
        "dateTime": "2014-01-28",
        "value": "364"
    },
    {
        "dateTime": "2014-01-29",
        "value": "336"
    },
    {
        "dateTime": "2014-01-30",
        "value": "377"
    },
    {
        "dateTime": "2014-01-31",
        "value": "337"
    },
    {
        "dateTime": "2014-02-01",
        "value": "643"
    },
    {
        "dateTime": "2014-02-02",
        "value": "561"
    },
    {
        "dateTime": "2014-02-03",
        "value": "341"
    },
    {
        "dateTime": "2014-02-04",
        "value": "393"
    },
    {
        "dateTime": "2014-02-05",
        "value": "368"
    },
    {
        "dateTime": "2014-02-06",
        "value": "406"
    },
    {
        "dateTime": "2014-02-07",
        "value": "413"
    },
    {
        "dateTime": "2014-02-08",
        "value": "510"
    },
    {
        "dateTime": "2014-02-09",
        "value": "473"
    },
    {
        "dateTime": "2014-02-10",
        "value": "422"
    },
    {
        "dateTime": "2014-02-11",
        "value": "359"
    },
    {
        "dateTime": "2014-02-12",
        "value": "412"
    },
    {
        "dateTime": "2014-02-13",
        "value": "380"
    },
    {
        "dateTime": "2014-02-14",
        "value": "387"
    },
    {
        "dateTime": "2014-02-15",
        "value": "383"
    },
    {
        "dateTime": "2014-02-16",
        "value": "456"
    },
    {
        "dateTime": "2014-02-17",
        "value": "389"
    },
    {
        "dateTime": "2014-02-18",
        "value": "411"
    },
    {
        "dateTime": "2014-02-19",
        "value": "383"
    },
    {
        "dateTime": "2014-02-20",
        "value": "425"
    },
    {
        "dateTime": "2014-02-21",
        "value": "385"
    },
    {
        "dateTime": "2014-02-22",
        "value": "455"
    },
    {
        "dateTime": "2014-02-23",
        "value": "484"
    },
    {
        "dateTime": "2014-02-24",
        "value": "430"
    },
    {
        "dateTime": "2014-02-25",
        "value": "395"
    },
    {
        "dateTime": "2014-02-26",
        "value": "409"
    },
    {
        "dateTime": "2014-02-27",
        "value": "425"
    },
    {
        "dateTime": "2014-02-28",
        "value": "405"
    },
    {
        "dateTime": "2014-03-01",
        "value": "489"
    },
    {
        "dateTime": "2014-03-02",
        "value": "521"
    },
    {
        "dateTime": "2014-03-03",
        "value": "503"
    },
    {
        "dateTime": "2014-03-04",
        "value": "415"
    },
    {
        "dateTime": "2014-03-05",
        "value": "465"
    },
    {
        "dateTime": "2014-03-06",
        "value": "458"
    },
    {
        "dateTime": "2014-03-07",
        "value": "0"
    },
    {
        "dateTime": "2014-03-08",
        "value": "564"
    },
    {
        "dateTime": "2014-03-09",
        "value": "564"
    },
    {
        "dateTime": "2014-03-10",
        "value": "447"
    },
    {
        "dateTime": "2014-03-11",
        "value": "413"
    },
    {
        "dateTime": "2014-03-12",
        "value": "428"
    },
    {
        "dateTime": "2014-03-13",
        "value": "424"
    },
    {
        "dateTime": "2014-03-14",
        "value": "435"
    },
    {
        "dateTime": "2014-03-15",
        "value": "401"
    },
    {
        "dateTime": "2014-03-16",
        "value": "409"
    },
    {
        "dateTime": "2014-03-17",
        "value": "467"
    },
    {
        "dateTime": "2014-03-18",
        "value": "371"
    },
    {
        "dateTime": "2014-03-19",
        "value": "426"
    },
    {
        "dateTime": "2014-03-20",
        "value": "412"
    },
    {
        "dateTime": "2014-03-21",
        "value": "399"
    },
    {
        "dateTime": "2014-03-22",
        "value": "596"
    },
    {
        "dateTime": "2014-03-23",
        "value": "491"
    },
    {
        "dateTime": "2014-03-24",
        "value": "346"
    },
    {
        "dateTime": "2014-03-25",
        "value": "405"
    },
    {
        "dateTime": "2014-03-26",
        "value": "440"
    },
    {
        "dateTime": "2014-03-27",
        "value": "402"
    },
    {
        "dateTime": "2014-03-28",
        "value": "448"
    },
    {
        "dateTime": "2014-03-29",
        "value": "365"
    },
    {
        "dateTime": "2014-03-30",
        "value": "304"
    },
    {
        "dateTime": "2014-03-31",
        "value": "442"
    },
    {
        "dateTime": "2014-04-01",
        "value": "346"
    },
    {
        "dateTime": "2014-04-02",
        "value": "442"
    },
    {
        "dateTime": "2014-04-03",
        "value": "300"
    },
    {
        "dateTime": "2014-04-04",
        "value": "443"
    },
    {
        "dateTime": "2014-04-05",
        "value": "377"
    },
    {
        "dateTime": "2014-04-06",
        "value": "476"
    },
    {
        "dateTime": "2014-04-07",
        "value": "442"
    },
    {
        "dateTime": "2014-04-08",
        "value": "384"
    },
    {
        "dateTime": "2014-04-09",
        "value": "339"
    },
    {
        "dateTime": "2014-04-10",
        "value": "457"
    },
    {
        "dateTime": "2014-04-11",
        "value": "415"
    },
    {
        "dateTime": "2014-04-12",
        "value": "411"
    },
    {
        "dateTime": "2014-04-13",
        "value": "478"
    },
    {
        "dateTime": "2014-04-14",
        "value": "473"
    },
    {
        "dateTime": "2014-04-15",
        "value": "343"
    },
    {
        "dateTime": "2014-04-16",
        "value": "465"
    },
    {
        "dateTime": "2014-04-17",
        "value": "381"
    },
    {
        "dateTime": "2014-04-18",
        "value": "462"
    },
    {
        "dateTime": "2014-04-19",
        "value": "386"
    },
    {
        "dateTime": "2014-04-20",
        "value": "449"
    },
    {
        "dateTime": "2014-04-21",
        "value": "604"
    },
    {
        "dateTime": "2014-04-22",
        "value": "447"
    },
    {
        "dateTime": "2014-04-23",
        "value": "475"
    },
    {
        "dateTime": "2014-04-24",
        "value": "360"
    },
    {
        "dateTime": "2014-04-25",
        "value": "441"
    },
    {
        "dateTime": "2014-04-26",
        "value": "394"
    },
    {
        "dateTime": "2014-04-27",
        "value": "474"
    },
    {
        "dateTime": "2014-04-28",
        "value": "461"
    },
    {
        "dateTime": "2014-04-29",
        "value": "360"
    },
    {
        "dateTime": "2014-04-30",
        "value": "414"
    },
    {
        "dateTime": "2014-05-01",
        "value": "321"
    },
    {
        "dateTime": "2014-05-02",
        "value": "463"
    },
    {
        "dateTime": "2014-05-03",
        "value": "426"
    },
    {
        "dateTime": "2014-05-04",
        "value": "525"
    },
    {
        "dateTime": "2014-05-05",
        "value": "440"
    },
    {
        "dateTime": "2014-05-06",
        "value": "282"
    },
    {
        "dateTime": "2014-05-07",
        "value": "456"
    },
    {
        "dateTime": "2014-05-08",
        "value": "546"
    },
    {
        "dateTime": "2014-05-09",
        "value": "537"
    },
    {
        "dateTime": "2014-05-10",
        "value": "334"
    },
    {
        "dateTime": "2014-05-11",
        "value": "540"
    },
    {
        "dateTime": "2014-05-12",
        "value": "465"
    },
    {
        "dateTime": "2014-05-13",
        "value": "392"
    },
    {
        "dateTime": "2014-05-14",
        "value": "446"
    },
    {
        "dateTime": "2014-05-15",
        "value": "412"
    },
    {
        "dateTime": "2014-05-16",
        "value": "443"
    },
    {
        "dateTime": "2014-05-17",
        "value": "477"
    },
    {
        "dateTime": "2014-05-18",
        "value": "385"
    },
    {
        "dateTime": "2014-05-19",
        "value": "489"
    },
    {
        "dateTime": "2014-05-20",
        "value": "465"
    },
    {
        "dateTime": "2014-05-21",
        "value": "403"
    },
    {
        "dateTime": "2014-05-22",
        "value": "436"
    },
    {
        "dateTime": "2014-05-23",
        "value": "438"
    },
    {
        "dateTime": "2014-05-24",
        "value": "411"
    },
    {
        "dateTime": "2014-05-25",
        "value": "360"
    },
    {
        "dateTime": "2014-05-26",
        "value": "392"
    },
    {
        "dateTime": "2014-05-27",
        "value": "446"
    },
    {
        "dateTime": "2014-05-28",
        "value": "452"
    },
    {
        "dateTime": "2014-05-29",
        "value": "454"
    },
    {
        "dateTime": "2014-05-30",
        "value": "449"
    },
    {
        "dateTime": "2014-05-31",
        "value": "473"
    },
    {
        "dateTime": "2014-06-01",
        "value": "447"
    },
    {
        "dateTime": "2014-06-02",
        "value": "429"
    },
    {
        "dateTime": "2014-06-03",
        "value": "363"
    },
    {
        "dateTime": "2014-06-04",
        "value": "392"
    },
    {
        "dateTime": "2014-06-05",
        "value": "443"
    },
    {
        "dateTime": "2014-06-06",
        "value": "455"
    },
    {
        "dateTime": "2014-06-07",
        "value": "404"
    },
    {
        "dateTime": "2014-06-08",
        "value": "558"
    },
    {
        "dateTime": "2014-06-09",
        "value": "460"
    },
    {
        "dateTime": "2014-06-10",
        "value": "404"
    },
    {
        "dateTime": "2014-06-11",
        "value": "435"
    },
    {
        "dateTime": "2014-06-12",
        "value": "415"
    },
    {
        "dateTime": "2014-06-13",
        "value": "340"
    },
    {
        "dateTime": "2014-06-14",
        "value": "327"
    },
    {
        "dateTime": "2014-06-15",
        "value": "407"
    },
    {
        "dateTime": "2014-06-16",
        "value": "425"
    },
    {
        "dateTime": "2014-06-17",
        "value": "383"
    },
    {
        "dateTime": "2014-06-18",
        "value": "422"
    },
    {
        "dateTime": "2014-06-19",
        "value": "373"
    },
    {
        "dateTime": "2014-06-20",
        "value": "426"
    },
    {
        "dateTime": "2014-06-21",
        "value": "468"
    },
    {
        "dateTime": "2014-06-22",
        "value": "424"
    },
    {
        "dateTime": "2014-06-23",
        "value": "445"
    },
    {
        "dateTime": "2014-06-24",
        "value": "374"
    },
    {
        "dateTime": "2014-06-25",
        "value": "389"
    },
    {
        "dateTime": "2014-06-26",
        "value": "417"
    },
    {
        "dateTime": "2014-06-27",
        "value": "406"
    },
    {
        "dateTime": "2014-06-28",
        "value": "540"
    },
    {
        "dateTime": "2014-06-29",
        "value": "552"
    },
    {
        "dateTime": "2014-06-30",
        "value": "436"
    },
    {
        "dateTime": "2014-07-01",
        "value": "418"
    },
    {
        "dateTime": "2014-07-02",
        "value": "405"
    },
    {
        "dateTime": "2014-07-03",
        "value": "413"
    },
    {
        "dateTime": "2014-07-04",
        "value": "415"
    },
    {
        "dateTime": "2014-07-05",
        "value": "431"
    },
    {
        "dateTime": "2014-07-06",
        "value": "568"
    },
    {
        "dateTime": "2014-07-07",
        "value": "361"
    },
    {
        "dateTime": "2014-07-08",
        "value": "418"
    },
    {
        "dateTime": "2014-07-09",
        "value": "392"
    },
    {
        "dateTime": "2014-07-10",
        "value": "382"
    },
    {
        "dateTime": "2014-07-11",
        "value": "401"
    },
    {
        "dateTime": "2014-07-12",
        "value": "456"
    },
    {
        "dateTime": "2014-07-13",
        "value": "496"
    },
    {
        "dateTime": "2014-07-14",
        "value": "482"
    },
    {
        "dateTime": "2014-07-15",
        "value": "493"
    },
    {
        "dateTime": "2014-07-16",
        "value": "528"
    },
    {
        "dateTime": "2014-07-17",
        "value": "480"
    },
    {
        "dateTime": "2014-07-18",
        "value": "505"
    },
    {
        "dateTime": "2014-07-19",
        "value": "449"
    },
    {
        "dateTime": "2014-07-20",
        "value": "509"
    },
    {
        "dateTime": "2014-07-21",
        "value": "431"
    },
    {
        "dateTime": "2014-07-22",
        "value": "364"
    },
    {
        "dateTime": "2014-07-23",
        "value": "388"
    },
    {
        "dateTime": "2014-07-24",
        "value": "429"
    },
    {
        "dateTime": "2014-07-25",
        "value": "434"
    },
    {
        "dateTime": "2014-07-26",
        "value": "463"
    },
    {
        "dateTime": "2014-07-27",
        "value": "554"
    },
    {
        "dateTime": "2014-07-28",
        "value": "426"
    },
    {
        "dateTime": "2014-07-29",
        "value": "373"
    },
    {
        "dateTime": "2014-07-30",
        "value": "416"
    },
    {
        "dateTime": "2014-07-31",
        "value": "430"
    },
    {
        "dateTime": "2014-08-01",
        "value": "382"
    },
    {
        "dateTime": "2014-08-02",
        "value": "568"
    },
    {
        "dateTime": "2014-08-03",
        "value": "573"
    },
    {
        "dateTime": "2014-08-04",
        "value": "437"
    },
    {
        "dateTime": "2014-08-05",
        "value": "421"
    },
    {
        "dateTime": "2014-08-06",
        "value": "379"
    },
    {
        "dateTime": "2014-08-07",
        "value": "474"
    },
    {
        "dateTime": "2014-08-08",
        "value": "429"
    },
    {
        "dateTime": "2014-08-09",
        "value": "472"
    },
    {
        "dateTime": "2014-08-10",
        "value": "510"
    },
    {
        "dateTime": "2014-08-11",
        "value": "415"
    },
    {
        "dateTime": "2014-08-12",
        "value": "380"
    },
    {
        "dateTime": "2014-08-13",
        "value": "397"
    },
    {
        "dateTime": "2014-08-14",
        "value": "318"
    },
    {
        "dateTime": "2014-08-15",
        "value": "458"
    },
    {
        "dateTime": "2014-08-16",
        "value": "551"
    },
    {
        "dateTime": "2014-08-17",
        "value": "413"
    },
    {
        "dateTime": "2014-08-18",
        "value": "424"
    },
    {
        "dateTime": "2014-08-19",
        "value": "360"
    },
    {
        "dateTime": "2014-08-20",
        "value": "381"
    },
    {
        "dateTime": "2014-08-21",
        "value": "385"
    },
    {
        "dateTime": "2014-08-22",
        "value": "371"
    },
    {
        "dateTime": "2014-08-23",
        "value": "491"
    },
    {
        "dateTime": "2014-08-24",
        "value": "510"
    },
    {
        "dateTime": "2014-08-25",
        "value": "483"
    },
    {
        "dateTime": "2014-08-26",
        "value": "393"
    },
    {
        "dateTime": "2014-08-27",
        "value": "422"
    },
    {
        "dateTime": "2014-08-28",
        "value": "392"
    },
    {
        "dateTime": "2014-08-29",
        "value": "410"
    },
    {
        "dateTime": "2014-08-30",
        "value": "413"
    },
    {
        "dateTime": "2014-08-31",
        "value": "414"
    },
    {
        "dateTime": "2014-09-01",
        "value": "444"
    },
    {
        "dateTime": "2014-09-02",
        "value": "341"
    },
    {
        "dateTime": "2014-09-03",
        "value": "397"
    },
    {
        "dateTime": "2014-09-04",
        "value": "398"
    },
    {
        "dateTime": "2014-09-05",
        "value": "395"
    },
    {
        "dateTime": "2014-09-06",
        "value": "491"
    },
    {
        "dateTime": "2014-09-07",
        "value": "341"
    },
    {
        "dateTime": "2014-09-08",
        "value": "453"
    },
    {
        "dateTime": "2014-09-09",
        "value": "368"
    },
    {
        "dateTime": "2014-09-10",
        "value": "357"
    },
    {
        "dateTime": "2014-09-11",
        "value": "408"
    },
    {
        "dateTime": "2014-09-12",
        "value": "396"
    },
    {
        "dateTime": "2014-09-13",
        "value": "407"
    },
    {
        "dateTime": "2014-09-14",
        "value": "502"
    },
    {
        "dateTime": "2014-09-15",
        "value": "438"
    },
    {
        "dateTime": "2014-09-16",
        "value": "377"
    },
    {
        "dateTime": "2014-09-17",
        "value": "442"
    },
    {
        "dateTime": "2014-09-18",
        "value": "332"
    },
    {
        "dateTime": "2014-09-19",
        "value": "384"
    },
    {
        "dateTime": "2014-09-20",
        "value": "503"
    },
    {
        "dateTime": "2014-09-21",
        "value": "442"
    },
    {
        "dateTime": "2014-09-22",
        "value": "439"
    },
    {
        "dateTime": "2014-09-23",
        "value": "435"
    },
    {
        "dateTime": "2014-09-24",
        "value": "430"
    },
    {
        "dateTime": "2014-09-25",
        "value": "416"
    },
    {
        "dateTime": "2014-09-26",
        "value": "441"
    },
    {
        "dateTime": "2014-09-27",
        "value": "530"
    },
    {
        "dateTime": "2014-09-28",
        "value": "427"
    },
    {
        "dateTime": "2014-09-29",
        "value": "437"
    },
    {
        "dateTime": "2014-09-30",
        "value": "451"
    },
    {
        "dateTime": "2014-10-01",
        "value": "399"
    },
    {
        "dateTime": "2014-10-02",
        "value": "458"
    },
    {
        "dateTime": "2014-10-03",
        "value": "420"
    },
    {
        "dateTime": "2014-10-04",
        "value": "314"
    },
    {
        "dateTime": "2014-10-05",
        "value": "565"
    },
    {
        "dateTime": "2014-10-06",
        "value": "401"
    },
    {
        "dateTime": "2014-10-07",
        "value": "363"
    },
    {
        "dateTime": "2014-10-08",
        "value": "433"
    },
    {
        "dateTime": "2014-10-09",
        "value": "384"
    },
    {
        "dateTime": "2014-10-10",
        "value": "441"
    },
    {
        "dateTime": "2014-10-11",
        "value": "607"
    },
    {
        "dateTime": "2014-10-12",
        "value": "521"
    },
    {
        "dateTime": "2014-10-13",
        "value": "436"
    },
    {
        "dateTime": "2014-10-14",
        "value": "339"
    },
    {
        "dateTime": "2014-10-15",
        "value": "514"
    },
    {
        "dateTime": "2014-10-16",
        "value": "403"
    },
    {
        "dateTime": "2014-10-17",
        "value": "308"
    },
    {
        "dateTime": "2014-10-18",
        "value": "610"
    },
    {
        "dateTime": "2014-10-19",
        "value": "454"
    },
    {
        "dateTime": "2014-10-20",
        "value": "450"
    },
    {
        "dateTime": "2014-10-21",
        "value": "434"
    },
    {
        "dateTime": "2014-10-22",
        "value": "444"
    },
    {
        "dateTime": "2014-10-23",
        "value": "343"
    },
    {
        "dateTime": "2014-10-24",
        "value": "407"
    },
    {
        "dateTime": "2014-10-25",
        "value": "544"
    },
    {
        "dateTime": "2014-10-26",
        "value": "523"
    },
    {
        "dateTime": "2014-10-27",
        "value": "454"
    },
    {
        "dateTime": "2014-10-28",
        "value": "359"
    },
    {
        "dateTime": "2014-10-29",
        "value": "428"
    },
    {
        "dateTime": "2014-10-30",
        "value": "368"
    },
    {
        "dateTime": "2014-10-31",
        "value": "421"
    },
    {
        "dateTime": "2014-11-01",
        "value": "484"
    },
    {
        "dateTime": "2014-11-02",
        "value": "378"
    },
    {
        "dateTime": "2014-11-03",
        "value": "506"
    },
    {
        "dateTime": "2014-11-04",
        "value": "437"
    },
    {
        "dateTime": "2014-11-05",
        "value": "403"
    },
    {
        "dateTime": "2014-11-06",
        "value": "383"
    },
    {
        "dateTime": "2014-11-07",
        "value": "412"
    },
    {
        "dateTime": "2014-11-08",
        "value": "482"
    },
    {
        "dateTime": "2014-11-09",
        "value": "554"
    },
    {
        "dateTime": "2014-11-10",
        "value": "398"
    },
    {
        "dateTime": "2014-11-11",
        "value": "422"
    },
    {
        "dateTime": "2014-11-12",
        "value": "491"
    },
    {
        "dateTime": "2014-11-13",
        "value": "387"
    },
    {
        "dateTime": "2014-11-14",
        "value": "404"
    },
    {
        "dateTime": "2014-11-15",
        "value": "444"
    },
    {
        "dateTime": "2014-11-16",
        "value": "498"
    },
    {
        "dateTime": "2014-11-17",
        "value": "429"
    },
    {
        "dateTime": "2014-11-18",
        "value": "428"
    },
    {
        "dateTime": "2014-11-19",
        "value": "425"
    },
    {
        "dateTime": "2014-11-20",
        "value": "419"
    },
    {
        "dateTime": "2014-11-21",
        "value": "398"
    },
    {
        "dateTime": "2014-11-22",
        "value": "546"
    },
    {
        "dateTime": "2014-11-23",
        "value": "472"
    },
    {
        "dateTime": "2014-11-24",
        "value": "406"
    },
    {
        "dateTime": "2014-11-25",
        "value": "403"
    },
    {
        "dateTime": "2014-11-26",
        "value": "321"
    },
    {
        "dateTime": "2014-11-27",
        "value": "414"
    },
    {
        "dateTime": "2014-11-28",
        "value": "363"
    },
    {
        "dateTime": "2014-11-29",
        "value": "481"
    },
    {
        "dateTime": "2014-11-30",
        "value": "449"
    },
    {
        "dateTime": "2014-12-01",
        "value": "445"
    },
    {
        "dateTime": "2014-12-02",
        "value": "430"
    },
    {
        "dateTime": "2014-12-03",
        "value": "393"
    },
    {
        "dateTime": "2014-12-04",
        "value": "452"
    },
    {
        "dateTime": "2014-12-05",
        "value": "405"
    },
    {
        "dateTime": "2014-12-06",
        "value": "443"
    },
    {
        "dateTime": "2014-12-07",
        "value": "522"
    },
    {
        "dateTime": "2014-12-08",
        "value": "408"
    },
    {
        "dateTime": "2014-12-09",
        "value": "420"
    },
    {
        "dateTime": "2014-12-10",
        "value": "412"
    },
    {
        "dateTime": "2014-12-11",
        "value": "401"
    },
    {
        "dateTime": "2014-12-12",
        "value": "365"
    },
    {
        "dateTime": "2014-12-13",
        "value": "630"
    },
    {
        "dateTime": "2014-12-14",
        "value": "490"
    },
    {
        "dateTime": "2014-12-15",
        "value": "465"
    },
    {
        "dateTime": "2014-12-16",
        "value": "389"
    },
    {
        "dateTime": "2014-12-17",
        "value": "401"
    },
    {
        "dateTime": "2014-12-18",
        "value": "449"
    },
    {
        "dateTime": "2014-12-19",
        "value": "371"
    },
    {
        "dateTime": "2014-12-20",
        "value": "521"
    },
    {
        "dateTime": "2014-12-21",
        "value": "563"
    },
    {
        "dateTime": "2014-12-22",
        "value": "438"
    },
    {
        "dateTime": "2014-12-23",
        "value": "459"
    },
    {
        "dateTime": "2014-12-24",
        "value": "535"
    },
    {
        "dateTime": "2014-12-25",
        "value": "456"
    },
    {
        "dateTime": "2014-12-26",
        "value": "540"
    },
    {
        "dateTime": "2014-12-27",
        "value": "573"
    },
    {
        "dateTime": "2014-12-28",
        "value": "587"
    },
    {
        "dateTime": "2014-12-29",
        "value": "402"
    },
    {
        "dateTime": "2014-12-30",
        "value": "360"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];
var minutesAsleep = [
    {
        "dateTime": "2014-01-01",
        "value": "0"
    },
    {
        "dateTime": "2014-01-02",
        "value": "0"
    },
    {
        "dateTime": "2014-01-03",
        "value": "0"
    },
    {
        "dateTime": "2014-01-04",
        "value": "0"
    },
    {
        "dateTime": "2014-01-05",
        "value": "0"
    },
    {
        "dateTime": "2014-01-06",
        "value": "0"
    },
    {
        "dateTime": "2014-01-07",
        "value": "0"
    },
    {
        "dateTime": "2014-01-08",
        "value": "0"
    },
    {
        "dateTime": "2014-01-09",
        "value": "0"
    },
    {
        "dateTime": "2014-01-10",
        "value": "0"
    },
    {
        "dateTime": "2014-01-11",
        "value": "0"
    },
    {
        "dateTime": "2014-01-12",
        "value": "0"
    },
    {
        "dateTime": "2014-01-13",
        "value": "0"
    },
    {
        "dateTime": "2014-01-14",
        "value": "0"
    },
    {
        "dateTime": "2014-01-15",
        "value": "0"
    },
    {
        "dateTime": "2014-01-16",
        "value": "0"
    },
    {
        "dateTime": "2014-01-17",
        "value": "0"
    },
    {
        "dateTime": "2014-01-18",
        "value": "0"
    },
    {
        "dateTime": "2014-01-19",
        "value": "0"
    },
    {
        "dateTime": "2014-01-20",
        "value": "0"
    },
    {
        "dateTime": "2014-01-21",
        "value": "0"
    },
    {
        "dateTime": "2014-01-22",
        "value": "0"
    },
    {
        "dateTime": "2014-01-23",
        "value": "0"
    },
    {
        "dateTime": "2014-01-24",
        "value": "0"
    },
    {
        "dateTime": "2014-01-25",
        "value": "479"
    },
    {
        "dateTime": "2014-01-26",
        "value": "552"
    },
    {
        "dateTime": "2014-01-27",
        "value": "220"
    },
    {
        "dateTime": "2014-01-28",
        "value": "258"
    },
    {
        "dateTime": "2014-01-29",
        "value": "270"
    },
    {
        "dateTime": "2014-01-30",
        "value": "291"
    },
    {
        "dateTime": "2014-01-31",
        "value": "206"
    },
    {
        "dateTime": "2014-02-01",
        "value": "459"
    },
    {
        "dateTime": "2014-02-02",
        "value": "411"
    },
    {
        "dateTime": "2014-02-03",
        "value": "229"
    },
    {
        "dateTime": "2014-02-04",
        "value": "297"
    },
    {
        "dateTime": "2014-02-05",
        "value": "228"
    },
    {
        "dateTime": "2014-02-06",
        "value": "326"
    },
    {
        "dateTime": "2014-02-07",
        "value": "313"
    },
    {
        "dateTime": "2014-02-08",
        "value": "359"
    },
    {
        "dateTime": "2014-02-09",
        "value": "314"
    },
    {
        "dateTime": "2014-02-10",
        "value": "333"
    },
    {
        "dateTime": "2014-02-11",
        "value": "284"
    },
    {
        "dateTime": "2014-02-12",
        "value": "317"
    },
    {
        "dateTime": "2014-02-13",
        "value": "261"
    },
    {
        "dateTime": "2014-02-14",
        "value": "275"
    },
    {
        "dateTime": "2014-02-15",
        "value": "274"
    },
    {
        "dateTime": "2014-02-16",
        "value": "346"
    },
    {
        "dateTime": "2014-02-17",
        "value": "282"
    },
    {
        "dateTime": "2014-02-18",
        "value": "311"
    },
    {
        "dateTime": "2014-02-19",
        "value": "263"
    },
    {
        "dateTime": "2014-02-20",
        "value": "287"
    },
    {
        "dateTime": "2014-02-21",
        "value": "271"
    },
    {
        "dateTime": "2014-02-22",
        "value": "344"
    },
    {
        "dateTime": "2014-02-23",
        "value": "357"
    },
    {
        "dateTime": "2014-02-24",
        "value": "334"
    },
    {
        "dateTime": "2014-02-25",
        "value": "253"
    },
    {
        "dateTime": "2014-02-26",
        "value": "317"
    },
    {
        "dateTime": "2014-02-27",
        "value": "332"
    },
    {
        "dateTime": "2014-02-28",
        "value": "250"
    },
    {
        "dateTime": "2014-03-01",
        "value": "406"
    },
    {
        "dateTime": "2014-03-02",
        "value": "364"
    },
    {
        "dateTime": "2014-03-03",
        "value": "392"
    },
    {
        "dateTime": "2014-03-04",
        "value": "311"
    },
    {
        "dateTime": "2014-03-05",
        "value": "315"
    },
    {
        "dateTime": "2014-03-06",
        "value": "315"
    },
    {
        "dateTime": "2014-03-07",
        "value": "0"
    },
    {
        "dateTime": "2014-03-08",
        "value": "402"
    },
    {
        "dateTime": "2014-03-09",
        "value": "422"
    },
    {
        "dateTime": "2014-03-10",
        "value": "324"
    },
    {
        "dateTime": "2014-03-11",
        "value": "266"
    },
    {
        "dateTime": "2014-03-12",
        "value": "311"
    },
    {
        "dateTime": "2014-03-13",
        "value": "321"
    },
    {
        "dateTime": "2014-03-14",
        "value": "312"
    },
    {
        "dateTime": "2014-03-15",
        "value": "284"
    },
    {
        "dateTime": "2014-03-16",
        "value": "250"
    },
    {
        "dateTime": "2014-03-17",
        "value": "359"
    },
    {
        "dateTime": "2014-03-18",
        "value": "250"
    },
    {
        "dateTime": "2014-03-19",
        "value": "310"
    },
    {
        "dateTime": "2014-03-20",
        "value": "298"
    },
    {
        "dateTime": "2014-03-21",
        "value": "266"
    },
    {
        "dateTime": "2014-03-22",
        "value": "459"
    },
    {
        "dateTime": "2014-03-23",
        "value": "343"
    },
    {
        "dateTime": "2014-03-24",
        "value": "242"
    },
    {
        "dateTime": "2014-03-25",
        "value": "279"
    },
    {
        "dateTime": "2014-03-26",
        "value": "275"
    },
    {
        "dateTime": "2014-03-27",
        "value": "290"
    },
    {
        "dateTime": "2014-03-28",
        "value": "344"
    },
    {
        "dateTime": "2014-03-29",
        "value": "265"
    },
    {
        "dateTime": "2014-03-30",
        "value": "224"
    },
    {
        "dateTime": "2014-03-31",
        "value": "274"
    },
    {
        "dateTime": "2014-04-01",
        "value": "240"
    },
    {
        "dateTime": "2014-04-02",
        "value": "379"
    },
    {
        "dateTime": "2014-04-03",
        "value": "221"
    },
    {
        "dateTime": "2014-04-04",
        "value": "344"
    },
    {
        "dateTime": "2014-04-05",
        "value": "305"
    },
    {
        "dateTime": "2014-04-06",
        "value": "353"
    },
    {
        "dateTime": "2014-04-07",
        "value": "319"
    },
    {
        "dateTime": "2014-04-08",
        "value": "300"
    },
    {
        "dateTime": "2014-04-09",
        "value": "231"
    },
    {
        "dateTime": "2014-04-10",
        "value": "342"
    },
    {
        "dateTime": "2014-04-11",
        "value": "333"
    },
    {
        "dateTime": "2014-04-12",
        "value": "304"
    },
    {
        "dateTime": "2014-04-13",
        "value": "334"
    },
    {
        "dateTime": "2014-04-14",
        "value": "339"
    },
    {
        "dateTime": "2014-04-15",
        "value": "204"
    },
    {
        "dateTime": "2014-04-16",
        "value": "328"
    },
    {
        "dateTime": "2014-04-17",
        "value": "273"
    },
    {
        "dateTime": "2014-04-18",
        "value": "339"
    },
    {
        "dateTime": "2014-04-19",
        "value": "272"
    },
    {
        "dateTime": "2014-04-20",
        "value": "370"
    },
    {
        "dateTime": "2014-04-21",
        "value": "443"
    },
    {
        "dateTime": "2014-04-22",
        "value": "315"
    },
    {
        "dateTime": "2014-04-23",
        "value": "342"
    },
    {
        "dateTime": "2014-04-24",
        "value": "279"
    },
    {
        "dateTime": "2014-04-25",
        "value": "314"
    },
    {
        "dateTime": "2014-04-26",
        "value": "269"
    },
    {
        "dateTime": "2014-04-27",
        "value": "358"
    },
    {
        "dateTime": "2014-04-28",
        "value": "332"
    },
    {
        "dateTime": "2014-04-29",
        "value": "254"
    },
    {
        "dateTime": "2014-04-30",
        "value": "276"
    },
    {
        "dateTime": "2014-05-01",
        "value": "225"
    },
    {
        "dateTime": "2014-05-02",
        "value": "325"
    },
    {
        "dateTime": "2014-05-03",
        "value": "314"
    },
    {
        "dateTime": "2014-05-04",
        "value": "361"
    },
    {
        "dateTime": "2014-05-05",
        "value": "299"
    },
    {
        "dateTime": "2014-05-06",
        "value": "188"
    },
    {
        "dateTime": "2014-05-07",
        "value": "373"
    },
    {
        "dateTime": "2014-05-08",
        "value": "369"
    },
    {
        "dateTime": "2014-05-09",
        "value": "300"
    },
    {
        "dateTime": "2014-05-10",
        "value": "206"
    },
    {
        "dateTime": "2014-05-11",
        "value": "401"
    },
    {
        "dateTime": "2014-05-12",
        "value": "293"
    },
    {
        "dateTime": "2014-05-13",
        "value": "296"
    },
    {
        "dateTime": "2014-05-14",
        "value": "340"
    },
    {
        "dateTime": "2014-05-15",
        "value": "335"
    },
    {
        "dateTime": "2014-05-16",
        "value": "314"
    },
    {
        "dateTime": "2014-05-17",
        "value": "348"
    },
    {
        "dateTime": "2014-05-18",
        "value": "269"
    },
    {
        "dateTime": "2014-05-19",
        "value": "317"
    },
    {
        "dateTime": "2014-05-20",
        "value": "341"
    },
    {
        "dateTime": "2014-05-21",
        "value": "262"
    },
    {
        "dateTime": "2014-05-22",
        "value": "296"
    },
    {
        "dateTime": "2014-05-23",
        "value": "295"
    },
    {
        "dateTime": "2014-05-24",
        "value": "337"
    },
    {
        "dateTime": "2014-05-25",
        "value": "267"
    },
    {
        "dateTime": "2014-05-26",
        "value": "300"
    },
    {
        "dateTime": "2014-05-27",
        "value": "273"
    },
    {
        "dateTime": "2014-05-28",
        "value": "325"
    },
    {
        "dateTime": "2014-05-29",
        "value": "348"
    },
    {
        "dateTime": "2014-05-30",
        "value": "306"
    },
    {
        "dateTime": "2014-05-31",
        "value": "321"
    },
    {
        "dateTime": "2014-06-01",
        "value": "337"
    },
    {
        "dateTime": "2014-06-02",
        "value": "290"
    },
    {
        "dateTime": "2014-06-03",
        "value": "285"
    },
    {
        "dateTime": "2014-06-04",
        "value": "296"
    },
    {
        "dateTime": "2014-06-05",
        "value": "331"
    },
    {
        "dateTime": "2014-06-06",
        "value": "397"
    },
    {
        "dateTime": "2014-06-07",
        "value": "236"
    },
    {
        "dateTime": "2014-06-08",
        "value": "387"
    },
    {
        "dateTime": "2014-06-09",
        "value": "359"
    },
    {
        "dateTime": "2014-06-10",
        "value": "247"
    },
    {
        "dateTime": "2014-06-11",
        "value": "325"
    },
    {
        "dateTime": "2014-06-12",
        "value": "343"
    },
    {
        "dateTime": "2014-06-13",
        "value": "252"
    },
    {
        "dateTime": "2014-06-14",
        "value": "260"
    },
    {
        "dateTime": "2014-06-15",
        "value": "254"
    },
    {
        "dateTime": "2014-06-16",
        "value": "318"
    },
    {
        "dateTime": "2014-06-17",
        "value": "295"
    },
    {
        "dateTime": "2014-06-18",
        "value": "335"
    },
    {
        "dateTime": "2014-06-19",
        "value": "226"
    },
    {
        "dateTime": "2014-06-20",
        "value": "289"
    },
    {
        "dateTime": "2014-06-21",
        "value": "292"
    },
    {
        "dateTime": "2014-06-22",
        "value": "303"
    },
    {
        "dateTime": "2014-06-23",
        "value": "306"
    },
    {
        "dateTime": "2014-06-24",
        "value": "273"
    },
    {
        "dateTime": "2014-06-25",
        "value": "257"
    },
    {
        "dateTime": "2014-06-26",
        "value": "353"
    },
    {
        "dateTime": "2014-06-27",
        "value": "287"
    },
    {
        "dateTime": "2014-06-28",
        "value": "408"
    },
    {
        "dateTime": "2014-06-29",
        "value": "377"
    },
    {
        "dateTime": "2014-06-30",
        "value": "314"
    },
    {
        "dateTime": "2014-07-01",
        "value": "322"
    },
    {
        "dateTime": "2014-07-02",
        "value": "280"
    },
    {
        "dateTime": "2014-07-03",
        "value": "305"
    },
    {
        "dateTime": "2014-07-04",
        "value": "309"
    },
    {
        "dateTime": "2014-07-05",
        "value": "288"
    },
    {
        "dateTime": "2014-07-06",
        "value": "393"
    },
    {
        "dateTime": "2014-07-07",
        "value": "203"
    },
    {
        "dateTime": "2014-07-08",
        "value": "314"
    },
    {
        "dateTime": "2014-07-09",
        "value": "313"
    },
    {
        "dateTime": "2014-07-10",
        "value": "253"
    },
    {
        "dateTime": "2014-07-11",
        "value": "302"
    },
    {
        "dateTime": "2014-07-12",
        "value": "347"
    },
    {
        "dateTime": "2014-07-13",
        "value": "316"
    },
    {
        "dateTime": "2014-07-14",
        "value": "336"
    },
    {
        "dateTime": "2014-07-15",
        "value": "382"
    },
    {
        "dateTime": "2014-07-16",
        "value": "329"
    },
    {
        "dateTime": "2014-07-17",
        "value": "321"
    },
    {
        "dateTime": "2014-07-18",
        "value": "302"
    },
    {
        "dateTime": "2014-07-19",
        "value": "361"
    },
    {
        "dateTime": "2014-07-20",
        "value": "339"
    },
    {
        "dateTime": "2014-07-21",
        "value": "290"
    },
    {
        "dateTime": "2014-07-22",
        "value": "213"
    },
    {
        "dateTime": "2014-07-23",
        "value": "270"
    },
    {
        "dateTime": "2014-07-24",
        "value": "327"
    },
    {
        "dateTime": "2014-07-25",
        "value": "254"
    },
    {
        "dateTime": "2014-07-26",
        "value": "350"
    },
    {
        "dateTime": "2014-07-27",
        "value": "394"
    },
    {
        "dateTime": "2014-07-28",
        "value": "271"
    },
    {
        "dateTime": "2014-07-29",
        "value": "215"
    },
    {
        "dateTime": "2014-07-30",
        "value": "255"
    },
    {
        "dateTime": "2014-07-31",
        "value": "294"
    },
    {
        "dateTime": "2014-08-01",
        "value": "261"
    },
    {
        "dateTime": "2014-08-02",
        "value": "415"
    },
    {
        "dateTime": "2014-08-03",
        "value": "393"
    },
    {
        "dateTime": "2014-08-04",
        "value": "276"
    },
    {
        "dateTime": "2014-08-05",
        "value": "229"
    },
    {
        "dateTime": "2014-08-06",
        "value": "241"
    },
    {
        "dateTime": "2014-08-07",
        "value": "274"
    },
    {
        "dateTime": "2014-08-08",
        "value": "298"
    },
    {
        "dateTime": "2014-08-09",
        "value": "339"
    },
    {
        "dateTime": "2014-08-10",
        "value": "316"
    },
    {
        "dateTime": "2014-08-11",
        "value": "220"
    },
    {
        "dateTime": "2014-08-12",
        "value": "284"
    },
    {
        "dateTime": "2014-08-13",
        "value": "328"
    },
    {
        "dateTime": "2014-08-14",
        "value": "224"
    },
    {
        "dateTime": "2014-08-15",
        "value": "344"
    },
    {
        "dateTime": "2014-08-16",
        "value": "371"
    },
    {
        "dateTime": "2014-08-17",
        "value": "242"
    },
    {
        "dateTime": "2014-08-18",
        "value": "257"
    },
    {
        "dateTime": "2014-08-19",
        "value": "308"
    },
    {
        "dateTime": "2014-08-20",
        "value": "310"
    },
    {
        "dateTime": "2014-08-21",
        "value": "286"
    },
    {
        "dateTime": "2014-08-22",
        "value": "257"
    },
    {
        "dateTime": "2014-08-23",
        "value": "325"
    },
    {
        "dateTime": "2014-08-24",
        "value": "366"
    },
    {
        "dateTime": "2014-08-25",
        "value": "346"
    },
    {
        "dateTime": "2014-08-26",
        "value": "231"
    },
    {
        "dateTime": "2014-08-27",
        "value": "344"
    },
    {
        "dateTime": "2014-08-28",
        "value": "294"
    },
    {
        "dateTime": "2014-08-29",
        "value": "279"
    },
    {
        "dateTime": "2014-08-30",
        "value": "326"
    },
    {
        "dateTime": "2014-08-31",
        "value": "310"
    },
    {
        "dateTime": "2014-09-01",
        "value": "274"
    },
    {
        "dateTime": "2014-09-02",
        "value": "227"
    },
    {
        "dateTime": "2014-09-03",
        "value": "299"
    },
    {
        "dateTime": "2014-09-04",
        "value": "288"
    },
    {
        "dateTime": "2014-09-05",
        "value": "273"
    },
    {
        "dateTime": "2014-09-06",
        "value": "378"
    },
    {
        "dateTime": "2014-09-07",
        "value": "197"
    },
    {
        "dateTime": "2014-09-08",
        "value": "287"
    },
    {
        "dateTime": "2014-09-09",
        "value": "267"
    },
    {
        "dateTime": "2014-09-10",
        "value": "233"
    },
    {
        "dateTime": "2014-09-11",
        "value": "279"
    },
    {
        "dateTime": "2014-09-12",
        "value": "295"
    },
    {
        "dateTime": "2014-09-13",
        "value": "296"
    },
    {
        "dateTime": "2014-09-14",
        "value": "282"
    },
    {
        "dateTime": "2014-09-15",
        "value": "273"
    },
    {
        "dateTime": "2014-09-16",
        "value": "248"
    },
    {
        "dateTime": "2014-09-17",
        "value": "316"
    },
    {
        "dateTime": "2014-09-18",
        "value": "257"
    },
    {
        "dateTime": "2014-09-19",
        "value": "246"
    },
    {
        "dateTime": "2014-09-20",
        "value": "308"
    },
    {
        "dateTime": "2014-09-21",
        "value": "318"
    },
    {
        "dateTime": "2014-09-22",
        "value": "299"
    },
    {
        "dateTime": "2014-09-23",
        "value": "341"
    },
    {
        "dateTime": "2014-09-24",
        "value": "365"
    },
    {
        "dateTime": "2014-09-25",
        "value": "260"
    },
    {
        "dateTime": "2014-09-26",
        "value": "256"
    },
    {
        "dateTime": "2014-09-27",
        "value": "393"
    },
    {
        "dateTime": "2014-09-28",
        "value": "290"
    },
    {
        "dateTime": "2014-09-29",
        "value": "298"
    },
    {
        "dateTime": "2014-09-30",
        "value": "313"
    },
    {
        "dateTime": "2014-10-01",
        "value": "268"
    },
    {
        "dateTime": "2014-10-02",
        "value": "329"
    },
    {
        "dateTime": "2014-10-03",
        "value": "297"
    },
    {
        "dateTime": "2014-10-04",
        "value": "226"
    },
    {
        "dateTime": "2014-10-05",
        "value": "439"
    },
    {
        "dateTime": "2014-10-06",
        "value": "288"
    },
    {
        "dateTime": "2014-10-07",
        "value": "274"
    },
    {
        "dateTime": "2014-10-08",
        "value": "293"
    },
    {
        "dateTime": "2014-10-09",
        "value": "262"
    },
    {
        "dateTime": "2014-10-10",
        "value": "310"
    },
    {
        "dateTime": "2014-10-11",
        "value": "368"
    },
    {
        "dateTime": "2014-10-12",
        "value": "376"
    },
    {
        "dateTime": "2014-10-13",
        "value": "308"
    },
    {
        "dateTime": "2014-10-14",
        "value": "240"
    },
    {
        "dateTime": "2014-10-15",
        "value": "302"
    },
    {
        "dateTime": "2014-10-16",
        "value": "298"
    },
    {
        "dateTime": "2014-10-17",
        "value": "230"
    },
    {
        "dateTime": "2014-10-18",
        "value": "443"
    },
    {
        "dateTime": "2014-10-19",
        "value": "334"
    },
    {
        "dateTime": "2014-10-20",
        "value": "311"
    },
    {
        "dateTime": "2014-10-21",
        "value": "295"
    },
    {
        "dateTime": "2014-10-22",
        "value": "307"
    },
    {
        "dateTime": "2014-10-23",
        "value": "221"
    },
    {
        "dateTime": "2014-10-24",
        "value": "326"
    },
    {
        "dateTime": "2014-10-25",
        "value": "336"
    },
    {
        "dateTime": "2014-10-26",
        "value": "256"
    },
    {
        "dateTime": "2014-10-27",
        "value": "330"
    },
    {
        "dateTime": "2014-10-28",
        "value": "227"
    },
    {
        "dateTime": "2014-10-29",
        "value": "311"
    },
    {
        "dateTime": "2014-10-30",
        "value": "258"
    },
    {
        "dateTime": "2014-10-31",
        "value": "315"
    },
    {
        "dateTime": "2014-11-01",
        "value": "372"
    },
    {
        "dateTime": "2014-11-02",
        "value": "284"
    },
    {
        "dateTime": "2014-11-03",
        "value": "372"
    },
    {
        "dateTime": "2014-11-04",
        "value": "307"
    },
    {
        "dateTime": "2014-11-05",
        "value": "294"
    },
    {
        "dateTime": "2014-11-06",
        "value": "300"
    },
    {
        "dateTime": "2014-11-07",
        "value": "280"
    },
    {
        "dateTime": "2014-11-08",
        "value": "355"
    },
    {
        "dateTime": "2014-11-09",
        "value": "356"
    },
    {
        "dateTime": "2014-11-10",
        "value": "259"
    },
    {
        "dateTime": "2014-11-11",
        "value": "285"
    },
    {
        "dateTime": "2014-11-12",
        "value": "359"
    },
    {
        "dateTime": "2014-11-13",
        "value": "253"
    },
    {
        "dateTime": "2014-11-14",
        "value": "264"
    },
    {
        "dateTime": "2014-11-15",
        "value": "324"
    },
    {
        "dateTime": "2014-11-16",
        "value": "361"
    },
    {
        "dateTime": "2014-11-17",
        "value": "308"
    },
    {
        "dateTime": "2014-11-18",
        "value": "302"
    },
    {
        "dateTime": "2014-11-19",
        "value": "328"
    },
    {
        "dateTime": "2014-11-20",
        "value": "253"
    },
    {
        "dateTime": "2014-11-21",
        "value": "304"
    },
    {
        "dateTime": "2014-11-22",
        "value": "379"
    },
    {
        "dateTime": "2014-11-23",
        "value": "322"
    },
    {
        "dateTime": "2014-11-24",
        "value": "294"
    },
    {
        "dateTime": "2014-11-25",
        "value": "295"
    },
    {
        "dateTime": "2014-11-26",
        "value": "158"
    },
    {
        "dateTime": "2014-11-27",
        "value": "310"
    },
    {
        "dateTime": "2014-11-28",
        "value": "247"
    },
    {
        "dateTime": "2014-11-29",
        "value": "353"
    },
    {
        "dateTime": "2014-11-30",
        "value": "307"
    },
    {
        "dateTime": "2014-12-01",
        "value": "308"
    },
    {
        "dateTime": "2014-12-02",
        "value": "293"
    },
    {
        "dateTime": "2014-12-03",
        "value": "285"
    },
    {
        "dateTime": "2014-12-04",
        "value": "296"
    },
    {
        "dateTime": "2014-12-05",
        "value": "287"
    },
    {
        "dateTime": "2014-12-06",
        "value": "280"
    },
    {
        "dateTime": "2014-12-07",
        "value": "360"
    },
    {
        "dateTime": "2014-12-08",
        "value": "258"
    },
    {
        "dateTime": "2014-12-09",
        "value": "298"
    },
    {
        "dateTime": "2014-12-10",
        "value": "285"
    },
    {
        "dateTime": "2014-12-11",
        "value": "300"
    },
    {
        "dateTime": "2014-12-12",
        "value": "272"
    },
    {
        "dateTime": "2014-12-13",
        "value": "473"
    },
    {
        "dateTime": "2014-12-14",
        "value": "362"
    },
    {
        "dateTime": "2014-12-15",
        "value": "332"
    },
    {
        "dateTime": "2014-12-16",
        "value": "273"
    },
    {
        "dateTime": "2014-12-17",
        "value": "316"
    },
    {
        "dateTime": "2014-12-18",
        "value": "307"
    },
    {
        "dateTime": "2014-12-19",
        "value": "197"
    },
    {
        "dateTime": "2014-12-20",
        "value": "359"
    },
    {
        "dateTime": "2014-12-21",
        "value": "449"
    },
    {
        "dateTime": "2014-12-22",
        "value": "293"
    },
    {
        "dateTime": "2014-12-23",
        "value": "273"
    },
    {
        "dateTime": "2014-12-24",
        "value": "337"
    },
    {
        "dateTime": "2014-12-25",
        "value": "298"
    },
    {
        "dateTime": "2014-12-26",
        "value": "368"
    },
    {
        "dateTime": "2014-12-27",
        "value": "379"
    },
    {
        "dateTime": "2014-12-28",
        "value": "407"
    },
    {
        "dateTime": "2014-12-29",
        "value": "211"
    },
    {
        "dateTime": "2014-12-30",
        "value": "237"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];
var minutesToFallAsleep = [
    {
        "dateTime": "2014-01-01",
        "value": "0"
    },
    {
        "dateTime": "2014-01-02",
        "value": "0"
    },
    {
        "dateTime": "2014-01-03",
        "value": "0"
    },
    {
        "dateTime": "2014-01-04",
        "value": "0"
    },
    {
        "dateTime": "2014-01-05",
        "value": "0"
    },
    {
        "dateTime": "2014-01-06",
        "value": "0"
    },
    {
        "dateTime": "2014-01-07",
        "value": "0"
    },
    {
        "dateTime": "2014-01-08",
        "value": "0"
    },
    {
        "dateTime": "2014-01-09",
        "value": "0"
    },
    {
        "dateTime": "2014-01-10",
        "value": "0"
    },
    {
        "dateTime": "2014-01-11",
        "value": "0"
    },
    {
        "dateTime": "2014-01-12",
        "value": "0"
    },
    {
        "dateTime": "2014-01-13",
        "value": "0"
    },
    {
        "dateTime": "2014-01-14",
        "value": "0"
    },
    {
        "dateTime": "2014-01-15",
        "value": "0"
    },
    {
        "dateTime": "2014-01-16",
        "value": "0"
    },
    {
        "dateTime": "2014-01-17",
        "value": "0"
    },
    {
        "dateTime": "2014-01-18",
        "value": "0"
    },
    {
        "dateTime": "2014-01-19",
        "value": "0"
    },
    {
        "dateTime": "2014-01-20",
        "value": "0"
    },
    {
        "dateTime": "2014-01-21",
        "value": "0"
    },
    {
        "dateTime": "2014-01-22",
        "value": "0"
    },
    {
        "dateTime": "2014-01-23",
        "value": "0"
    },
    {
        "dateTime": "2014-01-24",
        "value": "0"
    },
    {
        "dateTime": "2014-01-25",
        "value": "6"
    },
    {
        "dateTime": "2014-01-26",
        "value": "7"
    },
    {
        "dateTime": "2014-01-27",
        "value": "26"
    },
    {
        "dateTime": "2014-01-28",
        "value": "2"
    },
    {
        "dateTime": "2014-01-29",
        "value": "8"
    },
    {
        "dateTime": "2014-01-30",
        "value": "27"
    },
    {
        "dateTime": "2014-01-31",
        "value": "112"
    },
    {
        "dateTime": "2014-02-01",
        "value": "2"
    },
    {
        "dateTime": "2014-02-02",
        "value": "2"
    },
    {
        "dateTime": "2014-02-03",
        "value": "31"
    },
    {
        "dateTime": "2014-02-04",
        "value": "2"
    },
    {
        "dateTime": "2014-02-05",
        "value": "15"
    },
    {
        "dateTime": "2014-02-06",
        "value": "16"
    },
    {
        "dateTime": "2014-02-07",
        "value": "2"
    },
    {
        "dateTime": "2014-02-08",
        "value": "7"
    },
    {
        "dateTime": "2014-02-09",
        "value": "8"
    },
    {
        "dateTime": "2014-02-10",
        "value": "2"
    },
    {
        "dateTime": "2014-02-11",
        "value": "2"
    },
    {
        "dateTime": "2014-02-12",
        "value": "10"
    },
    {
        "dateTime": "2014-02-13",
        "value": "21"
    },
    {
        "dateTime": "2014-02-14",
        "value": "34"
    },
    {
        "dateTime": "2014-02-15",
        "value": "12"
    },
    {
        "dateTime": "2014-02-16",
        "value": "4"
    },
    {
        "dateTime": "2014-02-17",
        "value": "34"
    },
    {
        "dateTime": "2014-02-18",
        "value": "17"
    },
    {
        "dateTime": "2014-02-19",
        "value": "6"
    },
    {
        "dateTime": "2014-02-20",
        "value": "8"
    },
    {
        "dateTime": "2014-02-21",
        "value": "7"
    },
    {
        "dateTime": "2014-02-22",
        "value": "2"
    },
    {
        "dateTime": "2014-02-23",
        "value": "4"
    },
    {
        "dateTime": "2014-02-24",
        "value": "7"
    },
    {
        "dateTime": "2014-02-25",
        "value": "10"
    },
    {
        "dateTime": "2014-02-26",
        "value": "20"
    },
    {
        "dateTime": "2014-02-27",
        "value": "6"
    },
    {
        "dateTime": "2014-02-28",
        "value": "14"
    },
    {
        "dateTime": "2014-03-01",
        "value": "7"
    },
    {
        "dateTime": "2014-03-02",
        "value": "12"
    },
    {
        "dateTime": "2014-03-03",
        "value": "13"
    },
    {
        "dateTime": "2014-03-04",
        "value": "5"
    },
    {
        "dateTime": "2014-03-05",
        "value": "11"
    },
    {
        "dateTime": "2014-03-06",
        "value": "7"
    },
    {
        "dateTime": "2014-03-07",
        "value": "0"
    },
    {
        "dateTime": "2014-03-08",
        "value": "7"
    },
    {
        "dateTime": "2014-03-09",
        "value": "2"
    },
    {
        "dateTime": "2014-03-10",
        "value": "18"
    },
    {
        "dateTime": "2014-03-11",
        "value": "13"
    },
    {
        "dateTime": "2014-03-12",
        "value": "8"
    },
    {
        "dateTime": "2014-03-13",
        "value": "15"
    },
    {
        "dateTime": "2014-03-14",
        "value": "2"
    },
    {
        "dateTime": "2014-03-15",
        "value": "24"
    },
    {
        "dateTime": "2014-03-16",
        "value": "8"
    },
    {
        "dateTime": "2014-03-17",
        "value": "7"
    },
    {
        "dateTime": "2014-03-18",
        "value": "2"
    },
    {
        "dateTime": "2014-03-19",
        "value": "11"
    },
    {
        "dateTime": "2014-03-20",
        "value": "9"
    },
    {
        "dateTime": "2014-03-21",
        "value": "39"
    },
    {
        "dateTime": "2014-03-22",
        "value": "7"
    },
    {
        "dateTime": "2014-03-23",
        "value": "16"
    },
    {
        "dateTime": "2014-03-24",
        "value": "38"
    },
    {
        "dateTime": "2014-03-25",
        "value": "16"
    },
    {
        "dateTime": "2014-03-26",
        "value": "14"
    },
    {
        "dateTime": "2014-03-27",
        "value": "15"
    },
    {
        "dateTime": "2014-03-28",
        "value": "16"
    },
    {
        "dateTime": "2014-03-29",
        "value": "20"
    },
    {
        "dateTime": "2014-03-30",
        "value": "13"
    },
    {
        "dateTime": "2014-03-31",
        "value": "7"
    },
    {
        "dateTime": "2014-04-01",
        "value": "15"
    },
    {
        "dateTime": "2014-04-02",
        "value": "9"
    },
    {
        "dateTime": "2014-04-03",
        "value": "25"
    },
    {
        "dateTime": "2014-04-04",
        "value": "6"
    },
    {
        "dateTime": "2014-04-05",
        "value": "11"
    },
    {
        "dateTime": "2014-04-06",
        "value": "31"
    },
    {
        "dateTime": "2014-04-07",
        "value": "22"
    },
    {
        "dateTime": "2014-04-08",
        "value": "31"
    },
    {
        "dateTime": "2014-04-09",
        "value": "24"
    },
    {
        "dateTime": "2014-04-10",
        "value": "19"
    },
    {
        "dateTime": "2014-04-11",
        "value": "14"
    },
    {
        "dateTime": "2014-04-12",
        "value": "8"
    },
    {
        "dateTime": "2014-04-13",
        "value": "6"
    },
    {
        "dateTime": "2014-04-14",
        "value": "7"
    },
    {
        "dateTime": "2014-04-15",
        "value": "66"
    },
    {
        "dateTime": "2014-04-16",
        "value": "27"
    },
    {
        "dateTime": "2014-04-17",
        "value": "2"
    },
    {
        "dateTime": "2014-04-18",
        "value": "19"
    },
    {
        "dateTime": "2014-04-19",
        "value": "12"
    },
    {
        "dateTime": "2014-04-20",
        "value": "8"
    },
    {
        "dateTime": "2014-04-21",
        "value": "7"
    },
    {
        "dateTime": "2014-04-22",
        "value": "16"
    },
    {
        "dateTime": "2014-04-23",
        "value": "22"
    },
    {
        "dateTime": "2014-04-24",
        "value": "23"
    },
    {
        "dateTime": "2014-04-25",
        "value": "7"
    },
    {
        "dateTime": "2014-04-26",
        "value": "7"
    },
    {
        "dateTime": "2014-04-27",
        "value": "7"
    },
    {
        "dateTime": "2014-04-28",
        "value": "0"
    },
    {
        "dateTime": "2014-04-29",
        "value": "9"
    },
    {
        "dateTime": "2014-04-30",
        "value": "0"
    },
    {
        "dateTime": "2014-05-01",
        "value": "8"
    },
    {
        "dateTime": "2014-05-02",
        "value": "21"
    },
    {
        "dateTime": "2014-05-03",
        "value": "7"
    },
    {
        "dateTime": "2014-05-04",
        "value": "8"
    },
    {
        "dateTime": "2014-05-05",
        "value": "9"
    },
    {
        "dateTime": "2014-05-06",
        "value": "38"
    },
    {
        "dateTime": "2014-05-07",
        "value": "6"
    },
    {
        "dateTime": "2014-05-08",
        "value": "13"
    },
    {
        "dateTime": "2014-05-09",
        "value": "8"
    },
    {
        "dateTime": "2014-05-10",
        "value": "21"
    },
    {
        "dateTime": "2014-05-11",
        "value": "7"
    },
    {
        "dateTime": "2014-05-12",
        "value": "128"
    },
    {
        "dateTime": "2014-05-13",
        "value": "26"
    },
    {
        "dateTime": "2014-05-14",
        "value": "8"
    },
    {
        "dateTime": "2014-05-15",
        "value": "16"
    },
    {
        "dateTime": "2014-05-16",
        "value": "11"
    },
    {
        "dateTime": "2014-05-17",
        "value": "19"
    },
    {
        "dateTime": "2014-05-18",
        "value": "22"
    },
    {
        "dateTime": "2014-05-19",
        "value": "9"
    },
    {
        "dateTime": "2014-05-20",
        "value": "13"
    },
    {
        "dateTime": "2014-05-21",
        "value": "20"
    },
    {
        "dateTime": "2014-05-22",
        "value": "18"
    },
    {
        "dateTime": "2014-05-23",
        "value": "46"
    },
    {
        "dateTime": "2014-05-24",
        "value": "7"
    },
    {
        "dateTime": "2014-05-25",
        "value": "7"
    },
    {
        "dateTime": "2014-05-26",
        "value": "4"
    },
    {
        "dateTime": "2014-05-27",
        "value": "4"
    },
    {
        "dateTime": "2014-05-28",
        "value": "0"
    },
    {
        "dateTime": "2014-05-29",
        "value": "13"
    },
    {
        "dateTime": "2014-05-30",
        "value": "5"
    },
    {
        "dateTime": "2014-05-31",
        "value": "15"
    },
    {
        "dateTime": "2014-06-01",
        "value": "24"
    },
    {
        "dateTime": "2014-06-02",
        "value": "25"
    },
    {
        "dateTime": "2014-06-03",
        "value": "6"
    },
    {
        "dateTime": "2014-06-04",
        "value": "7"
    },
    {
        "dateTime": "2014-06-05",
        "value": "7"
    },
    {
        "dateTime": "2014-06-06",
        "value": "2"
    },
    {
        "dateTime": "2014-06-07",
        "value": "121"
    },
    {
        "dateTime": "2014-06-08",
        "value": "16"
    },
    {
        "dateTime": "2014-06-09",
        "value": "7"
    },
    {
        "dateTime": "2014-06-10",
        "value": "27"
    },
    {
        "dateTime": "2014-06-11",
        "value": "7"
    },
    {
        "dateTime": "2014-06-12",
        "value": "2"
    },
    {
        "dateTime": "2014-06-13",
        "value": "13"
    },
    {
        "dateTime": "2014-06-14",
        "value": "10"
    },
    {
        "dateTime": "2014-06-15",
        "value": "16"
    },
    {
        "dateTime": "2014-06-16",
        "value": "7"
    },
    {
        "dateTime": "2014-06-17",
        "value": "11"
    },
    {
        "dateTime": "2014-06-18",
        "value": "8"
    },
    {
        "dateTime": "2014-06-19",
        "value": "19"
    },
    {
        "dateTime": "2014-06-20",
        "value": "7"
    },
    {
        "dateTime": "2014-06-21",
        "value": "11"
    },
    {
        "dateTime": "2014-06-22",
        "value": "23"
    },
    {
        "dateTime": "2014-06-23",
        "value": "10"
    },
    {
        "dateTime": "2014-06-24",
        "value": "7"
    },
    {
        "dateTime": "2014-06-25",
        "value": "50"
    },
    {
        "dateTime": "2014-06-26",
        "value": "14"
    },
    {
        "dateTime": "2014-06-27",
        "value": "19"
    },
    {
        "dateTime": "2014-06-28",
        "value": "8"
    },
    {
        "dateTime": "2014-06-29",
        "value": "18"
    },
    {
        "dateTime": "2014-06-30",
        "value": "11"
    },
    {
        "dateTime": "2014-07-01",
        "value": "15"
    },
    {
        "dateTime": "2014-07-02",
        "value": "37"
    },
    {
        "dateTime": "2014-07-03",
        "value": "8"
    },
    {
        "dateTime": "2014-07-04",
        "value": "8"
    },
    {
        "dateTime": "2014-07-05",
        "value": "8"
    },
    {
        "dateTime": "2014-07-06",
        "value": "7"
    },
    {
        "dateTime": "2014-07-07",
        "value": "45"
    },
    {
        "dateTime": "2014-07-08",
        "value": "23"
    },
    {
        "dateTime": "2014-07-09",
        "value": "10"
    },
    {
        "dateTime": "2014-07-10",
        "value": "25"
    },
    {
        "dateTime": "2014-07-11",
        "value": "7"
    },
    {
        "dateTime": "2014-07-12",
        "value": "8"
    },
    {
        "dateTime": "2014-07-13",
        "value": "8"
    },
    {
        "dateTime": "2014-07-14",
        "value": "8"
    },
    {
        "dateTime": "2014-07-15",
        "value": "7"
    },
    {
        "dateTime": "2014-07-16",
        "value": "7"
    },
    {
        "dateTime": "2014-07-17",
        "value": "7"
    },
    {
        "dateTime": "2014-07-18",
        "value": "31"
    },
    {
        "dateTime": "2014-07-19",
        "value": "14"
    },
    {
        "dateTime": "2014-07-20",
        "value": "14"
    },
    {
        "dateTime": "2014-07-21",
        "value": "35"
    },
    {
        "dateTime": "2014-07-22",
        "value": "7"
    },
    {
        "dateTime": "2014-07-23",
        "value": "11"
    },
    {
        "dateTime": "2014-07-24",
        "value": "18"
    },
    {
        "dateTime": "2014-07-25",
        "value": "21"
    },
    {
        "dateTime": "2014-07-26",
        "value": "15"
    },
    {
        "dateTime": "2014-07-27",
        "value": "23"
    },
    {
        "dateTime": "2014-07-28",
        "value": "32"
    },
    {
        "dateTime": "2014-07-29",
        "value": "39"
    },
    {
        "dateTime": "2014-07-30",
        "value": "7"
    },
    {
        "dateTime": "2014-07-31",
        "value": "27"
    },
    {
        "dateTime": "2014-08-01",
        "value": "22"
    },
    {
        "dateTime": "2014-08-02",
        "value": "12"
    },
    {
        "dateTime": "2014-08-03",
        "value": "7"
    },
    {
        "dateTime": "2014-08-04",
        "value": "22"
    },
    {
        "dateTime": "2014-08-05",
        "value": "8"
    },
    {
        "dateTime": "2014-08-06",
        "value": "53"
    },
    {
        "dateTime": "2014-08-07",
        "value": "42"
    },
    {
        "dateTime": "2014-08-08",
        "value": "33"
    },
    {
        "dateTime": "2014-08-09",
        "value": "35"
    },
    {
        "dateTime": "2014-08-10",
        "value": "7"
    },
    {
        "dateTime": "2014-08-11",
        "value": "12"
    },
    {
        "dateTime": "2014-08-12",
        "value": "26"
    },
    {
        "dateTime": "2014-08-13",
        "value": "18"
    },
    {
        "dateTime": "2014-08-14",
        "value": "17"
    },
    {
        "dateTime": "2014-08-15",
        "value": "7"
    },
    {
        "dateTime": "2014-08-16",
        "value": "10"
    },
    {
        "dateTime": "2014-08-17",
        "value": "130"
    },
    {
        "dateTime": "2014-08-18",
        "value": "19"
    },
    {
        "dateTime": "2014-08-19",
        "value": "18"
    },
    {
        "dateTime": "2014-08-20",
        "value": "8"
    },
    {
        "dateTime": "2014-08-21",
        "value": "12"
    },
    {
        "dateTime": "2014-08-22",
        "value": "11"
    },
    {
        "dateTime": "2014-08-23",
        "value": "49"
    },
    {
        "dateTime": "2014-08-24",
        "value": "20"
    },
    {
        "dateTime": "2014-08-25",
        "value": "6"
    },
    {
        "dateTime": "2014-08-26",
        "value": "26"
    },
    {
        "dateTime": "2014-08-27",
        "value": "22"
    },
    {
        "dateTime": "2014-08-28",
        "value": "12"
    },
    {
        "dateTime": "2014-08-29",
        "value": "22"
    },
    {
        "dateTime": "2014-08-30",
        "value": "14"
    },
    {
        "dateTime": "2014-08-31",
        "value": "14"
    },
    {
        "dateTime": "2014-09-01",
        "value": "34"
    },
    {
        "dateTime": "2014-09-02",
        "value": "22"
    },
    {
        "dateTime": "2014-09-03",
        "value": "12"
    },
    {
        "dateTime": "2014-09-04",
        "value": "19"
    },
    {
        "dateTime": "2014-09-05",
        "value": "20"
    },
    {
        "dateTime": "2014-09-06",
        "value": "17"
    },
    {
        "dateTime": "2014-09-07",
        "value": "26"
    },
    {
        "dateTime": "2014-09-08",
        "value": "24"
    },
    {
        "dateTime": "2014-09-09",
        "value": "6"
    },
    {
        "dateTime": "2014-09-10",
        "value": "16"
    },
    {
        "dateTime": "2014-09-11",
        "value": "15"
    },
    {
        "dateTime": "2014-09-12",
        "value": "10"
    },
    {
        "dateTime": "2014-09-13",
        "value": "7"
    },
    {
        "dateTime": "2014-09-14",
        "value": "16"
    },
    {
        "dateTime": "2014-09-15",
        "value": "36"
    },
    {
        "dateTime": "2014-09-16",
        "value": "28"
    },
    {
        "dateTime": "2014-09-17",
        "value": "7"
    },
    {
        "dateTime": "2014-09-18",
        "value": "34"
    },
    {
        "dateTime": "2014-09-19",
        "value": "23"
    },
    {
        "dateTime": "2014-09-20",
        "value": "8"
    },
    {
        "dateTime": "2014-09-21",
        "value": "11"
    },
    {
        "dateTime": "2014-09-22",
        "value": "7"
    },
    {
        "dateTime": "2014-09-23",
        "value": "18"
    },
    {
        "dateTime": "2014-09-24",
        "value": "30"
    },
    {
        "dateTime": "2014-09-25",
        "value": "50"
    },
    {
        "dateTime": "2014-09-26",
        "value": "34"
    },
    {
        "dateTime": "2014-09-27",
        "value": "32"
    },
    {
        "dateTime": "2014-09-28",
        "value": "19"
    },
    {
        "dateTime": "2014-09-29",
        "value": "31"
    },
    {
        "dateTime": "2014-09-30",
        "value": "25"
    },
    {
        "dateTime": "2014-10-01",
        "value": "10"
    },
    {
        "dateTime": "2014-10-02",
        "value": "28"
    },
    {
        "dateTime": "2014-10-03",
        "value": "12"
    },
    {
        "dateTime": "2014-10-04",
        "value": "11"
    },
    {
        "dateTime": "2014-10-05",
        "value": "8"
    },
    {
        "dateTime": "2014-10-06",
        "value": "20"
    },
    {
        "dateTime": "2014-10-07",
        "value": "7"
    },
    {
        "dateTime": "2014-10-08",
        "value": "6"
    },
    {
        "dateTime": "2014-10-09",
        "value": "2"
    },
    {
        "dateTime": "2014-10-10",
        "value": "13"
    },
    {
        "dateTime": "2014-10-11",
        "value": "7"
    },
    {
        "dateTime": "2014-10-12",
        "value": "15"
    },
    {
        "dateTime": "2014-10-13",
        "value": "18"
    },
    {
        "dateTime": "2014-10-14",
        "value": "13"
    },
    {
        "dateTime": "2014-10-15",
        "value": "15"
    },
    {
        "dateTime": "2014-10-16",
        "value": "11"
    },
    {
        "dateTime": "2014-10-17",
        "value": "18"
    },
    {
        "dateTime": "2014-10-18",
        "value": "9"
    },
    {
        "dateTime": "2014-10-19",
        "value": "16"
    },
    {
        "dateTime": "2014-10-20",
        "value": "6"
    },
    {
        "dateTime": "2014-10-21",
        "value": "7"
    },
    {
        "dateTime": "2014-10-22",
        "value": "21"
    },
    {
        "dateTime": "2014-10-23",
        "value": "7"
    },
    {
        "dateTime": "2014-10-24",
        "value": "14"
    },
    {
        "dateTime": "2014-10-25",
        "value": "10"
    },
    {
        "dateTime": "2014-10-26",
        "value": "12"
    },
    {
        "dateTime": "2014-10-27",
        "value": "6"
    },
    {
        "dateTime": "2014-10-28",
        "value": "8"
    },
    {
        "dateTime": "2014-10-29",
        "value": "8"
    },
    {
        "dateTime": "2014-10-30",
        "value": "32"
    },
    {
        "dateTime": "2014-10-31",
        "value": "14"
    },
    {
        "dateTime": "2014-11-01",
        "value": "28"
    },
    {
        "dateTime": "2014-11-02",
        "value": "7"
    },
    {
        "dateTime": "2014-11-03",
        "value": "7"
    },
    {
        "dateTime": "2014-11-04",
        "value": "22"
    },
    {
        "dateTime": "2014-11-05",
        "value": "9"
    },
    {
        "dateTime": "2014-11-06",
        "value": "12"
    },
    {
        "dateTime": "2014-11-07",
        "value": "13"
    },
    {
        "dateTime": "2014-11-08",
        "value": "7"
    },
    {
        "dateTime": "2014-11-09",
        "value": "7"
    },
    {
        "dateTime": "2014-11-10",
        "value": "18"
    },
    {
        "dateTime": "2014-11-11",
        "value": "26"
    },
    {
        "dateTime": "2014-11-12",
        "value": "9"
    },
    {
        "dateTime": "2014-11-13",
        "value": "23"
    },
    {
        "dateTime": "2014-11-14",
        "value": "13"
    },
    {
        "dateTime": "2014-11-15",
        "value": "28"
    },
    {
        "dateTime": "2014-11-16",
        "value": "8"
    },
    {
        "dateTime": "2014-11-17",
        "value": "9"
    },
    {
        "dateTime": "2014-11-18",
        "value": "22"
    },
    {
        "dateTime": "2014-11-19",
        "value": "13"
    },
    {
        "dateTime": "2014-11-20",
        "value": "42"
    },
    {
        "dateTime": "2014-11-21",
        "value": "8"
    },
    {
        "dateTime": "2014-11-22",
        "value": "6"
    },
    {
        "dateTime": "2014-11-23",
        "value": "6"
    },
    {
        "dateTime": "2014-11-24",
        "value": "14"
    },
    {
        "dateTime": "2014-11-25",
        "value": "10"
    },
    {
        "dateTime": "2014-11-26",
        "value": "47"
    },
    {
        "dateTime": "2014-11-27",
        "value": "27"
    },
    {
        "dateTime": "2014-11-28",
        "value": "10"
    },
    {
        "dateTime": "2014-11-29",
        "value": "1"
    },
    {
        "dateTime": "2014-11-30",
        "value": "7"
    },
    {
        "dateTime": "2014-12-01",
        "value": "22"
    },
    {
        "dateTime": "2014-12-02",
        "value": "15"
    },
    {
        "dateTime": "2014-12-03",
        "value": "11"
    },
    {
        "dateTime": "2014-12-04",
        "value": "13"
    },
    {
        "dateTime": "2014-12-05",
        "value": "31"
    },
    {
        "dateTime": "2014-12-06",
        "value": "24"
    },
    {
        "dateTime": "2014-12-07",
        "value": "9"
    },
    {
        "dateTime": "2014-12-08",
        "value": "39"
    },
    {
        "dateTime": "2014-12-09",
        "value": "9"
    },
    {
        "dateTime": "2014-12-10",
        "value": "27"
    },
    {
        "dateTime": "2014-12-11",
        "value": "7"
    },
    {
        "dateTime": "2014-12-12",
        "value": "30"
    },
    {
        "dateTime": "2014-12-13",
        "value": "9"
    },
    {
        "dateTime": "2014-12-14",
        "value": "10"
    },
    {
        "dateTime": "2014-12-15",
        "value": "11"
    },
    {
        "dateTime": "2014-12-16",
        "value": "6"
    },
    {
        "dateTime": "2014-12-17",
        "value": "15"
    },
    {
        "dateTime": "2014-12-18",
        "value": "13"
    },
    {
        "dateTime": "2014-12-19",
        "value": "10"
    },
    {
        "dateTime": "2014-12-20",
        "value": "6"
    },
    {
        "dateTime": "2014-12-21",
        "value": "1"
    },
    {
        "dateTime": "2014-12-22",
        "value": "28"
    },
    {
        "dateTime": "2014-12-23",
        "value": "34"
    },
    {
        "dateTime": "2014-12-24",
        "value": "48"
    },
    {
        "dateTime": "2014-12-25",
        "value": "24"
    },
    {
        "dateTime": "2014-12-26",
        "value": "43"
    },
    {
        "dateTime": "2014-12-27",
        "value": "18"
    },
    {
        "dateTime": "2014-12-28",
        "value": "45"
    },
    {
        "dateTime": "2014-12-29",
        "value": "125"
    },
    {
        "dateTime": "2014-12-30",
        "value": "39"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];

var first = moment(sleepEfficiency[0].dateTime);
for (var i = 0; i < first.day(); i++) {
    first.subtract(1, 'days');
    sleepEfficiency.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": "0"
    });
    timeInBed.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": "0"
    });
    minutesAsleep.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": "0"
    });
    minutesToFallAsleep.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": "0"
    });
}

var getTotal = function (array) {
    return array.reduce(function (a, b) {
        if (typeof a == 'object') {
            a = parseInt(a.value, 10);
        }
        return a + parseInt(b.value, 10);
    });
};

var inHours = function (minutes) {
    return Math.round((minutes / 60) * 100) / 100;
}

var hasData = function (element) {
    return parseInt(element.value, 10) > 0;
}

// TOTAL
var totalTimeInBed = [timeInBed].map(getTotal);
var totalMinutesAsleep = [minutesAsleep].map(getTotal);
var totalMinutesToFallAsleep = [minutesToFallAsleep].map(getTotal);
console.log('#### TOTAL ####');
console.log('Time in bed            : ' + totalTimeInBed[0] + ' min');
console.log('Minutes Asleep         : ' + totalMinutesAsleep[0] + ' min');
console.log('Minutes To Fall Asleep : ' + totalMinutesToFallAsleep[0] + ' min');

// Averages
var avgTimeInBed = totalTimeInBed / timeInBed.filter(hasData).length;
var avgMinutesAsleep = totalMinutesAsleep / minutesAsleep.filter(hasData).length;
var avgMinutesToFallAsleep = totalMinutesToFallAsleep / minutesToFallAsleep.filter(hasData).length;
console.log('#### Averages ####');
console.log('Time in bed            : ' + avgTimeInBed + ' min');
console.log('Minutes Asleep         : ' + avgMinutesAsleep + ' min');
console.log('Minutes To Fall Asleep : ' + avgMinutesToFallAsleep + ' min');


// Time in bed by week
var timeInBedByWeek = [];
var timeInBedCopy = timeInBed.slice(0);
while (timeInBedCopy.length > 0) {
    timeInBedByWeek.push(timeInBedCopy.splice(0, 7));
}
var timeInBedTotalWeek = timeInBedByWeek.map(getTotal);
timeInBedTotalWeek = timeInBedTotalWeek.map(inHours);
console.log('#### Time in bed by week ####');
console.log(timeInBedTotalWeek);

// Minutes asleep by week
var minutesAsleepByWeek = [];
var minutesAsleepCopy = minutesAsleep.slice(0);
while (minutesAsleepCopy.length > 0) {
    minutesAsleepByWeek.push(minutesAsleepCopy.splice(0, 7));
}
var minutesAsleepTotalWeek = minutesAsleepByWeek.map(getTotal);
minutesAsleepTotalWeek = minutesAsleepTotalWeek.map(inHours);
console.log('#### Minutes asleep by week ####');
console.log(minutesAsleepTotalWeek);

// Average efficiency by day of week
var efficencyByDayOfWeek = [{ total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }];
for (var i = 0; i < sleepEfficiency.length; i++) {
    var day = sleepEfficiency[i];
    var date = moment(day.dateTime);

    if (date.year(2014)) {
        efficencyByDayOfWeek[date.day()].total += parseInt(day.value, 10);
        efficencyByDayOfWeek[date.day()].count++;
    }
}
var sunday = efficencyByDayOfWeek.shift();
efficencyByDayOfWeek.push(sunday);
for (var i = 0; i < efficencyByDayOfWeek.length; i++) {
    efficencyByDayOfWeek[i].average = Math.round((efficencyByDayOfWeek[i].total / efficencyByDayOfWeek[i].count) * 100) / 100;
}
console.log('#### Average sleep efficency by day of week ####');
console.log(efficencyByDayOfWeek);