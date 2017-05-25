$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 2,
  "name": "Test NTL-Taxi website",
  "description": "",
  "id": "test-ntl-taxi-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Business rule through list of steps with arguments.",
  "description": "",
  "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Load the url as \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the mobileno as \u003cMOBILE\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the pickup as \u003cPICKUP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the drop as \u003cDROP\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the cartype as \u003cCAR\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click booklater",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "MOBILE",
        "PICKUP",
        "DROP",
        "CAR"
      ],
      "line": 15,
      "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;1"
    },
    {
      "cells": [
        "firefox",
        "http://www.ntltaxi.com",
        "HANSIKA",
        "3334442233",
        "ADYAR",
        "VELACHERY",
        "Sedan"
      ],
      "line": 16,
      "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;2"
    },
    {
      "cells": [
        "firefox",
        "http://www.ntltaxi.com",
        "RAMESH",
        "2234442222",
        "ADAMBAKKAM",
        "VELACHERY",
        "Sedan"
      ],
      "line": 17,
      "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;3"
    },
    {
      "cells": [
        "firefox",
        "http://www.ntltaxi.com",
        "VINOTHc",
        "4434442244",
        "ADYAR",
        "ADAMBAKKAM",
        "Sedan"
      ],
      "line": 18,
      "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Business rule through list of steps with arguments.",
  "description": "",
  "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Load the url as http://www.ntltaxi.com",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the username as HANSIKA",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the mobileno as 3334442233",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the pickup as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the drop as VELACHERY",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the cartype as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click booklater",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openbrowser(String)"
});
formatter.result({
  "duration": 10513248893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com",
      "offset": 16
    }
  ],
  "location": "HomePageTest.loadurl(String)"
});
formatter.result({
  "duration": 4508659834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HANSIKA",
      "offset": 22
    }
  ],
  "location": "HomePageTest.enterusername(String)"
});
formatter.result({
  "duration": 462375334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3334442233",
      "offset": 22
    }
  ],
  "location": "HomePageTest.entermobileno(String)"
});
formatter.result({
  "duration": 861913300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterpickup(String)"
});
formatter.result({
  "duration": 192255193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VELACHERY",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterdrop(String)"
});
formatter.result({
  "duration": 257395887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 22
    }
  ],
  "location": "HomePageTest.selectcar(String)"
});
formatter.result({
  "duration": 426706761,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbooklater()"
});
formatter.result({
  "duration": 199461336,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbook()"
});
formatter.result({
  "duration": 172765619,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Business rule through list of steps with arguments.",
  "description": "",
  "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Load the url as http://www.ntltaxi.com",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the username as RAMESH",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the mobileno as 2234442222",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the pickup as ADAMBAKKAM",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the drop as VELACHERY",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the cartype as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click booklater",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openbrowser(String)"
});
formatter.result({
  "duration": 38926365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com",
      "offset": 16
    }
  ],
  "location": "HomePageTest.loadurl(String)"
});
formatter.result({
  "duration": 1344068018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RAMESH",
      "offset": 22
    }
  ],
  "location": "HomePageTest.enterusername(String)"
});
formatter.result({
  "duration": 183800865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2234442222",
      "offset": 22
    }
  ],
  "location": "HomePageTest.entermobileno(String)"
});
formatter.result({
  "duration": 293221827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADAMBAKKAM",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterpickup(String)"
});
formatter.result({
  "duration": 228861615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VELACHERY",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterdrop(String)"
});
formatter.result({
  "duration": 288778406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 22
    }
  ],
  "location": "HomePageTest.selectcar(String)"
});
formatter.result({
  "duration": 357377267,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbooklater()"
});
formatter.result({
  "duration": 165412372,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbook()"
});
formatter.result({
  "duration": 190017354,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Business rule through list of steps with arguments.",
  "description": "",
  "id": "test-ntl-taxi-website;business-rule-through-list-of-steps-with-arguments.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Load the url as http://www.ntltaxi.com",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the username as VINOTHc",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the mobileno as 4434442244",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter the pickup as ADYAR",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the drop as ADAMBAKKAM",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the cartype as Sedan",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click booklater",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Don\u0027t click book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openbrowser(String)"
});
formatter.result({
  "duration": 47680765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.ntltaxi.com",
      "offset": 16
    }
  ],
  "location": "HomePageTest.loadurl(String)"
});
formatter.result({
  "duration": 907579083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VINOTHc",
      "offset": 22
    }
  ],
  "location": "HomePageTest.enterusername(String)"
});
formatter.result({
  "duration": 177541369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4434442244",
      "offset": 22
    }
  ],
  "location": "HomePageTest.entermobileno(String)"
});
formatter.result({
  "duration": 155214789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterpickup(String)"
});
formatter.result({
  "duration": 132059833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADAMBAKKAM",
      "offset": 18
    }
  ],
  "location": "HomePageTest.enterdrop(String)"
});
formatter.result({
  "duration": 195899560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 22
    }
  ],
  "location": "HomePageTest.selectcar(String)"
});
formatter.result({
  "duration": 350185297,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbooklater()"
});
formatter.result({
  "duration": 180014769,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickbook()"
});
formatter.result({
  "duration": 139271840,
  "status": "passed"
});
});