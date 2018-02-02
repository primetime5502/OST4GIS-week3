/* =====================
# Lab 2, Part 2 — Underscore Analyze

## Introduction

Let's revisit the bike share data from Week 2 Lab 1, Part 4. Remember, each array contains the following:

1. lng
2. lat
3. label
4. number of bike share docks at the station

## Task 1

We're especially interested in number 4: number of bike share docks at the station.

Using underscore functions, generate a list of all bike share docks that are greater than 20. One
way to do this is by using _.filter, but you can try other solutions as well. Set your answer to
variable "largeStationList".

## Task 2

Let's say we only care about the final count of bike share locations with more than 20 docks.
Calculate the value by using _.countBy and set your answer to variable "largeStationCount".
===================== */
/*
function compareObjectItemValue (array,objValue,test){
  var someArray=[];
  for(i=0; i<array.length;i++){
    if(array[i][objValue] > test){
      someArray.push(array[i]);
    }
  } return someArray;
}

function countObjectItemValue (array,objValue,test){
  var count=0;
  for(i=0; i<array.length;i++){
    if(array[i][objValue] > test){
      count=count+1;
    }
  } return count;
}

var largeStationList = compareObjectItemValue(bikeArrayClean,3,20);
var largeStationCount = countObjectItemValue(data,3,20);
*/

var data = bikeArrayClean;

var largeStationList = _.filter(data,function(object){return object[3]>20;});

//added _.pick to get only one; could also wrap in _.values for array without "true" as name
var largeStationCount = _.pick(_.countBy(data,function(object){return object[3]>20;}),"true");
