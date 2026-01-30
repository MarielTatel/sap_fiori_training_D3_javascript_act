/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3 - JavaScript Activity Item 5
 * Description: 
 *  Given an array of elements, display each element
 *  with its ordinal suffix (1st, 2nd, etc.)
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

 // GIVEN ARRAYS
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]; 
var o = ["th","st","nd","rd"];

var count = 1;

color.forEach(function (c) {
    if ((count % 100 >= 11) && (count % 100 <=13) ) {
        // Integers ending with 11, 12, or 13 will end in 'th'
        var suffix = o[0];
    } else {
        // Check the last digit for the suffix
        var suffix = (count % 10 < 4) ? o[count % 10] : o[0];
    }
    console.log(`${count}${suffix} choice is ${c}.`);
    count++;
});