"use strict";

function findMaxSum() {
    var array = document.getElementById("array").value.split(" ").map(function(item) {
        return parseInt(item, 10);
    });

    
    var currentMax = 0;
    for (var i = 0; i < array.length; i++) {
        var counter = i+1;
        while (counter < array.length) {
          var loopSum = array[i];
          for (var j = (i+1); j <= counter; j++) {
            loopSum += array[j];
            if(loopSum > currentMax) {
               currentMax = loopSum;
            }
          }
          counter++;
        }
    }
    document.getElementById("answer").innerHTML = "The answer is: " + currentMax;
}

window.onload = function() {
    var sumButton = document.getElementById("sum");
    sumButton.onclick = findMaxSum;
};