#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];

let condition = true;

while(condition){

    let addTask = await inquirer.prompt([{
        name: "todo",
        message: "What you want to add in your Todos",
        type: "input",

    },
    {
        name: "addMore",
        message: "do you want to add more?",
        type: "confirm",
        default: "false",
    }])

        todos.push(addTask.todo)
        condition = addTask.addMore
        console.log(todos)

}