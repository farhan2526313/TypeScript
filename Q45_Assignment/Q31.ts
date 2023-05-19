let username2 =["admin","Farhan","ali","Liaqat","Ubaid"];

for(let i =0; i <username2.length; i++ ){
    if(username2[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${username2[i]},  thank you for logging in again.`);
    }
    
}
for(let i =0 ; i< 5; i++){
    username2.pop();
}
if(username2.length == 0){
     console.log("We need to find some users!");
}
console.log(username2);