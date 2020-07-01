var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6020",
        "ok": "5745",
        "ko": "275"
    },
    "minResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59989",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "28646",
        "ok": "27145",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "17456",
        "ok": "16431",
        "ko": "1"
    },
    "percentiles1": {
        "total": "26508",
        "ok": "24956",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "42690",
        "ok": "40703",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "59735",
        "ok": "55778",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59152",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 32,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5675,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 275,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.203",
        "ok": "72.722",
        "ko": "3.481"
    }
},
contents: {
"req_get-balance-c52cd": {
        type: "REQUEST",
        name: "Get Balance",
path: "Get Balance",
pathFormatted: "req_get-balance-c52cd",
stats: {
    "name": "Get Balance",
    "numberOfRequests": {
        "total": "6020",
        "ok": "5745",
        "ko": "275"
    },
    "minResponseTime": {
        "total": "364",
        "ok": "364",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59989",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "28646",
        "ok": "27145",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "17456",
        "ok": "16431",
        "ko": "1"
    },
    "percentiles1": {
        "total": "26508",
        "ok": "24958",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "42686",
        "ok": "40705",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "59736",
        "ok": "55778",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59152",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 32,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5675,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 275,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.203",
        "ok": "72.722",
        "ko": "3.481"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
