#! /usr/bin/env node 
import inquirer from "inquirer";
//1) computer will generate a random number - done.
// 2) user input for guessing number 
// 3) campare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number btween 1 - 6:",
    },
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
