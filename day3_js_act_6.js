/**************************************************
 ******* SAP Fiori SAPUI5 Basic Training **********
 * Program: Day 3 - JavaScript Activity Item 6
 * Description: 
 *  Return the name and age of people from the
 *  record that has the highest number of skillset
 * 
 * Author: Mariel Tatel
 * Date: 2026-01-28
 **************************************************/

// GIVEN DATA
var record = [{
    "Name": "Gibo",
    "Age": 16,
    "SkillSet": [{
        "Skill": "SAP UI5"
    }, {
        "Skill": "SAP HANA"
    }]
}, {
    "Name": "Patrick",
    "Age": 22,
    "SkillSet": [{
        "Skill": "SAP UI5"
    }, {
        "Skill": "SAP HANA"
    }, {
        "Skill": "SAP ABAP"
    }]
}, {
    "Name": "MJ",
    "Age": 24,
    "SkillSet": [{
        "Skill": "SAP HANA"
    }]
}];

var maxSkillset = Math.max(...Object.values(record).map(p => p.SkillSet.length))

console.log("Person with the highest number of skillset:");
record.forEach(function (person) {
    if (person.SkillSet.length == maxSkillset) {
        console.log("\t" + person.Name + ", " + person.Age);
    };
});