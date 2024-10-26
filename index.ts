#! /usr/bin/env node


import inquirer from "inquirer";

// Computer will generate random number

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber)

 
 const answers = await inquirer.prompt([
 {

    name: 'userGuessNumber', // Key for storing the user's guess
     type: 'number', // text-based input from user
     message: 'Guess the number between 01-06 :', // Message shown to the user

     },
 ]);



if(answers.userGuessNumber === randomNumber){

    console.log("Cogratulations! You Guess Right Number")
 } else {
     console.log("You Guess Wrong Number!!")
}