#! /usr/bin/env node

import inquirer from "inquirer";

let todoList: string[] = [];
let condition = true;

let allFunctions = async () => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select an Option to proceed: \n",
                choices: ["Add Task to my TO-DO List", "View The Added Tasks In TO-DO List", "Update Existing Task", "Delete Existing Task", "Exit"],
            }
        ]);
        if(option.option === "Add Task to my TO-DO List"){
            await addTask()
        }
        else if(option.option === "Delete Existing Task"){
            await deleteTask()
        }
        else if(option.option === "Update Existing Task"){
            await updateTask()
        }
        else if (option.option === "View The Added Tasks In TO-DO List"){
            await viewAll()
        }
        else if (option.option === "Exit"){
            condition = false;
        }
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "tasks",
            type: "input",
            message: "Enter The Task You Want To Add In Your TO-DO List :"

        }
    ]);
    todoList.push(newTask.tasks);
    console.log(`\n (${newTask.tasks}) Task Added Successfully In Your TO-DO List`);
}
let viewAll = () => {
    console.log("\n TO-DO List \n");
    todoList.forEach((task, index) => {
        console.log(` ${index + 1}) ${task}`)
    })
}

let deleteTask = async () => {
    await viewAll()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The Index No. Of The Task You Want To Delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index -1, 1);
    console.log(`\n (${deletedTask}) This Task Has Been Deleted Successfully`)
}

let updateTask = async () => {
    await viewAll()
    let updatedTask = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The Index No. Of The Task You Want To Update:"
        },
        {
            name: "newTask",
            type: "input",
            message: "Edit Your Task:"
        }
    ]);
    todoList[updatedTask.index - 1] = updatedTask.newTask
    console.log(`\n Task at index no. ${updatedTask.index} updated successfully`)
}

allFunctions();
  