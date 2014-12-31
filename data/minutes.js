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

var minutesSedentary = [
    {
        "dateTime": "2014-01-01",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-02",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-03",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-04",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-05",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-06",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-07",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-08",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-09",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-10",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-11",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-12",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-13",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-14",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-15",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-16",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-17",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-18",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-19",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-20",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-21",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-22",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-23",
        "value": "1440"
    },
    {
        "dateTime": "2014-01-24",
        "value": "1407"
    },
    {
        "dateTime": "2014-01-25",
        "value": "663"
    },
    {
        "dateTime": "2014-01-26",
        "value": "766"
    },
    {
        "dateTime": "2014-01-27",
        "value": "917"
    },
    {
        "dateTime": "2014-01-28",
        "value": "918"
    },
    {
        "dateTime": "2014-01-29",
        "value": "856"
    },
    {
        "dateTime": "2014-01-30",
        "value": "931"
    },
    {
        "dateTime": "2014-01-31",
        "value": "767"
    },
    {
        "dateTime": "2014-02-01",
        "value": "520"
    },
    {
        "dateTime": "2014-02-02",
        "value": "682"
    },
    {
        "dateTime": "2014-02-03",
        "value": "913"
    },
    {
        "dateTime": "2014-02-04",
        "value": "832"
    },
    {
        "dateTime": "2014-02-05",
        "value": "746"
    },
    {
        "dateTime": "2014-02-06",
        "value": "747"
    },
    {
        "dateTime": "2014-02-07",
        "value": "812"
    },
    {
        "dateTime": "2014-02-08",
        "value": "648"
    },
    {
        "dateTime": "2014-02-09",
        "value": "604"
    },
    {
        "dateTime": "2014-02-10",
        "value": "796"
    },
    {
        "dateTime": "2014-02-11",
        "value": "850"
    },
    {
        "dateTime": "2014-02-12",
        "value": "868"
    },
    {
        "dateTime": "2014-02-13",
        "value": "855"
    },
    {
        "dateTime": "2014-02-14",
        "value": "838"
    },
    {
        "dateTime": "2014-02-15",
        "value": "650"
    },
    {
        "dateTime": "2014-02-16",
        "value": "707"
    },
    {
        "dateTime": "2014-02-17",
        "value": "840"
    },
    {
        "dateTime": "2014-02-18",
        "value": "801"
    },
    {
        "dateTime": "2014-02-19",
        "value": "882"
    },
    {
        "dateTime": "2014-02-20",
        "value": "867"
    },
    {
        "dateTime": "2014-02-21",
        "value": "745"
    },
    {
        "dateTime": "2014-02-22",
        "value": "682"
    },
    {
        "dateTime": "2014-02-23",
        "value": "667"
    },
    {
        "dateTime": "2014-02-24",
        "value": "789"
    },
    {
        "dateTime": "2014-02-25",
        "value": "854"
    },
    {
        "dateTime": "2014-02-26",
        "value": "787"
    },
    {
        "dateTime": "2014-02-27",
        "value": "859"
    },
    {
        "dateTime": "2014-02-28",
        "value": "831"
    },
    {
        "dateTime": "2014-03-01",
        "value": "726"
    },
    {
        "dateTime": "2014-03-02",
        "value": "502"
    },
    {
        "dateTime": "2014-03-03",
        "value": "676"
    },
    {
        "dateTime": "2014-03-04",
        "value": "686"
    },
    {
        "dateTime": "2014-03-05",
        "value": "823"
    },
    {
        "dateTime": "2014-03-06",
        "value": "811"
    },
    {
        "dateTime": "2014-03-07",
        "value": "1039"
    },
    {
        "dateTime": "2014-03-08",
        "value": "409"
    },
    {
        "dateTime": "2014-03-09",
        "value": "574"
    },
    {
        "dateTime": "2014-03-10",
        "value": "812"
    },
    {
        "dateTime": "2014-03-11",
        "value": "795"
    },
    {
        "dateTime": "2014-03-12",
        "value": "846"
    },
    {
        "dateTime": "2014-03-13",
        "value": "803"
    },
    {
        "dateTime": "2014-03-14",
        "value": "844"
    },
    {
        "dateTime": "2014-03-15",
        "value": "639"
    },
    {
        "dateTime": "2014-03-16",
        "value": "602"
    },
    {
        "dateTime": "2014-03-17",
        "value": "785"
    },
    {
        "dateTime": "2014-03-18",
        "value": "829"
    },
    {
        "dateTime": "2014-03-19",
        "value": "830"
    },
    {
        "dateTime": "2014-03-20",
        "value": "842"
    },
    {
        "dateTime": "2014-03-21",
        "value": "703"
    },
    {
        "dateTime": "2014-03-22",
        "value": "509"
    },
    {
        "dateTime": "2014-03-23",
        "value": "759"
    },
    {
        "dateTime": "2014-03-24",
        "value": "900"
    },
    {
        "dateTime": "2014-03-25",
        "value": "756"
    },
    {
        "dateTime": "2014-03-26",
        "value": "710"
    },
    {
        "dateTime": "2014-03-27",
        "value": "796"
    },
    {
        "dateTime": "2014-03-28",
        "value": "786"
    },
    {
        "dateTime": "2014-03-29",
        "value": "699"
    },
    {
        "dateTime": "2014-03-30",
        "value": "739"
    },
    {
        "dateTime": "2014-03-31",
        "value": "763"
    },
    {
        "dateTime": "2014-04-01",
        "value": "752"
    },
    {
        "dateTime": "2014-04-02",
        "value": "814"
    },
    {
        "dateTime": "2014-04-03",
        "value": "870"
    },
    {
        "dateTime": "2014-04-04",
        "value": "751"
    },
    {
        "dateTime": "2014-04-05",
        "value": "664"
    },
    {
        "dateTime": "2014-04-06",
        "value": "492"
    },
    {
        "dateTime": "2014-04-07",
        "value": "859"
    },
    {
        "dateTime": "2014-04-08",
        "value": "799"
    },
    {
        "dateTime": "2014-04-09",
        "value": "791"
    },
    {
        "dateTime": "2014-04-10",
        "value": "746"
    },
    {
        "dateTime": "2014-04-11",
        "value": "721"
    },
    {
        "dateTime": "2014-04-12",
        "value": "657"
    },
    {
        "dateTime": "2014-04-13",
        "value": "577"
    },
    {
        "dateTime": "2014-04-14",
        "value": "763"
    },
    {
        "dateTime": "2014-04-15",
        "value": "804"
    },
    {
        "dateTime": "2014-04-16",
        "value": "688"
    },
    {
        "dateTime": "2014-04-17",
        "value": "776"
    },
    {
        "dateTime": "2014-04-18",
        "value": "840"
    },
    {
        "dateTime": "2014-04-19",
        "value": "640"
    },
    {
        "dateTime": "2014-04-20",
        "value": "450"
    },
    {
        "dateTime": "2014-04-21",
        "value": "461"
    },
    {
        "dateTime": "2014-04-22",
        "value": "681"
    },
    {
        "dateTime": "2014-04-23",
        "value": "788"
    },
    {
        "dateTime": "2014-04-24",
        "value": "805"
    },
    {
        "dateTime": "2014-04-25",
        "value": "782"
    },
    {
        "dateTime": "2014-04-26",
        "value": "610"
    },
    {
        "dateTime": "2014-04-27",
        "value": "575"
    },
    {
        "dateTime": "2014-04-28",
        "value": "813"
    },
    {
        "dateTime": "2014-04-29",
        "value": "801"
    },
    {
        "dateTime": "2014-04-30",
        "value": "779"
    },
    {
        "dateTime": "2014-05-01",
        "value": "821"
    },
    {
        "dateTime": "2014-05-02",
        "value": "575"
    },
    {
        "dateTime": "2014-05-03",
        "value": "462"
    },
    {
        "dateTime": "2014-05-04",
        "value": "715"
    },
    {
        "dateTime": "2014-05-05",
        "value": "783"
    },
    {
        "dateTime": "2014-05-06",
        "value": "833"
    },
    {
        "dateTime": "2014-05-07",
        "value": "816"
    },
    {
        "dateTime": "2014-05-08",
        "value": "500"
    },
    {
        "dateTime": "2014-05-09",
        "value": "729"
    },
    {
        "dateTime": "2014-05-10",
        "value": "485"
    },
    {
        "dateTime": "2014-05-11",
        "value": "645"
    },
    {
        "dateTime": "2014-05-12",
        "value": "822"
    },
    {
        "dateTime": "2014-05-13",
        "value": "746"
    },
    {
        "dateTime": "2014-05-14",
        "value": "822"
    },
    {
        "dateTime": "2014-05-15",
        "value": "735"
    },
    {
        "dateTime": "2014-05-16",
        "value": "705"
    },
    {
        "dateTime": "2014-05-17",
        "value": "641"
    },
    {
        "dateTime": "2014-05-18",
        "value": "691"
    },
    {
        "dateTime": "2014-05-19",
        "value": "776"
    },
    {
        "dateTime": "2014-05-20",
        "value": "829"
    },
    {
        "dateTime": "2014-05-21",
        "value": "865"
    },
    {
        "dateTime": "2014-05-22",
        "value": "827"
    },
    {
        "dateTime": "2014-05-23",
        "value": "797"
    },
    {
        "dateTime": "2014-05-24",
        "value": "472"
    },
    {
        "dateTime": "2014-05-25",
        "value": "820"
    },
    {
        "dateTime": "2014-05-26",
        "value": "779"
    },
    {
        "dateTime": "2014-05-27",
        "value": "766"
    },
    {
        "dateTime": "2014-05-28",
        "value": "752"
    },
    {
        "dateTime": "2014-05-29",
        "value": "918"
    },
    {
        "dateTime": "2014-05-30",
        "value": "809"
    },
    {
        "dateTime": "2014-05-31",
        "value": "713"
    },
    {
        "dateTime": "2014-06-01",
        "value": "592"
    },
    {
        "dateTime": "2014-06-02",
        "value": "758"
    },
    {
        "dateTime": "2014-06-03",
        "value": "759"
    },
    {
        "dateTime": "2014-06-04",
        "value": "830"
    },
    {
        "dateTime": "2014-06-05",
        "value": "877"
    },
    {
        "dateTime": "2014-06-06",
        "value": "826"
    },
    {
        "dateTime": "2014-06-07",
        "value": "480"
    },
    {
        "dateTime": "2014-06-08",
        "value": "619"
    },
    {
        "dateTime": "2014-06-09",
        "value": "821"
    },
    {
        "dateTime": "2014-06-10",
        "value": "820"
    },
    {
        "dateTime": "2014-06-11",
        "value": "767"
    },
    {
        "dateTime": "2014-06-12",
        "value": "829"
    },
    {
        "dateTime": "2014-06-13",
        "value": "860"
    },
    {
        "dateTime": "2014-06-14",
        "value": "743"
    },
    {
        "dateTime": "2014-06-15",
        "value": "423"
    },
    {
        "dateTime": "2014-06-16",
        "value": "861"
    },
    {
        "dateTime": "2014-06-17",
        "value": "838"
    },
    {
        "dateTime": "2014-06-18",
        "value": "817"
    },
    {
        "dateTime": "2014-06-19",
        "value": "778"
    },
    {
        "dateTime": "2014-06-20",
        "value": "847"
    },
    {
        "dateTime": "2014-06-21",
        "value": "662"
    },
    {
        "dateTime": "2014-06-22",
        "value": "716"
    },
    {
        "dateTime": "2014-06-23",
        "value": "863"
    },
    {
        "dateTime": "2014-06-24",
        "value": "900"
    },
    {
        "dateTime": "2014-06-25",
        "value": "896"
    },
    {
        "dateTime": "2014-06-26",
        "value": "841"
    },
    {
        "dateTime": "2014-06-27",
        "value": "879"
    },
    {
        "dateTime": "2014-06-28",
        "value": "589"
    },
    {
        "dateTime": "2014-06-29",
        "value": "600"
    },
    {
        "dateTime": "2014-06-30",
        "value": "867"
    },
    {
        "dateTime": "2014-07-01",
        "value": "863"
    },
    {
        "dateTime": "2014-07-02",
        "value": "856"
    },
    {
        "dateTime": "2014-07-03",
        "value": "842"
    },
    {
        "dateTime": "2014-07-04",
        "value": "859"
    },
    {
        "dateTime": "2014-07-05",
        "value": "636"
    },
    {
        "dateTime": "2014-07-06",
        "value": "683"
    },
    {
        "dateTime": "2014-07-07",
        "value": "888"
    },
    {
        "dateTime": "2014-07-08",
        "value": "813"
    },
    {
        "dateTime": "2014-07-09",
        "value": "872"
    },
    {
        "dateTime": "2014-07-10",
        "value": "764"
    },
    {
        "dateTime": "2014-07-11",
        "value": "879"
    },
    {
        "dateTime": "2014-07-12",
        "value": "734"
    },
    {
        "dateTime": "2014-07-13",
        "value": "713"
    },
    {
        "dateTime": "2014-07-14",
        "value": "558"
    },
    {
        "dateTime": "2014-07-15",
        "value": "625"
    },
    {
        "dateTime": "2014-07-16",
        "value": "569"
    },
    {
        "dateTime": "2014-07-17",
        "value": "666"
    },
    {
        "dateTime": "2014-07-18",
        "value": "694"
    },
    {
        "dateTime": "2014-07-19",
        "value": "746"
    },
    {
        "dateTime": "2014-07-20",
        "value": "616"
    },
    {
        "dateTime": "2014-07-21",
        "value": "839"
    },
    {
        "dateTime": "2014-07-22",
        "value": "842"
    },
    {
        "dateTime": "2014-07-23",
        "value": "865"
    },
    {
        "dateTime": "2014-07-24",
        "value": "879"
    },
    {
        "dateTime": "2014-07-25",
        "value": "896"
    },
    {
        "dateTime": "2014-07-26",
        "value": "761"
    },
    {
        "dateTime": "2014-07-27",
        "value": "597"
    },
    {
        "dateTime": "2014-07-28",
        "value": "856"
    },
    {
        "dateTime": "2014-07-29",
        "value": "885"
    },
    {
        "dateTime": "2014-07-30",
        "value": "875"
    },
    {
        "dateTime": "2014-07-31",
        "value": "876"
    },
    {
        "dateTime": "2014-08-01",
        "value": "841"
    },
    {
        "dateTime": "2014-08-02",
        "value": "540"
    },
    {
        "dateTime": "2014-08-03",
        "value": "568"
    },
    {
        "dateTime": "2014-08-04",
        "value": "869"
    },
    {
        "dateTime": "2014-08-05",
        "value": "847"
    },
    {
        "dateTime": "2014-08-06",
        "value": "851"
    },
    {
        "dateTime": "2014-08-07",
        "value": "834"
    },
    {
        "dateTime": "2014-08-08",
        "value": "897"
    },
    {
        "dateTime": "2014-08-09",
        "value": "635"
    },
    {
        "dateTime": "2014-08-10",
        "value": "514"
    },
    {
        "dateTime": "2014-08-11",
        "value": "843"
    },
    {
        "dateTime": "2014-08-12",
        "value": "797"
    },
    {
        "dateTime": "2014-08-13",
        "value": "897"
    },
    {
        "dateTime": "2014-08-14",
        "value": "949"
    },
    {
        "dateTime": "2014-08-15",
        "value": "786"
    },
    {
        "dateTime": "2014-08-16",
        "value": "576"
    },
    {
        "dateTime": "2014-08-17",
        "value": "706"
    },
    {
        "dateTime": "2014-08-18",
        "value": "879"
    },
    {
        "dateTime": "2014-08-19",
        "value": "878"
    },
    {
        "dateTime": "2014-08-20",
        "value": "867"
    },
    {
        "dateTime": "2014-08-21",
        "value": "826"
    },
    {
        "dateTime": "2014-08-22",
        "value": "920"
    },
    {
        "dateTime": "2014-08-23",
        "value": "674"
    },
    {
        "dateTime": "2014-08-24",
        "value": "561"
    },
    {
        "dateTime": "2014-08-25",
        "value": "860"
    },
    {
        "dateTime": "2014-08-26",
        "value": "837"
    },
    {
        "dateTime": "2014-08-27",
        "value": "845"
    },
    {
        "dateTime": "2014-08-28",
        "value": "810"
    },
    {
        "dateTime": "2014-08-29",
        "value": "867"
    },
    {
        "dateTime": "2014-08-30",
        "value": "679"
    },
    {
        "dateTime": "2014-08-31",
        "value": "600"
    },
    {
        "dateTime": "2014-09-01",
        "value": "847"
    },
    {
        "dateTime": "2014-09-02",
        "value": "871"
    },
    {
        "dateTime": "2014-09-03",
        "value": "905"
    },
    {
        "dateTime": "2014-09-04",
        "value": "901"
    },
    {
        "dateTime": "2014-09-05",
        "value": "806"
    },
    {
        "dateTime": "2014-09-06",
        "value": "644"
    },
    {
        "dateTime": "2014-09-07",
        "value": "680"
    },
    {
        "dateTime": "2014-09-08",
        "value": "835"
    },
    {
        "dateTime": "2014-09-09",
        "value": "926"
    },
    {
        "dateTime": "2014-09-10",
        "value": "935"
    },
    {
        "dateTime": "2014-09-11",
        "value": "824"
    },
    {
        "dateTime": "2014-09-12",
        "value": "699"
    },
    {
        "dateTime": "2014-09-13",
        "value": "546"
    },
    {
        "dateTime": "2014-09-14",
        "value": "639"
    },
    {
        "dateTime": "2014-09-15",
        "value": "888"
    },
    {
        "dateTime": "2014-09-16",
        "value": "872"
    },
    {
        "dateTime": "2014-09-17",
        "value": "942"
    },
    {
        "dateTime": "2014-09-18",
        "value": "907"
    },
    {
        "dateTime": "2014-09-19",
        "value": "834"
    },
    {
        "dateTime": "2014-09-20",
        "value": "639"
    },
    {
        "dateTime": "2014-09-21",
        "value": "582"
    },
    {
        "dateTime": "2014-09-22",
        "value": "857"
    },
    {
        "dateTime": "2014-09-23",
        "value": "816"
    },
    {
        "dateTime": "2014-09-24",
        "value": "838"
    },
    {
        "dateTime": "2014-09-25",
        "value": "841"
    },
    {
        "dateTime": "2014-09-26",
        "value": "893"
    },
    {
        "dateTime": "2014-09-27",
        "value": "651"
    },
    {
        "dateTime": "2014-09-28",
        "value": "659"
    },
    {
        "dateTime": "2014-09-29",
        "value": "787"
    },
    {
        "dateTime": "2014-09-30",
        "value": "803"
    },
    {
        "dateTime": "2014-10-01",
        "value": "768"
    },
    {
        "dateTime": "2014-10-02",
        "value": "817"
    },
    {
        "dateTime": "2014-10-03",
        "value": "782"
    },
    {
        "dateTime": "2014-10-04",
        "value": "527"
    },
    {
        "dateTime": "2014-10-05",
        "value": "534"
    },
    {
        "dateTime": "2014-10-06",
        "value": "854"
    },
    {
        "dateTime": "2014-10-07",
        "value": "815"
    },
    {
        "dateTime": "2014-10-08",
        "value": "785"
    },
    {
        "dateTime": "2014-10-09",
        "value": "802"
    },
    {
        "dateTime": "2014-10-10",
        "value": "674"
    },
    {
        "dateTime": "2014-10-11",
        "value": "681"
    },
    {
        "dateTime": "2014-10-12",
        "value": "598"
    },
    {
        "dateTime": "2014-10-13",
        "value": "850"
    },
    {
        "dateTime": "2014-10-14",
        "value": "858"
    },
    {
        "dateTime": "2014-10-15",
        "value": "658"
    },
    {
        "dateTime": "2014-10-16",
        "value": "866"
    },
    {
        "dateTime": "2014-10-17",
        "value": "922"
    },
    {
        "dateTime": "2014-10-18",
        "value": "630"
    },
    {
        "dateTime": "2014-10-19",
        "value": "528"
    },
    {
        "dateTime": "2014-10-20",
        "value": "795"
    },
    {
        "dateTime": "2014-10-21",
        "value": "829"
    },
    {
        "dateTime": "2014-10-22",
        "value": "856"
    },
    {
        "dateTime": "2014-10-23",
        "value": "860"
    },
    {
        "dateTime": "2014-10-24",
        "value": "868"
    },
    {
        "dateTime": "2014-10-25",
        "value": "505"
    },
    {
        "dateTime": "2014-10-26",
        "value": "564"
    },
    {
        "dateTime": "2014-10-27",
        "value": "844"
    },
    {
        "dateTime": "2014-10-28",
        "value": "865"
    },
    {
        "dateTime": "2014-10-29",
        "value": "845"
    },
    {
        "dateTime": "2014-10-30",
        "value": "831"
    },
    {
        "dateTime": "2014-10-31",
        "value": "874"
    },
    {
        "dateTime": "2014-11-01",
        "value": "483"
    },
    {
        "dateTime": "2014-11-02",
        "value": "665"
    },
    {
        "dateTime": "2014-11-03",
        "value": "866"
    },
    {
        "dateTime": "2014-11-04",
        "value": "852"
    },
    {
        "dateTime": "2014-11-05",
        "value": "782"
    },
    {
        "dateTime": "2014-11-06",
        "value": "837"
    },
    {
        "dateTime": "2014-11-07",
        "value": "817"
    },
    {
        "dateTime": "2014-11-08",
        "value": "720"
    },
    {
        "dateTime": "2014-11-09",
        "value": "653"
    },
    {
        "dateTime": "2014-11-10",
        "value": "776"
    },
    {
        "dateTime": "2014-11-11",
        "value": "655"
    },
    {
        "dateTime": "2014-11-12",
        "value": "906"
    },
    {
        "dateTime": "2014-11-13",
        "value": "847"
    },
    {
        "dateTime": "2014-11-14",
        "value": "887"
    },
    {
        "dateTime": "2014-11-15",
        "value": "664"
    },
    {
        "dateTime": "2014-11-16",
        "value": "671"
    },
    {
        "dateTime": "2014-11-17",
        "value": "838"
    },
    {
        "dateTime": "2014-11-18",
        "value": "906"
    },
    {
        "dateTime": "2014-11-19",
        "value": "869"
    },
    {
        "dateTime": "2014-11-20",
        "value": "852"
    },
    {
        "dateTime": "2014-11-21",
        "value": "926"
    },
    {
        "dateTime": "2014-11-22",
        "value": "571"
    },
    {
        "dateTime": "2014-11-23",
        "value": "636"
    },
    {
        "dateTime": "2014-11-24",
        "value": "862"
    },
    {
        "dateTime": "2014-11-25",
        "value": "889"
    },
    {
        "dateTime": "2014-11-26",
        "value": "923"
    },
    {
        "dateTime": "2014-11-27",
        "value": "878"
    },
    {
        "dateTime": "2014-11-28",
        "value": "884"
    },
    {
        "dateTime": "2014-11-29",
        "value": "758"
    },
    {
        "dateTime": "2014-11-30",
        "value": "618"
    },
    {
        "dateTime": "2014-12-01",
        "value": "835"
    },
    {
        "dateTime": "2014-12-02",
        "value": "900"
    },
    {
        "dateTime": "2014-12-03",
        "value": "831"
    },
    {
        "dateTime": "2014-12-04",
        "value": "908"
    },
    {
        "dateTime": "2014-12-05",
        "value": "884"
    },
    {
        "dateTime": "2014-12-06",
        "value": "669"
    },
    {
        "dateTime": "2014-12-07",
        "value": "622"
    },
    {
        "dateTime": "2014-12-08",
        "value": "824"
    },
    {
        "dateTime": "2014-12-09",
        "value": "900"
    },
    {
        "dateTime": "2014-12-10",
        "value": "863"
    },
    {
        "dateTime": "2014-12-11",
        "value": "944"
    },
    {
        "dateTime": "2014-12-12",
        "value": "679"
    },
    {
        "dateTime": "2014-12-13",
        "value": "562"
    },
    {
        "dateTime": "2014-12-14",
        "value": "777"
    },
    {
        "dateTime": "2014-12-15",
        "value": "754"
    },
    {
        "dateTime": "2014-12-16",
        "value": "849"
    },
    {
        "dateTime": "2014-12-17",
        "value": "855"
    },
    {
        "dateTime": "2014-12-18",
        "value": "806"
    },
    {
        "dateTime": "2014-12-19",
        "value": "798"
    },
    {
        "dateTime": "2014-12-20",
        "value": "563"
    },
    {
        "dateTime": "2014-12-21",
        "value": "489"
    },
    {
        "dateTime": "2014-12-22",
        "value": "741"
    },
    {
        "dateTime": "2014-12-23",
        "value": "797"
    },
    {
        "dateTime": "2014-12-24",
        "value": "723"
    },
    {
        "dateTime": "2014-12-25",
        "value": "867"
    },
    {
        "dateTime": "2014-12-26",
        "value": "793"
    },
    {
        "dateTime": "2014-12-27",
        "value": "754"
    },
    {
        "dateTime": "2014-12-28",
        "value": "726"
    },
    {
        "dateTime": "2014-12-29",
        "value": "806"
    },
    {
        "dateTime": "2014-12-30",
        "value": "890"
    },
    {
        "dateTime": "2014-12-31",
        "value": "1440"
    }
];
var minutesLightyActive = [
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
        "value": "20"
    },
    {
        "dateTime": "2014-01-25",
        "value": "126"
    },
    {
        "dateTime": "2014-01-26",
        "value": "50"
    },
    {
        "dateTime": "2014-01-27",
        "value": "78"
    },
    {
        "dateTime": "2014-01-28",
        "value": "74"
    },
    {
        "dateTime": "2014-01-29",
        "value": "134"
    },
    {
        "dateTime": "2014-01-30",
        "value": "52"
    },
    {
        "dateTime": "2014-01-31",
        "value": "114"
    },
    {
        "dateTime": "2014-02-01",
        "value": "149"
    },
    {
        "dateTime": "2014-02-02",
        "value": "87"
    },
    {
        "dateTime": "2014-02-03",
        "value": "78"
    },
    {
        "dateTime": "2014-02-04",
        "value": "105"
    },
    {
        "dateTime": "2014-02-05",
        "value": "137"
    },
    {
        "dateTime": "2014-02-06",
        "value": "113"
    },
    {
        "dateTime": "2014-02-07",
        "value": "98"
    },
    {
        "dateTime": "2014-02-08",
        "value": "154"
    },
    {
        "dateTime": "2014-02-09",
        "value": "122"
    },
    {
        "dateTime": "2014-02-10",
        "value": "103"
    },
    {
        "dateTime": "2014-02-11",
        "value": "76"
    },
    {
        "dateTime": "2014-02-12",
        "value": "61"
    },
    {
        "dateTime": "2014-02-13",
        "value": "64"
    },
    {
        "dateTime": "2014-02-14",
        "value": "96"
    },
    {
        "dateTime": "2014-02-15",
        "value": "184"
    },
    {
        "dateTime": "2014-02-16",
        "value": "128"
    },
    {
        "dateTime": "2014-02-17",
        "value": "84"
    },
    {
        "dateTime": "2014-02-18",
        "value": "89"
    },
    {
        "dateTime": "2014-02-19",
        "value": "63"
    },
    {
        "dateTime": "2014-02-20",
        "value": "54"
    },
    {
        "dateTime": "2014-02-21",
        "value": "125"
    },
    {
        "dateTime": "2014-02-22",
        "value": "125"
    },
    {
        "dateTime": "2014-02-23",
        "value": "83"
    },
    {
        "dateTime": "2014-02-24",
        "value": "94"
    },
    {
        "dateTime": "2014-02-25",
        "value": "72"
    },
    {
        "dateTime": "2014-02-26",
        "value": "78"
    },
    {
        "dateTime": "2014-02-27",
        "value": "104"
    },
    {
        "dateTime": "2014-02-28",
        "value": "86"
    },
    {
        "dateTime": "2014-03-01",
        "value": "83"
    },
    {
        "dateTime": "2014-03-02",
        "value": "137"
    },
    {
        "dateTime": "2014-03-03",
        "value": "101"
    },
    {
        "dateTime": "2014-03-04",
        "value": "140"
    },
    {
        "dateTime": "2014-03-05",
        "value": "58"
    },
    {
        "dateTime": "2014-03-06",
        "value": "95"
    },
    {
        "dateTime": "2014-03-07",
        "value": "181"
    },
    {
        "dateTime": "2014-03-08",
        "value": "130"
    },
    {
        "dateTime": "2014-03-09",
        "value": "164"
    },
    {
        "dateTime": "2014-03-10",
        "value": "93"
    },
    {
        "dateTime": "2014-03-11",
        "value": "78"
    },
    {
        "dateTime": "2014-03-12",
        "value": "60"
    },
    {
        "dateTime": "2014-03-13",
        "value": "75"
    },
    {
        "dateTime": "2014-03-14",
        "value": "81"
    },
    {
        "dateTime": "2014-03-15",
        "value": "226"
    },
    {
        "dateTime": "2014-03-16",
        "value": "177"
    },
    {
        "dateTime": "2014-03-17",
        "value": "90"
    },
    {
        "dateTime": "2014-03-18",
        "value": "85"
    },
    {
        "dateTime": "2014-03-19",
        "value": "89"
    },
    {
        "dateTime": "2014-03-20",
        "value": "78"
    },
    {
        "dateTime": "2014-03-21",
        "value": "129"
    },
    {
        "dateTime": "2014-03-22",
        "value": "149"
    },
    {
        "dateTime": "2014-03-23",
        "value": "87"
    },
    {
        "dateTime": "2014-03-24",
        "value": "102"
    },
    {
        "dateTime": "2014-03-25",
        "value": "109"
    },
    {
        "dateTime": "2014-03-26",
        "value": "125"
    },
    {
        "dateTime": "2014-03-27",
        "value": "111"
    },
    {
        "dateTime": "2014-03-28",
        "value": "120"
    },
    {
        "dateTime": "2014-03-29",
        "value": "156"
    },
    {
        "dateTime": "2014-03-30",
        "value": "170"
    },
    {
        "dateTime": "2014-03-31",
        "value": "102"
    },
    {
        "dateTime": "2014-04-01",
        "value": "114"
    },
    {
        "dateTime": "2014-04-02",
        "value": "74"
    },
    {
        "dateTime": "2014-04-03",
        "value": "90"
    },
    {
        "dateTime": "2014-04-04",
        "value": "100"
    },
    {
        "dateTime": "2014-04-05",
        "value": "185"
    },
    {
        "dateTime": "2014-04-06",
        "value": "127"
    },
    {
        "dateTime": "2014-04-07",
        "value": "68"
    },
    {
        "dateTime": "2014-04-08",
        "value": "119"
    },
    {
        "dateTime": "2014-04-09",
        "value": "83"
    },
    {
        "dateTime": "2014-04-10",
        "value": "119"
    },
    {
        "dateTime": "2014-04-11",
        "value": "145"
    },
    {
        "dateTime": "2014-04-12",
        "value": "158"
    },
    {
        "dateTime": "2014-04-13",
        "value": "127"
    },
    {
        "dateTime": "2014-04-14",
        "value": "131"
    },
    {
        "dateTime": "2014-04-15",
        "value": "76"
    },
    {
        "dateTime": "2014-04-16",
        "value": "132"
    },
    {
        "dateTime": "2014-04-17",
        "value": "97"
    },
    {
        "dateTime": "2014-04-18",
        "value": "73"
    },
    {
        "dateTime": "2014-04-19",
        "value": "189"
    },
    {
        "dateTime": "2014-04-20",
        "value": "160"
    },
    {
        "dateTime": "2014-04-21",
        "value": "125"
    },
    {
        "dateTime": "2014-04-22",
        "value": "127"
    },
    {
        "dateTime": "2014-04-23",
        "value": "94"
    },
    {
        "dateTime": "2014-04-24",
        "value": "83"
    },
    {
        "dateTime": "2014-04-25",
        "value": "101"
    },
    {
        "dateTime": "2014-04-26",
        "value": "142"
    },
    {
        "dateTime": "2014-04-27",
        "value": "109"
    },
    {
        "dateTime": "2014-04-28",
        "value": "71"
    },
    {
        "dateTime": "2014-04-29",
        "value": "126"
    },
    {
        "dateTime": "2014-04-30",
        "value": "62"
    },
    {
        "dateTime": "2014-05-01",
        "value": "148"
    },
    {
        "dateTime": "2014-05-02",
        "value": "145"
    },
    {
        "dateTime": "2014-05-03",
        "value": "167"
    },
    {
        "dateTime": "2014-05-04",
        "value": "117"
    },
    {
        "dateTime": "2014-05-05",
        "value": "86"
    },
    {
        "dateTime": "2014-05-06",
        "value": "103"
    },
    {
        "dateTime": "2014-05-07",
        "value": "81"
    },
    {
        "dateTime": "2014-05-08",
        "value": "156"
    },
    {
        "dateTime": "2014-05-09",
        "value": "107"
    },
    {
        "dateTime": "2014-05-10",
        "value": "158"
    },
    {
        "dateTime": "2014-05-11",
        "value": "103"
    },
    {
        "dateTime": "2014-05-12",
        "value": "68"
    },
    {
        "dateTime": "2014-05-13",
        "value": "109"
    },
    {
        "dateTime": "2014-05-14",
        "value": "73"
    },
    {
        "dateTime": "2014-05-15",
        "value": "93"
    },
    {
        "dateTime": "2014-05-16",
        "value": "118"
    },
    {
        "dateTime": "2014-05-17",
        "value": "133"
    },
    {
        "dateTime": "2014-05-18",
        "value": "129"
    },
    {
        "dateTime": "2014-05-19",
        "value": "78"
    },
    {
        "dateTime": "2014-05-20",
        "value": "102"
    },
    {
        "dateTime": "2014-05-21",
        "value": "67"
    },
    {
        "dateTime": "2014-05-22",
        "value": "62"
    },
    {
        "dateTime": "2014-05-23",
        "value": "95"
    },
    {
        "dateTime": "2014-05-24",
        "value": "186"
    },
    {
        "dateTime": "2014-05-25",
        "value": "141"
    },
    {
        "dateTime": "2014-05-26",
        "value": "121"
    },
    {
        "dateTime": "2014-05-27",
        "value": "58"
    },
    {
        "dateTime": "2014-05-28",
        "value": "122"
    },
    {
        "dateTime": "2014-05-29",
        "value": "10"
    },
    {
        "dateTime": "2014-05-30",
        "value": "72"
    },
    {
        "dateTime": "2014-05-31",
        "value": "128"
    },
    {
        "dateTime": "2014-06-01",
        "value": "120"
    },
    {
        "dateTime": "2014-06-02",
        "value": "119"
    },
    {
        "dateTime": "2014-06-03",
        "value": "98"
    },
    {
        "dateTime": "2014-06-04",
        "value": "50"
    },
    {
        "dateTime": "2014-06-05",
        "value": "64"
    },
    {
        "dateTime": "2014-06-06",
        "value": "72"
    },
    {
        "dateTime": "2014-06-07",
        "value": "222"
    },
    {
        "dateTime": "2014-06-08",
        "value": "72"
    },
    {
        "dateTime": "2014-06-09",
        "value": "111"
    },
    {
        "dateTime": "2014-06-10",
        "value": "127"
    },
    {
        "dateTime": "2014-06-11",
        "value": "59"
    },
    {
        "dateTime": "2014-06-12",
        "value": "62"
    },
    {
        "dateTime": "2014-06-13",
        "value": "123"
    },
    {
        "dateTime": "2014-06-14",
        "value": "127"
    },
    {
        "dateTime": "2014-06-15",
        "value": "167"
    },
    {
        "dateTime": "2014-06-16",
        "value": "96"
    },
    {
        "dateTime": "2014-06-17",
        "value": "68"
    },
    {
        "dateTime": "2014-06-18",
        "value": "75"
    },
    {
        "dateTime": "2014-06-19",
        "value": "84"
    },
    {
        "dateTime": "2014-06-20",
        "value": "73"
    },
    {
        "dateTime": "2014-06-21",
        "value": "112"
    },
    {
        "dateTime": "2014-06-22",
        "value": "90"
    },
    {
        "dateTime": "2014-06-23",
        "value": "73"
    },
    {
        "dateTime": "2014-06-24",
        "value": "49"
    },
    {
        "dateTime": "2014-06-25",
        "value": "100"
    },
    {
        "dateTime": "2014-06-26",
        "value": "62"
    },
    {
        "dateTime": "2014-06-27",
        "value": "91"
    },
    {
        "dateTime": "2014-06-28",
        "value": "91"
    },
    {
        "dateTime": "2014-06-29",
        "value": "139"
    },
    {
        "dateTime": "2014-06-30",
        "value": "85"
    },
    {
        "dateTime": "2014-07-01",
        "value": "60"
    },
    {
        "dateTime": "2014-07-02",
        "value": "67"
    },
    {
        "dateTime": "2014-07-03",
        "value": "78"
    },
    {
        "dateTime": "2014-07-04",
        "value": "88"
    },
    {
        "dateTime": "2014-07-05",
        "value": "121"
    },
    {
        "dateTime": "2014-07-06",
        "value": "91"
    },
    {
        "dateTime": "2014-07-07",
        "value": "96"
    },
    {
        "dateTime": "2014-07-08",
        "value": "89"
    },
    {
        "dateTime": "2014-07-09",
        "value": "57"
    },
    {
        "dateTime": "2014-07-10",
        "value": "112"
    },
    {
        "dateTime": "2014-07-11",
        "value": "87"
    },
    {
        "dateTime": "2014-07-12",
        "value": "134"
    },
    {
        "dateTime": "2014-07-13",
        "value": "76"
    },
    {
        "dateTime": "2014-07-14",
        "value": "107"
    },
    {
        "dateTime": "2014-07-15",
        "value": "111"
    },
    {
        "dateTime": "2014-07-16",
        "value": "137"
    },
    {
        "dateTime": "2014-07-17",
        "value": "119"
    },
    {
        "dateTime": "2014-07-18",
        "value": "105"
    },
    {
        "dateTime": "2014-07-19",
        "value": "122"
    },
    {
        "dateTime": "2014-07-20",
        "value": "108"
    },
    {
        "dateTime": "2014-07-21",
        "value": "83"
    },
    {
        "dateTime": "2014-07-22",
        "value": "60"
    },
    {
        "dateTime": "2014-07-23",
        "value": "72"
    },
    {
        "dateTime": "2014-07-24",
        "value": "78"
    },
    {
        "dateTime": "2014-07-25",
        "value": "84"
    },
    {
        "dateTime": "2014-07-26",
        "value": "76"
    },
    {
        "dateTime": "2014-07-27",
        "value": "117"
    },
    {
        "dateTime": "2014-07-28",
        "value": "78"
    },
    {
        "dateTime": "2014-07-29",
        "value": "77"
    },
    {
        "dateTime": "2014-07-30",
        "value": "75"
    },
    {
        "dateTime": "2014-07-31",
        "value": "69"
    },
    {
        "dateTime": "2014-08-01",
        "value": "108"
    },
    {
        "dateTime": "2014-08-02",
        "value": "125"
    },
    {
        "dateTime": "2014-08-03",
        "value": "80"
    },
    {
        "dateTime": "2014-08-04",
        "value": "78"
    },
    {
        "dateTime": "2014-08-05",
        "value": "66"
    },
    {
        "dateTime": "2014-08-06",
        "value": "50"
    },
    {
        "dateTime": "2014-08-07",
        "value": "62"
    },
    {
        "dateTime": "2014-08-08",
        "value": "77"
    },
    {
        "dateTime": "2014-08-09",
        "value": "141"
    },
    {
        "dateTime": "2014-08-10",
        "value": "117"
    },
    {
        "dateTime": "2014-08-11",
        "value": "90"
    },
    {
        "dateTime": "2014-08-12",
        "value": "101"
    },
    {
        "dateTime": "2014-08-13",
        "value": "65"
    },
    {
        "dateTime": "2014-08-14",
        "value": "78"
    },
    {
        "dateTime": "2014-08-15",
        "value": "94"
    },
    {
        "dateTime": "2014-08-16",
        "value": "96"
    },
    {
        "dateTime": "2014-08-17",
        "value": "123"
    },
    {
        "dateTime": "2014-08-18",
        "value": "76"
    },
    {
        "dateTime": "2014-08-19",
        "value": "73"
    },
    {
        "dateTime": "2014-08-20",
        "value": "105"
    },
    {
        "dateTime": "2014-08-21",
        "value": "144"
    },
    {
        "dateTime": "2014-08-22",
        "value": "59"
    },
    {
        "dateTime": "2014-08-23",
        "value": "125"
    },
    {
        "dateTime": "2014-08-24",
        "value": "92"
    },
    {
        "dateTime": "2014-08-25",
        "value": "73"
    },
    {
        "dateTime": "2014-08-26",
        "value": "87"
    },
    {
        "dateTime": "2014-08-27",
        "value": "105"
    },
    {
        "dateTime": "2014-08-28",
        "value": "79"
    },
    {
        "dateTime": "2014-08-29",
        "value": "70"
    },
    {
        "dateTime": "2014-08-30",
        "value": "161"
    },
    {
        "dateTime": "2014-08-31",
        "value": "121"
    },
    {
        "dateTime": "2014-09-01",
        "value": "91"
    },
    {
        "dateTime": "2014-09-02",
        "value": "76"
    },
    {
        "dateTime": "2014-09-03",
        "value": "66"
    },
    {
        "dateTime": "2014-09-04",
        "value": "60"
    },
    {
        "dateTime": "2014-09-05",
        "value": "85"
    },
    {
        "dateTime": "2014-09-06",
        "value": "140"
    },
    {
        "dateTime": "2014-09-07",
        "value": "124"
    },
    {
        "dateTime": "2014-09-08",
        "value": "95"
    },
    {
        "dateTime": "2014-09-09",
        "value": "69"
    },
    {
        "dateTime": "2014-09-10",
        "value": "65"
    },
    {
        "dateTime": "2014-09-11",
        "value": "75"
    },
    {
        "dateTime": "2014-09-12",
        "value": "127"
    },
    {
        "dateTime": "2014-09-13",
        "value": "90"
    },
    {
        "dateTime": "2014-09-14",
        "value": "138"
    },
    {
        "dateTime": "2014-09-15",
        "value": "87"
    },
    {
        "dateTime": "2014-09-16",
        "value": "93"
    },
    {
        "dateTime": "2014-09-17",
        "value": "56"
    },
    {
        "dateTime": "2014-09-18",
        "value": "73"
    },
    {
        "dateTime": "2014-09-19",
        "value": "60"
    },
    {
        "dateTime": "2014-09-20",
        "value": "141"
    },
    {
        "dateTime": "2014-09-21",
        "value": "177"
    },
    {
        "dateTime": "2014-09-22",
        "value": "84"
    },
    {
        "dateTime": "2014-09-23",
        "value": "84"
    },
    {
        "dateTime": "2014-09-24",
        "value": "83"
    },
    {
        "dateTime": "2014-09-25",
        "value": "60"
    },
    {
        "dateTime": "2014-09-26",
        "value": "66"
    },
    {
        "dateTime": "2014-09-27",
        "value": "122"
    },
    {
        "dateTime": "2014-09-28",
        "value": "134"
    },
    {
        "dateTime": "2014-09-29",
        "value": "99"
    },
    {
        "dateTime": "2014-09-30",
        "value": "121"
    },
    {
        "dateTime": "2014-10-01",
        "value": "101"
    },
    {
        "dateTime": "2014-10-02",
        "value": "85"
    },
    {
        "dateTime": "2014-10-03",
        "value": "82"
    },
    {
        "dateTime": "2014-10-04",
        "value": "91"
    },
    {
        "dateTime": "2014-10-05",
        "value": "105"
    },
    {
        "dateTime": "2014-10-06",
        "value": "91"
    },
    {
        "dateTime": "2014-10-07",
        "value": "78"
    },
    {
        "dateTime": "2014-10-08",
        "value": "80"
    },
    {
        "dateTime": "2014-10-09",
        "value": "84"
    },
    {
        "dateTime": "2014-10-10",
        "value": "113"
    },
    {
        "dateTime": "2014-10-11",
        "value": "100"
    },
    {
        "dateTime": "2014-10-12",
        "value": "111"
    },
    {
        "dateTime": "2014-10-13",
        "value": "78"
    },
    {
        "dateTime": "2014-10-14",
        "value": "91"
    },
    {
        "dateTime": "2014-10-15",
        "value": "143"
    },
    {
        "dateTime": "2014-10-16",
        "value": "78"
    },
    {
        "dateTime": "2014-10-17",
        "value": "99"
    },
    {
        "dateTime": "2014-10-18",
        "value": "100"
    },
    {
        "dateTime": "2014-10-19",
        "value": "119"
    },
    {
        "dateTime": "2014-10-20",
        "value": "123"
    },
    {
        "dateTime": "2014-10-21",
        "value": "84"
    },
    {
        "dateTime": "2014-10-22",
        "value": "102"
    },
    {
        "dateTime": "2014-10-23",
        "value": "111"
    },
    {
        "dateTime": "2014-10-24",
        "value": "75"
    },
    {
        "dateTime": "2014-10-25",
        "value": "185"
    },
    {
        "dateTime": "2014-10-26",
        "value": "178"
    },
    {
        "dateTime": "2014-10-27",
        "value": "108"
    },
    {
        "dateTime": "2014-10-28",
        "value": "79"
    },
    {
        "dateTime": "2014-10-29",
        "value": "82"
    },
    {
        "dateTime": "2014-10-30",
        "value": "110"
    },
    {
        "dateTime": "2014-10-31",
        "value": "98"
    },
    {
        "dateTime": "2014-11-01",
        "value": "132"
    },
    {
        "dateTime": "2014-11-02",
        "value": "189"
    },
    {
        "dateTime": "2014-11-03",
        "value": "99"
    },
    {
        "dateTime": "2014-11-04",
        "value": "121"
    },
    {
        "dateTime": "2014-11-05",
        "value": "221"
    },
    {
        "dateTime": "2014-11-06",
        "value": "189"
    },
    {
        "dateTime": "2014-11-07",
        "value": "142"
    },
    {
        "dateTime": "2014-11-08",
        "value": "191"
    },
    {
        "dateTime": "2014-11-09",
        "value": "168"
    },
    {
        "dateTime": "2014-11-10",
        "value": "210"
    },
    {
        "dateTime": "2014-11-11",
        "value": "142"
    },
    {
        "dateTime": "2014-11-12",
        "value": "113"
    },
    {
        "dateTime": "2014-11-13",
        "value": "172"
    },
    {
        "dateTime": "2014-11-14",
        "value": "141"
    },
    {
        "dateTime": "2014-11-15",
        "value": "218"
    },
    {
        "dateTime": "2014-11-16",
        "value": "183"
    },
    {
        "dateTime": "2014-11-17",
        "value": "137"
    },
    {
        "dateTime": "2014-11-18",
        "value": "115"
    },
    {
        "dateTime": "2014-11-19",
        "value": "114"
    },
    {
        "dateTime": "2014-11-20",
        "value": "166"
    },
    {
        "dateTime": "2014-11-21",
        "value": "101"
    },
    {
        "dateTime": "2014-11-22",
        "value": "179"
    },
    {
        "dateTime": "2014-11-23",
        "value": "115"
    },
    {
        "dateTime": "2014-11-24",
        "value": "151"
    },
    {
        "dateTime": "2014-11-25",
        "value": "148"
    },
    {
        "dateTime": "2014-11-26",
        "value": "172"
    },
    {
        "dateTime": "2014-11-27",
        "value": "140"
    },
    {
        "dateTime": "2014-11-28",
        "value": "136"
    },
    {
        "dateTime": "2014-11-29",
        "value": "192"
    },
    {
        "dateTime": "2014-11-30",
        "value": "173"
    },
    {
        "dateTime": "2014-12-01",
        "value": "131"
    },
    {
        "dateTime": "2014-12-02",
        "value": "120"
    },
    {
        "dateTime": "2014-12-03",
        "value": "127"
    },
    {
        "dateTime": "2014-12-04",
        "value": "114"
    },
    {
        "dateTime": "2014-12-05",
        "value": "80"
    },
    {
        "dateTime": "2014-12-06",
        "value": "223"
    },
    {
        "dateTime": "2014-12-07",
        "value": "229"
    },
    {
        "dateTime": "2014-12-08",
        "value": "139"
    },
    {
        "dateTime": "2014-12-09",
        "value": "123"
    },
    {
        "dateTime": "2014-12-10",
        "value": "121"
    },
    {
        "dateTime": "2014-12-11",
        "value": "82"
    },
    {
        "dateTime": "2014-12-12",
        "value": "287"
    },
    {
        "dateTime": "2014-12-13",
        "value": "173"
    },
    {
        "dateTime": "2014-12-14",
        "value": "138"
    },
    {
        "dateTime": "2014-12-15",
        "value": "166"
    },
    {
        "dateTime": "2014-12-16",
        "value": "145"
    },
    {
        "dateTime": "2014-12-17",
        "value": "151"
    },
    {
        "dateTime": "2014-12-18",
        "value": "119"
    },
    {
        "dateTime": "2014-12-19",
        "value": "214"
    },
    {
        "dateTime": "2014-12-20",
        "value": "184"
    },
    {
        "dateTime": "2014-12-21",
        "value": "190"
    },
    {
        "dateTime": "2014-12-22",
        "value": "156"
    },
    {
        "dateTime": "2014-12-23",
        "value": "157"
    },
    {
        "dateTime": "2014-12-24",
        "value": "171"
    },
    {
        "dateTime": "2014-12-25",
        "value": "117"
    },
    {
        "dateTime": "2014-12-26",
        "value": "107"
    },
    {
        "dateTime": "2014-12-27",
        "value": "77"
    },
    {
        "dateTime": "2014-12-28",
        "value": "147"
    },
    {
        "dateTime": "2014-12-29",
        "value": "144"
    },
    {
        "dateTime": "2014-12-30",
        "value": "57"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];
var minutesFairlyActive = [
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
        "value": "5"
    },
    {
        "dateTime": "2014-01-25",
        "value": "80"
    },
    {
        "dateTime": "2014-01-26",
        "value": "11"
    },
    {
        "dateTime": "2014-01-27",
        "value": "36"
    },
    {
        "dateTime": "2014-01-28",
        "value": "24"
    },
    {
        "dateTime": "2014-01-29",
        "value": "73"
    },
    {
        "dateTime": "2014-01-30",
        "value": "16"
    },
    {
        "dateTime": "2014-01-31",
        "value": "48"
    },
    {
        "dateTime": "2014-02-01",
        "value": "123"
    },
    {
        "dateTime": "2014-02-02",
        "value": "33"
    },
    {
        "dateTime": "2014-02-03",
        "value": "32"
    },
    {
        "dateTime": "2014-02-04",
        "value": "35"
    },
    {
        "dateTime": "2014-02-05",
        "value": "85"
    },
    {
        "dateTime": "2014-02-06",
        "value": "84"
    },
    {
        "dateTime": "2014-02-07",
        "value": "39"
    },
    {
        "dateTime": "2014-02-08",
        "value": "96"
    },
    {
        "dateTime": "2014-02-09",
        "value": "70"
    },
    {
        "dateTime": "2014-02-10",
        "value": "39"
    },
    {
        "dateTime": "2014-02-11",
        "value": "40"
    },
    {
        "dateTime": "2014-02-12",
        "value": "29"
    },
    {
        "dateTime": "2014-02-13",
        "value": "29"
    },
    {
        "dateTime": "2014-02-14",
        "value": "38"
    },
    {
        "dateTime": "2014-02-15",
        "value": "151"
    },
    {
        "dateTime": "2014-02-16",
        "value": "54"
    },
    {
        "dateTime": "2014-02-17",
        "value": "44"
    },
    {
        "dateTime": "2014-02-18",
        "value": "38"
    },
    {
        "dateTime": "2014-02-19",
        "value": "32"
    },
    {
        "dateTime": "2014-02-20",
        "value": "24"
    },
    {
        "dateTime": "2014-02-21",
        "value": "84"
    },
    {
        "dateTime": "2014-02-22",
        "value": "109"
    },
    {
        "dateTime": "2014-02-23",
        "value": "101"
    },
    {
        "dateTime": "2014-02-24",
        "value": "49"
    },
    {
        "dateTime": "2014-02-25",
        "value": "43"
    },
    {
        "dateTime": "2014-02-26",
        "value": "32"
    },
    {
        "dateTime": "2014-02-27",
        "value": "25"
    },
    {
        "dateTime": "2014-02-28",
        "value": "44"
    },
    {
        "dateTime": "2014-03-01",
        "value": "97"
    },
    {
        "dateTime": "2014-03-02",
        "value": "184"
    },
    {
        "dateTime": "2014-03-03",
        "value": "117"
    },
    {
        "dateTime": "2014-03-04",
        "value": "119"
    },
    {
        "dateTime": "2014-03-05",
        "value": "31"
    },
    {
        "dateTime": "2014-03-06",
        "value": "78"
    },
    {
        "dateTime": "2014-03-07",
        "value": "121"
    },
    {
        "dateTime": "2014-03-08",
        "value": "237"
    },
    {
        "dateTime": "2014-03-09",
        "value": "169"
    },
    {
        "dateTime": "2014-03-10",
        "value": "99"
    },
    {
        "dateTime": "2014-03-11",
        "value": "60"
    },
    {
        "dateTime": "2014-03-12",
        "value": "36"
    },
    {
        "dateTime": "2014-03-13",
        "value": "21"
    },
    {
        "dateTime": "2014-03-14",
        "value": "35"
    },
    {
        "dateTime": "2014-03-15",
        "value": "153"
    },
    {
        "dateTime": "2014-03-16",
        "value": "119"
    },
    {
        "dateTime": "2014-03-17",
        "value": "55"
    },
    {
        "dateTime": "2014-03-18",
        "value": "30"
    },
    {
        "dateTime": "2014-03-19",
        "value": "22"
    },
    {
        "dateTime": "2014-03-20",
        "value": "44"
    },
    {
        "dateTime": "2014-03-21",
        "value": "113"
    },
    {
        "dateTime": "2014-03-22",
        "value": "119"
    },
    {
        "dateTime": "2014-03-23",
        "value": "104"
    },
    {
        "dateTime": "2014-03-24",
        "value": "28"
    },
    {
        "dateTime": "2014-03-25",
        "value": "87"
    },
    {
        "dateTime": "2014-03-26",
        "value": "66"
    },
    {
        "dateTime": "2014-03-27",
        "value": "51"
    },
    {
        "dateTime": "2014-03-28",
        "value": "50"
    },
    {
        "dateTime": "2014-03-29",
        "value": "153"
    },
    {
        "dateTime": "2014-03-30",
        "value": "151"
    },
    {
        "dateTime": "2014-03-31",
        "value": "76"
    },
    {
        "dateTime": "2014-04-01",
        "value": "119"
    },
    {
        "dateTime": "2014-04-02",
        "value": "52"
    },
    {
        "dateTime": "2014-04-03",
        "value": "43"
    },
    {
        "dateTime": "2014-04-04",
        "value": "58"
    },
    {
        "dateTime": "2014-04-05",
        "value": "130"
    },
    {
        "dateTime": "2014-04-06",
        "value": "173"
    },
    {
        "dateTime": "2014-04-07",
        "value": "30"
    },
    {
        "dateTime": "2014-04-08",
        "value": "94"
    },
    {
        "dateTime": "2014-04-09",
        "value": "45"
    },
    {
        "dateTime": "2014-04-10",
        "value": "79"
    },
    {
        "dateTime": "2014-04-11",
        "value": "80"
    },
    {
        "dateTime": "2014-04-12",
        "value": "151"
    },
    {
        "dateTime": "2014-04-13",
        "value": "126"
    },
    {
        "dateTime": "2014-04-14",
        "value": "62"
    },
    {
        "dateTime": "2014-04-15",
        "value": "47"
    },
    {
        "dateTime": "2014-04-16",
        "value": "87"
    },
    {
        "dateTime": "2014-04-17",
        "value": "48"
    },
    {
        "dateTime": "2014-04-18",
        "value": "47"
    },
    {
        "dateTime": "2014-04-19",
        "value": "131"
    },
    {
        "dateTime": "2014-04-20",
        "value": "186"
    },
    {
        "dateTime": "2014-04-21",
        "value": "282"
    },
    {
        "dateTime": "2014-04-22",
        "value": "104"
    },
    {
        "dateTime": "2014-04-23",
        "value": "94"
    },
    {
        "dateTime": "2014-04-24",
        "value": "54"
    },
    {
        "dateTime": "2014-04-25",
        "value": "62"
    },
    {
        "dateTime": "2014-04-26",
        "value": "177"
    },
    {
        "dateTime": "2014-04-27",
        "value": "145"
    },
    {
        "dateTime": "2014-04-28",
        "value": "49"
    },
    {
        "dateTime": "2014-04-29",
        "value": "60"
    },
    {
        "dateTime": "2014-04-30",
        "value": "36"
    },
    {
        "dateTime": "2014-05-01",
        "value": "103"
    },
    {
        "dateTime": "2014-05-02",
        "value": "196"
    },
    {
        "dateTime": "2014-05-03",
        "value": "214"
    },
    {
        "dateTime": "2014-05-04",
        "value": "82"
    },
    {
        "dateTime": "2014-05-05",
        "value": "81"
    },
    {
        "dateTime": "2014-05-06",
        "value": "46"
    },
    {
        "dateTime": "2014-05-07",
        "value": "49"
    },
    {
        "dateTime": "2014-05-08",
        "value": "146"
    },
    {
        "dateTime": "2014-05-09",
        "value": "40"
    },
    {
        "dateTime": "2014-05-10",
        "value": "298"
    },
    {
        "dateTime": "2014-05-11",
        "value": "51"
    },
    {
        "dateTime": "2014-05-12",
        "value": "55"
    },
    {
        "dateTime": "2014-05-13",
        "value": "38"
    },
    {
        "dateTime": "2014-05-14",
        "value": "24"
    },
    {
        "dateTime": "2014-05-15",
        "value": "41"
    },
    {
        "dateTime": "2014-05-16",
        "value": "124"
    },
    {
        "dateTime": "2014-05-17",
        "value": "150"
    },
    {
        "dateTime": "2014-05-18",
        "value": "76"
    },
    {
        "dateTime": "2014-05-19",
        "value": "56"
    },
    {
        "dateTime": "2014-05-20",
        "value": "41"
    },
    {
        "dateTime": "2014-05-21",
        "value": "27"
    },
    {
        "dateTime": "2014-05-22",
        "value": "34"
    },
    {
        "dateTime": "2014-05-23",
        "value": "44"
    },
    {
        "dateTime": "2014-05-24",
        "value": "236"
    },
    {
        "dateTime": "2014-05-25",
        "value": "111"
    },
    {
        "dateTime": "2014-05-26",
        "value": "62"
    },
    {
        "dateTime": "2014-05-27",
        "value": "28"
    },
    {
        "dateTime": "2014-05-28",
        "value": "78"
    },
    {
        "dateTime": "2014-05-29",
        "value": "17"
    },
    {
        "dateTime": "2014-05-30",
        "value": "67"
    },
    {
        "dateTime": "2014-05-31",
        "value": "72"
    },
    {
        "dateTime": "2014-06-01",
        "value": "147"
    },
    {
        "dateTime": "2014-06-02",
        "value": "124"
    },
    {
        "dateTime": "2014-06-03",
        "value": "104"
    },
    {
        "dateTime": "2014-06-04",
        "value": "37"
    },
    {
        "dateTime": "2014-06-05",
        "value": "32"
    },
    {
        "dateTime": "2014-06-06",
        "value": "81"
    },
    {
        "dateTime": "2014-06-07",
        "value": "244"
    },
    {
        "dateTime": "2014-06-08",
        "value": "53"
    },
    {
        "dateTime": "2014-06-09",
        "value": "70"
    },
    {
        "dateTime": "2014-06-10",
        "value": "45"
    },
    {
        "dateTime": "2014-06-11",
        "value": "75"
    },
    {
        "dateTime": "2014-06-12",
        "value": "91"
    },
    {
        "dateTime": "2014-06-13",
        "value": "83"
    },
    {
        "dateTime": "2014-06-14",
        "value": "107"
    },
    {
        "dateTime": "2014-06-15",
        "value": "291"
    },
    {
        "dateTime": "2014-06-16",
        "value": "62"
    },
    {
        "dateTime": "2014-06-17",
        "value": "26"
    },
    {
        "dateTime": "2014-06-18",
        "value": "89"
    },
    {
        "dateTime": "2014-06-19",
        "value": "80"
    },
    {
        "dateTime": "2014-06-20",
        "value": "46"
    },
    {
        "dateTime": "2014-06-21",
        "value": "136"
    },
    {
        "dateTime": "2014-06-22",
        "value": "60"
    },
    {
        "dateTime": "2014-06-23",
        "value": "54"
    },
    {
        "dateTime": "2014-06-24",
        "value": "41"
    },
    {
        "dateTime": "2014-06-25",
        "value": "26"
    },
    {
        "dateTime": "2014-06-26",
        "value": "79"
    },
    {
        "dateTime": "2014-06-27",
        "value": "58"
    },
    {
        "dateTime": "2014-06-28",
        "value": "106"
    },
    {
        "dateTime": "2014-06-29",
        "value": "113"
    },
    {
        "dateTime": "2014-06-30",
        "value": "61"
    },
    {
        "dateTime": "2014-07-01",
        "value": "34"
    },
    {
        "dateTime": "2014-07-02",
        "value": "46"
    },
    {
        "dateTime": "2014-07-03",
        "value": "62"
    },
    {
        "dateTime": "2014-07-04",
        "value": "71"
    },
    {
        "dateTime": "2014-07-05",
        "value": "153"
    },
    {
        "dateTime": "2014-07-06",
        "value": "55"
    },
    {
        "dateTime": "2014-07-07",
        "value": "60"
    },
    {
        "dateTime": "2014-07-08",
        "value": "43"
    },
    {
        "dateTime": "2014-07-09",
        "value": "57"
    },
    {
        "dateTime": "2014-07-10",
        "value": "109"
    },
    {
        "dateTime": "2014-07-11",
        "value": "46"
    },
    {
        "dateTime": "2014-07-12",
        "value": "106"
    },
    {
        "dateTime": "2014-07-13",
        "value": "53"
    },
    {
        "dateTime": "2014-07-14",
        "value": "211"
    },
    {
        "dateTime": "2014-07-15",
        "value": "134"
    },
    {
        "dateTime": "2014-07-16",
        "value": "175"
    },
    {
        "dateTime": "2014-07-17",
        "value": "152"
    },
    {
        "dateTime": "2014-07-18",
        "value": "109"
    },
    {
        "dateTime": "2014-07-19",
        "value": "118"
    },
    {
        "dateTime": "2014-07-20",
        "value": "66"
    },
    {
        "dateTime": "2014-07-21",
        "value": "75"
    },
    {
        "dateTime": "2014-07-22",
        "value": "64"
    },
    {
        "dateTime": "2014-07-23",
        "value": "34"
    },
    {
        "dateTime": "2014-07-24",
        "value": "39"
    },
    {
        "dateTime": "2014-07-25",
        "value": "44"
    },
    {
        "dateTime": "2014-07-26",
        "value": "56"
    },
    {
        "dateTime": "2014-07-27",
        "value": "81"
    },
    {
        "dateTime": "2014-07-28",
        "value": "56"
    },
    {
        "dateTime": "2014-07-29",
        "value": "38"
    },
    {
        "dateTime": "2014-07-30",
        "value": "34"
    },
    {
        "dateTime": "2014-07-31",
        "value": "36"
    },
    {
        "dateTime": "2014-08-01",
        "value": "49"
    },
    {
        "dateTime": "2014-08-02",
        "value": "168"
    },
    {
        "dateTime": "2014-08-03",
        "value": "51"
    },
    {
        "dateTime": "2014-08-04",
        "value": "49"
    },
    {
        "dateTime": "2014-08-05",
        "value": "40"
    },
    {
        "dateTime": "2014-08-06",
        "value": "40"
    },
    {
        "dateTime": "2014-08-07",
        "value": "31"
    },
    {
        "dateTime": "2014-08-08",
        "value": "29"
    },
    {
        "dateTime": "2014-08-09",
        "value": "127"
    },
    {
        "dateTime": "2014-08-10",
        "value": "136"
    },
    {
        "dateTime": "2014-08-11",
        "value": "67"
    },
    {
        "dateTime": "2014-08-12",
        "value": "46"
    },
    {
        "dateTime": "2014-08-13",
        "value": "27"
    },
    {
        "dateTime": "2014-08-14",
        "value": "39"
    },
    {
        "dateTime": "2014-08-15",
        "value": "53"
    },
    {
        "dateTime": "2014-08-16",
        "value": "58"
    },
    {
        "dateTime": "2014-08-17",
        "value": "93"
    },
    {
        "dateTime": "2014-08-18",
        "value": "50"
    },
    {
        "dateTime": "2014-08-19",
        "value": "43"
    },
    {
        "dateTime": "2014-08-20",
        "value": "46"
    },
    {
        "dateTime": "2014-08-21",
        "value": "63"
    },
    {
        "dateTime": "2014-08-22",
        "value": "77"
    },
    {
        "dateTime": "2014-08-23",
        "value": "112"
    },
    {
        "dateTime": "2014-08-24",
        "value": "45"
    },
    {
        "dateTime": "2014-08-25",
        "value": "57"
    },
    {
        "dateTime": "2014-08-26",
        "value": "47"
    },
    {
        "dateTime": "2014-08-27",
        "value": "48"
    },
    {
        "dateTime": "2014-08-28",
        "value": "87"
    },
    {
        "dateTime": "2014-08-29",
        "value": "40"
    },
    {
        "dateTime": "2014-08-30",
        "value": "161"
    },
    {
        "dateTime": "2014-08-31",
        "value": "78"
    },
    {
        "dateTime": "2014-09-01",
        "value": "60"
    },
    {
        "dateTime": "2014-09-02",
        "value": "35"
    },
    {
        "dateTime": "2014-09-03",
        "value": "32"
    },
    {
        "dateTime": "2014-09-04",
        "value": "26"
    },
    {
        "dateTime": "2014-09-05",
        "value": "60"
    },
    {
        "dateTime": "2014-09-06",
        "value": "112"
    },
    {
        "dateTime": "2014-09-07",
        "value": "77"
    },
    {
        "dateTime": "2014-09-08",
        "value": "55"
    },
    {
        "dateTime": "2014-09-09",
        "value": "30"
    },
    {
        "dateTime": "2014-09-10",
        "value": "32"
    },
    {
        "dateTime": "2014-09-11",
        "value": "49"
    },
    {
        "dateTime": "2014-09-12",
        "value": "94"
    },
    {
        "dateTime": "2014-09-13",
        "value": "57"
    },
    {
        "dateTime": "2014-09-14",
        "value": "109"
    },
    {
        "dateTime": "2014-09-15",
        "value": "55"
    },
    {
        "dateTime": "2014-09-16",
        "value": "48"
    },
    {
        "dateTime": "2014-09-17",
        "value": "28"
    },
    {
        "dateTime": "2014-09-18",
        "value": "85"
    },
    {
        "dateTime": "2014-09-19",
        "value": "41"
    },
    {
        "dateTime": "2014-09-20",
        "value": "150"
    },
    {
        "dateTime": "2014-09-21",
        "value": "153"
    },
    {
        "dateTime": "2014-09-22",
        "value": "54"
    },
    {
        "dateTime": "2014-09-23",
        "value": "82"
    },
    {
        "dateTime": "2014-09-24",
        "value": "62"
    },
    {
        "dateTime": "2014-09-25",
        "value": "48"
    },
    {
        "dateTime": "2014-09-26",
        "value": "53"
    },
    {
        "dateTime": "2014-09-27",
        "value": "118"
    },
    {
        "dateTime": "2014-09-28",
        "value": "150"
    },
    {
        "dateTime": "2014-09-29",
        "value": "61"
    },
    {
        "dateTime": "2014-09-30",
        "value": "49"
    },
    {
        "dateTime": "2014-10-01",
        "value": "90"
    },
    {
        "dateTime": "2014-10-02",
        "value": "69"
    },
    {
        "dateTime": "2014-10-03",
        "value": "111"
    },
    {
        "dateTime": "2014-10-04",
        "value": "191"
    },
    {
        "dateTime": "2014-10-05",
        "value": "250"
    },
    {
        "dateTime": "2014-10-06",
        "value": "36"
    },
    {
        "dateTime": "2014-10-07",
        "value": "62"
    },
    {
        "dateTime": "2014-10-08",
        "value": "102"
    },
    {
        "dateTime": "2014-10-09",
        "value": "60"
    },
    {
        "dateTime": "2014-10-10",
        "value": "146"
    },
    {
        "dateTime": "2014-10-11",
        "value": "59"
    },
    {
        "dateTime": "2014-10-12",
        "value": "75"
    },
    {
        "dateTime": "2014-10-13",
        "value": "88"
    },
    {
        "dateTime": "2014-10-14",
        "value": "52"
    },
    {
        "dateTime": "2014-10-15",
        "value": "118"
    },
    {
        "dateTime": "2014-10-16",
        "value": "79"
    },
    {
        "dateTime": "2014-10-17",
        "value": "60"
    },
    {
        "dateTime": "2014-10-18",
        "value": "61"
    },
    {
        "dateTime": "2014-10-19",
        "value": "143"
    },
    {
        "dateTime": "2014-10-20",
        "value": "74"
    },
    {
        "dateTime": "2014-10-21",
        "value": "63"
    },
    {
        "dateTime": "2014-10-22",
        "value": "55"
    },
    {
        "dateTime": "2014-10-23",
        "value": "46"
    },
    {
        "dateTime": "2014-10-24",
        "value": "60"
    },
    {
        "dateTime": "2014-10-25",
        "value": "105"
    },
    {
        "dateTime": "2014-10-26",
        "value": "109"
    },
    {
        "dateTime": "2014-10-27",
        "value": "47"
    },
    {
        "dateTime": "2014-10-28",
        "value": "46"
    },
    {
        "dateTime": "2014-10-29",
        "value": "70"
    },
    {
        "dateTime": "2014-10-30",
        "value": "63"
    },
    {
        "dateTime": "2014-10-31",
        "value": "17"
    },
    {
        "dateTime": "2014-11-01",
        "value": "68"
    },
    {
        "dateTime": "2014-11-02",
        "value": "17"
    },
    {
        "dateTime": "2014-11-03",
        "value": "8"
    },
    {
        "dateTime": "2014-11-04",
        "value": "2"
    },
    {
        "dateTime": "2014-11-05",
        "value": "0"
    },
    {
        "dateTime": "2014-11-06",
        "value": "1"
    },
    {
        "dateTime": "2014-11-07",
        "value": "7"
    },
    {
        "dateTime": "2014-11-08",
        "value": "13"
    },
    {
        "dateTime": "2014-11-09",
        "value": "15"
    },
    {
        "dateTime": "2014-11-10",
        "value": "26"
    },
    {
        "dateTime": "2014-11-11",
        "value": "17"
    },
    {
        "dateTime": "2014-11-12",
        "value": "8"
    },
    {
        "dateTime": "2014-11-13",
        "value": "15"
    },
    {
        "dateTime": "2014-11-14",
        "value": "7"
    },
    {
        "dateTime": "2014-11-15",
        "value": "87"
    },
    {
        "dateTime": "2014-11-16",
        "value": "42"
    },
    {
        "dateTime": "2014-11-17",
        "value": "17"
    },
    {
        "dateTime": "2014-11-18",
        "value": "0"
    },
    {
        "dateTime": "2014-11-19",
        "value": "7"
    },
    {
        "dateTime": "2014-11-20",
        "value": "8"
    },
    {
        "dateTime": "2014-11-21",
        "value": "11"
    },
    {
        "dateTime": "2014-11-22",
        "value": "76"
    },
    {
        "dateTime": "2014-11-23",
        "value": "62"
    },
    {
        "dateTime": "2014-11-24",
        "value": "3"
    },
    {
        "dateTime": "2014-11-25",
        "value": "0"
    },
    {
        "dateTime": "2014-11-26",
        "value": "6"
    },
    {
        "dateTime": "2014-11-27",
        "value": "11"
    },
    {
        "dateTime": "2014-11-28",
        "value": "25"
    },
    {
        "dateTime": "2014-11-29",
        "value": "6"
    },
    {
        "dateTime": "2014-11-30",
        "value": "36"
    },
    {
        "dateTime": "2014-12-01",
        "value": "17"
    },
    {
        "dateTime": "2014-12-02",
        "value": "2"
    },
    {
        "dateTime": "2014-12-03",
        "value": "8"
    },
    {
        "dateTime": "2014-12-04",
        "value": "2"
    },
    {
        "dateTime": "2014-12-05",
        "value": "10"
    },
    {
        "dateTime": "2014-12-06",
        "value": "53"
    },
    {
        "dateTime": "2014-12-07",
        "value": "35"
    },
    {
        "dateTime": "2014-12-08",
        "value": "14"
    },
    {
        "dateTime": "2014-12-09",
        "value": "5"
    },
    {
        "dateTime": "2014-12-10",
        "value": "9"
    },
    {
        "dateTime": "2014-12-11",
        "value": "6"
    },
    {
        "dateTime": "2014-12-12",
        "value": "18"
    },
    {
        "dateTime": "2014-12-13",
        "value": "72"
    },
    {
        "dateTime": "2014-12-14",
        "value": "4"
    },
    {
        "dateTime": "2014-12-15",
        "value": "32"
    },
    {
        "dateTime": "2014-12-16",
        "value": "24"
    },
    {
        "dateTime": "2014-12-17",
        "value": "4"
    },
    {
        "dateTime": "2014-12-18",
        "value": "33"
    },
    {
        "dateTime": "2014-12-19",
        "value": "29"
    },
    {
        "dateTime": "2014-12-20",
        "value": "105"
    },
    {
        "dateTime": "2014-12-21",
        "value": "109"
    },
    {
        "dateTime": "2014-12-22",
        "value": "16"
    },
    {
        "dateTime": "2014-12-23",
        "value": "6"
    },
    {
        "dateTime": "2014-12-24",
        "value": "8"
    },
    {
        "dateTime": "2014-12-25",
        "value": "0"
    },
    {
        "dateTime": "2014-12-26",
        "value": "0"
    },
    {
        "dateTime": "2014-12-27",
        "value": "14"
    },
    {
        "dateTime": "2014-12-28",
        "value": "0"
    },
    {
        "dateTime": "2014-12-29",
        "value": "26"
    },
    {
        "dateTime": "2014-12-30",
        "value": "3"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];
var minutesVeryActive = [
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
        "value": "8"
    },
    {
        "dateTime": "2014-01-25",
        "value": "61"
    },
    {
        "dateTime": "2014-01-26",
        "value": "64"
    },
    {
        "dateTime": "2014-01-27",
        "value": "59"
    },
    {
        "dateTime": "2014-01-28",
        "value": "60"
    },
    {
        "dateTime": "2014-01-29",
        "value": "41"
    },
    {
        "dateTime": "2014-01-30",
        "value": "64"
    },
    {
        "dateTime": "2014-01-31",
        "value": "79"
    },
    {
        "dateTime": "2014-02-01",
        "value": "86"
    },
    {
        "dateTime": "2014-02-02",
        "value": "91"
    },
    {
        "dateTime": "2014-02-03",
        "value": "76"
    },
    {
        "dateTime": "2014-02-04",
        "value": "75"
    },
    {
        "dateTime": "2014-02-05",
        "value": "104"
    },
    {
        "dateTime": "2014-02-06",
        "value": "90"
    },
    {
        "dateTime": "2014-02-07",
        "value": "78"
    },
    {
        "dateTime": "2014-02-08",
        "value": "32"
    },
    {
        "dateTime": "2014-02-09",
        "value": "169"
    },
    {
        "dateTime": "2014-02-10",
        "value": "82"
    },
    {
        "dateTime": "2014-02-11",
        "value": "115"
    },
    {
        "dateTime": "2014-02-12",
        "value": "70"
    },
    {
        "dateTime": "2014-02-13",
        "value": "112"
    },
    {
        "dateTime": "2014-02-14",
        "value": "81"
    },
    {
        "dateTime": "2014-02-15",
        "value": "72"
    },
    {
        "dateTime": "2014-02-16",
        "value": "95"
    },
    {
        "dateTime": "2014-02-17",
        "value": "83"
    },
    {
        "dateTime": "2014-02-18",
        "value": "101"
    },
    {
        "dateTime": "2014-02-19",
        "value": "80"
    },
    {
        "dateTime": "2014-02-20",
        "value": "70"
    },
    {
        "dateTime": "2014-02-21",
        "value": "101"
    },
    {
        "dateTime": "2014-02-22",
        "value": "69"
    },
    {
        "dateTime": "2014-02-23",
        "value": "105"
    },
    {
        "dateTime": "2014-02-24",
        "value": "78"
    },
    {
        "dateTime": "2014-02-25",
        "value": "76"
    },
    {
        "dateTime": "2014-02-26",
        "value": "128"
    },
    {
        "dateTime": "2014-02-27",
        "value": "33"
    },
    {
        "dateTime": "2014-02-28",
        "value": "66"
    },
    {
        "dateTime": "2014-03-01",
        "value": "13"
    },
    {
        "dateTime": "2014-03-02",
        "value": "46"
    },
    {
        "dateTime": "2014-03-03",
        "value": "131"
    },
    {
        "dateTime": "2014-03-04",
        "value": "39"
    },
    {
        "dateTime": "2014-03-05",
        "value": "68"
    },
    {
        "dateTime": "2014-03-06",
        "value": "36"
    },
    {
        "dateTime": "2014-03-07",
        "value": "51"
    },
    {
        "dateTime": "2014-03-08",
        "value": "78"
    },
    {
        "dateTime": "2014-03-09",
        "value": "10"
    },
    {
        "dateTime": "2014-03-10",
        "value": "18"
    },
    {
        "dateTime": "2014-03-11",
        "value": "87"
    },
    {
        "dateTime": "2014-03-12",
        "value": "72"
    },
    {
        "dateTime": "2014-03-13",
        "value": "118"
    },
    {
        "dateTime": "2014-03-14",
        "value": "49"
    },
    {
        "dateTime": "2014-03-15",
        "value": "21"
    },
    {
        "dateTime": "2014-03-16",
        "value": "95"
    },
    {
        "dateTime": "2014-03-17",
        "value": "81"
    },
    {
        "dateTime": "2014-03-18",
        "value": "125"
    },
    {
        "dateTime": "2014-03-19",
        "value": "73"
    },
    {
        "dateTime": "2014-03-20",
        "value": "64"
    },
    {
        "dateTime": "2014-03-21",
        "value": "49"
    },
    {
        "dateTime": "2014-03-22",
        "value": "98"
    },
    {
        "dateTime": "2014-03-23",
        "value": "15"
    },
    {
        "dateTime": "2014-03-24",
        "value": "64"
    },
    {
        "dateTime": "2014-03-25",
        "value": "65"
    },
    {
        "dateTime": "2014-03-26",
        "value": "76"
    },
    {
        "dateTime": "2014-03-27",
        "value": "89"
    },
    {
        "dateTime": "2014-03-28",
        "value": "68"
    },
    {
        "dateTime": "2014-03-29",
        "value": "67"
    },
    {
        "dateTime": "2014-03-30",
        "value": "61"
    },
    {
        "dateTime": "2014-03-31",
        "value": "72"
    },
    {
        "dateTime": "2014-04-01",
        "value": "87"
    },
    {
        "dateTime": "2014-04-02",
        "value": "80"
    },
    {
        "dateTime": "2014-04-03",
        "value": "115"
    },
    {
        "dateTime": "2014-04-04",
        "value": "107"
    },
    {
        "dateTime": "2014-04-05",
        "value": "87"
    },
    {
        "dateTime": "2014-04-06",
        "value": "147"
    },
    {
        "dateTime": "2014-04-07",
        "value": "66"
    },
    {
        "dateTime": "2014-04-08",
        "value": "44"
    },
    {
        "dateTime": "2014-04-09",
        "value": "147"
    },
    {
        "dateTime": "2014-04-10",
        "value": "64"
    },
    {
        "dateTime": "2014-04-11",
        "value": "68"
    },
    {
        "dateTime": "2014-04-12",
        "value": "47"
    },
    {
        "dateTime": "2014-04-13",
        "value": "117"
    },
    {
        "dateTime": "2014-04-14",
        "value": "63"
    },
    {
        "dateTime": "2014-04-15",
        "value": "127"
    },
    {
        "dateTime": "2014-04-16",
        "value": "85"
    },
    {
        "dateTime": "2014-04-17",
        "value": "127"
    },
    {
        "dateTime": "2014-04-18",
        "value": "55"
    },
    {
        "dateTime": "2014-04-19",
        "value": "72"
    },
    {
        "dateTime": "2014-04-20",
        "value": "119"
    },
    {
        "dateTime": "2014-04-21",
        "value": "46"
    },
    {
        "dateTime": "2014-04-22",
        "value": "76"
    },
    {
        "dateTime": "2014-04-23",
        "value": "8"
    },
    {
        "dateTime": "2014-04-24",
        "value": "131"
    },
    {
        "dateTime": "2014-04-25",
        "value": "67"
    },
    {
        "dateTime": "2014-04-26",
        "value": "117"
    },
    {
        "dateTime": "2014-04-27",
        "value": "102"
    },
    {
        "dateTime": "2014-04-28",
        "value": "75"
    },
    {
        "dateTime": "2014-04-29",
        "value": "99"
    },
    {
        "dateTime": "2014-04-30",
        "value": "149"
    },
    {
        "dateTime": "2014-05-01",
        "value": "47"
    },
    {
        "dateTime": "2014-05-02",
        "value": "61"
    },
    {
        "dateTime": "2014-05-03",
        "value": "140"
    },
    {
        "dateTime": "2014-05-04",
        "value": "12"
    },
    {
        "dateTime": "2014-05-05",
        "value": "70"
    },
    {
        "dateTime": "2014-05-06",
        "value": "145"
    },
    {
        "dateTime": "2014-05-07",
        "value": "69"
    },
    {
        "dateTime": "2014-05-08",
        "value": "92"
    },
    {
        "dateTime": "2014-05-09",
        "value": "27"
    },
    {
        "dateTime": "2014-05-10",
        "value": "121"
    },
    {
        "dateTime": "2014-05-11",
        "value": "109"
    },
    {
        "dateTime": "2014-05-12",
        "value": "66"
    },
    {
        "dateTime": "2014-05-13",
        "value": "135"
    },
    {
        "dateTime": "2014-05-14",
        "value": "95"
    },
    {
        "dateTime": "2014-05-15",
        "value": "118"
    },
    {
        "dateTime": "2014-05-16",
        "value": "36"
    },
    {
        "dateTime": "2014-05-17",
        "value": "63"
    },
    {
        "dateTime": "2014-05-18",
        "value": "120"
    },
    {
        "dateTime": "2014-05-19",
        "value": "73"
    },
    {
        "dateTime": "2014-05-20",
        "value": "41"
    },
    {
        "dateTime": "2014-05-21",
        "value": "69"
    },
    {
        "dateTime": "2014-05-22",
        "value": "82"
    },
    {
        "dateTime": "2014-05-23",
        "value": "65"
    },
    {
        "dateTime": "2014-05-24",
        "value": "144"
    },
    {
        "dateTime": "2014-05-25",
        "value": "8"
    },
    {
        "dateTime": "2014-05-26",
        "value": "67"
    },
    {
        "dateTime": "2014-05-27",
        "value": "135"
    },
    {
        "dateTime": "2014-05-28",
        "value": "62"
    },
    {
        "dateTime": "2014-05-29",
        "value": "20"
    },
    {
        "dateTime": "2014-05-30",
        "value": "64"
    },
    {
        "dateTime": "2014-05-31",
        "value": "54"
    },
    {
        "dateTime": "2014-06-01",
        "value": "104"
    },
    {
        "dateTime": "2014-06-02",
        "value": "37"
    },
    {
        "dateTime": "2014-06-03",
        "value": "119"
    },
    {
        "dateTime": "2014-06-04",
        "value": "47"
    },
    {
        "dateTime": "2014-06-05",
        "value": "68"
    },
    {
        "dateTime": "2014-06-06",
        "value": "42"
    },
    {
        "dateTime": "2014-06-07",
        "value": "77"
    },
    {
        "dateTime": "2014-06-08",
        "value": "108"
    },
    {
        "dateTime": "2014-06-09",
        "value": "23"
    },
    {
        "dateTime": "2014-06-10",
        "value": "13"
    },
    {
        "dateTime": "2014-06-11",
        "value": "127"
    },
    {
        "dateTime": "2014-06-12",
        "value": "53"
    },
    {
        "dateTime": "2014-06-13",
        "value": "34"
    },
    {
        "dateTime": "2014-06-14",
        "value": "136"
    },
    {
        "dateTime": "2014-06-15",
        "value": "130"
    },
    {
        "dateTime": "2014-06-16",
        "value": "18"
    },
    {
        "dateTime": "2014-06-17",
        "value": "105"
    },
    {
        "dateTime": "2014-06-18",
        "value": "49"
    },
    {
        "dateTime": "2014-06-19",
        "value": "121"
    },
    {
        "dateTime": "2014-06-20",
        "value": "33"
    },
    {
        "dateTime": "2014-06-21",
        "value": "89"
    },
    {
        "dateTime": "2014-06-22",
        "value": "108"
    },
    {
        "dateTime": "2014-06-23",
        "value": "27"
    },
    {
        "dateTime": "2014-06-24",
        "value": "96"
    },
    {
        "dateTime": "2014-06-25",
        "value": "14"
    },
    {
        "dateTime": "2014-06-26",
        "value": "52"
    },
    {
        "dateTime": "2014-06-27",
        "value": "10"
    },
    {
        "dateTime": "2014-06-28",
        "value": "89"
    },
    {
        "dateTime": "2014-06-29",
        "value": "27"
    },
    {
        "dateTime": "2014-06-30",
        "value": "10"
    },
    {
        "dateTime": "2014-07-01",
        "value": "78"
    },
    {
        "dateTime": "2014-07-02",
        "value": "49"
    },
    {
        "dateTime": "2014-07-03",
        "value": "53"
    },
    {
        "dateTime": "2014-07-04",
        "value": "18"
    },
    {
        "dateTime": "2014-07-05",
        "value": "80"
    },
    {
        "dateTime": "2014-07-06",
        "value": "62"
    },
    {
        "dateTime": "2014-07-07",
        "value": "23"
    },
    {
        "dateTime": "2014-07-08",
        "value": "89"
    },
    {
        "dateTime": "2014-07-09",
        "value": "62"
    },
    {
        "dateTime": "2014-07-10",
        "value": "73"
    },
    {
        "dateTime": "2014-07-11",
        "value": "10"
    },
    {
        "dateTime": "2014-07-12",
        "value": "6"
    },
    {
        "dateTime": "2014-07-13",
        "value": "123"
    },
    {
        "dateTime": "2014-07-14",
        "value": "82"
    },
    {
        "dateTime": "2014-07-15",
        "value": "77"
    },
    {
        "dateTime": "2014-07-16",
        "value": "31"
    },
    {
        "dateTime": "2014-07-17",
        "value": "23"
    },
    {
        "dateTime": "2014-07-18",
        "value": "27"
    },
    {
        "dateTime": "2014-07-19",
        "value": "5"
    },
    {
        "dateTime": "2014-07-20",
        "value": "113"
    },
    {
        "dateTime": "2014-07-21",
        "value": "31"
    },
    {
        "dateTime": "2014-07-22",
        "value": "92"
    },
    {
        "dateTime": "2014-07-23",
        "value": "81"
    },
    {
        "dateTime": "2014-07-24",
        "value": "16"
    },
    {
        "dateTime": "2014-07-25",
        "value": "8"
    },
    {
        "dateTime": "2014-07-26",
        "value": "39"
    },
    {
        "dateTime": "2014-07-27",
        "value": "112"
    },
    {
        "dateTime": "2014-07-28",
        "value": "29"
    },
    {
        "dateTime": "2014-07-29",
        "value": "73"
    },
    {
        "dateTime": "2014-07-30",
        "value": "26"
    },
    {
        "dateTime": "2014-07-31",
        "value": "28"
    },
    {
        "dateTime": "2014-08-01",
        "value": "73"
    },
    {
        "dateTime": "2014-08-02",
        "value": "26"
    },
    {
        "dateTime": "2014-08-03",
        "value": "161"
    },
    {
        "dateTime": "2014-08-04",
        "value": "34"
    },
    {
        "dateTime": "2014-08-05",
        "value": "50"
    },
    {
        "dateTime": "2014-08-06",
        "value": "83"
    },
    {
        "dateTime": "2014-08-07",
        "value": "25"
    },
    {
        "dateTime": "2014-08-08",
        "value": "83"
    },
    {
        "dateTime": "2014-08-09",
        "value": "65"
    },
    {
        "dateTime": "2014-08-10",
        "value": "151"
    },
    {
        "dateTime": "2014-08-11",
        "value": "11"
    },
    {
        "dateTime": "2014-08-12",
        "value": "101"
    },
    {
        "dateTime": "2014-08-13",
        "value": "95"
    },
    {
        "dateTime": "2014-08-14",
        "value": "12"
    },
    {
        "dateTime": "2014-08-15",
        "value": "92"
    },
    {
        "dateTime": "2014-08-16",
        "value": "88"
    },
    {
        "dateTime": "2014-08-17",
        "value": "156"
    },
    {
        "dateTime": "2014-08-18",
        "value": "21"
    },
    {
        "dateTime": "2014-08-19",
        "value": "62"
    },
    {
        "dateTime": "2014-08-20",
        "value": "76"
    },
    {
        "dateTime": "2014-08-21",
        "value": "22"
    },
    {
        "dateTime": "2014-08-22",
        "value": "13"
    },
    {
        "dateTime": "2014-08-23",
        "value": "30"
    },
    {
        "dateTime": "2014-08-24",
        "value": "171"
    },
    {
        "dateTime": "2014-08-25",
        "value": "30"
    },
    {
        "dateTime": "2014-08-26",
        "value": "10"
    },
    {
        "dateTime": "2014-08-27",
        "value": "92"
    },
    {
        "dateTime": "2014-08-28",
        "value": "11"
    },
    {
        "dateTime": "2014-08-29",
        "value": "114"
    },
    {
        "dateTime": "2014-08-30",
        "value": "25"
    },
    {
        "dateTime": "2014-08-31",
        "value": "197"
    },
    {
        "dateTime": "2014-09-01",
        "value": "29"
    },
    {
        "dateTime": "2014-09-02",
        "value": "70"
    },
    {
        "dateTime": "2014-09-03",
        "value": "87"
    },
    {
        "dateTime": "2014-09-04",
        "value": "10"
    },
    {
        "dateTime": "2014-09-05",
        "value": "118"
    },
    {
        "dateTime": "2014-09-06",
        "value": "74"
    },
    {
        "dateTime": "2014-09-07",
        "value": "61"
    },
    {
        "dateTime": "2014-09-08",
        "value": "24"
    },
    {
        "dateTime": "2014-09-09",
        "value": "57"
    },
    {
        "dateTime": "2014-09-10",
        "value": "56"
    },
    {
        "dateTime": "2014-09-11",
        "value": "41"
    },
    {
        "dateTime": "2014-09-12",
        "value": "112"
    },
    {
        "dateTime": "2014-09-13",
        "value": "317"
    },
    {
        "dateTime": "2014-09-14",
        "value": "89"
    },
    {
        "dateTime": "2014-09-15",
        "value": "16"
    },
    {
        "dateTime": "2014-09-16",
        "value": "11"
    },
    {
        "dateTime": "2014-09-17",
        "value": "11"
    },
    {
        "dateTime": "2014-09-18",
        "value": "43"
    },
    {
        "dateTime": "2014-09-19",
        "value": "31"
    },
    {
        "dateTime": "2014-09-20",
        "value": "79"
    },
    {
        "dateTime": "2014-09-21",
        "value": "67"
    },
    {
        "dateTime": "2014-09-22",
        "value": "10"
    },
    {
        "dateTime": "2014-09-23",
        "value": "30"
    },
    {
        "dateTime": "2014-09-24",
        "value": "41"
    },
    {
        "dateTime": "2014-09-25",
        "value": "59"
    },
    {
        "dateTime": "2014-09-26",
        "value": "15"
    },
    {
        "dateTime": "2014-09-27",
        "value": "6"
    },
    {
        "dateTime": "2014-09-28",
        "value": "48"
    },
    {
        "dateTime": "2014-09-29",
        "value": "42"
    },
    {
        "dateTime": "2014-09-30",
        "value": "15"
    },
    {
        "dateTime": "2014-10-01",
        "value": "87"
    },
    {
        "dateTime": "2014-10-02",
        "value": "40"
    },
    {
        "dateTime": "2014-10-03",
        "value": "43"
    },
    {
        "dateTime": "2014-10-04",
        "value": "221"
    },
    {
        "dateTime": "2014-10-05",
        "value": "100"
    },
    {
        "dateTime": "2014-10-06",
        "value": "44"
    },
    {
        "dateTime": "2014-10-07",
        "value": "118"
    },
    {
        "dateTime": "2014-10-08",
        "value": "23"
    },
    {
        "dateTime": "2014-10-09",
        "value": "117"
    },
    {
        "dateTime": "2014-10-10",
        "value": "57"
    },
    {
        "dateTime": "2014-10-11",
        "value": "30"
    },
    {
        "dateTime": "2014-10-12",
        "value": "103"
    },
    {
        "dateTime": "2014-10-13",
        "value": "20"
    },
    {
        "dateTime": "2014-10-14",
        "value": "83"
    },
    {
        "dateTime": "2014-10-15",
        "value": "24"
    },
    {
        "dateTime": "2014-10-16",
        "value": "14"
    },
    {
        "dateTime": "2014-10-17",
        "value": "7"
    },
    {
        "dateTime": "2014-10-18",
        "value": "83"
    },
    {
        "dateTime": "2014-10-19",
        "value": "151"
    },
    {
        "dateTime": "2014-10-20",
        "value": "22"
    },
    {
        "dateTime": "2014-10-21",
        "value": "11"
    },
    {
        "dateTime": "2014-10-22",
        "value": "23"
    },
    {
        "dateTime": "2014-10-23",
        "value": "77"
    },
    {
        "dateTime": "2014-10-24",
        "value": "30"
    },
    {
        "dateTime": "2014-10-25",
        "value": "104"
    },
    {
        "dateTime": "2014-10-26",
        "value": "18"
    },
    {
        "dateTime": "2014-10-27",
        "value": "25"
    },
    {
        "dateTime": "2014-10-28",
        "value": "85"
    },
    {
        "dateTime": "2014-10-29",
        "value": "13"
    },
    {
        "dateTime": "2014-10-30",
        "value": "80"
    },
    {
        "dateTime": "2014-10-31",
        "value": "31"
    },
    {
        "dateTime": "2014-11-01",
        "value": "278"
    },
    {
        "dateTime": "2014-11-02",
        "value": "89"
    },
    {
        "dateTime": "2014-11-03",
        "value": "31"
    },
    {
        "dateTime": "2014-11-04",
        "value": "60"
    },
    {
        "dateTime": "2014-11-05",
        "value": "0"
    },
    {
        "dateTime": "2014-11-06",
        "value": "56"
    },
    {
        "dateTime": "2014-11-07",
        "value": "4"
    },
    {
        "dateTime": "2014-11-08",
        "value": "100"
    },
    {
        "dateTime": "2014-11-09",
        "value": "50"
    },
    {
        "dateTime": "2014-11-10",
        "value": "22"
    },
    {
        "dateTime": "2014-11-11",
        "value": "134"
    },
    {
        "dateTime": "2014-11-12",
        "value": "0"
    },
    {
        "dateTime": "2014-11-13",
        "value": "19"
    },
    {
        "dateTime": "2014-11-14",
        "value": "1"
    },
    {
        "dateTime": "2014-11-15",
        "value": "27"
    },
    {
        "dateTime": "2014-11-16",
        "value": "20"
    },
    {
        "dateTime": "2014-11-17",
        "value": "21"
    },
    {
        "dateTime": "2014-11-18",
        "value": "0"
    },
    {
        "dateTime": "2014-11-19",
        "value": "34"
    },
    {
        "dateTime": "2014-11-20",
        "value": "1"
    },
    {
        "dateTime": "2014-11-21",
        "value": "3"
    },
    {
        "dateTime": "2014-11-22",
        "value": "69"
    },
    {
        "dateTime": "2014-11-23",
        "value": "153"
    },
    {
        "dateTime": "2014-11-24",
        "value": "20"
    },
    {
        "dateTime": "2014-11-25",
        "value": "0"
    },
    {
        "dateTime": "2014-11-26",
        "value": "15"
    },
    {
        "dateTime": "2014-11-27",
        "value": "0"
    },
    {
        "dateTime": "2014-11-28",
        "value": "32"
    },
    {
        "dateTime": "2014-11-29",
        "value": "3"
    },
    {
        "dateTime": "2014-11-30",
        "value": "124"
    },
    {
        "dateTime": "2014-12-01",
        "value": "31"
    },
    {
        "dateTime": "2014-12-02",
        "value": "9"
    },
    {
        "dateTime": "2014-12-03",
        "value": "34"
    },
    {
        "dateTime": "2014-12-04",
        "value": "11"
    },
    {
        "dateTime": "2014-12-05",
        "value": "46"
    },
    {
        "dateTime": "2014-12-06",
        "value": "67"
    },
    {
        "dateTime": "2014-12-07",
        "value": "32"
    },
    {
        "dateTime": "2014-12-08",
        "value": "42"
    },
    {
        "dateTime": "2014-12-09",
        "value": "5"
    },
    {
        "dateTime": "2014-12-10",
        "value": "35"
    },
    {
        "dateTime": "2014-12-11",
        "value": "7"
    },
    {
        "dateTime": "2014-12-12",
        "value": "12"
    },
    {
        "dateTime": "2014-12-13",
        "value": "75"
    },
    {
        "dateTime": "2014-12-14",
        "value": "2"
    },
    {
        "dateTime": "2014-12-15",
        "value": "59"
    },
    {
        "dateTime": "2014-12-16",
        "value": "33"
    },
    {
        "dateTime": "2014-12-17",
        "value": "29"
    },
    {
        "dateTime": "2014-12-18",
        "value": "33"
    },
    {
        "dateTime": "2014-12-19",
        "value": "28"
    },
    {
        "dateTime": "2014-12-20",
        "value": "67"
    },
    {
        "dateTime": "2014-12-21",
        "value": "89"
    },
    {
        "dateTime": "2014-12-22",
        "value": "24"
    },
    {
        "dateTime": "2014-12-23",
        "value": "21"
    },
    {
        "dateTime": "2014-12-24",
        "value": "3"
    },
    {
        "dateTime": "2014-12-25",
        "value": "0"
    },
    {
        "dateTime": "2014-12-26",
        "value": "0"
    },
    {
        "dateTime": "2014-12-27",
        "value": "2"
    },
    {
        "dateTime": "2014-12-28",
        "value": "0"
    },
    {
        "dateTime": "2014-12-29",
        "value": "62"
    },
    {
        "dateTime": "2014-12-30",
        "value": "16"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];

var getTotal = function (array) {
    return array.reduce(function (a, b) {
        if (typeof a == 'object') {
            a = parseInt(a.value, 10);
        }
        return a + parseInt(b.value, 10);
    });
};

// TOTAL
console.log('#### TOTAL ####');
console.log('Sedentary     : ' + [minutesSedentary].map(getTotal) + ' minutes');
console.log('Lighty Active : ' + [minutesLightyActive].map(getTotal) + ' minutes');
console.log('Fairly Active : ' + [minutesFairlyActive].map(getTotal) + ' minutes');
console.log('Very Active   : ' + [minutesVeryActive].map(getTotal) + ' minutes');
