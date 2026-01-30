/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3 - JavaScript Activity Item 3
 * Description: 
 *  Create an X pattern sign given an odd-numbered 
 *  height using a For Loop
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

// GIVEN HEIGHT
var height = 11;

if (height < 0) {
    console.log("Invalid height. Enter a positive integer.");
} else if (height % 2 == 0) {
    console.log("Invalid height. Enter an odd integer.");
} else {
    for (var i = 0; i < height; i++) {
        if (i < (height / 2 |0) ){
            console.log(" ".repeat(i) + 
                        "*" +
                        " ".repeat(height - (2*i) - 2) +
                        "*" + 
                        " ".repeat(i));
        } 
        else if (i == (height / 2 |0)) {
            console.log(" ".repeat(i) + 
                        "*" +
                        " ".repeat(i));
        } 
        else if (i > (height / 2 |0) ) {
            console.log(" ".repeat(height - i - 1) + 
                        "*" +
                        " ".repeat((2*i) - height) +
                        "*" + 
                        " ".repeat(height - i - 1));
        }
    }
}