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

var steps = [
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
        "value": "1252"
    },
    {
        "dateTime": "2014-01-25",
        "value": "11569"
    },
    {
        "dateTime": "2014-01-26",
        "value": "10081"
    },
    {
        "dateTime": "2014-01-27",
        "value": "8991"
    },
    {
        "dateTime": "2014-01-28",
        "value": "8417"
    },
    {
        "dateTime": "2014-01-29",
        "value": "9288"
    },
    {
        "dateTime": "2014-01-30",
        "value": "8000"
    },
    {
        "dateTime": "2014-01-31",
        "value": "12164"
    },
    {
        "dateTime": "2014-02-01",
        "value": "16764"
    },
    {
        "dateTime": "2014-02-02",
        "value": "13674"
    },
    {
        "dateTime": "2014-02-03",
        "value": "10697"
    },
    {
        "dateTime": "2014-02-04",
        "value": "11176"
    },
    {
        "dateTime": "2014-02-05",
        "value": "19490"
    },
    {
        "dateTime": "2014-02-06",
        "value": "14937"
    },
    {
        "dateTime": "2014-02-07",
        "value": "11405"
    },
    {
        "dateTime": "2014-02-08",
        "value": "10054"
    },
    {
        "dateTime": "2014-02-09",
        "value": "25822"
    },
    {
        "dateTime": "2014-02-10",
        "value": "11943"
    },
    {
        "dateTime": "2014-02-11",
        "value": "16792"
    },
    {
        "dateTime": "2014-02-12",
        "value": "9444"
    },
    {
        "dateTime": "2014-02-13",
        "value": "15237"
    },
    {
        "dateTime": "2014-02-14",
        "value": "11413"
    },
    {
        "dateTime": "2014-02-15",
        "value": "17760"
    },
    {
        "dateTime": "2014-02-16",
        "value": "16488"
    },
    {
        "dateTime": "2014-02-17",
        "value": "11658"
    },
    {
        "dateTime": "2014-02-18",
        "value": "15171"
    },
    {
        "dateTime": "2014-02-19",
        "value": "10814"
    },
    {
        "dateTime": "2014-02-20",
        "value": "9220"
    },
    {
        "dateTime": "2014-02-21",
        "value": "17963"
    },
    {
        "dateTime": "2014-02-22",
        "value": "14052"
    },
    {
        "dateTime": "2014-02-23",
        "value": "20814"
    },
    {
        "dateTime": "2014-02-24",
        "value": "11488"
    },
    {
        "dateTime": "2014-02-25",
        "value": "10798"
    },
    {
        "dateTime": "2014-02-26",
        "value": "17838"
    },
    {
        "dateTime": "2014-02-27",
        "value": "5550"
    },
    {
        "dateTime": "2014-02-28",
        "value": "10186"
    },
    {
        "dateTime": "2014-03-01",
        "value": "7151"
    },
    {
        "dateTime": "2014-03-02",
        "value": "16293"
    },
    {
        "dateTime": "2014-03-03",
        "value": "20882"
    },
    {
        "dateTime": "2014-03-04",
        "value": "12043"
    },
    {
        "dateTime": "2014-03-05",
        "value": "9373"
    },
    {
        "dateTime": "2014-03-06",
        "value": "8724"
    },
    {
        "dateTime": "2014-03-07",
        "value": "13841"
    },
    {
        "dateTime": "2014-03-08",
        "value": "22417"
    },
    {
        "dateTime": "2014-03-09",
        "value": "11026"
    },
    {
        "dateTime": "2014-03-10",
        "value": "8267"
    },
    {
        "dateTime": "2014-03-11",
        "value": "14285"
    },
    {
        "dateTime": "2014-03-12",
        "value": "9815"
    },
    {
        "dateTime": "2014-03-13",
        "value": "15886"
    },
    {
        "dateTime": "2014-03-14",
        "value": "7616"
    },
    {
        "dateTime": "2014-03-15",
        "value": "11979"
    },
    {
        "dateTime": "2014-03-16",
        "value": "20851"
    },
    {
        "dateTime": "2014-03-17",
        "value": "12390"
    },
    {
        "dateTime": "2014-03-18",
        "value": "17651"
    },
    {
        "dateTime": "2014-03-19",
        "value": "9918"
    },
    {
        "dateTime": "2014-03-20",
        "value": "9943"
    },
    {
        "dateTime": "2014-03-21",
        "value": "13067"
    },
    {
        "dateTime": "2014-03-22",
        "value": "18045"
    },
    {
        "dateTime": "2014-03-23",
        "value": "7727"
    },
    {
        "dateTime": "2014-03-24",
        "value": "9137"
    },
    {
        "dateTime": "2014-03-25",
        "value": "12373"
    },
    {
        "dateTime": "2014-03-26",
        "value": "12557"
    },
    {
        "dateTime": "2014-03-27",
        "value": "14575"
    },
    {
        "dateTime": "2014-03-28",
        "value": "10795"
    },
    {
        "dateTime": "2014-03-29",
        "value": "16503"
    },
    {
        "dateTime": "2014-03-30",
        "value": "16261"
    },
    {
        "dateTime": "2014-03-31",
        "value": "12415"
    },
    {
        "dateTime": "2014-04-01",
        "value": "19319"
    },
    {
        "dateTime": "2014-04-02",
        "value": "12000"
    },
    {
        "dateTime": "2014-04-03",
        "value": "17074"
    },
    {
        "dateTime": "2014-04-04",
        "value": "15223"
    },
    {
        "dateTime": "2014-04-05",
        "value": "17759"
    },
    {
        "dateTime": "2014-04-06",
        "value": "30303"
    },
    {
        "dateTime": "2014-04-07",
        "value": "9133"
    },
    {
        "dateTime": "2014-04-08",
        "value": "11291"
    },
    {
        "dateTime": "2014-04-09",
        "value": "21317"
    },
    {
        "dateTime": "2014-04-10",
        "value": "11591"
    },
    {
        "dateTime": "2014-04-11",
        "value": "12993"
    },
    {
        "dateTime": "2014-04-12",
        "value": "14028"
    },
    {
        "dateTime": "2014-04-13",
        "value": "20514"
    },
    {
        "dateTime": "2014-04-14",
        "value": "11230"
    },
    {
        "dateTime": "2014-04-15",
        "value": "18269"
    },
    {
        "dateTime": "2014-04-16",
        "value": "15206"
    },
    {
        "dateTime": "2014-04-17",
        "value": "18614"
    },
    {
        "dateTime": "2014-04-18",
        "value": "9295"
    },
    {
        "dateTime": "2014-04-19",
        "value": "19057"
    },
    {
        "dateTime": "2014-04-20",
        "value": "26110"
    },
    {
        "dateTime": "2014-04-21",
        "value": "22268"
    },
    {
        "dateTime": "2014-04-22",
        "value": "16781"
    },
    {
        "dateTime": "2014-04-23",
        "value": "6670"
    },
    {
        "dateTime": "2014-04-24",
        "value": "20301"
    },
    {
        "dateTime": "2014-04-25",
        "value": "11403"
    },
    {
        "dateTime": "2014-04-26",
        "value": "25957"
    },
    {
        "dateTime": "2014-04-27",
        "value": "22809"
    },
    {
        "dateTime": "2014-04-28",
        "value": "11196"
    },
    {
        "dateTime": "2014-04-29",
        "value": "16705"
    },
    {
        "dateTime": "2014-04-30",
        "value": "21434"
    },
    {
        "dateTime": "2014-05-01",
        "value": "11673"
    },
    {
        "dateTime": "2014-05-02",
        "value": "18702"
    },
    {
        "dateTime": "2014-05-03",
        "value": "30951"
    },
    {
        "dateTime": "2014-05-04",
        "value": "6910"
    },
    {
        "dateTime": "2014-05-05",
        "value": "12247"
    },
    {
        "dateTime": "2014-05-06",
        "value": "21284"
    },
    {
        "dateTime": "2014-05-07",
        "value": "10633"
    },
    {
        "dateTime": "2014-05-08",
        "value": "20714"
    },
    {
        "dateTime": "2014-05-09",
        "value": "6097"
    },
    {
        "dateTime": "2014-05-10",
        "value": "32233"
    },
    {
        "dateTime": "2014-05-11",
        "value": "18572"
    },
    {
        "dateTime": "2014-05-12",
        "value": "10745"
    },
    {
        "dateTime": "2014-05-13",
        "value": "20307"
    },
    {
        "dateTime": "2014-05-14",
        "value": "12200"
    },
    {
        "dateTime": "2014-05-15",
        "value": "17536"
    },
    {
        "dateTime": "2014-05-16",
        "value": "12013"
    },
    {
        "dateTime": "2014-05-17",
        "value": "16192"
    },
    {
        "dateTime": "2014-05-18",
        "value": "17918"
    },
    {
        "dateTime": "2014-05-19",
        "value": "11342"
    },
    {
        "dateTime": "2014-05-20",
        "value": "7375"
    },
    {
        "dateTime": "2014-05-21",
        "value": "9276"
    },
    {
        "dateTime": "2014-05-22",
        "value": "10933"
    },
    {
        "dateTime": "2014-05-23",
        "value": "10044"
    },
    {
        "dateTime": "2014-05-24",
        "value": "30823"
    },
    {
        "dateTime": "2014-05-25",
        "value": "7199"
    },
    {
        "dateTime": "2014-05-26",
        "value": "11541"
    },
    {
        "dateTime": "2014-05-27",
        "value": "18868"
    },
    {
        "dateTime": "2014-05-28",
        "value": "12026"
    },
    {
        "dateTime": "2014-05-29",
        "value": "3216"
    },
    {
        "dateTime": "2014-05-30",
        "value": "10635"
    },
    {
        "dateTime": "2014-05-31",
        "value": "10777"
    },
    {
        "dateTime": "2014-06-01",
        "value": "19914"
    },
    {
        "dateTime": "2014-06-02",
        "value": "11852"
    },
    {
        "dateTime": "2014-06-03",
        "value": "21971"
    },
    {
        "dateTime": "2014-06-04",
        "value": "7376"
    },
    {
        "dateTime": "2014-06-05",
        "value": "11306"
    },
    {
        "dateTime": "2014-06-06",
        "value": "9109"
    },
    {
        "dateTime": "2014-06-07",
        "value": "23460"
    },
    {
        "dateTime": "2014-06-08",
        "value": "16760"
    },
    {
        "dateTime": "2014-06-09",
        "value": "7326"
    },
    {
        "dateTime": "2014-06-10",
        "value": "4728"
    },
    {
        "dateTime": "2014-06-11",
        "value": "20602"
    },
    {
        "dateTime": "2014-06-12",
        "value": "10998"
    },
    {
        "dateTime": "2014-06-13",
        "value": "9272"
    },
    {
        "dateTime": "2014-06-14",
        "value": "23228"
    },
    {
        "dateTime": "2014-06-15",
        "value": "33840"
    },
    {
        "dateTime": "2014-06-16",
        "value": "5893"
    },
    {
        "dateTime": "2014-06-17",
        "value": "16074"
    },
    {
        "dateTime": "2014-06-18",
        "value": "10557"
    },
    {
        "dateTime": "2014-06-19",
        "value": "20298"
    },
    {
        "dateTime": "2014-06-20",
        "value": "6753"
    },
    {
        "dateTime": "2014-06-21",
        "value": "18061"
    },
    {
        "dateTime": "2014-06-22",
        "value": "19208"
    },
    {
        "dateTime": "2014-06-23",
        "value": "6265"
    },
    {
        "dateTime": "2014-06-24",
        "value": "15061"
    },
    {
        "dateTime": "2014-06-25",
        "value": "3858"
    },
    {
        "dateTime": "2014-06-26",
        "value": "10541"
    },
    {
        "dateTime": "2014-06-27",
        "value": "5022"
    },
    {
        "dateTime": "2014-06-28",
        "value": "18817"
    },
    {
        "dateTime": "2014-06-29",
        "value": "10472"
    },
    {
        "dateTime": "2014-06-30",
        "value": "5307"
    },
    {
        "dateTime": "2014-07-01",
        "value": "10235"
    },
    {
        "dateTime": "2014-07-02",
        "value": "7860"
    },
    {
        "dateTime": "2014-07-03",
        "value": "9983"
    },
    {
        "dateTime": "2014-07-04",
        "value": "6741"
    },
    {
        "dateTime": "2014-07-05",
        "value": "17538"
    },
    {
        "dateTime": "2014-07-06",
        "value": "9870"
    },
    {
        "dateTime": "2014-07-07",
        "value": "6512"
    },
    {
        "dateTime": "2014-07-08",
        "value": "14295"
    },
    {
        "dateTime": "2014-07-09",
        "value": "9882"
    },
    {
        "dateTime": "2014-07-10",
        "value": "14285"
    },
    {
        "dateTime": "2014-07-11",
        "value": "4297"
    },
    {
        "dateTime": "2014-07-12",
        "value": "7165"
    },
    {
        "dateTime": "2014-07-13",
        "value": "20052"
    },
    {
        "dateTime": "2014-07-14",
        "value": "22938"
    },
    {
        "dateTime": "2014-07-15",
        "value": "18153"
    },
    {
        "dateTime": "2014-07-16",
        "value": "14365"
    },
    {
        "dateTime": "2014-07-17",
        "value": "11509"
    },
    {
        "dateTime": "2014-07-18",
        "value": "9624"
    },
    {
        "dateTime": "2014-07-19",
        "value": "7940"
    },
    {
        "dateTime": "2014-07-20",
        "value": "20189"
    },
    {
        "dateTime": "2014-07-21",
        "value": "8004"
    },
    {
        "dateTime": "2014-07-22",
        "value": "15389"
    },
    {
        "dateTime": "2014-07-23",
        "value": "12927"
    },
    {
        "dateTime": "2014-07-24",
        "value": "4429"
    },
    {
        "dateTime": "2014-07-25",
        "value": "3855"
    },
    {
        "dateTime": "2014-07-26",
        "value": "7280"
    },
    {
        "dateTime": "2014-07-27",
        "value": "21063"
    },
    {
        "dateTime": "2014-07-28",
        "value": "6749"
    },
    {
        "dateTime": "2014-07-29",
        "value": "12594"
    },
    {
        "dateTime": "2014-07-30",
        "value": "5249"
    },
    {
        "dateTime": "2014-07-31",
        "value": "5566"
    },
    {
        "dateTime": "2014-08-01",
        "value": "13647"
    },
    {
        "dateTime": "2014-08-02",
        "value": "13060"
    },
    {
        "dateTime": "2014-08-03",
        "value": "25221"
    },
    {
        "dateTime": "2014-08-04",
        "value": "6978"
    },
    {
        "dateTime": "2014-08-05",
        "value": "7852"
    },
    {
        "dateTime": "2014-08-06",
        "value": "13716"
    },
    {
        "dateTime": "2014-08-07",
        "value": "4855"
    },
    {
        "dateTime": "2014-08-08",
        "value": "13624"
    },
    {
        "dateTime": "2014-08-09",
        "value": "15321"
    },
    {
        "dateTime": "2014-08-10",
        "value": "28995"
    },
    {
        "dateTime": "2014-08-11",
        "value": "5596"
    },
    {
        "dateTime": "2014-08-12",
        "value": "16743"
    },
    {
        "dateTime": "2014-08-13",
        "value": "14483"
    },
    {
        "dateTime": "2014-08-14",
        "value": "3908"
    },
    {
        "dateTime": "2014-08-15",
        "value": "14906"
    },
    {
        "dateTime": "2014-08-16",
        "value": "13387"
    },
    {
        "dateTime": "2014-08-17",
        "value": "27545"
    },
    {
        "dateTime": "2014-08-18",
        "value": "5674"
    },
    {
        "dateTime": "2014-08-19",
        "value": "11561"
    },
    {
        "dateTime": "2014-08-20",
        "value": "13261"
    },
    {
        "dateTime": "2014-08-21",
        "value": "7058"
    },
    {
        "dateTime": "2014-08-22",
        "value": "5878"
    },
    {
        "dateTime": "2014-08-23",
        "value": "10246"
    },
    {
        "dateTime": "2014-08-24",
        "value": "26095"
    },
    {
        "dateTime": "2014-08-25",
        "value": "6687"
    },
    {
        "dateTime": "2014-08-26",
        "value": "4375"
    },
    {
        "dateTime": "2014-08-27",
        "value": "15908"
    },
    {
        "dateTime": "2014-08-28",
        "value": "7250"
    },
    {
        "dateTime": "2014-08-29",
        "value": "17805"
    },
    {
        "dateTime": "2014-08-30",
        "value": "12843"
    },
    {
        "dateTime": "2014-08-31",
        "value": "32375"
    },
    {
        "dateTime": "2014-09-01",
        "value": "7111"
    },
    {
        "dateTime": "2014-09-02",
        "value": "11983"
    },
    {
        "dateTime": "2014-09-03",
        "value": "14063"
    },
    {
        "dateTime": "2014-09-04",
        "value": "3075"
    },
    {
        "dateTime": "2014-09-05",
        "value": "18117"
    },
    {
        "dateTime": "2014-09-06",
        "value": "14828"
    },
    {
        "dateTime": "2014-09-07",
        "value": "11124"
    },
    {
        "dateTime": "2014-09-08",
        "value": "6488"
    },
    {
        "dateTime": "2014-09-09",
        "value": "9327"
    },
    {
        "dateTime": "2014-09-10",
        "value": "9704"
    },
    {
        "dateTime": "2014-09-11",
        "value": "7571"
    },
    {
        "dateTime": "2014-09-12",
        "value": "18588"
    },
    {
        "dateTime": "2014-09-13",
        "value": "47698"
    },
    {
        "dateTime": "2014-09-14",
        "value": "16619"
    },
    {
        "dateTime": "2014-09-15",
        "value": "5431"
    },
    {
        "dateTime": "2014-09-16",
        "value": "4405"
    },
    {
        "dateTime": "2014-09-17",
        "value": "2900"
    },
    {
        "dateTime": "2014-09-18",
        "value": "10637"
    },
    {
        "dateTime": "2014-09-19",
        "value": "6377"
    },
    {
        "dateTime": "2014-09-20",
        "value": "17286"
    },
    {
        "dateTime": "2014-09-21",
        "value": "18266"
    },
    {
        "dateTime": "2014-09-22",
        "value": "4744"
    },
    {
        "dateTime": "2014-09-23",
        "value": "8631"
    },
    {
        "dateTime": "2014-09-24",
        "value": "8453"
    },
    {
        "dateTime": "2014-09-25",
        "value": "9270"
    },
    {
        "dateTime": "2014-09-26",
        "value": "5006"
    },
    {
        "dateTime": "2014-09-27",
        "value": "7677"
    },
    {
        "dateTime": "2014-09-28",
        "value": "14646"
    },
    {
        "dateTime": "2014-09-29",
        "value": "8848"
    },
    {
        "dateTime": "2014-09-30",
        "value": "5357"
    },
    {
        "dateTime": "2014-10-01",
        "value": "16604"
    },
    {
        "dateTime": "2014-10-02",
        "value": "8750"
    },
    {
        "dateTime": "2014-10-03",
        "value": "11659"
    },
    {
        "dateTime": "2014-10-04",
        "value": "34579"
    },
    {
        "dateTime": "2014-10-05",
        "value": "25634"
    },
    {
        "dateTime": "2014-10-06",
        "value": "7649"
    },
    {
        "dateTime": "2014-10-07",
        "value": "18278"
    },
    {
        "dateTime": "2014-10-08",
        "value": "8672"
    },
    {
        "dateTime": "2014-10-09",
        "value": "18382"
    },
    {
        "dateTime": "2014-10-10",
        "value": "15131"
    },
    {
        "dateTime": "2014-10-11",
        "value": "7417"
    },
    {
        "dateTime": "2014-10-12",
        "value": "18315"
    },
    {
        "dateTime": "2014-10-13",
        "value": "7552"
    },
    {
        "dateTime": "2014-10-14",
        "value": "14726"
    },
    {
        "dateTime": "2014-10-15",
        "value": "10344"
    },
    {
        "dateTime": "2014-10-16",
        "value": "6075"
    },
    {
        "dateTime": "2014-10-17",
        "value": "4834"
    },
    {
        "dateTime": "2014-10-18",
        "value": "15615"
    },
    {
        "dateTime": "2014-10-19",
        "value": "26937"
    },
    {
        "dateTime": "2014-10-20",
        "value": "7113"
    },
    {
        "dateTime": "2014-10-21",
        "value": "5521"
    },
    {
        "dateTime": "2014-10-22",
        "value": "6518"
    },
    {
        "dateTime": "2014-10-23",
        "value": "13531"
    },
    {
        "dateTime": "2014-10-24",
        "value": "7095"
    },
    {
        "dateTime": "2014-10-25",
        "value": "20064"
    },
    {
        "dateTime": "2014-10-26",
        "value": "9251"
    },
    {
        "dateTime": "2014-10-27",
        "value": "6256"
    },
    {
        "dateTime": "2014-10-28",
        "value": "14832"
    },
    {
        "dateTime": "2014-10-29",
        "value": "5506"
    },
    {
        "dateTime": "2014-10-30",
        "value": "15027"
    },
    {
        "dateTime": "2014-10-31",
        "value": "7315"
    },
    {
        "dateTime": "2014-11-01",
        "value": "37504"
    },
    {
        "dateTime": "2014-11-02",
        "value": "18608"
    },
    {
        "dateTime": "2014-11-03",
        "value": "6846"
    },
    {
        "dateTime": "2014-11-04",
        "value": "12000"
    },
    {
        "dateTime": "2014-11-05",
        "value": "6662"
    },
    {
        "dateTime": "2014-11-06",
        "value": "13935"
    },
    {
        "dateTime": "2014-11-07",
        "value": "5304"
    },
    {
        "dateTime": "2014-11-08",
        "value": "19408"
    },
    {
        "dateTime": "2014-11-09",
        "value": "9638"
    },
    {
        "dateTime": "2014-11-10",
        "value": "10167"
    },
    {
        "dateTime": "2014-11-11",
        "value": "21711"
    },
    {
        "dateTime": "2014-11-12",
        "value": "3671"
    },
    {
        "dateTime": "2014-11-13",
        "value": "7596"
    },
    {
        "dateTime": "2014-11-14",
        "value": "4080"
    },
    {
        "dateTime": "2014-11-15",
        "value": "16165"
    },
    {
        "dateTime": "2014-11-16",
        "value": "9806"
    },
    {
        "dateTime": "2014-11-17",
        "value": "6898"
    },
    {
        "dateTime": "2014-11-18",
        "value": "3444"
    },
    {
        "dateTime": "2014-11-19",
        "value": "7273"
    },
    {
        "dateTime": "2014-11-20",
        "value": "5156"
    },
    {
        "dateTime": "2014-11-21",
        "value": "4071"
    },
    {
        "dateTime": "2014-11-22",
        "value": "18183"
    },
    {
        "dateTime": "2014-11-23",
        "value": "25842"
    },
    {
        "dateTime": "2014-11-24",
        "value": "7481"
    },
    {
        "dateTime": "2014-11-25",
        "value": "3959"
    },
    {
        "dateTime": "2014-11-26",
        "value": "7633"
    },
    {
        "dateTime": "2014-11-27",
        "value": "5253"
    },
    {
        "dateTime": "2014-11-28",
        "value": "9555"
    },
    {
        "dateTime": "2014-11-29",
        "value": "8183"
    },
    {
        "dateTime": "2014-11-30",
        "value": "22172"
    },
    {
        "dateTime": "2014-12-01",
        "value": "8373"
    },
    {
        "dateTime": "2014-12-02",
        "value": "5033"
    },
    {
        "dateTime": "2014-12-03",
        "value": "7902"
    },
    {
        "dateTime": "2014-12-04",
        "value": "4600"
    },
    {
        "dateTime": "2014-12-05",
        "value": "6988"
    },
    {
        "dateTime": "2014-12-06",
        "value": "17912"
    },
    {
        "dateTime": "2014-12-07",
        "value": "12445"
    },
    {
        "dateTime": "2014-12-08",
        "value": "8980"
    },
    {
        "dateTime": "2014-12-09",
        "value": "5272"
    },
    {
        "dateTime": "2014-12-10",
        "value": "7611"
    },
    {
        "dateTime": "2014-12-11",
        "value": "3367"
    },
    {
        "dateTime": "2014-12-12",
        "value": "9344"
    },
    {
        "dateTime": "2014-12-13",
        "value": "17992"
    },
    {
        "dateTime": "2014-12-14",
        "value": "3918"
    },
    {
        "dateTime": "2014-12-15",
        "value": "12734"
    },
    {
        "dateTime": "2014-12-16",
        "value": "8361"
    },
    {
        "dateTime": "2014-12-17",
        "value": "6100"
    },
    {
        "dateTime": "2014-12-18",
        "value": "9311"
    },
    {
        "dateTime": "2014-12-19",
        "value": "10816"
    },
    {
        "dateTime": "2014-12-20",
        "value": "18346"
    },
    {
        "dateTime": "2014-12-21",
        "value": "23374"
    },
    {
        "dateTime": "2014-12-22",
        "value": "7645"
    },
    {
        "dateTime": "2014-12-23",
        "value": "6055"
    },
    {
        "dateTime": "2014-12-24",
        "value": "4269"
    },
    {
        "dateTime": "2014-12-25",
        "value": "2587"
    },
    {
        "dateTime": "2014-12-26",
        "value": "2402"
    },
    {
        "dateTime": "2014-12-27",
        "value": "2697"
    },
    {
        "dateTime": "2014-12-28",
        "value": "4739"
    },
    {
        "dateTime": "2014-12-29",
        "value": "12469"
    },
    {
        "dateTime": "2014-12-30",
        "value": "159"
    },
    {
        "dateTime": "2014-12-31",
        "value": "0"
    }
];

var first = moment(steps[0].dateTime);
for (var i = 0; i < first.day(); i++) {
    first.subtract(1, 'days');
    steps.unshift({
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

// TOTAL
var total = [steps].map(getTotal);
console.log('#### TOTAL ####');
console.log(total[0]);

// STEPS BY WEEK
var stepsByWeek = [];
var stepsCopy = steps.slice(0);
while (stepsCopy.length > 0) {
    stepsByWeek.push(stepsCopy.splice(0, 7));
}
var totalByWeek = stepsByWeek.map(getTotal);
console.log('#### STEPS BY WEEKS ####');
console.log(totalByWeek);

// STEPS BY DAY OF WEEK
var stepsByDayOfWeek = [{ total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }, { total: 0, count: 0 }];
for (var i = 0; i < steps.length; i++) {
    var day = steps[i];
    var date = moment(day.dateTime);

    if (date.year(2014)) {
        stepsByDayOfWeek[date.day()].total += parseInt(day.value, 10);
        stepsByDayOfWeek[date.day()].count++;
    }
}
var sunday = stepsByDayOfWeek.shift();
stepsByDayOfWeek.push(sunday);
for (var i = 0; i < stepsByDayOfWeek.length; i++) {
    stepsByDayOfWeek[i].average = Math.round((stepsByDayOfWeek[i].total / stepsByDayOfWeek[i].count) * 100) / 100;
}
console.log('#### Average sleep efficency by day of week ####');
console.log(stepsByDayOfWeek);
