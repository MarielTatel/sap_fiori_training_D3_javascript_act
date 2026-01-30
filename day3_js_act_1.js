/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3: JavaScript Activity 1
 * Description: 
 *  Convert into words the given number ranging
 *  from 1 - 999.
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

const wordLessThan20 = ["", "One", "Two", "Three", "Four", "Five", 
    "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

const wordTens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const wordHundred = "Hundred";

// GIVEN NUMBER
var number = 301;
var word = "";

if (number >= 1 && number <= 999) {
    var hundreds = ( number / 100 ) % 10 | 0;
    if ( hundreds > 0 ) {
        word = wordLessThan20[hundreds] + " " + wordHundred + " ";
    }

    if ( (number % 100) < 20) {
        word += wordLessThan20[number % 100 |0];
    } else {
        var tens = ( number / 10 ) % 10 | 0;
        word += wordTens[tens] + " ";

        var ones = number % 10;
        word += wordLessThan20[ones];
    }

    console.log(number + ": " + word);

} else {
    console.log("Error: Number is out of range. Please enter a value from 1 to 999.")
}

