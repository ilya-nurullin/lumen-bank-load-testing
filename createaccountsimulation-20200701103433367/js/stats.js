var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6020",
        "ok": "5320",
        "ko": "700"
    },
    "minResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "59996",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "30463",
        "ok": "26576",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "19975",
        "ok": "17933",
        "ko": "1"
    },
    "percentiles1": {
        "total": "27367",
        "ok": "22511",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "50636",
        "ok": "43109",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57240",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59554",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 38,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5226,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 700,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.667",
        "ok": "63.333",
        "ko": "8.333"
    }
},
contents: {
"req_create-new-acco-1aa66": {
        type: "REQUEST",
        name: "Create new account",
path: "Create new account",
pathFormatted: "req_create-new-acco-1aa66",
stats: {
    "name": "Create new account",
    "numberOfRequests": {
        "total": "6020",
        "ok": "5320",
        "ko": "700"
    },
    "minResponseTime": {
        "total": "368",
        "ok": "368",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "59996",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "30463",
        "ok": "26576",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "19975",
        "ok": "17933",
        "ko": "1"
    },
    "percentiles1": {
        "total": "27347",
        "ok": "22511",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "50636",
        "ok": "43109",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57240",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59554",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 56,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 38,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5226,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 700,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.667",
        "ok": "63.333",
        "ko": "8.333"
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
