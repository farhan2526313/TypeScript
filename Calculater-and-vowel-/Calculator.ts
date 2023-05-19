 import chalk from "chalk";
 import promptsync from 'prompt-sync';
 const prompt = promptsync()

 let  num1 = prompt(chalk.green ("Please Enter your first Number : "));

 const num2 = prompt(chalk.blue("Enter your second Number : "));
 let c = Number (num1);
 let d = Number (num2);

 console.log(chalk.bgRedBright.white("Which Operation You want to perfom:"));
 console.log(chalk.bgRedBright.white("Press 1 for '+'"));
 console.log(chalk.bgRedBright.white("Press 2 for '-'"));
 console.log(chalk.bgRedBright.white("Press 3 for '*'"));
 console.log(chalk.bgRedBright.white("Press 4 for '/'"));

 

 const a = prompt(chalk.yellow(" Enter your choice: "));
 const b = Number(a);

 
 if ( b == 1){
 
     console.log(chalk.red(`Your result is : ${c +d}`));
} 
else if (b == 2){

    console.log(chalk.red(`Your result is :  ${c - d}`));
} 
else if (b== 3){

    console.log(chalk.red(`Your result is :  ${c * d}`));
}
else if (b == 4){

    console.log(chalk.red(`Your result is :  ${c / d}`));
}
 