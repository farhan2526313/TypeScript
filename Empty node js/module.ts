import inquirer from 'inquirer';

let answers = await inquirer.prompt([{
 
   name: "age",
   type: "number",
   message: "Enter your Age:"
        


   }
]);
console.log( `Your age is `+ answers.age);
