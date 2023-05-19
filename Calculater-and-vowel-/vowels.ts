import PromptSync from "prompt-sync";
import chalk from "chalk";
let prompt = PromptSync()

let i  = prompt(chalk.blue("Enter any english alphabet : "));

if ( i == "a" || i =="e" ||i == "i" || i== "o" ||i == "u") {
    console.log(chalk.green("Congrats , In your Alphabet '"+i+ "' is Vowel character "));
}
else {
     console.log(chalk.red("Sorry, Your character "+i+" is not a 'vowel'."));
 }