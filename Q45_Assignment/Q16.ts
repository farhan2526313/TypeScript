let myGuset3 = ["Ali","BooAli","Adeel","Liaqat Bhai","Afzal","Junaid"];

for(let a =0 ; a<myGuset3.length; a++){

    console.log(`${myGuset3[a]}, I've invited you to dinner at my home on 8PM tonight. `);
}


console.log(`Suddenly ${myGuset3[5]} is not coming tonight. So, i,ve replace them another friend. `);
myGuset3[5] = "Ubaid Raza"

for(let a =0 ; a<myGuset3.length; a++){

    console.log(`${myGuset3[a]}, I've invited you to dinner at my home on 8PM tonight. `);
}




myGuset3.push("Hmaza","Tamoor","Faizan");
for(let a =0 ; a<myGuset3.length; a++){

    console.log(`${myGuset3[a]}, I've invited you to dinner at my home on 8PM tonight. `);
}


for(let a =2 ; a<9; a++){
    console.log(`${myGuset3[a]}, Sorry! you can't invite them to dinner.. `);
    
}

for(let a =2 ; a<9; a++){
    myGuset3.pop();
    
}


for(let a =0 ; a<myGuset3.length; a++){
    console.log(`${myGuset3[a]}, You are still invited for dinner at my home on 8PM tonight. `);
    
}


for(let a =0 ; a<=myGuset3.length; a++){
    myGuset3.pop();
    
}




console.log(myGuset3);



