var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3020",
        "ok": "3019",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "371",
        "ok": "371",
        "ko": "8588"
    },
    "maxResponseTime": {
        "total": "27616",
        "ok": "27616",
        "ko": "8588"
    },
    "meanResponseTime": {
        "total": "9132",
        "ok": "9132",
        "ko": "8588"
    },
    "standardDeviation": {
        "total": "5949",
        "ok": "5950",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8569",
        "ok": "8568",
        "ko": "8588"
    },
    "percentiles2": {
        "total": "13038",
        "ok": "13039",
        "ko": "8588"
    },
    "percentiles3": {
        "total": "20278",
        "ok": "20279",
        "ko": "8588"
    },
    "percentiles4": {
        "total": "23199",
        "ok": "23199",
        "ko": "8588"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 103,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 73,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2843,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.111",
        "ok": "67.089",
        "ko": "0.022"
    }
},
contents: {
"req_transaction-1b0ff": {
        type: "REQUEST",
        name: "Transaction",
path: "Transaction",
pathFormatted: "req_transaction-1b0ff",
stats: {
    "name": "Transaction",
    "numberOfRequests": {
        "total": "3020",
        "ok": "3019",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "371",
        "ok": "371",
        "ko": "8588"
    },
    "maxResponseTime": {
        "total": "27616",
        "ok": "27616",
        "ko": "8588"
    },
    "meanResponseTime": {
        "total": "9132",
        "ok": "9132",
        "ko": "8588"
    },
    "standardDeviation": {
        "total": "5949",
        "ok": "5950",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8570",
        "ok": "8567",
        "ko": "8588"
    },
    "percentiles2": {
        "total": "13038",
        "ok": "13039",
        "ko": "8588"
    },
    "percentiles3": {
        "total": "20278",
        "ok": "20279",
        "ko": "8588"
    },
    "percentiles4": {
        "total": "23199",
        "ok": "23199",
        "ko": "8588"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 103,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 73,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2843,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.111",
        "ok": "67.089",
        "ko": "0.022"
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
