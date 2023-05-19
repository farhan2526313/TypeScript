let username1 =["admin","Farhan","ali","Liaqat","Ubaid"];

for(let i =0; i <username1.length; i++ ){
    if(username1[i]=="admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${username1[i]},  thank you for logging in again.`);
    }
    
}
