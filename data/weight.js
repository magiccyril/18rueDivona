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

var weight = [
    {
        "dateTime": "2014-01-01",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-02",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-03",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-04",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-05",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-06",
        "value": "88.0"
    },
    {
        "dateTime": "2014-01-07",
        "value": "87.9"
    },
    {
        "dateTime": "2014-01-08",
        "value": "87.2"
    },
    {
        "dateTime": "2014-01-09",
        "value": "87.2"
    },
    {
        "dateTime": "2014-01-10",
        "value": "86.6"
    },
    {
        "dateTime": "2014-01-11",
        "value": "86.633"
    },
    {
        "dateTime": "2014-01-12",
        "value": "86.666"
    },
    {
        "dateTime": "2014-01-13",
        "value": "86.7"
    },
    {
        "dateTime": "2014-01-14",
        "value": "86.2"
    },
    {
        "dateTime": "2014-01-15",
        "value": "86.4"
    },
    {
        "dateTime": "2014-01-16",
        "value": "86.3"
    },
    {
        "dateTime": "2014-01-17",
        "value": "85.8"
    },
    {
        "dateTime": "2014-01-18",
        "value": "86.3"
    },
    {
        "dateTime": "2014-01-19",
        "value": "86.8"
    },
    {
        "dateTime": "2014-01-20",
        "value": "87.3"
    },
    {
        "dateTime": "2014-01-21",
        "value": "86.85"
    },
    {
        "dateTime": "2014-01-22",
        "value": "86.4"
    },
    {
        "dateTime": "2014-01-23",
        "value": "85.5"
    },
    {
        "dateTime": "2014-01-24",
        "value": "86.5"
    },
    {
        "dateTime": "2014-01-25",
        "value": "86.3"
    },
    {
        "dateTime": "2014-01-26",
        "value": "86.2"
    },
    {
        "dateTime": "2014-01-27",
        "value": "86.5"
    },
    {
        "dateTime": "2014-01-28",
        "value": "86.9"
    },
    {
        "dateTime": "2014-01-29",
        "value": "86.5"
    },
    {
        "dateTime": "2014-01-30",
        "value": "86.3"
    },
    {
        "dateTime": "2014-01-31",
        "value": "84.2"
    },
    {
        "dateTime": "2014-02-01",
        "value": "86.5"
    },
    {
        "dateTime": "2014-02-02",
        "value": "86.75"
    },
    {
        "dateTime": "2014-02-03",
        "value": "87.0"
    },
    {
        "dateTime": "2014-02-04",
        "value": "87.4"
    },
    {
        "dateTime": "2014-02-05",
        "value": "86.5"
    },
    {
        "dateTime": "2014-02-06",
        "value": "85.9"
    },
    {
        "dateTime": "2014-02-07",
        "value": "86.275"
    },
    {
        "dateTime": "2014-02-08",
        "value": "86.65"
    },
    {
        "dateTime": "2014-02-09",
        "value": "87.025"
    },
    {
        "dateTime": "2014-02-10",
        "value": "87.4"
    },
    {
        "dateTime": "2014-02-11",
        "value": "87.5"
    },
    {
        "dateTime": "2014-02-12",
        "value": "86.8"
    },
    {
        "dateTime": "2014-02-13",
        "value": "87.3"
    },
    {
        "dateTime": "2014-02-14",
        "value": "87.1"
    },
    {
        "dateTime": "2014-02-15",
        "value": "87.8"
    },
    {
        "dateTime": "2014-02-16",
        "value": "87.5"
    },
    {
        "dateTime": "2014-02-17",
        "value": "87.2"
    },
    {
        "dateTime": "2014-02-18",
        "value": "87.0"
    },
    {
        "dateTime": "2014-02-19",
        "value": "86.9"
    },
    {
        "dateTime": "2014-02-20",
        "value": "87.1"
    },
    {
        "dateTime": "2014-02-21",
        "value": "86.6"
    },
    {
        "dateTime": "2014-02-22",
        "value": "86.633"
    },
    {
        "dateTime": "2014-02-23",
        "value": "86.666"
    },
    {
        "dateTime": "2014-02-24",
        "value": "86.7"
    },
    {
        "dateTime": "2014-02-25",
        "value": "87.8"
    },
    {
        "dateTime": "2014-02-26",
        "value": "86.9"
    },
    {
        "dateTime": "2014-02-27",
        "value": "86.4"
    },
    {
        "dateTime": "2014-02-28",
        "value": "87.0"
    },
    {
        "dateTime": "2014-03-01",
        "value": "87.566"
    },
    {
        "dateTime": "2014-03-02",
        "value": "88.132"
    },
    {
        "dateTime": "2014-03-03",
        "value": "88.7"
    },
    {
        "dateTime": "2014-03-04",
        "value": "88.1"
    },
    {
        "dateTime": "2014-03-05",
        "value": "88.1"
    },
    {
        "dateTime": "2014-03-06",
        "value": "88.7"
    },
    {
        "dateTime": "2014-03-07",
        "value": "88.5"
    },
    {
        "dateTime": "2014-03-08",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-09",
        "value": "88.3"
    },
    {
        "dateTime": "2014-03-10",
        "value": "88.2"
    },
    {
        "dateTime": "2014-03-11",
        "value": "89.1"
    },
    {
        "dateTime": "2014-03-12",
        "value": "88.2"
    },
    {
        "dateTime": "2014-03-13",
        "value": "87.6"
    },
    {
        "dateTime": "2014-03-14",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-15",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-16",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-17",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-18",
        "value": "88.8"
    },
    {
        "dateTime": "2014-03-19",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-20",
        "value": "88.5"
    },
    {
        "dateTime": "2014-03-21",
        "value": "88.425"
    },
    {
        "dateTime": "2014-03-22",
        "value": "88.35"
    },
    {
        "dateTime": "2014-03-23",
        "value": "88.275"
    },
    {
        "dateTime": "2014-03-24",
        "value": "88.2"
    },
    {
        "dateTime": "2014-03-25",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-26",
        "value": "88.4"
    },
    {
        "dateTime": "2014-03-27",
        "value": "88.1"
    },
    {
        "dateTime": "2014-03-28",
        "value": "87.8"
    },
    {
        "dateTime": "2014-03-29",
        "value": "87.833"
    },
    {
        "dateTime": "2014-03-30",
        "value": "87.866"
    },
    {
        "dateTime": "2014-03-31",
        "value": "87.9"
    },
    {
        "dateTime": "2014-04-01",
        "value": "86.9"
    },
    {
        "dateTime": "2014-04-02",
        "value": "87.6"
    },
    {
        "dateTime": "2014-04-03",
        "value": "86.3"
    },
    {
        "dateTime": "2014-04-04",
        "value": "88.4"
    },
    {
        "dateTime": "2014-04-05",
        "value": "88.8"
    },
    {
        "dateTime": "2014-04-06",
        "value": "87.95"
    },
    {
        "dateTime": "2014-04-07",
        "value": "87.1"
    },
    {
        "dateTime": "2014-04-08",
        "value": "88.0"
    },
    {
        "dateTime": "2014-04-09",
        "value": "86.9"
    },
    {
        "dateTime": "2014-04-10",
        "value": "87.8"
    },
    {
        "dateTime": "2014-04-11",
        "value": "88.6"
    },
    {
        "dateTime": "2014-04-12",
        "value": "88.5"
    },
    {
        "dateTime": "2014-04-13",
        "value": "88.1"
    },
    {
        "dateTime": "2014-04-14",
        "value": "87.7"
    },
    {
        "dateTime": "2014-04-15",
        "value": "87.9"
    },
    {
        "dateTime": "2014-04-16",
        "value": "87.9"
    },
    {
        "dateTime": "2014-04-17",
        "value": "86.9"
    },
    {
        "dateTime": "2014-04-18",
        "value": "87.4"
    },
    {
        "dateTime": "2014-04-19",
        "value": "87.334"
    },
    {
        "dateTime": "2014-04-20",
        "value": "87.268"
    },
    {
        "dateTime": "2014-04-21",
        "value": "87.202"
    },
    {
        "dateTime": "2014-04-22",
        "value": "87.136"
    },
    {
        "dateTime": "2014-04-23",
        "value": "87.07"
    },
    {
        "dateTime": "2014-04-24",
        "value": "87.0"
    },
    {
        "dateTime": "2014-04-25",
        "value": "87.8"
    },
    {
        "dateTime": "2014-04-26",
        "value": "87.9"
    },
    {
        "dateTime": "2014-04-27",
        "value": "88.0"
    },
    {
        "dateTime": "2014-04-28",
        "value": "88.1"
    },
    {
        "dateTime": "2014-04-29",
        "value": "87.9"
    },
    {
        "dateTime": "2014-04-30",
        "value": "87.9"
    },
    {
        "dateTime": "2014-05-01",
        "value": "87.2"
    },
    {
        "dateTime": "2014-05-02",
        "value": "87.475"
    },
    {
        "dateTime": "2014-05-03",
        "value": "87.75"
    },
    {
        "dateTime": "2014-05-04",
        "value": "88.025"
    },
    {
        "dateTime": "2014-05-05",
        "value": "88.3"
    },
    {
        "dateTime": "2014-05-06",
        "value": "86.4"
    },
    {
        "dateTime": "2014-05-07",
        "value": "86.0"
    },
    {
        "dateTime": "2014-05-08",
        "value": "86.24"
    },
    {
        "dateTime": "2014-05-09",
        "value": "86.48"
    },
    {
        "dateTime": "2014-05-10",
        "value": "86.72"
    },
    {
        "dateTime": "2014-05-11",
        "value": "86.96"
    },
    {
        "dateTime": "2014-05-12",
        "value": "87.2"
    },
    {
        "dateTime": "2014-05-13",
        "value": "87.5"
    },
    {
        "dateTime": "2014-05-14",
        "value": "87.4"
    },
    {
        "dateTime": "2014-05-15",
        "value": "87.4"
    },
    {
        "dateTime": "2014-05-16",
        "value": "87.25"
    },
    {
        "dateTime": "2014-05-17",
        "value": "87.1"
    },
    {
        "dateTime": "2014-05-18",
        "value": "87.5"
    },
    {
        "dateTime": "2014-05-19",
        "value": "87.9"
    },
    {
        "dateTime": "2014-05-20",
        "value": "87.6"
    },
    {
        "dateTime": "2014-05-21",
        "value": "87.8"
    },
    {
        "dateTime": "2014-05-22",
        "value": "86.7"
    },
    {
        "dateTime": "2014-05-23",
        "value": "87.0"
    },
    {
        "dateTime": "2014-05-24",
        "value": "87.35"
    },
    {
        "dateTime": "2014-05-25",
        "value": "87.7"
    },
    {
        "dateTime": "2014-05-26",
        "value": "87.9"
    },
    {
        "dateTime": "2014-05-27",
        "value": "88.1"
    },
    {
        "dateTime": "2014-05-28",
        "value": "87.5"
    },
    {
        "dateTime": "2014-05-29",
        "value": "87.85"
    },
    {
        "dateTime": "2014-05-30",
        "value": "88.2"
    },
    {
        "dateTime": "2014-05-31",
        "value": "88.366"
    },
    {
        "dateTime": "2014-06-01",
        "value": "88.532"
    },
    {
        "dateTime": "2014-06-02",
        "value": "88.7"
    },
    {
        "dateTime": "2014-06-03",
        "value": "86.4"
    },
    {
        "dateTime": "2014-06-04",
        "value": "86.7"
    },
    {
        "dateTime": "2014-06-05",
        "value": "86.9"
    },
    {
        "dateTime": "2014-06-06",
        "value": "87.9"
    },
    {
        "dateTime": "2014-06-07",
        "value": "88.2"
    },
    {
        "dateTime": "2014-06-08",
        "value": "88.0"
    },
    {
        "dateTime": "2014-06-09",
        "value": "87.8"
    },
    {
        "dateTime": "2014-06-10",
        "value": "87.6"
    },
    {
        "dateTime": "2014-06-11",
        "value": "87.7"
    },
    {
        "dateTime": "2014-06-12",
        "value": "87.0"
    },
    {
        "dateTime": "2014-06-13",
        "value": "88.3"
    },
    {
        "dateTime": "2014-06-14",
        "value": "87.634"
    },
    {
        "dateTime": "2014-06-15",
        "value": "86.968"
    },
    {
        "dateTime": "2014-06-16",
        "value": "86.3"
    },
    {
        "dateTime": "2014-06-17",
        "value": "87.2"
    },
    {
        "dateTime": "2014-06-18",
        "value": "87.4"
    },
    {
        "dateTime": "2014-06-19",
        "value": "86.7"
    },
    {
        "dateTime": "2014-06-20",
        "value": "86.6"
    },
    {
        "dateTime": "2014-06-21",
        "value": "87.133"
    },
    {
        "dateTime": "2014-06-22",
        "value": "87.666"
    },
    {
        "dateTime": "2014-06-23",
        "value": "88.2"
    },
    {
        "dateTime": "2014-06-24",
        "value": "87.5"
    },
    {
        "dateTime": "2014-06-25",
        "value": "87.4"
    },
    {
        "dateTime": "2014-06-26",
        "value": "87.1"
    },
    {
        "dateTime": "2014-06-27",
        "value": "87.375"
    },
    {
        "dateTime": "2014-06-28",
        "value": "87.65"
    },
    {
        "dateTime": "2014-06-29",
        "value": "87.925"
    },
    {
        "dateTime": "2014-06-30",
        "value": "88.2"
    },
    {
        "dateTime": "2014-07-01",
        "value": "87.8"
    },
    {
        "dateTime": "2014-07-02",
        "value": "87.3"
    },
    {
        "dateTime": "2014-07-03",
        "value": "87.7"
    },
    {
        "dateTime": "2014-07-04",
        "value": "87.7"
    },
    {
        "dateTime": "2014-07-05",
        "value": "87.6"
    },
    {
        "dateTime": "2014-07-06",
        "value": "87.5"
    },
    {
        "dateTime": "2014-07-07",
        "value": "87.4"
    },
    {
        "dateTime": "2014-07-08",
        "value": "88.0"
    },
    {
        "dateTime": "2014-07-09",
        "value": "87.7"
    },
    {
        "dateTime": "2014-07-10",
        "value": "88.4"
    },
    {
        "dateTime": "2014-07-11",
        "value": "88.6"
    },
    {
        "dateTime": "2014-07-12",
        "value": "88.51"
    },
    {
        "dateTime": "2014-07-13",
        "value": "88.42"
    },
    {
        "dateTime": "2014-07-14",
        "value": "88.33"
    },
    {
        "dateTime": "2014-07-15",
        "value": "88.24"
    },
    {
        "dateTime": "2014-07-16",
        "value": "88.15"
    },
    {
        "dateTime": "2014-07-17",
        "value": "88.06"
    },
    {
        "dateTime": "2014-07-18",
        "value": "87.97"
    },
    {
        "dateTime": "2014-07-19",
        "value": "87.88"
    },
    {
        "dateTime": "2014-07-20",
        "value": "87.79"
    },
    {
        "dateTime": "2014-07-21",
        "value": "87.7"
    },
    {
        "dateTime": "2014-07-22",
        "value": "87.6"
    },
    {
        "dateTime": "2014-07-23",
        "value": "86.901"
    },
    {
        "dateTime": "2014-07-24",
        "value": "87.6"
    },
    {
        "dateTime": "2014-07-25",
        "value": "88.6"
    },
    {
        "dateTime": "2014-07-26",
        "value": "88.2"
    },
    {
        "dateTime": "2014-07-27",
        "value": "87.8"
    },
    {
        "dateTime": "2014-07-28",
        "value": "87.4"
    },
    {
        "dateTime": "2014-07-29",
        "value": "87.8"
    },
    {
        "dateTime": "2014-07-30",
        "value": "88.4"
    },
    {
        "dateTime": "2014-07-31",
        "value": "88.8"
    },
    {
        "dateTime": "2014-08-01",
        "value": "87.0"
    },
    {
        "dateTime": "2014-08-02",
        "value": "87.466"
    },
    {
        "dateTime": "2014-08-03",
        "value": "87.932"
    },
    {
        "dateTime": "2014-08-04",
        "value": "88.4"
    },
    {
        "dateTime": "2014-08-05",
        "value": "89.3"
    },
    {
        "dateTime": "2014-08-06",
        "value": "87.7"
    },
    {
        "dateTime": "2014-08-07",
        "value": "87.7"
    },
    {
        "dateTime": "2014-08-08",
        "value": "87.2"
    },
    {
        "dateTime": "2014-08-09",
        "value": "87.633"
    },
    {
        "dateTime": "2014-08-10",
        "value": "88.066"
    },
    {
        "dateTime": "2014-08-11",
        "value": "88.5"
    },
    {
        "dateTime": "2014-08-12",
        "value": "87.4"
    },
    {
        "dateTime": "2014-08-13",
        "value": "86.9"
    },
    {
        "dateTime": "2014-08-14",
        "value": "87.4"
    },
    {
        "dateTime": "2014-08-15",
        "value": "87.725"
    },
    {
        "dateTime": "2014-08-16",
        "value": "88.05"
    },
    {
        "dateTime": "2014-08-17",
        "value": "88.375"
    },
    {
        "dateTime": "2014-08-18",
        "value": "88.7"
    },
    {
        "dateTime": "2014-08-19",
        "value": "87.7"
    },
    {
        "dateTime": "2014-08-20",
        "value": "87.2"
    },
    {
        "dateTime": "2014-08-21",
        "value": "87.6"
    },
    {
        "dateTime": "2014-08-22",
        "value": "87.4"
    },
    {
        "dateTime": "2014-08-23",
        "value": "87.8"
    },
    {
        "dateTime": "2014-08-24",
        "value": "88.2"
    },
    {
        "dateTime": "2014-08-25",
        "value": "88.6"
    },
    {
        "dateTime": "2014-08-26",
        "value": "88.7"
    },
    {
        "dateTime": "2014-08-27",
        "value": "87.001"
    },
    {
        "dateTime": "2014-08-28",
        "value": "87.4"
    },
    {
        "dateTime": "2014-08-29",
        "value": "87.0"
    },
    {
        "dateTime": "2014-08-30",
        "value": "88.4"
    },
    {
        "dateTime": "2014-08-31",
        "value": "88.1"
    },
    {
        "dateTime": "2014-09-01",
        "value": "87.8"
    },
    {
        "dateTime": "2014-09-02",
        "value": "86.9"
    },
    {
        "dateTime": "2014-09-03",
        "value": "86.7"
    },
    {
        "dateTime": "2014-09-04",
        "value": "87.7"
    },
    {
        "dateTime": "2014-09-05",
        "value": "87.0"
    },
    {
        "dateTime": "2014-09-06",
        "value": "87.266"
    },
    {
        "dateTime": "2014-09-07",
        "value": "87.532"
    },
    {
        "dateTime": "2014-09-08",
        "value": "87.8"
    },
    {
        "dateTime": "2014-09-09",
        "value": "87.7"
    },
    {
        "dateTime": "2014-09-10",
        "value": "84.1"
    },
    {
        "dateTime": "2014-09-11",
        "value": "88.1"
    },
    {
        "dateTime": "2014-09-12",
        "value": "87.8"
    },
    {
        "dateTime": "2014-09-13",
        "value": "87.7"
    },
    {
        "dateTime": "2014-09-14",
        "value": "87.6"
    },
    {
        "dateTime": "2014-09-15",
        "value": "87.9"
    },
    {
        "dateTime": "2014-09-16",
        "value": "88.3"
    },
    {
        "dateTime": "2014-09-17",
        "value": "88.1"
    },
    {
        "dateTime": "2014-09-18",
        "value": "87.7"
    },
    {
        "dateTime": "2014-09-19",
        "value": "87.8"
    },
    {
        "dateTime": "2014-09-20",
        "value": "87.6"
    },
    {
        "dateTime": "2014-09-21",
        "value": "87.7"
    },
    {
        "dateTime": "2014-09-22",
        "value": "87.5"
    },
    {
        "dateTime": "2014-09-23",
        "value": "88.5"
    },
    {
        "dateTime": "2014-09-24",
        "value": "88.3"
    },
    {
        "dateTime": "2014-09-25",
        "value": "88.3"
    },
    {
        "dateTime": "2014-09-26",
        "value": "88.5"
    },
    {
        "dateTime": "2014-09-27",
        "value": "88.45"
    },
    {
        "dateTime": "2014-09-28",
        "value": "88.4"
    },
    {
        "dateTime": "2014-09-29",
        "value": "87.3"
    },
    {
        "dateTime": "2014-09-30",
        "value": "87.8"
    },
    {
        "dateTime": "2014-10-01",
        "value": "87.5"
    },
    {
        "dateTime": "2014-10-02",
        "value": "87.6"
    },
    {
        "dateTime": "2014-10-03",
        "value": "88.8"
    },
    {
        "dateTime": "2014-10-04",
        "value": "88.767"
    },
    {
        "dateTime": "2014-10-05",
        "value": "88.734"
    },
    {
        "dateTime": "2014-10-06",
        "value": "88.7"
    },
    {
        "dateTime": "2014-10-07",
        "value": "86.1"
    },
    {
        "dateTime": "2014-10-08",
        "value": "88.2"
    },
    {
        "dateTime": "2014-10-09",
        "value": "87.8"
    },
    {
        "dateTime": "2014-10-10",
        "value": "88.4"
    },
    {
        "dateTime": "2014-10-11",
        "value": "88.4"
    },
    {
        "dateTime": "2014-10-12",
        "value": "88.4"
    },
    {
        "dateTime": "2014-10-13",
        "value": "88.4"
    },
    {
        "dateTime": "2014-10-14",
        "value": "89.0"
    },
    {
        "dateTime": "2014-10-15",
        "value": "88.5"
    },
    {
        "dateTime": "2014-10-16",
        "value": "88.0"
    },
    {
        "dateTime": "2014-10-17",
        "value": "88.075"
    },
    {
        "dateTime": "2014-10-18",
        "value": "88.15"
    },
    {
        "dateTime": "2014-10-19",
        "value": "88.225"
    },
    {
        "dateTime": "2014-10-20",
        "value": "88.3"
    },
    {
        "dateTime": "2014-10-21",
        "value": "88.2"
    },
    {
        "dateTime": "2014-10-22",
        "value": "88.2"
    },
    {
        "dateTime": "2014-10-23",
        "value": "87.7"
    },
    {
        "dateTime": "2014-10-24",
        "value": "87.8"
    },
    {
        "dateTime": "2014-10-25",
        "value": "88.266"
    },
    {
        "dateTime": "2014-10-26",
        "value": "88.732"
    },
    {
        "dateTime": "2014-10-27",
        "value": "89.2"
    },
    {
        "dateTime": "2014-10-28",
        "value": "87.6"
    },
    {
        "dateTime": "2014-10-29",
        "value": "88.7"
    },
    {
        "dateTime": "2014-10-30",
        "value": "87.9"
    },
    {
        "dateTime": "2014-10-31",
        "value": "88.0"
    },
    {
        "dateTime": "2014-11-01",
        "value": "88.133"
    },
    {
        "dateTime": "2014-11-02",
        "value": "88.266"
    },
    {
        "dateTime": "2014-11-03",
        "value": "88.4"
    },
    {
        "dateTime": "2014-11-04",
        "value": "88.5"
    },
    {
        "dateTime": "2014-11-05",
        "value": "88.0"
    },
    {
        "dateTime": "2014-11-06",
        "value": "87.6"
    },
    {
        "dateTime": "2014-11-07",
        "value": "87.5"
    },
    {
        "dateTime": "2014-11-08",
        "value": "87.733"
    },
    {
        "dateTime": "2014-11-09",
        "value": "87.966"
    },
    {
        "dateTime": "2014-11-10",
        "value": "88.2"
    },
    {
        "dateTime": "2014-11-11",
        "value": "88.05"
    },
    {
        "dateTime": "2014-11-12",
        "value": "87.9"
    },
    {
        "dateTime": "2014-11-13",
        "value": "87.8"
    },
    {
        "dateTime": "2014-11-14",
        "value": "88.4"
    },
    {
        "dateTime": "2014-11-15",
        "value": "88.6"
    },
    {
        "dateTime": "2014-11-16",
        "value": "88.8"
    },
    {
        "dateTime": "2014-11-17",
        "value": "89.0"
    },
    {
        "dateTime": "2014-11-18",
        "value": "88.5"
    },
    {
        "dateTime": "2014-11-19",
        "value": "88.9"
    },
    {
        "dateTime": "2014-11-20",
        "value": "88.3"
    },
    {
        "dateTime": "2014-11-21",
        "value": "88.0"
    },
    {
        "dateTime": "2014-11-22",
        "value": "88.3"
    },
    {
        "dateTime": "2014-11-23",
        "value": "88.6"
    },
    {
        "dateTime": "2014-11-24",
        "value": "88.9"
    },
    {
        "dateTime": "2014-11-25",
        "value": "88.7"
    },
    {
        "dateTime": "2014-11-26",
        "value": "88.35"
    },
    {
        "dateTime": "2014-11-27",
        "value": "88.0"
    },
    {
        "dateTime": "2014-11-28",
        "value": "87.7"
    },
    {
        "dateTime": "2014-11-29",
        "value": "87.4"
    },
    {
        "dateTime": "2014-11-30",
        "value": "87.1"
    },
    {
        "dateTime": "2014-12-01",
        "value": "86.8"
    },
    {
        "dateTime": "2014-12-02",
        "value": "88.4"
    },
    {
        "dateTime": "2014-12-03",
        "value": "88.7"
    },
    {
        "dateTime": "2014-12-04",
        "value": "88.4"
    },
    {
        "dateTime": "2014-12-05",
        "value": "88.3"
    },
    {
        "dateTime": "2014-12-06",
        "value": "88.4"
    },
    {
        "dateTime": "2014-12-07",
        "value": "87.95"
    },
    {
        "dateTime": "2014-12-08",
        "value": "87.5"
    },
    {
        "dateTime": "2014-12-09",
        "value": "88.4"
    },
    {
        "dateTime": "2014-12-10",
        "value": "88.1"
    },
    {
        "dateTime": "2014-12-11",
        "value": "88.8"
    },
    {
        "dateTime": "2014-12-12",
        "value": "88.54"
    },
    {
        "dateTime": "2014-12-13",
        "value": "88.28"
    },
    {
        "dateTime": "2014-12-14",
        "value": "88.02"
    },
    {
        "dateTime": "2014-12-15",
        "value": "87.76"
    },
    {
        "dateTime": "2014-12-16",
        "value": "87.5"
    },
    {
        "dateTime": "2014-12-17",
        "value": "87.7"
    },
    {
        "dateTime": "2014-12-18",
        "value": "87.9"
    },
    {
        "dateTime": "2014-12-19",
        "value": "88.1"
    },
    {
        "dateTime": "2014-12-20",
        "value": "88.09"
    },
    {
        "dateTime": "2014-12-21",
        "value": "88.08"
    },
    {
        "dateTime": "2014-12-22",
        "value": "88.07"
    },
    {
        "dateTime": "2014-12-23",
        "value": "88.06"
    },
    {
        "dateTime": "2014-12-24",
        "value": "88.05"
    },
    {
        "dateTime": "2014-12-25",
        "value": "88.04"
    },
    {
        "dateTime": "2014-12-26",
        "value": "88.03"
    },
    {
        "dateTime": "2014-12-27",
        "value": "88.02"
    },
    {
        "dateTime": "2014-12-28",
        "value": "88.01"
    },
    {
        "dateTime": "2014-12-29",
        "value": "88.0"
    },
    {
        "dateTime": "2014-12-30",
        "value": "88.0"
    },
    {
        "dateTime": "2014-12-31",
        "value": "88.0"
    }
];
var fat = [
    {
        "dateTime": "2014-01-01",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-02",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-03",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-04",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-05",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-06",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-07",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-08",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-09",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-10",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-11",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-12",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-13",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-14",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-15",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-16",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-17",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-18",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-19",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-20",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-21",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-22",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-23",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-24",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-01-25",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-01-26",
        "value": "8.14900016784668"
    },
    {
        "dateTime": "2014-01-27",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-01-28",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-01-29",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-01-30",
        "value": "9.0"
    },
    {
        "dateTime": "2014-01-31",
        "value": "7.598999977111816"
    },
    {
        "dateTime": "2014-02-01",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-02-02",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-02-03",
        "value": "8.5"
    },
    {
        "dateTime": "2014-02-04",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-02-05",
        "value": "8.5"
    },
    {
        "dateTime": "2014-02-06",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-02-07",
        "value": "8.673999786376953"
    },
    {
        "dateTime": "2014-02-08",
        "value": "8.748000144958496"
    },
    {
        "dateTime": "2014-02-09",
        "value": "8.821999549865723"
    },
    {
        "dateTime": "2014-02-10",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-02-11",
        "value": "8.5"
    },
    {
        "dateTime": "2014-02-12",
        "value": "9.0"
    },
    {
        "dateTime": "2014-02-13",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-02-14",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-02-15",
        "value": "9.0"
    },
    {
        "dateTime": "2014-02-16",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-02-17",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-02-18",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-02-19",
        "value": "8.5"
    },
    {
        "dateTime": "2014-02-20",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-02-21",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-02-22",
        "value": "8.932000160217285"
    },
    {
        "dateTime": "2014-02-23",
        "value": "8.96500015258789"
    },
    {
        "dateTime": "2014-02-24",
        "value": "9.0"
    },
    {
        "dateTime": "2014-02-25",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-02-26",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-02-27",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-02-28",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-03-01",
        "value": "8.899999618530273"
    },
    {
        "dateTime": "2014-03-02",
        "value": "9.0"
    },
    {
        "dateTime": "2014-03-03",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-03-04",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-03-05",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-03-06",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-03-07",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-03-08",
        "value": "9.098999977111816"
    },
    {
        "dateTime": "2014-03-09",
        "value": "8.99899959564209"
    },
    {
        "dateTime": "2014-03-10",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-03-11",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-03-12",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-03-13",
        "value": "9.89900016784668"
    },
    {
        "dateTime": "2014-03-14",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-03-15",
        "value": "9.5"
    },
    {
        "dateTime": "2014-03-16",
        "value": "9.199999809265137"
    },
    {
        "dateTime": "2014-03-17",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-03-18",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-03-19",
        "value": "9.89900016784668"
    },
    {
        "dateTime": "2014-03-20",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-03-21",
        "value": "9.274999618530273"
    },
    {
        "dateTime": "2014-03-22",
        "value": "9.25"
    },
    {
        "dateTime": "2014-03-23",
        "value": "9.225000381469727"
    },
    {
        "dateTime": "2014-03-24",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-03-25",
        "value": "10.199000358581543"
    },
    {
        "dateTime": "2014-03-26",
        "value": "9.89900016784668"
    },
    {
        "dateTime": "2014-03-27",
        "value": "9.0"
    },
    {
        "dateTime": "2014-03-28",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-03-29",
        "value": "9.298999786376953"
    },
    {
        "dateTime": "2014-03-30",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-03-31",
        "value": "9.5"
    },
    {
        "dateTime": "2014-04-01",
        "value": "8.39900016784668"
    },
    {
        "dateTime": "2014-04-02",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-04-03",
        "value": "8.0"
    },
    {
        "dateTime": "2014-04-04",
        "value": "10.0"
    },
    {
        "dateTime": "2014-04-05",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-04-06",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-04-07",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-04-08",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-04-09",
        "value": "8.0"
    },
    {
        "dateTime": "2014-04-10",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-04-11",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-04-12",
        "value": "10.39900016784668"
    },
    {
        "dateTime": "2014-04-13",
        "value": "9.699999809265137"
    },
    {
        "dateTime": "2014-04-14",
        "value": "9.0"
    },
    {
        "dateTime": "2014-04-15",
        "value": "7.598999977111816"
    },
    {
        "dateTime": "2014-04-16",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-04-17",
        "value": "7.5"
    },
    {
        "dateTime": "2014-04-18",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-04-19",
        "value": "8.666000366210938"
    },
    {
        "dateTime": "2014-04-20",
        "value": "8.633000373840332"
    },
    {
        "dateTime": "2014-04-21",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-04-22",
        "value": "8.567000389099121"
    },
    {
        "dateTime": "2014-04-23",
        "value": "8.534000396728516"
    },
    {
        "dateTime": "2014-04-24",
        "value": "8.5"
    },
    {
        "dateTime": "2014-04-25",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-04-26",
        "value": "8.833000183105469"
    },
    {
        "dateTime": "2014-04-27",
        "value": "8.866000175476074"
    },
    {
        "dateTime": "2014-04-28",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-04-29",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-04-30",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-05-01",
        "value": "7.900000095367432"
    },
    {
        "dateTime": "2014-05-02",
        "value": "8.25"
    },
    {
        "dateTime": "2014-05-03",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-05-04",
        "value": "8.949999809265137"
    },
    {
        "dateTime": "2014-05-05",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-05-06",
        "value": "7.400000095367432"
    },
    {
        "dateTime": "2014-05-07",
        "value": "8.5"
    },
    {
        "dateTime": "2014-05-08",
        "value": "8.479999542236328"
    },
    {
        "dateTime": "2014-05-09",
        "value": "8.460000038146973"
    },
    {
        "dateTime": "2014-05-10",
        "value": "8.4399995803833"
    },
    {
        "dateTime": "2014-05-11",
        "value": "8.420000076293945"
    },
    {
        "dateTime": "2014-05-12",
        "value": "8.39900016784668"
    },
    {
        "dateTime": "2014-05-13",
        "value": "8.39900016784668"
    },
    {
        "dateTime": "2014-05-14",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-05-15",
        "value": "8.5"
    },
    {
        "dateTime": "2014-05-16",
        "value": "8.350000381469727"
    },
    {
        "dateTime": "2014-05-17",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-05-18",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-05-19",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-05-20",
        "value": "8.0"
    },
    {
        "dateTime": "2014-05-21",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-05-22",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-05-23",
        "value": "9.5"
    },
    {
        "dateTime": "2014-05-24",
        "value": "9.149999618530273"
    },
    {
        "dateTime": "2014-05-25",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-05-26",
        "value": "8.949999809265137"
    },
    {
        "dateTime": "2014-05-27",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-05-28",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-05-29",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-05-30",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-05-31",
        "value": "9.666000366210938"
    },
    {
        "dateTime": "2014-06-01",
        "value": "9.732000350952148"
    },
    {
        "dateTime": "2014-06-02",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-06-03",
        "value": "7.698999881744385"
    },
    {
        "dateTime": "2014-06-04",
        "value": "7.900000095367432"
    },
    {
        "dateTime": "2014-06-05",
        "value": "7.300000190734863"
    },
    {
        "dateTime": "2014-06-06",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-06-07",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-06-08",
        "value": "8.732000350952148"
    },
    {
        "dateTime": "2014-06-09",
        "value": "8.765000343322754"
    },
    {
        "dateTime": "2014-06-10",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-06-11",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-06-12",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-06-13",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-06-14",
        "value": "8.633000373840332"
    },
    {
        "dateTime": "2014-06-15",
        "value": "8.666000366210938"
    },
    {
        "dateTime": "2014-06-16",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-06-17",
        "value": "8.0"
    },
    {
        "dateTime": "2014-06-18",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-06-19",
        "value": "7.300000190734863"
    },
    {
        "dateTime": "2014-06-20",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-06-21",
        "value": "8.333000183105469"
    },
    {
        "dateTime": "2014-06-22",
        "value": "8.565999984741211"
    },
    {
        "dateTime": "2014-06-23",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-06-24",
        "value": "7.400000095367432"
    },
    {
        "dateTime": "2014-06-25",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-06-26",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-06-27",
        "value": "8.824999809265137"
    },
    {
        "dateTime": "2014-06-28",
        "value": "9.050000190734863"
    },
    {
        "dateTime": "2014-06-29",
        "value": "9.274999618530273"
    },
    {
        "dateTime": "2014-06-30",
        "value": "9.5"
    },
    {
        "dateTime": "2014-07-01",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-07-02",
        "value": "9.699000358581543"
    },
    {
        "dateTime": "2014-07-03",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-07-04",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-07-05",
        "value": "9.098999977111816"
    },
    {
        "dateTime": "2014-07-06",
        "value": "9.298999786376953"
    },
    {
        "dateTime": "2014-07-07",
        "value": "9.5"
    },
    {
        "dateTime": "2014-07-08",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-07-09",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-07-10",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-07-11",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-07-12",
        "value": "9.079999923706055"
    },
    {
        "dateTime": "2014-07-13",
        "value": "9.0600004196167"
    },
    {
        "dateTime": "2014-07-14",
        "value": "9.039999961853027"
    },
    {
        "dateTime": "2014-07-15",
        "value": "9.020000457763672"
    },
    {
        "dateTime": "2014-07-16",
        "value": "9.0"
    },
    {
        "dateTime": "2014-07-17",
        "value": "8.979999542236328"
    },
    {
        "dateTime": "2014-07-18",
        "value": "8.960000038146973"
    },
    {
        "dateTime": "2014-07-19",
        "value": "8.9399995803833"
    },
    {
        "dateTime": "2014-07-20",
        "value": "8.920000076293945"
    },
    {
        "dateTime": "2014-07-21",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-07-22",
        "value": "8.0"
    },
    {
        "dateTime": "2014-07-23",
        "value": "8.300000190734863"
    },
    {
        "dateTime": "2014-07-24",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-07-25",
        "value": "9.699000358581543"
    },
    {
        "dateTime": "2014-07-26",
        "value": "9.532999992370605"
    },
    {
        "dateTime": "2014-07-27",
        "value": "9.366999626159668"
    },
    {
        "dateTime": "2014-07-28",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-07-29",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-07-30",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-07-31",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-08-01",
        "value": "7.5"
    },
    {
        "dateTime": "2014-08-02",
        "value": "7.933000087738037"
    },
    {
        "dateTime": "2014-08-03",
        "value": "8.366000175476074"
    },
    {
        "dateTime": "2014-08-04",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-08-05",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-08-06",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-08-07",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-08-08",
        "value": "8.5"
    },
    {
        "dateTime": "2014-08-09",
        "value": "8.932999610900879"
    },
    {
        "dateTime": "2014-08-10",
        "value": "9.366000175476074"
    },
    {
        "dateTime": "2014-08-11",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-08-12",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-08-13",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-08-14",
        "value": "8.5"
    },
    {
        "dateTime": "2014-08-15",
        "value": "8.649999618530273"
    },
    {
        "dateTime": "2014-08-16",
        "value": "8.800000190734863"
    },
    {
        "dateTime": "2014-08-17",
        "value": "8.949999809265137"
    },
    {
        "dateTime": "2014-08-18",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-08-19",
        "value": "8.0"
    },
    {
        "dateTime": "2014-08-20",
        "value": "7.598999977111816"
    },
    {
        "dateTime": "2014-08-21",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-08-22",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-08-23",
        "value": "8.798999786376953"
    },
    {
        "dateTime": "2014-08-24",
        "value": "8.998000144958496"
    },
    {
        "dateTime": "2014-08-25",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-08-26",
        "value": "10.0"
    },
    {
        "dateTime": "2014-08-27",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-08-28",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-08-29",
        "value": "8.300000190734863"
    },
    {
        "dateTime": "2014-08-30",
        "value": "8.366000175476074"
    },
    {
        "dateTime": "2014-08-31",
        "value": "8.432000160217285"
    },
    {
        "dateTime": "2014-09-01",
        "value": "8.5"
    },
    {
        "dateTime": "2014-09-02",
        "value": "8.0"
    },
    {
        "dateTime": "2014-09-03",
        "value": "7.900000095367432"
    },
    {
        "dateTime": "2014-09-04",
        "value": "8.0"
    },
    {
        "dateTime": "2014-09-05",
        "value": "7.800000190734863"
    },
    {
        "dateTime": "2014-09-06",
        "value": "8.199999809265137"
    },
    {
        "dateTime": "2014-09-07",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-09-08",
        "value": "9.0"
    },
    {
        "dateTime": "2014-09-09",
        "value": "7.900000095367432"
    },
    {
        "dateTime": "2014-09-10",
        "value": "5.300000190734863"
    },
    {
        "dateTime": "2014-09-11",
        "value": "8.5"
    },
    {
        "dateTime": "2014-09-12",
        "value": "7.800000190734863"
    },
    {
        "dateTime": "2014-09-13",
        "value": "7.949999809265137"
    },
    {
        "dateTime": "2014-09-14",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-09-15",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-09-16",
        "value": "8.5"
    },
    {
        "dateTime": "2014-09-17",
        "value": "8.0"
    },
    {
        "dateTime": "2014-09-18",
        "value": "9.0"
    },
    {
        "dateTime": "2014-09-19",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-09-20",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-09-21",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-09-22",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-09-23",
        "value": "9.5"
    },
    {
        "dateTime": "2014-09-24",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-09-25",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-09-26",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-09-27",
        "value": "9.75"
    },
    {
        "dateTime": "2014-09-28",
        "value": "9.699000358581543"
    },
    {
        "dateTime": "2014-09-29",
        "value": "10.300000190734863"
    },
    {
        "dateTime": "2014-09-30",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-10-01",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-10-02",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-10-03",
        "value": "9.5"
    },
    {
        "dateTime": "2014-10-04",
        "value": "9.467000007629395"
    },
    {
        "dateTime": "2014-10-05",
        "value": "9.434000015258789"
    },
    {
        "dateTime": "2014-10-06",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-10-07",
        "value": "8.100000381469727"
    },
    {
        "dateTime": "2014-10-08",
        "value": "10.300000190734863"
    },
    {
        "dateTime": "2014-10-09",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-10-10",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-10-11",
        "value": "9.666000366210938"
    },
    {
        "dateTime": "2014-10-12",
        "value": "9.732000350952148"
    },
    {
        "dateTime": "2014-10-13",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-10-14",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-10-15",
        "value": "8.899999618530273"
    },
    {
        "dateTime": "2014-10-16",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-10-17",
        "value": "8.77400016784668"
    },
    {
        "dateTime": "2014-10-18",
        "value": "8.848999977111816"
    },
    {
        "dateTime": "2014-10-19",
        "value": "8.923999786376953"
    },
    {
        "dateTime": "2014-10-20",
        "value": "9.0"
    },
    {
        "dateTime": "2014-10-21",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-10-22",
        "value": "9.0"
    },
    {
        "dateTime": "2014-10-23",
        "value": "9.0"
    },
    {
        "dateTime": "2014-10-24",
        "value": "10.199000358581543"
    },
    {
        "dateTime": "2014-10-25",
        "value": "10.0"
    },
    {
        "dateTime": "2014-10-26",
        "value": "9.800999641418457"
    },
    {
        "dateTime": "2014-10-27",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-10-28",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-10-29",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-10-30",
        "value": "8.199000358581543"
    },
    {
        "dateTime": "2014-10-31",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-11-01",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-11-02",
        "value": "8.899999618530273"
    },
    {
        "dateTime": "2014-11-03",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-11-04",
        "value": "8.39900016784668"
    },
    {
        "dateTime": "2014-11-05",
        "value": "8.600000381469727"
    },
    {
        "dateTime": "2014-11-06",
        "value": "7.400000095367432"
    },
    {
        "dateTime": "2014-11-07",
        "value": "8.89900016784668"
    },
    {
        "dateTime": "2014-11-08",
        "value": "8.932000160217285"
    },
    {
        "dateTime": "2014-11-09",
        "value": "8.96500015258789"
    },
    {
        "dateTime": "2014-11-10",
        "value": "9.0"
    },
    {
        "dateTime": "2014-11-11",
        "value": "9.25"
    },
    {
        "dateTime": "2014-11-12",
        "value": "9.5"
    },
    {
        "dateTime": "2014-11-13",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-11-14",
        "value": "9.100000381469727"
    },
    {
        "dateTime": "2014-11-15",
        "value": "9.333000183105469"
    },
    {
        "dateTime": "2014-11-16",
        "value": "9.565999984741211"
    },
    {
        "dateTime": "2014-11-17",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-11-18",
        "value": "9.39900016784668"
    },
    {
        "dateTime": "2014-11-19",
        "value": "9.699000358581543"
    },
    {
        "dateTime": "2014-11-20",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-11-21",
        "value": "9.300000190734863"
    },
    {
        "dateTime": "2014-11-22",
        "value": "9.532999992370605"
    },
    {
        "dateTime": "2014-11-23",
        "value": "9.765999794006348"
    },
    {
        "dateTime": "2014-11-24",
        "value": "10.0"
    },
    {
        "dateTime": "2014-11-25",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-11-26",
        "value": "9.699000358581543"
    },
    {
        "dateTime": "2014-11-27",
        "value": "10.199000358581543"
    },
    {
        "dateTime": "2014-11-28",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-11-29",
        "value": "9.067000389099121"
    },
    {
        "dateTime": "2014-11-30",
        "value": "8.534000396728516"
    },
    {
        "dateTime": "2014-12-01",
        "value": "8.0"
    },
    {
        "dateTime": "2014-12-02",
        "value": "9.199000358581543"
    },
    {
        "dateTime": "2014-12-03",
        "value": "9.0"
    },
    {
        "dateTime": "2014-12-04",
        "value": "10.199000358581543"
    },
    {
        "dateTime": "2014-12-05",
        "value": "9.600000381469727"
    },
    {
        "dateTime": "2014-12-06",
        "value": "10.39900016784668"
    },
    {
        "dateTime": "2014-12-07",
        "value": "10.39900016784668"
    },
    {
        "dateTime": "2014-12-08",
        "value": "10.39900016784668"
    },
    {
        "dateTime": "2014-12-09",
        "value": "10.800000190734863"
    },
    {
        "dateTime": "2014-12-10",
        "value": "10.0"
    },
    {
        "dateTime": "2014-12-11",
        "value": "10.0"
    },
    {
        "dateTime": "2014-12-12",
        "value": "9.960000038146973"
    },
    {
        "dateTime": "2014-12-13",
        "value": "9.920000076293945"
    },
    {
        "dateTime": "2014-12-14",
        "value": "9.880000114440918"
    },
    {
        "dateTime": "2014-12-15",
        "value": "9.84000015258789"
    },
    {
        "dateTime": "2014-12-16",
        "value": "9.800000190734863"
    },
    {
        "dateTime": "2014-12-17",
        "value": "9.432999610900879"
    },
    {
        "dateTime": "2014-12-18",
        "value": "9.065999984741211"
    },
    {
        "dateTime": "2014-12-19",
        "value": "8.699000358581543"
    },
    {
        "dateTime": "2014-12-20",
        "value": "8.878999710083008"
    },
    {
        "dateTime": "2014-12-21",
        "value": "9.059000015258789"
    },
    {
        "dateTime": "2014-12-22",
        "value": "9.23900032043457"
    },
    {
        "dateTime": "2014-12-23",
        "value": "9.418999671936035"
    },
    {
        "dateTime": "2014-12-24",
        "value": "9.598999977111816"
    },
    {
        "dateTime": "2014-12-25",
        "value": "9.779000282287598"
    },
    {
        "dateTime": "2014-12-26",
        "value": "9.958999633789062"
    },
    {
        "dateTime": "2014-12-27",
        "value": "10.138999938964844"
    },
    {
        "dateTime": "2014-12-28",
        "value": "10.319000244140625"
    },
    {
        "dateTime": "2014-12-29",
        "value": "10.5"
    },
    {
        "dateTime": "2014-12-30",
        "value": "10.5"
    },
    {
        "dateTime": "2014-12-31",
        "value": "10.5"
    }
];

var first = moment(weight[0].dateTime);
for (var i = 0; i < first.day(); i++) {
    first.subtract(1, 'days');
    weight.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": weight[0].value
    });
    fat.unshift({
        "dateTime": first.format('YYYY-MM-DD'),
        "value": fat[0].value
    });
}

var last = moment(weight[weight.length - 1].dateTime);
for (var i = last.day(); i < 7; i++) {
    last.add(1, 'days');
    weight.shift({
        "dateTime": last.format('YYYY-MM-DD'),
        "value": weight[weight.length - 1].value
    });
    fat.unshift({
        "dateTime": last.format('YYYY-MM-DD'),
        "value": fat[fat.length - 1].value
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

var divdeBySeven = function (item) {
    return Math.round((item / 7) * 100) / 100;
};

// Weight average by week
var weightByWeek = [];
var weightCopy = weight.slice(0);
while (weightCopy.length > 0) {
    weightByWeek.push(weightCopy.splice(0, 7));
}
var weightTotalWeek = weightByWeek.map(getTotal);
var weightAverageWeek = weightTotalWeek.map(divdeBySeven);
console.log('#### Weight average by week ####');
console.log(weightAverageWeek);

// Fat average by week
var fatByWeek = [];
var fatCopy = fat.slice(0);
while (fatCopy.length > 0) {
    fatByWeek.push(fatCopy.splice(0, 7));
}
var fatTotalWeek = fatByWeek.map(getTotal);
var fatAverageWeek = fatTotalWeek.map(divdeBySeven);
console.log('#### Fat average by week ####');
console.log(fatAverageWeek);

