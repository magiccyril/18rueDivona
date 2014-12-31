Chart.defaults.global.responsive = true;

var labelWeeks = [];
for (var i = 0; i < 52; i++) {
    labelWeeks.push('S' + (i+1));
}

var labelMonth = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

window.onload = function(){
    var ctxSteps = document.getElementById("chart-steps").getContext("2d");
    window.chartSteps = new Chart(ctxSteps).Bar({
        labels: labelWeeks,
        datasets: [
            {
                fillColor : "rgba(8, 90, 120, 0.25)",
                strokeColor : "#FFF",
                highlightFill : "rgba(8, 90, 120, 0.5)",
                highlightStroke : "#FFF",
                data: [0, 0, 22902, 77298, 103581, 99077, 99692, 79304, 98306, 88699, 88741, 92201, 124093, 100867, 117781, 126189, 117571, 121780, 106911, 86992, 86977, 101834, 109994, 96844, 70036, 67534, 76488, 104718, 72947, 82086, 91341, 96568, 79773, 97243, 80301, 115995, 65302, 58427, 111431, 93844, 86083, 69093, 105048, 73793, 73196, 70867, 64236, 63253, 56484, 89042, 30394, 12628]
            }
        ]
    }, {
        scaleShowGridLines : true,

        barShowStroke : true,
        barStrokeWidth : 1,

        barValueSpacing : 0,
        barDatasetSpacing : 0,

        scaleShowLabels: false,
        scaleOverride : true,
        scaleSteps: 2,
        scaleStepWidth: 70000,
        scaleStartValue: 0
    });

    var ctxStepsDayWeek = document.getElementById("chart-steps-day-week").getContext("2d");
    window.chartStepsDayWeek = new Chart(ctxStepsDayWeek).Radar({
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        datasets: [
            {
                label: "Nombre de pas par jour",
                fillColor: "rgba(8, 90, 120, 0.25)",
                strokeColor: "rgba(8, 90, 120, 0.5)",
                pointColor: "rgba(8, 90, 120, 0.5)",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill: "#FFFFFF",
                pointHighlightStroke: "rgba(8, 90, 120, 0.5)",
                data: [8964.15, 11263.96, 9504.22, 9612.17, 9294.65, 16422.52, 17159.71]
            }
        ]
    });

    var ctxMinutes = document.getElementById("chart-minutes").getContext("2d");
    window.chartMinutes = new Chart(ctxMinutes).Pie([
        {
            value: Math.round(295958 / 60 / 24),
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Sédentaire"
        },
        {
            value: Math.round(37484 / 60 / 24),
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Légèrement actif"
        },
        {
            value: Math.round(23290 / 60 / 24),
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Modérément actif"
        },
        {
            value: Math.round(21515 / 60 / 24),
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Très actif"
        }
    ], {
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %> jours"
    });

    var ctxActivityDistance = document.getElementById("chart-activity-distance").getContext("2d");
    window.chartActivityDistance = new Chart(ctxActivityDistance).StackedBar({
        labels : labelMonth,
        datasets : [
        {
            label: "Cyclisme",
            fillColor : "#F7464A",
            strokeColor : "#FFFFFF",
            highlightFill: "#FF5A5E",
            highlightStroke: "#FFFFFF",
            data : [80.62, 79.02, 186.15, 262.94, 300.65, 364.99, 33.87, 35.03, 21.69, 107.99, 136.55, 101.37]
        },
        {
            label: "Course à pieds",
            fillColor : "#FDB45C",
            strokeColor : "#FFFFFF",
            highlightFill : "#FFC870",
            highlightStroke : "#FFFFFF",
            data : [36.10, 85.20, 46.81, 136.74, 81.16, 111.45, 89.87, 201.17, 85.34, 100.78, 64.57, 8.09]
        },
        {
            label: "Natation",
            fillColor : "#46BFBD",
            strokeColor : "#FFFFFF",
            highlightFill : "#5AD3D1",
            highlightStroke : "#FFFFFF",
            data : [0, 0, 0, 0, 0.75, 0, 0, 0, 0, 4.75, 7.2, 7.4]
        },
        {
            label: "Autre",
            fillColor : "#949FB1",
            strokeColor : "#FFFFFF",
            highlightFill : "#A8B3C5",
            highlightStroke : "#FFFFFF",
            data : [0, 0, 61.02, 0, 0, 0, 23.35, 0, 0, 0, 0, 0]
        },
        ]
    });

    var ctxActivityTime = document.getElementById("chart-activity-time").getContext("2d");
    window.chartActivityTime = new Chart(ctxActivityTime).StackedBar({
        labels : labelMonth,
        datasets : [
            {
                label: "Cyclisme",
                fillColor : "#F7464A",
                strokeColor : "#FFFFFF",
                highlightFill: "#FF5A5E",
                highlightStroke: "#FFFFFF",
                data : [303.62, 242.22, 573.14, 974.64, 1091.28, 1027.60, 99.26, 117.83, 54.13, 275.71, 296.33, 334.81]
            },
            {
                label: "Course à pieds",
                fillColor : "#FDB45C",
                strokeColor : "#FFFFFF",
                highlightFill : "#FFC870",
                highlightStroke : "#FFFFFF",
                data : [275.87, 600.07, 307.72, 834.61, 461.90, 648.01, 534.84, 1209.51, 530.72, 614.24, 388.28, 58.47]
            },
            {
                label: "Natation",
                fillColor : "#46BFBD",
                strokeColor : "#FFFFFF",
                highlightFill : "#5AD3D1",
                highlightStroke : "#FFFFFF",
                data : [0, 0, 0, 0, 17.95, 0, 0, 0, 0, 185.48, 188.67, 210.46]
            },
            {
                label: "Autre",
                fillColor : "#949FB1",
                strokeColor : "#FFFFFF",
                highlightFill : "#A8B3C5",
                highlightStroke : "#FFFFFF",
                data : [0, 0, 314.83, 0, 0, 0, 398.88, 0, 0, 0, 0, 0]
            },
        ]
    });

    var ctxActivityCount = document.getElementById("chart-activity-count").getContext("2d");
    window.chartActivityTime = new Chart(ctxActivityCount).Line({
        labels : labelMonth,
        datasets : [
            {
                label: "Cyclisme",
                fillColor : "#F7464A",
                strokeColor : "#F7464A",
                pointColor: "#F7464A",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill: "#FF5A5E",
                pointHighlightStroke: "#FFFFFF",
                data : [12, 8, 15, 16, 11, 16, 2, 4, 2, 7, 1, 6]
            },
            {
                label: "Course à pieds",
                fillColor : "#FDB45C",
                strokeColor : "#FDB45C",
                pointColor: "#FDB45C",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill : "#FFC870",
                pointHighlightStroke : "#FFFFFF",
                data : [6, 10, 6, 15, 8, 11, 8, 15, 8, 11, 7, 1]
            },
            {
                label: "Natation",
                fillColor : "#46BFBD",
                strokeColor : "#46BFBD",
                pointColor: "#46BFBD",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill : "#5AD3D1",
                pointHighlightStroke : "#FFFFFF",
                data : [0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 6, 4]
            },
            {
                label: "Autre",
                fillColor : "#949FB1",
                strokeColor : "#949FB1",
                pointColor: "#949FB1",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill : "#A8B3C5",
                pointHighlightStroke : "#FFFFFF",
                data : [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0]
            },
        ]
    }, {
        bezierCurve : false,
        datasetFill : false
    });

    var ctxSleep = document.getElementById("chart-sleep").getContext("2d");
    window.chartSleep = new Chart(ctxSleep).Line({
        labels : labelWeeks,
        datasets : [
            {
                label: "Sommeil sans mouvement",
                fillColor : "rgba(70, 191, 189, 0.25)",
                strokeColor : "#46BFBD",
                pointColor : "#46BFBD",
                pointStrokeColor : "#FFFFFF",
                pointHighlightFill : "#FFFFFF",
                pointHighlightStroke : "#46BFBD",
                data : [ 0, 0, 0, 17.18, 35.25, 34.43, 34.83, 35.25, 37.6, 35.95, 34.47, 38.08, 31.98, 35.27, 36.05, 35.42, 38.67, 34.78, 35.6, 36.58, 35.25, 36.83, 37.03, 34, 34.3, 37.68, 36.85, 34.13, 39.5, 34.97, 35.07, 32.88, 33.55, 35.15, 35.5, 32.27, 32.32, 32.77, 36.73, 36.17, 36.18, 35.92, 34.2, 34.95, 37.73, 35.08, 36.6, 32.73, 35.15, 37.47, 37.22, 39.25, 7.47]
            },
            {
                label: "Temps dans le lit",
                fillColor : "rgba(148, 159, 177, 0.25)",
                strokeColor : "#949FB1",
                pointColor : "#949FB1",
                pointStrokeColor : "#FFFFFF",
                pointHighlightFill : "#FFFFFF",
                pointHighlightStroke : "#949FB1",
                data : [ 0, 0, 0, 17.65, 49.47, 48.4, 46.65, 48.87, 51.23, 49.48, 49.28, 52.7, 45.17, 47.1, 48.77, 49.32, 53.25, 49.5, 52.25, 50.33, 50.03, 51.88, 50.73, 46.47, 48.68, 52.05, 51.43, 48.43, 57.43, 51.05, 52.8, 52.03, 48.87, 48.7, 48.78, 46.78, 48.18, 48.63, 51.97, 50.73, 52.5, 51.07, 52.42, 48.2, 52.95, 50.73, 51.95, 47.28, 51.5, 52.1, 52.65, 59.8, 12.7]
            }
        ]
    });

    var ctxSleepEfficency = document.getElementById("chart-sleep-efficency").getContext("2d");
    window.chartSleepEfficency = new Chart(ctxSleepEfficency).Radar({
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        datasets: [
            {
                label: "Efficacité du sommeil par jour",
                fillColor: "rgba(8, 90, 120, 0.25)",
                strokeColor: "rgba(8, 90, 120, 0.5)",
                pointColor: "rgba(8, 90, 120, 0.5)",
                pointStrokeColor: "#FFFFFF",
                pointHighlightFill: "#FFFFFF",
                pointHighlightStroke: "rgba(8, 90, 120, 0.5)",
                data: [68.75, 68.21, 66.89, 69.67, 67.31, 71.33, 69.25]
            }
        ]
    }, {
        scaleOverride : true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0
    });

    var ctxWeight = document.getElementById("chart-weight").getContext("2d");
    window.chartWeight = new Chart(ctxWeight).Line({
        labels : labelWeeks,
        datasets : [
            {
                label: "Poids",
                fillColor : "rgba(70, 191, 189, 0.25)",
                strokeColor : "#46BFBD",
                pointColor : "#46BFBD",
                pointStrokeColor : "#FFFFFF",
                pointHighlightFill : "#FFFFFF",
                pointHighlightStroke : "#46BFBD",
                data : [87.57, 86, 85.86, 86, 85.86, 86.57, 86.86, 86.14, 87.71, 88, 88, 88, 86.71, 87.29, 87.29, 87, 87.29, 86.86, 86.57, 86.86, 87.14, 87.14, 87.29, 86.71, 87, 87.14, 87.29, 88, 86.86, 87.57, 87.43, 87.14, 87.43, 87.43, 87, 86.71, 87.29, 87.43, 87.43, 87.57, 88.14, 87.86, 87.71, 87.86, 87.29, 88.14, 88, 87.29, 87.71, 87.43, 88, 88]
            }
        ]
    });

    var ctxFat = document.getElementById("chart-fat").getContext("2d");
    window.chartFat = new Chart(ctxFat).Line({
        labels : labelWeeks,
        datasets : [
            {
                label: "% masse grasse",
                fillColor : "rgba(148, 159, 177, 0.25)",
                strokeColor : "#949FB1",
                pointColor : "#949FB1",
                pointStrokeColor : "#FFFFFF",
                pointHighlightFill : "#FFFFFF",
                pointHighlightStroke : "#949FB1",
                data : [ 9.57, 9, 9, 9, 8.43, 8.29, 8.14, 8.57, 8.29, 8.29, 8.71, 8.86, 9.14, 8.71, 8.86, 8.57, 7.86, 8, 7.86, 8, 8, 8.43, 8.43, 8, 8.29, 7.71, 8.71, 8.57, 8.86, 8, 8.71, 8, 8.29, 8, 8.43, 7.86, 7.43, 7.71, 9, 9.14, 9, 8.86, 8.43, 9.14, 8.29, 8.29, 9, 9.14, 8.86, 9.86, 9.14, 8.71, 9.71 ]
            }
        ]
    });

};