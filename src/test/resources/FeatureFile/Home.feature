@HomePage
Feature: Test NTL-Taxi website
Scenario Outline: Business rule through list of steps with arguments.
Given Open Browser as <BROWSER>
When Load the url as <URL>
Then Enter the username as <USERNAME>
And Enter the mobileno as <MOBILE>
And Enter the pickup as <PICKUP>
And Enter the drop as <DROP>
Then Select the cartype as <CAR>
And Click booklater
But Don't click book button

Examples:
|BROWSER|URL|USERNAME|MOBILE|PICKUP|DROP|CAR|
|firefox|URL|HANSIKA|3334442233|ADYAR|VELACHERY|Sedan|
|firefox|URL|RAMESH|2234442222|ADAMBAKKAM|VELACHERY|Sedan|
|firefox|URL|VINOTH|4434442244|ADYAR|ADAMBAKKAM|Sedan|