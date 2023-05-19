let usernames = ["ali","Farhan","hadir","ubaid","liaqt"];
let current_users = ["Booali","Farhan","rehman","ubaid","liaqt"];
let new_users = ["adeel","Farhan","afzal","ubaid","liaqt"];

for(let i =0 ; i<new_users.length; i++){

     if(new_users[i] == usernames[i]){
        console.log(new_users[i] +"  will need to enter a new username");
    }
    else{

        console.log(new_users[i] +" username is available.");
    }
}
console.log("\n\n");
for(let i =0 ; i<new_users.length; i++){

    if(new_users[i] == current_users[i]){

        console.log(new_users[i] +" will need to enter a new username");

    }
    else{
        console.log(new_users[i]+ " username is available.");
    }

}