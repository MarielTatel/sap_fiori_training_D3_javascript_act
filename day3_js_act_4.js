/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3 - JavaScript Activity Item 4
 * Description: 
 *  Create a function that returns the perimeter
 *  of a triangle.
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

 function getTrianglePerimeter(sideA, sideB, sideC) {
    if (sideA + sideB > sideC &&
        sideA + sideC > sideB &&
        sideB + sideC > sideA    ) {
        
        return sideA + sideB + sideC;
    } else {
        return "Error: Invalid triangle side lengths."
    }
 }

 var a = 3;
 var b = 3;
 var c = 2;
 var perimeter = getTrianglePerimeter(a, b, c);
 console.log(`Perimeter of triangle with sides (${a}, ${b}, ${c}) = ${perimeter}`)


