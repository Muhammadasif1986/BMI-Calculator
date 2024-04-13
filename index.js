#! /usr/bin/env node
import inquirer from "inquirer";
let Anwser = await inquirer.prompt([
    {
        name: 'weight',
        message: 'enter your weight in KG ',
        type: 'number'
    },
    {
        name: 'hight',
        message: 'enter your Hight in inches ',
        type: 'number'
    }
]);
let hight_meter = (Anwser.hight / 39.37) ** 2;
let bmi_result = Anwser.weight / hight_meter;
console.log(`you are BMI result is ${bmi_result}`);
console.log("BMI Rang for Healthy Weight is (18.5 to 25) ");
if (bmi_result < 18.5) {
    console.log('you are in Underweight !');
}
else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
    console.log('Good Healthy weight:');
}
else if (bmi_result >= 25 && bmi_result <= 29.9) {
    console.log('you are Overweight: !');
}
else if (bmi_result > 30) {
    console.log('Obese: !');
}
