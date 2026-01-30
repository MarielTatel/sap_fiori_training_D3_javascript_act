/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3 - JavaScript Activity Item 2
 * Description: 
 *  Create a triangle given its height 
 *  using a While Loop
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

 // GIVEN HEIGHT
var height = 5;

if (height < 0) {
    console.log("Invalid height. Enter a positive integer.");
} else {
    var count = 0;

    while (height > 0) {
        console.log( "  ".repeat(count) + "* ".repeat(height) );
        count++;
        height--;
    }
}